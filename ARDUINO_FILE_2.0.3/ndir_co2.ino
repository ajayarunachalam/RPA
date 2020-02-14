void NDIR(int NDIR_pin)
{
  int pwm_value = pulseIn(NDIR_pin, HIGH);
  Serial.println(pwm_value);
}
