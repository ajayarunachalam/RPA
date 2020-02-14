import serial, csv, time, os, sys
import sqlite3
from datetime import datetime as dt
from quantum import Quantum
print("Initializing...")
#max time to read null data used in read_data function
time_limit = 5
#max limit to read null data after time_limit
limit = 3
#max data entries in csv file (can be changed as per needed)
data_limit = 5000000
#port name for arduino
port1 = '/dev/ttyACM0'    #  COM8 - LAPTOP windows
#port name for PAR sensor
port2 = '/dev/ttyACM1'   # COM4 - LAPTOP windows
#Declaration for database
tablename= 'Mydata'
dbname = '../Framework/database/database1.db'
conn = sqlite3.connect(dbname)

cmd = 'CREATE TABLE '+str(tablename)+' (DATE TEXT, TIMESTAMP TEXT, CSS811_CO2 TEXT, '
cmd += 'CSS811_TVOC TEXT, MQ7 TEXT, NDIR TEXT, SHT_temp TEXT, SHT_humd TEXT, EZO_PH TEXT,'
cmd += 'LUX TEXT, MH1 TEXT, MH2 TEXT, MH3 TEXT, BME680_temp TEXT, BME680_pres TEXT, '
cmd += 'BME680_humd TEXT, BME680_gas TEXT,DS18B20 TEXT, PAR TEXT)'
'''
cmd = 'CREATE TABLE '+str(tablename)+' (DATE TEXT, TIMESTAMP TEXT, '
cmd += ' MQ7 TEXT, NDIR TEXT, SHT_temp TEXT, SHT_humd TEXT, EZO_PH TEXT,'
cmd += 'LUX TEXT, MH1 TEXT,MH2 TEXT, MH3 TEXT, BME680_temp TEXT, BME680_pres TEXT, '
cmd += 'BME680_humd TEXT, BME680_gas TEXT,DS18B20 TEXT, PAR TEXT)'
'''
try:
    conn.execute(cmd)
except Exception as e:
    #print('ERROR:\n  ',e)
    pass
conn.close()
    
fname =  os.path.basename(sys.argv[0])#getting the name of current file
a = os.listdir()
filename = fname.strip('.py')+'.csv'
fieldnames = ['DATE','TIMESTAMP','CSS811_CO2', 'CSS811_TVOC', 'MQ7', 'NDIR', 'SHT_temp', 'SHT_humd', 'EZO_PH', 'LUX', 'MH1', 'MH2', 'MH3', 'BME680_temp', 'BME680_pres', 'BME680_humd', 'BME680_gas','DS18B20' , 'PAR']
#fieldnames = ['DATE','TIMESTAMP','MQ7', 'NDIR', 'SHT_temp', 'SHT_humd', 'EZO_PH', 'LUX', 'MH1','MH2', 'MH3', 'BME680_temp', 'BME680_pres', 'BME680_humd', 'BME680_gas','DS18B20' , 'PAR']
if filename not in a:
    file =  open(filename, 'w+')#creating a new file
    writer = csv.DictWriter(file, fieldnames=fieldnames)
    writer.writeheader()
    file.close()
"""
For adding data into databse
"""
def adddata(data):
    try:
        with sqlite3.connect(dbname) as con:
            cur = con.cursor()
            
            cmd = "INSERT INTO "+tablename+" (DATE, TIMESTAMP, CSS811_CO2, CSS811_TVOC, MQ7, NDIR, "
            cmd +="SHT_temp, SHT_humd, EZO_PH, LUX, MH1, MH2, MH3, BME680_temp, BME680_pres, "
            cmd +="BME680_humd, BME680_gas,DS18B20,PAR) VALUES ("
            '''
            cmd = "INSERT INTO "+tablename+" (DATE, TIMESTAMP, MQ7, NDIR, "
            cmd +="SHT_temp, SHT_humd, EZO_PH, LUX, MH1,MH2, MH3, BME680_temp, BME680_pres, "
            cmd +="BME680_humd, BME680_gas,DS18B20,PAR) VALUES ("
            '''
            for x in range(len(data)):
                cmd+='"'
                cmd+=str(data[x])
                cmd+='",' 
            cmd = str(cmd[:-1]) + ')'
            #print(cmd)
            cur.execute(cmd)
            con.commit()
            msg = "Record successfully added"
    except Exception as e:
        con.rollback()
        print(e)
        msg = "error in insert operation"
    finally:
        con.close()
        #print(msg)
        
'''
Reading data from arduino and create csv file
'''
def read_data(arduino,PAR):
    global data_limit, limit, time_limit
    i=0
    print('Setup is running')
    while True:
        data = arduino.readline().decode("utf-8",errors='ignore')
        if data:
            if('Start' in data) or ('EOF' in data):
                break
            print(str(data))
        else:
            i+=1
        if(i>limit):
            print('Max limit reach, Not receiving any data')
            return
    i=0
    j=0
    print('Setup Complete')
    print(fieldnames)
    while j < data_limit:
        start_time = time.time()
        c_data = list()
        data = ''
        while "EOF" not in data :##TO CAPTURE MANY VALUES AND STORE IN LIST TILL EOF
            data = arduino.readline().decode("utf-8",errors='ignore')
            #print("<<",data)
            if start_time+time_limit < time.time():
                print("Not receiving any data")
                break
            if data:
                start_time = time.time()#data receive thus update timer
                #print(">",data)
                c_data.append(str(data)[:-2]) #trim the string to avoid 2 extra character not require here
        data1 = q.get_micromoles(port2)
        if c_data and data1:
            c_data.pop()
            c_data.append(data1)
            j += 1
            print(j,'>>',c_data)
            global file,writer
            file =  open(filename, 'a')
            writer = csv.DictWriter(file, fieldnames=fieldnames)
            writer.writerows([{'DATE':c_data[0],'TIMESTAMP':c_data[1],'CSS811_CO2':c_data[2], 'CSS811_TVOC':c_data[3], 'MQ7':c_data[4], 'NDIR':c_data[5], 'SHT_temp':c_data[6], 'SHT_humd':c_data[7], 'EZO_PH':c_data[8], 'LUX':c_data[9], 'MH1':c_data[10], 'MH2':c_data[11], 'MH3':c_data[12], 'BME680_temp':c_data[13], 'BME680_pres':c_data[14], 'BME680_humd':c_data[15], 'BME680_gas':c_data[16],'DS18B20':c_data[17],'PAR':c_data[18],}])
            #writer.writerows([{'DATE':c_data[0],'TIMESTAMP':c_data[1],'MQ7':c_data[2], 'NDIR':c_data[3], 'SHT_temp':c_data[4], 'SHT_humd':c_data[5], 'EZO_PH':c_data[6], 'LUX':c_data[7], 'MH1':c_data[8],'MH2':c_data[9],'MH3':c_data[10], 'BME680_temp':c_data[11], 'BME680_pres':c_data[12], 'BME680_humd':c_data[13], 'BME680_gas':c_data[14],'DS18B20':c_data[15],'PAR':c_data[16],}])
            file.close()
            adddata(c_data)
        else:
            i+=1
    if i>limit:
        print('Max limit reach, Not receiving any data')
    #To check the time taken by python to read and write value to csv file
    #print(time.time()-a)


'''
Get all active serial ports in raspberry pi only
'''
def get_serial_ports():
    import glob
    print('Scanning linux ports')
    ports = glob.glob('/dev/tty[A-Za-z]*')
    result = {}
    i=1
    for port in ports:
        try:
            s = serial.Serial(port)
            s.close()
            result.update({i:port})
            i+=1
        except (OSError, serial.SerialException):
            pass
    print(result) # total active ports


'''
set the port and call read_data function to fetch data
'''
def set_port(PAR):
    #to find port else you can directly write name in port field below
    #port = 'COM8' #my current port in COM8
    arduino = serial.Serial(port1,timeout=1)
    print('Receiving Data') 
    read_data(arduino,PAR)
    print('Closing serial port')
    arduino.close()


if(__name__ == '__main__'):
    try:
        #uncomment this to find active port name
        #get_serial_ports()
        print('Quantum Sensor Initialization')
        q = Quantum(port2)
        print('Quantum Complete')
        set_port(port1)
        print('Closed')
    except Exception as e:
        print('Error:\n',e)

input("\n\n\n\n---PRESS ENTER TO EXIT---")
