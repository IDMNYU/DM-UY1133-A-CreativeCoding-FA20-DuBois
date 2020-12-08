int i = 0;
int j = 0;

void setup() {
  // put your setup code here, to run once:
  pinMode(4, OUTPUT);
  pinMode(6, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  digitalWrite(4, j);
  analogWrite(6, i);
  
  Serial.print(i);
  Serial.print(" ");
  Serial.println(j);
  
  i = (i+1) % 256;
  j = 1-j; // digital
  
  delay(100); // milliseconds
}
