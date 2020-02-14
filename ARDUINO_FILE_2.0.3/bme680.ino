void BME()
{
  unsigned long endTime = bme.beginReading();
  if (endTime == 0) {
    Serial.println(F("Failed "));
    Serial.println(F("to "));
    Serial.println(F("Start "));
    Serial.println(F("reading Configuration:!"));
    return;
  }
  if (!bme.endReading()) {
    Serial.println(F("Failed "));
    Serial.println(F("to "));
    Serial.println(F("complete "));
    Serial.println(F("reading Configuration:!"));

    return;
  }
  Serial.println(bme.temperature);

  Serial.println(bme.pressure / 100.0);

  Serial.println(bme.humidity);

  Serial.println(bme.gas_resistance / 1000.0);

}
