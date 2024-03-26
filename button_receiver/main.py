#!/usr/bin/env python

from time import sleep  # Allows us to call the sleep function to slow down our loop
import RPi.GPIO as GPIO # Allows us to call our GPIO pins and names it just GPIO
import keyboard

keymapping = {
    "21": "A",
    "14": "B",
    "27": "C",
}

GPIO.setmode(GPIO.BCM)  # Set's GPIO pins to BCM GPIO numbering
PINS = [21,14,27]        # Sets our input pin, in this example I'm connecting our button to pin 4. Pin 0 is the SDA pin so I avoid using it for sensors/buttons

for pin in PINS:
    GPIO.setup(pin, GPIO.IN)
    GPIO.add_event_detect(pin, GPIO.FALLING, callback=lambda p: callback(p), bouncetime=100)

# Create a function to run when the input is high
def callback(pin: int):
    keyboard.write(keymapping[str(pin)])


# Start a loop that never ends
while True:
    sleep(1)           # Sleep for a full second before restarting our loop