#!/usr/bin/env python

from time import sleep  # Allows us to call the sleep function to slow down our loop
from threading import Timer
import RPi.GPIO as GPIO # Allows us to call our GPIO pins and names it just GPIO
import keyboard

keymapping = {
    "20": "a",
    "4": "b",
    "18": "c",
}

press_lock = False

GPIO.setmode(GPIO.BCM)  # Set's GPIO pins to BCM GPIO numbering
PINS = [20,4,18]        # Sets our input pin, in this example I'm connecting our button to pin 4. Pin 0 is the SDA pin so I avoid using it for sensors/buttons
for pin in PINS:
    GPIO.setup(pin, GPIO.IN)
    GPIO.add_event_detect(pin, GPIO.FALLING, callback=lambda p: callback(p), bouncetime=30)

# Create a function to run when the input is high
def callback(pin: int):
    global press_lock
    if not press_lock:
        press_lock = True
        r = Timer(0.5, reset_lock)
        r.start()
        print(pin)
        keyboard.write(keymapping[str(pin)])

def reset_lock():
    global press_lock
    print("resetting press_lock")
    press_lock = False

# Start a loop that never ends
while True:
    sleep(1)           # Sleep for a full second before restarting our loop
