#define DS3231_I2C_ADDRESS 0x68

byte bcdToDec(byte val)
{
  return( (val/16*10) + (val%16) );
}

void readDS3231time(byte *second,
byte *minute,
byte *hour,
byte *dayOfWeek,
byte *dayOfMonth,
byte *month,
byte *year)
{
  Wire.beginTransmission(DS3231_I2C_ADDRESS);
  Wire.write(0); 
  Wire.endTransmission();
  Wire.requestFrom(DS3231_I2C_ADDRESS, 7);
  
  *second = bcdToDec(Wire.read() & 0x7f);
  *minute = bcdToDec(Wire.read());
  *hour = bcdToDec(Wire.read() & 0x3f);
  *dayOfWeek = bcdToDec(Wire.read());
  *dayOfMonth = bcdToDec(Wire.read());
  *month = bcdToDec(Wire.read());
  *year = bcdToDec(Wire.read());
}
void RTC()
{
  byte second, minute, hour, dayOfWeek, dayOfMonth, month, year;
  
  readDS3231time(&second, &minute, &hour, &dayOfWeek, &dayOfMonth, &month,
  &year);
  
  Serial.print(dayOfMonth);
  Serial.print("-");
  Serial.print(month);
  Serial.print("-");
  Serial.println(year);

  Serial.print(hour);
  Serial.print(":");
  if (minute<10)
  {
    Serial.print("0");
  }
  Serial.print(minute);
  Serial.print(":");
  if (second<10)
  {
    Serial.print("0");
  }
  Serial.println(second);
 
}
