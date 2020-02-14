void serialEvent() {
  inputstring = Serial.readStringUntil(13);
  input_string_complete = true;
}
void PH_EZO()
{
  if (input_string_complete == true) {
    myserial.print(inputstring);
    myserial.print('\r');
    inputstring = "";
    input_string_complete = false;
  }
  

  while(myserial.available() > 0) {
    char inchar = (char)myserial.read();
    //sensorstring += inchar;
    if (inchar == '\r') {
      sensor_string_complete = true;
      break;
    }
    sensorstring += inchar;
  }

  if (sensor_string_complete == true) {
    Serial.println(sensorstring);
    sensorstring = "";
    sensor_string_complete = false;
  }
  else
  {
    Serial.println(" ");
  }
}
