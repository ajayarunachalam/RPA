void MH()
{
 digitalWrite(sensorVCC, HIGH);    // power the sensor
    delay(100);     //make sure the sensor is powered
    sensorValue = analogRead(sensorPin);   // read the value from the sensor:
    digitalWrite(sensorVCC, LOW);      //stop power


    digitalWrite(sensorVCC2, HIGH);    // power the sensor
    delay(100);     //make sure the sensor is powered
    sensorValue2 = analogRead(sensorPin2);   // read the value from the sensor:
    digitalWrite(sensorVCC2, LOW);      //stop power


    digitalWrite(sensorVCC3, HIGH);    // power the sensor
    delay(100);     //make sure the sensor is powered
    sensorValue3 = analogRead(sensorPin3);   // read the value from the sensor:
    digitalWrite(sensorVCC3, LOW);      //stop power

  Serial.println(sensorValue);
  Serial.println(sensorValue2);
  Serial.println(sensorValue3);
}
