void SHT()
{
  float temp_c;
  float humidity;

  temp_c = sht1x.readTemperatureC();
  humidity = sht1x.readHumidity();
  Serial.println(temp_c);
  Serial.println(humidity);
}
