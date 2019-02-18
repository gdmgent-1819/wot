---
title: Raspberry Pi
title_long: Raspberry Pi
permalink: raspberrypi/
---

Wat is de Raspberry Pi?
-----------------------

> Definitie
> ---
> Raspberry Pi is een ARM[^ARM]-based microcomputer (µC) of SBC[^SBC] (grote van een betaalkaart) ontwikkeld in de United Kingdom door de Raspberry Pi Foundation (o.a. Eben Upton). Het werd ontwikkeld om computerwetenschappen (Eng.: Computer Science) aan te leren in scholen en in ontwikkelingslanden. Het werd daarnaast ook populair bij tinkerers, makers, en electronics enthusiasts die meer dan een microcontroller (zoals: Arduino) nodig hadden.
{:.card.card-definition}

{% include shared/figure.html src="https://projects-static.raspberrypi.org/projects/raspberry-pi-getting-started/13aeb423985e6bacd5d798f5f206a644b7c250a3/en/images/pi-labelled-names.png" alt="Raspberry Pi - Plugins - Bron: raspberrypi.org" caption="Raspberry Pi - Plugins - Bron: raspberrypi.org" %}

De [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) heeft de volgende specificaties:

- Quad Core 1.2GHz Broadcom BCM2837 64bit CPU[^CPU];
- 1GB RAM[^USB];
- BCM43438 wireless LAN[^LAN] and Bluetooth Low Energy (BLE) on board;
- Ethernet port — this is used to connect the Raspberry Pi to a network with a cable. The Raspberry Pi can also connect to a network via wireless LAN;
- 40-pin extended GPIO[^GPIO] (connecteren van electronische componenten, zoals LEDs, knoppen, ...);
- 4 USB[^USB] 2 ports (connecteren van keyboard, muis en andere USB-devices);
- 4 Pole stereo output (audio jack om koptelefoon of luidsprekers aan te sluiten) and composite video port;
- Full size HDMI[^HDMI];
- CSI[^CSI] camera port for connecting a Raspberry Pi camera;
- DSI[^DSI] display port for connecting a Raspberry Pi touchscreen display;
- Micro SD[^SD] port for loading your operating system and storing data;
- Upgraded switched Micro USB power source up to 2.5A.

[^ARM]: **ARM**: [Advanced RISC Machine](https://en.wikipedia.org/wiki/ARM_architecture)
[^RAM]: **RAM**: Random Access Memory
[^LAN]: **LAN**: Local Area Network
[^USB]: **USB**: Universal Service Bus
[^GPIO]: **GPIO**: World Wide Web
[^HDMI]: **HDMI**: High-Definition Multimedia Interface
[^SD]: **SD**: Secure Digital
[^CSI]: **CSI**: Camera Serial Interface
[^DSI]: **DSI**: Display Serial Interface
[^CPU]: **CPU**: Central Processing Unit
[^SBC]: **SBC**: Single Board Computer

Krachtig genoeg dus om servers (Node.js, Rabbit MQ, ...) erop te draaien. Goed dat deze versie ook uitgerust is met Wifi, waardoor dit device **draagbaar** (portable) is. Via de [GPIO](https://en.wikipedia.org/wiki/General-purpose_input/output) (General Purpose Input/Output), een bus op een electronicacircuit gebruikt voor Input en Output (I/O), kunnen we electronische signalen sturen in de Raspberry Pi en ook uitsturen. Drukken we bijvoorbeeld op een knop die verbonden is met de Raspberry Pi, dan kan een programma, draaiend op de Raspberry Pi, reageren op deze input door een een gestandaardiseerd bericht te sturen naar de [Twilio](https://www.twilio.com/) webservice, die op zijn beurt een sms verstuurd naar een specifieke ontvanger. De Raspberry Pi 3 Model B is ook nog uitgerust met een poort voor een [camera](https://www.kiwi-electronics.nl/raspberry-pi-camera-board-v2-8mp?search=camera%20raspberry%20Pi&sort=p.price&order=DESC). We kunnen hiermee bijvoorbeeld een bewakingscamera implementeren.

Er bestaan wat [populaire alternatieven](https://all3dp.com/1/single-board-computer-raspberry-pi-alternative/) voor de RaspberryPi, namelijk de Arduino en de Beaglebone.

[Arduino](https://www.arduino.cc/) is populair maar is niet te vergelijken met de Raspberry Pi. Arduino is een "development board" met een "microcontroller chip". Het bevat geen OS[^OS]. Het is dus niet een computer maar runt blokken van code.

[Beaglebone](https://beagleboard.org/) is vergelijkbaar met de Raspberry Pi, maar met wat meer rekenkracht.

> Opmerking
> ---
> - We sluiten de voeding pas aan wanneer alle connecties gelegd zijn.
{:.card.card-remark}

> References
> ---
> - [Raspberry Pi](https://www.raspberrypi.org/)
> - [open source: Raspberry Pi](https://opensource.com/resources/raspberry-pi)
> - [ZDnet: What is a Raspberry Pi](https://www.zdnet.com/article/what-is-the-raspberry-pi-3-everything-you-need-to-know-about-the-tiny-low-cost-computer/)
{:.card.card-source}

Benodigdheden
-------------

### Hardware

- Een beeldscherm (aanwezig op de campus) geconnecteerd via **HDMI (zelf mee te brengen)**
- Een USB keyboard en muis (aanwezig op de campus)
- Een [voedingsadapter](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-stroomvoorzieningen/rpi-psu-5-1v-2-5a--eu-uk)
- Koptelefoon of luidsprekers (optioneel)
- Een ethernet kabel (optioneel)
- Een [behuizing](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-cases/raspberry-pi-hat-behuizing-zwart) (optioneel)

> Opmerking
> ---
> Een [HDMI-kabel](https://www.kiwi-electronics.nl/HDMI-14-High-Speed-Kabel-1-meter?search=hdmi) is noodzakelijk om de Raspberry Pi 3 te connecteren met externe schermen (aanwezig zijn op de campus, zoals ook toetsenborden en muizen)! Eigenlijk hebben we deze onderdelen enkel nodig om het IP-adres van de Raspberry Pi 3 te ontdekken na connectie met het netwerk met de Arteveldehogeschool. Na toekenning van een IP-adres kunnen we via **SSH[^SSH]** connectie maken met de Raspberry Pi 3. Indien we de Raspberry Pi 3 een unieke naam geven kunnen we hiermee ook een SSH-connectie leggen, maar niet binnen het netwerk van de Arteveldehogeschool. Opgelet jouw computer en de Raspberry Pi 3 moeten wel op hetzelfde netwerk zitten. **ArteveldeHS Open** kan niet communiceren met **ArteveldeHS Veilig** en via **Ethernet**. 
{:.card.card-remark}

[^SSH]: **SSH**: Secure Shell

### Software

- **[Raspbian](https://www.raspberrypi.org/downloads/raspbian/)**, gëinstalleerd via NOOBS
- [New Out Of the Box Software](https://www.raspberrypi.org/downloads/noobs/)
- [Windows 10 IOT Core](https://developer.microsoft.com/en-us/windows/iot/getstarted)
- [Open Source Media Centre](https://osmc.tv/download/)
- [Snappy Ubuntu Core for developers](https://developer.ubuntu.com/core/get-started/raspberry-pi-2-3)
- [RetroPi](https://retropie.org.uk/)

Benieuwd naar [andere besturingssystemen](https://webwereld.nl/software/92421-37-geweldige-besturingssystemen-voor-de-raspberry-pi) voor de RaspberryPi?

### Community

- [Official documentation for the Raspberry Pi](https://github.com/raspberrypi/documentation)
- [hackster.io](https://www.hackster.io/)
- [RaspberryPi Tutorials](https://tutorials-raspberrypi.com/)


### Magazines

- [The MagPi](https://www.raspberrypi.org/magpi-issues/)
- [Hackspace](https://hackspace.raspberrypi.org/issues/)
- [Wireframe](https://wireframe.raspberrypi.org/issues/)

Pinout
------

{% include shared/figure.html src="https://www.jameco.com/Jameco/workshop/circuitnotes/raspberry_pi_circuit_note_fig2a.jpg" alt="Raspberry Pi - Pinout - Bron: jameco" caption="Raspberry Pi - Pinout - Bron: jameco" %}

- **WiringPi** is een GPIO-bibliotheek met als doel om de pinout te simplificeren, zoals bij de Arduino. Installatie via `sudo pip install WiringPi`.
- **Power** of kracht / voeding / spanning. De raspberryPi bevat twee spanningen of voltages, namelijk 3.3V (3v3 - Pin 1 - 500mA) en 5V (Pin 2 en 4 - 1.5A).
- **Ground** (Nl.: aarding). Galvanisch of geleidend verbinden van een object met de aarde. De aarde is een geleider met onbeperkte capaciteit.
- **BCM** staat voor Broadcom SOC channel. Volgt de onderliggende (lower-level) nummergssysteem gedefinieerd in de aanwezige Broadcom-chip. De nummers in de cirkels (in de bovenstaande afbeelding) refereren naar de `GPIO.BOARD`-methode. Willen we echter verwijzen naar de BCM-nummering (GPIO01 ... GPIO27), dan gebruiken we de `GPIO.BCM`-methode
- **SPI** staat voor Serial Peripheral Interface. Is een interface-bus om data te verzenden tussen microcontrollers en randapparatuur. Het gebruikt een aparte lijnen voor data, clock en select (selecteren van de slave).
- **I2C** staat voor Inter-Integrated Circuit protocol en is een protocol dat slaves laat communiceren met meerdere masters via twee lijnen.
- **UART**


> References
> ---
> - [What is BCM, and why is it used in a Raspberry Pi?](https://www.quora.com/What-is-BCM-and-why-is-it-used-in-a-Raspberry-Pi)
> - [Serial Peripheral Interface (SPI)](https://learn.sparkfun.com/tutorials/serial-peripheral-interface-spi)
> - [Raspberry Pi HATs, pHATs & Add-ons](https://pinout.xyz/boards)