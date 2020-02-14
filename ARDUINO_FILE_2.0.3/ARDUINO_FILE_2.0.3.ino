#include <Adafruit_Sensor.h>
#include "SHT1x.h"
#include <SoftwareSerial.h>
#include <Adafruit_TSL2561_U.h>
#include "Adafruit_BME680.h"
#include "SparkFunCCS811.h"
#include <Wire.h>
#include <OneWire.h>
#include <DallasTemperature.h>
//#include "RTClib.h"
#include "MQ7.h"

//RTC_DS3231 rtc;

#define ONE_WIRE_BUS 5

OneWire oneWire(ONE_WIRE_BUS);

DallasTemperature sensors(&oneWire);

#define address 99 //default I2C ID number for EZO pH Circuit.
int zzz = 0;
#define rx 2
#define tx 3

SoftwareSerial myserial(rx, tx);

///#define CCS811_ADDR 0x5B //Default I2C Address
//#define CCS811_ADDR 0x5A //Alternate I2C Address
//CCS811 mySensor(CCS811_ADDR);

Adafruit_BME680 bme;

Adafruit_TSL2561_Unified tsl = Adafruit_TSL2561_Unified(TSL2561_ADDR_FLOAT, 12345);

String TimeStamp;
String inputstring = "";
String sensorstring = "";
boolean input_string_complete = false;
boolean sensor_string_complete = false;
float pH;
char computerdata[20];           //we make a 20 byte character array to hold incoming data from a pc/mac/other.
byte received_from_computer = 0; //we need to know how many characters have been received.
byte code = 0;                   //used to hold the I2C response code.
char ph_data[20];                //we make a 20-byte character array to hold incoming data from the pH circuit.
byte in_char = 0;                //used as a 1 byte buffer to store inbound bytes from the pH Circuit.
byte i = 0;                      //counter used for ph_data array.
int time_ = 900;                 //used to change the delay needed depending on the command sent to the EZO Class pH Circuit.
float ph_float;                  //float var used to hold the float value of the pH.

/***********************************************************************
   Values tobe change
 ***************************************/
int sensorPin = A0;    // select the input pin for the potentiometer
int sensorPin2 = A1;
int sensorPin3 = A2;
int sensorValue = 0;  // variable to store the value coming from the sensor
int sensorValue2 = 0;
int sensorValue3 = 0;
int sensorVCC = 8;
int sensorVCC2 = 12;
int sensorVCC3 = 13;
//int MQ7_pin = A3;
MQ7 mq7(A4,5.0);  // Analog pin - A5, VCC - 5V
int NDIR_pin = 9;

// Specify data and clock connections and instantiate SHT1x object
#define dataPin  4
#define clockPin 6
SHT1x sht1x(dataPin, clockPin);

void setup()
{
  Wire.begin();
  Serial.begin(9600);
  myserial.begin(9600);
  sensors.begin();

  inputstring.reserve(10);
  sensorstring.reserve(30);
  //For Sensors
  if (!bme.begin()) {
    Serial.println(F("Could not find a BME680 sensor, Please Check!"));
    while (1);
  }
  /*
  CCS811Core::status returnCode = mySensor.begin();
  if (returnCode != CCS811Core::SENSOR_SUCCESS)
  {
    Serial.println("CSS811.begin() returned with an error.");
    while (1);
  }
  */
  if (!tsl.begin())
  {
    // There was a problem detecting the TSL2561 ... check your connections
    Serial.print("Ooops, no TSL2561 detected ... Check your wiring or I2C ADDR!");
    while (1);
  }
  configureluxSensor();
  // Set up oversampling and filter initialization
  //Callibration of BME680 Sensor
  bme.setTemperatureOversampling(BME680_OS_8X);
  bme.setHumidityOversampling(BME680_OS_2X);
  bme.setPressureOversampling(BME680_OS_4X);
  bme.setIIRFilterSize(BME680_FILTER_SIZE_3);
  bme.setGasHeater(320, 150); // 320*C for 150 ms

  pinMode(NDIR_pin, INPUT);

  pinMode(sensorVCC, OUTPUT);   // declare the ledPin as an OUTPUT:
  pinMode(sensorVCC2, OUTPUT);
  pinMode(sensorVCC3, OUTPUT);
  digitalWrite(sensorVCC, LOW);
  digitalWrite(sensorVCC2, LOW);
  digitalWrite(sensorVCC3, LOW);
  Serial.println("Start");
  delay(2000);
}

void loop()
{
  
  RTC();// 2 output
  Serial.println(mq7.getPPM()); // dummy data to just fill css
  Serial.println(mq7.getPPM());  // dummy data to just fill css
  //CSS();// 2 output
  //MQ7(MQ7_pin);//1 output
  //MQ7_1(); //1 output
  Serial.println(mq7.getPPM()); //1 output
  NDIR(NDIR_pin);// 1 output
  SHT();// 2 output
  PH_EZO();// 1 output
  luxSensor();// 1 output
  MH();// 3 output
  BME();// 4  output
  DS18B20_sensor();// 1 output
  Serial.println("EOF");//total 16 output
  /*
    'DATE','TIMESTAMP', 'MQ7', 'NDIR', 'SHT_temp', 'SHT_humd',
    'EZO_PH', 'LUX', 'MH1', 'MH2', 'MH3', 'BME680_temp', 'BME680_pres',
    'BME680_humd', 'BME680_gas', DS18b20 Temp
  */
  //delay(4000);
  delay(58000);

}
