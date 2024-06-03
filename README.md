# ✨ Lifestyle in Focus

Step into "Lifestyle in Focus," an **interactive journey** where you'll navigate personal questions with just the push of a button. Delve into your **daily habits** and choices as you uncover surprising insights **about yourself**. But beware of the twist: a hidden message awaits, revealing how your **lifestyle connects** to something much larger. It's a captivating exploration of self-discovery and **environmental awareness**, showing how your actions shape the **world around** you in unexpected ways.

*Made by Vi Krumklang*

# 💼 Technical Skills

[![My Skills](https://skillicons.dev/icons?i=python,js,html,css,raspberrypi,illustrator)](https://skillicons.dev)

![Static Badge](https://img.shields.io/badge/Python-code?style=flat&logo=Python&label=Code&labelColor=grey&color=%23628aac)
![Static Badge](https://img.shields.io/badge/JavaScript-code?style=flat&logo=JavaScript&label=Code&labelColor=grey&color=%23f0db4f)
![Static Badge](https://img.shields.io/badge/HTML5-code?style=flat&logo=HTML5&label=Code&labelColor=grey&color=%23e34c26)
![Static Badge](https://img.shields.io/badge/CSS3-code?style=flat&logo=CSS3&label=Style&labelColor=grey&color=%23264de4)
![Static Badge](https://img.shields.io/badge/RaspberryPi-code?style=flat&logo=raspberrypi&label=Tools&labelColor=grey&color=%23bc1142)
![Static Badge](https://img.shields.io/badge/Illustrator-Code?style=flat&logo=Illustrator&label=Tools&labelColor=grey&color=%23f8a829%20)
# 🛠️ Requirements

- Philips Hue Go Portable Light White and Color Ambiance
- Philips Hue Bridge
- Raspberry Pi
- Switch
- Breadboard
- Jumper Wires
- 2 Ethernet Cable
- 3 Buttons
- HDMI Cable
- TV screen
# ⛺ Setup
### Step 1 - Setting Up Raspberry Pi

**1. Prepare your Raspberry Pi:**
- Install Raspberry Pi OS on the microSD card.
- Insert the microSD card into the Raspberry Pi.
- Connect the Raspberry Pi to the TV using the HDMI cable.
- Connect the keyboard and mouse to the Raspberry Pi.

**2. Power on the Raspberry Pi:**
- Connect the Raspberry Pi to a power source using the USB-C power adapter.
- Follow the on-screen instructions to complete the Raspberry Pi setup, including connecting to Wi-Fi.

### Step 2 - Setting Up the Philips Hue Bridge and Lights

**1. Connect the Philips Hue Bridge:**
- Plug the Philips Hue Bridge into a power outlet.
- Connect the Hue Bridge to your router using one of the Ethernet cables.
- Wait for the lights on the Hue Bridge to turn on and stabilize

**2. Set up the Philips Hue Go Light:**
- Turn on the Philips Hue Go light.
- Using the Philips Hue app on your smartphone, follow the instructions to connect the Hue Go light to the Hue Bridge.

### Step 3 - Wiring the buttons
**1. Prepare the Breadboard and Buttons:**
- Place the three buttons on the breadboard.

[![breadboard.png](https://i.postimg.cc/nL6chR0R/breadboard.png)](https://postimg.cc/bG9j6TXk)

**2. Connect the Buttons to the Raspberry Pi:**
- Use jumper wires to connect one terminal of each button to the ground (GND) pin on the Raspberry Pi.
- Connect the other terminal of each button to different GPIO pins on the Raspberry Pi. Use GPIO20, GPIO18, and GPIO4.

[![rpi-gpio-layout.jpg](https://i.postimg.cc/qvnHJJ6K/rpi-gpio-layout.jpg)](https://postimg.cc/tsXMDH5R)

[![rpi.png](https://i.postimg.cc/yYbqKJfn/rpi.png)](https://postimg.cc/KRBprYhg)

### Step 4 - Network Connections

**1. Connect the Switch:**
- Plug the switch into a power outlet.
- Connect the switch to your router using the second Ethernet cable.

**2. Connect the Raspberry Pi to the Switch:**
- Use an Ethernet cable to connect the Raspberry Pi to the switch for a stable network connection.

[![setup-3.jpg](https://i.postimg.cc/vms690zD/setup-3.jpg)](https://postimg.cc/qN1RHXWd)

# 🌱 Install

To install the project, follow these steps:

### Step 1 - Download or clone the project locally

### Step 2 - Run Python script

> **NOTE:**  On a Raspberry Pi 4 with Raspberry Pi OS, Python 3 is typically pre-installed. However, if for some reason it isn't available or if you want to ensure you have the latest version, you can install it manually. Here’s how you can check if Python 3 is installed and how to install it if necessary: `python3 --version
` or  `sudo apt install python3`


```

  sudo python3 main.py

```
> **NOTE:**  Leave the script running in the background.

### Step 3 - Install `RPi.GPIO`

```

  sudo apt install python3-rpi.gpio

```

### Step 4 - Install `keyboard` Library

```

  sudo pip3 install keyboard

```

### Step 5 - Enable GPIO and Set Permissions

```

  sudo adduser $USER gpio

```

### Step 6 - Reboot your Raspberry Pi for the changes to take effect

```

  sudo reboot

```

### Step 7 - Install a webserver of your choice on the Raspberry Pi (in this case Apache 2)

```

  sudo apt-get install apache2 

```

### Step 8 - Copy the project to the webroot directory

```

  sudo mv your-project-folder /var/www/html

```

### Step 9 - Run Apache 2

```

  sudo systemctl start apache2

```

### Step 10 - Automatically start Apache 2 on boot
```

  sudo systemctl enable apache2

```

# 🛞 Configuration of Philips Hue Bridge

First we need to locate the ip address.

### Step 1 - Install nmap 

```

  sudo apt install nmap

```

> **NOTE:**  Nmap ("Network Mapper") is a free and open source utility for network discovery and security auditing.

### Step 2 - Use `ifconfig` to locate the ip address of your Raspberry Pi

```

  ifconfig

```

### Step 3 - Run nmap

```

  sudo nmap 192.168.0.1-255

```
[![IMG-NMAP.png](https://i.postimg.cc/Nf0STrkw/IMG-NMAP.png)](https://postimg.cc/CdWcp52v)

### Step 4 - Change the endpoint to the ip address of the Philips Hue Bridge in `hue/client.js` folder

```

  let endpoint = "http://192.168.0.55";

```
> **NOTE:**  You're going to have to press the button on the Philips Hue Bridge before use. Afterwards it will run automatically.

> *_**TIPS**_: You can change the devicetype to any name you want. Simply do this by overwriting this line (which is on line 3 of the project in the folder `hue/client.js`): `const device = JSON.stringify({ devicetype: "your-device-name" });`*

# ✈️ Run
After installing all the necessary libraries and completing the configuration of the Philips Hue Bridge, you can now take a look at the project. Follow these steps:

### Step 1 - Surf to `localhost/your-project-folder`

[![surf-localhost.png](https://i.postimg.cc/8C36nTdX/surf-localhost.png)](https://postimg.cc/R37hW5Dw)

And tada you now have Lifestyle in Focus ✨

[![finished-lifestyle-in-focus.jpg](https://i.postimg.cc/wvCjDv5H/finished-lifestyle-in-focus.jpg)](https://postimg.cc/JDQ8LRdd)

# 🏡 How it's built
### Box for Buttons
To make "Lifestyle in Focus" more interactive, I installed push buttons for users to answer questions using red, blue, and green buttons. I created a custom box to hold these buttons securely, with dimensions of 400mm (Width) x 100mm (Height) x 150mm (Depth). This open box design prevents materials from overheating. I chose 4mm thickness for durability and added edge joint finger slots for easy assembly.

[![makercase.jpg](https://i.postimg.cc/zv68wqyC/makercase.jpg)](https://postimg.cc/zHCs8ZSv)

I downloaded an SVG file and then modified it in Illustrator to include holes for the push buttons and additional openings for cable routing.

> Tip: measure in advance how far apart the buttons should be.

[![Artboard-1.png](https://i.postimg.cc/mg6SGDP3/Artboard-1.png)](https://postimg.cc/qNyKspXg)

While setting up my installation with the box, I encountered difficulty with the (green) holes I created for cable routing. Connecting the cables and then closing the box while threading the cable through proved challenging. As a suggestion, I recommend making rectangular holes to allow more space for the cable to pass through after connection.

[![Artboard-2.png](https://i.postimg.cc/TYq6QKkP/Artboard-2.png)](https://postimg.cc/mtDJggWx)

After the box was laser-cut, I began painting it.

[![painting-box.jpg](https://i.postimg.cc/zGy3Qw4j/painting-box.jpg)](https://postimg.cc/bZjzDnyD)

[![final-box.jpg](https://i.postimg.cc/yNJQWGtZ/final-box.jpg)](https://postimg.cc/cKSMbFsx)

To attach the push buttons to the box, you unscrew the bottom wheel of the button. You put the button through the hole and screw the wheel back on. This secures the buttons to the box.

[![setup-2.jpg](https://i.postimg.cc/7YwT6Td1/setup-2.jpg)](https://postimg.cc/ThNPNhRh)

### Decorations

I added some decorations, such as plants and LED lights, and placed a table to elevate the box, creating an ambiance. Additionally, I covered the windows with cardboard to darken the room, allowing users to focus on the questions and the light feedback, thus enhancing the overall impact.

[![IMG-2160.jpg](https://i.postimg.cc/T2LZwCBm/IMG-2160.jpg)](https://postimg.cc/fksHqjzT)

### Lights

The Philips Hue light bulb reflects the user's answers with different colors. There are three categories: red indicates an answer with a significant impact on the climate, orange represents a moderate impact, and green signifies an eco-friendly choice.

[![IMG-2165.jpg](https://i.postimg.cc/bJ1hMgxK/IMG-2165.jpg)](https://postimg.cc/7GPdJgQV)

[![IMG-2265.jpg](https://i.postimg.cc/Hs54vPhp/IMG-2265.jpg)](https://postimg.cc/GHLyHzRN)

# 💻 How everything is coded

### Python script

[![code1.jpg](https://i.postimg.cc/c4LGQ21b/code1.jpg)](https://postimg.cc/WtCyV9kG)

This script sets up GPIO pins on a Raspberry Pi for input, maps specific button presses to corresponding keyboard characters, and ensures that rapid button presses are handled properly by using a lock mechanism. The program continuously runs in a loop, waiting for button presses. When a button is pressed, it triggers a callback function that simulates keyboard input and schedules a task to reset the lock after a short delay.

### Light script

[![code7.jpg](https://i.postimg.cc/3JHcMCr7/code7.jpg)](https://postimg.cc/dD4BrCTS)

This code is designed to control a Philips Hue light system by changing the color of a specific light through a web API. It starts by defining several constants, including the API endpoint, a key for storing the username in the local storage, a JSON object representing the device type, and three hue values representing red, orange, and green colors. 

The main part of the code is an `init` function that checks if the username for the Hue API is already stored in the local storage. If not, it requests a new username from the API and stores it. The username is then retrieved from local storage and assigned to a variable. 

The `request_username` function sends a POST request to the API endpoint to obtain a new username and returns it. The `change_hue_to` function changes the hue of a specific light (identified as light 1) to the specified color by sending a PUT request with the desired hue value to the API. The `reset_color` function sets the light's saturation, brightness, and hue to zero, effectively turning it off.

Finally, the `init` function is called, and a message is logged to the console once the Philips Hue client is initialized. This setup allows the user to control the light's color through the defined functions after ensuring a valid username is obtained and stored.

### Questions

[![code2.jpg](https://i.postimg.cc/6QsxkhnV/code2.jpg)](https://postimg.cc/RWTYfKPq)

This code defines a list of questions along with their possible answers and assigns weights to each answer. The structure is designed to evaluate responses based on predefined criteria, which are represented by the weights. Here's a detailed breakdown of what each part of the code does:

**1. Array of Questions (questions):**

- Each element in the questions array is an object representing a single question.
- Each question object contains three properties:
  - question: A string representing the question being asked.
  - options: An array of strings representing the possible answers to the question.
  - weights: An object mapping each option (represented by a key like A, B, or C) to a weight (a numerical value) that indicates the significance or impact of choosing that option.

**2. Purpose of the Weights:**

- Weights are used to quantify the impact or preference of each answer choice. For instance, if the weight is negative, it might indicate a less desirable or less preferred choice in the context of the evaluation.

Here, the question is about styling a white t-shirt.
- There are three options: Levi's Jeans (A), Zara's Trousers (B), and Nike's Joggers (C).
- The weights indicate that choosing Levi's Jeans has no impact (weight 0), while choosing either Zara's Trousers or Nike's Joggers is considered less desirable (weight -2).

### Outcome messages

[![code5-1.jpg](https://i.postimg.cc/mg8WDFcJ/code5-1.jpg)](https://postimg.cc/3k4cfNFF)

[![code5.jpg](https://i.postimg.cc/P5FV9bvX/code5.jpg)](https://postimg.cc/cvwc8nc2)

The code manages a list of environmental impact statements (outcomeTexts) and ensures that a random, unique statement is displayed each time the setOutcomeText function is called. Once all statements are used, the list is refilled.

### End quiz

[![code3.jpg](https://i.postimg.cc/ZR9hyD8d/code3.jpg)](https://postimg.cc/2bftsGXk)

The endQuiz function is designed to execute actions based on the user's quiz score, providing feedback and changing the visual presentation of the webpage accordingly. Here is a detailed explanation of what the function does:

**Score-Based Conditional Statements:**

- The function checks the score variable to determine which outcome to display. The outcomes are categorized into three ranges based on the score value, for example:
  - [![code4.jpg](https://i.postimg.cc/KvTvW4gM/code4.jpg)](https://postimg.cc/hfSBzDsD)
  - This code displays a positive message and changes the body background by adding the `good-outcome-bg` class. It also calls the function `change_hue_to(green)` to change the light to green.

In summary, this function handles the end-of-quiz actions by providing feedback based on the user's score, adjusting the visual presentation of the webpage, and ensuring the user sees relevant messages about their performance and its environmental implications.

### Checks

[![code6.jpg](https://i.postimg.cc/wTWkjh5S/code6.jpg)](https://postimg.cc/dLyCWZxB)

This JavaScript code sets up an event listener for key presses on the entire document. When a key is pressed, it captures the key, converts it to uppercase, and checks if it is one of the valid keys ("A", "B", or "C"). If the quiz has ended, the page reloads. If the quiz has not started and a valid key is pressed, the quiz starts by setting `quizStarted` to true, hiding the general question element, and displaying the first quiz question using the `showQuestion` function. If the quiz has already started and a valid key is pressed, the `checkAnswer` function is called with the pressed key to check the answer. This script manages the state of the quiz, starting it on a valid key press and checking answers during the quiz.













