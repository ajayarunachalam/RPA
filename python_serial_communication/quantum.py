from serial import Serial
from time import sleep
import struct

GET_VOLT = b'\x55!'
READ_CALIBRATION = b'\x83!'
SET_CALIBRATION = b'\x84%s%s!'
READ_SERIAL_NUM = b'\x87!'
GET_LOGGING_COUNT = b'\xf3!'
GET_LOGGED_ENTRY = b'\xf2%s!'
ERASE_LOGGED_DATA = b'\xf4!'

class Quantum(object):

	"""Initializes class variables, and attempts to connect to device"""
	def __init__(self,port):
		self.quantum = None
		self.offset = 0.0
		self.multiplier = 0.0
		self.connect_to_device(port)

	"""This function creates a Serial connection with the defined COM port and attempts to read the calibration values"""
	def connect_to_device(self,port):
		self.quantum = Serial(port, 115200, timeout=0.5)
		try:
			print('Device Found, and Connected')
			self.quantum.write(READ_CALIBRATION) # READ_CALIBRATION b'\x83!'
			multiplier = self.quantum.read(5)[1:]
			offset = self.quantum.read(4)
			self.multiplier = struct.unpack('<f', multiplier)[0]
			self.offset = struct.unpack('<f', offset)[0]

		#except(IOError,struct.Error), data:
		except(IOError) as e:
			print('Error:\n',e)
			print(data)
			self.quantum = None

	"""This function converts the voltage to micromoles"""
	def get_micromoles(self,port):
		voltage = self.read_voltage(port)
		#print(voltage)
		if voltage == 9999:
			return None
		else:
			# you could raise some sort of Exception here if you want to
			micromoles = (voltage - self.offset) * self.multiplier * 1000 # this next line converts volts to micromoles
			if micromoles < 0:
				micromoles = 0.0
		#print(micromoles)
		return format(micromoles,'.2f')

	"""This function averages 5 readings over 1 second and returns the result."""
	def read_voltage(self,port):
		if self.quantum == None:
			try:
				self.connect_to_device(port)
			except IOError:
				#you can raise some sort of exception here if you need to
				return

		# store the responses to average
		response_list = []
		# change to average more or less samples over the given time period
		number_to_average = 5 #5
		# change to shorten or extend the time duration for each measurement
		# be sure to leave as floating point to avoid truncation
		number_of_seconds = 1.0  # 1.0

		for i in range(number_to_average):
			try:
				self.quantum.write(GET_VOLT)
				response = self.quantum.read(5)[1:]
			except IOError:
				print(data)
                # dummy value to know something went wrong. could raise an
                # exception here alternatively
				return 9999

			else:
				if not response:
					continue

				# if the response is not 4 bytes long, this line will raise an exception
				voltage = struct.unpack('<f', response)[0]
				response_list.append(voltage)
				sleep(number_of_seconds/number_to_average)

		if response_list:
			return sum(response_list)/len(response_list)
		return 0.0
