---
title: Unboxing Raspberry Pi IoT Learner Kit
title_long: Unboxing Raspberry Pi IoT Learner Kit
permalink: raspberrypi/unboxing/
---

Inleiding
---------

Voor de opleidingsonderdelen **Internet of Things** en **Web of Things** is de **[Raspberry Pi 3 IoT Learner Kit](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-3-iot-learner-kit?sort=p.price&order=DESC)** verplicht. Indien deze kit niet beschikbaar is mag je de onderdelen apart kopen (de levertijd zal drastisch verminderen omdat deze kit populair is onder de DEV'ers).

Deze kit bestaat uit de volgende onderdelen:

- [Raspberry Pi 3](https://www.kiwi-electronics.nl/raspberry-pi-3-model-b)
- [Voedingsadapter](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-stroomvoorzieningen/rpi-psu-5-1v-2-5a--eu-uk)
- [Behuizing](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-cases/raspberry-pi-hat-behuizing-zwart)
- [Sense HAT](https://www.kiwi-electronics.nl/raspberry-pi-sense-hat?search=sensehat)
- [16GB microSD kaart met Raspbian](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-sd-kaarten/16GB-SD-kaart-met-New-Out-Of-Box-Software-NOOBS-voorgeinstalleerd)

Een [HDMI-kabel](https://www.kiwi-electronics.nl/HDMI-14-High-Speed-Kabel-1-meter?search=hdmi) is moodzakelijk om de Raspberry Pi 3 te connecteren met externe schermen (aanwezig zijn op de campus, zoals ook toetsenborden en muizen)! Eigenlijk hebben we deze onderdelen enkel nodig om het IP-adres van de Raspberry Pi 3 te ontdekken na connectie met het netwerk met de Arteveldehogeschool. Na toekenning van een IP-adres kunnen we via **SSH**-connectie maken met de Raspberry Pi 3. Indien we de Raspberry Pi 3 een unieke naam geven kunnen we hiermee ook een SSH-connectie leggen. Opgelet jouw computer en de Raspberry Pi 3 moeten wel op hetzelfde netwerk zitten. **ArteveldeHS Open** kan niet communiceren met **ArteveldeHS Veilig** en via **Ethernet**. 

Hardware    
--------

Nieuw speelgoed met een duidelijk doel voor ogen. De opleiding kan niet wachten om deze **magic box** te openen. Doen we de doos open, dan merken we een verzorgde verpakking met wit als dominante kleur en uiteraard ook de raspberry-kleur.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_131257.jpg" alt="Raspberry Pi 3 IoT Learner Kit" caption="Raspberry Pi 3 IoT Learner Kit" %}

Zoals eerder beschreven bestaat deze kit uit: [Raspberry Pi 3](https://www.kiwi-electronics.nl/raspberry-pi-3-model-b), [Voedingsadapter](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-stroomvoorzieningen/rpi-psu-5-1v-2-5a--eu-uk), [Behuizing](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-cases/raspberry-pi-hat-behuizing-zwart), [Sense HAT](https://www.kiwi-electronics.nl/raspberry-pi-sense-hat?search=sensehat) en [16GB microSD kaart met Raspbian](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-sd-kaarten/16GB-SD-kaart-met-New-Out-Of-Box-Software-NOOBS-voorgeinstalleerd).

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_132448.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Onderdelen" caption="Raspberry Pi 3 IoT Learner Kit - Onderdelen" %}

De [Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/) heeft de volgende specificaties:

- Quad Core 1.2GHz Broadcom BCM2837 64bit CPU;
- 1GB RAM;
- BCM43438 wireless LAN and Bluetooth Low Energy (BLE) on board;
- 40-pin extended GPIO;
- 4 USB 2 ports;
- 4 Pole stereo output and composite video port;
- Full size HDMI;
- CSI camera port for connecting a Raspberry Pi camera;
- DSI display port for connecting a Raspberry Pi touchscreen display;
- Micro SD port for loading your operating system and storing data;
- Upgraded switched Micro USB power source up to 2.5A.

Krachtig genoeg dus om servers (Node.js, Rabbit MQ, ...) erop te draaien. Goed dat deze versie ook uitgerust is met Wifi, waardoor dit device **draagbaar** (portable) is. Via de [GPIO](https://en.wikipedia.org/wiki/General-purpose_input/output) (General Purpose Input/Output), een bus op een electronicacircuit gebruikt voor Input en Output (I/O), kunnen we electronische signalen sturen in de Raspberry Pi en ook uitsturen. Drukken we bijvoorbeeld op een knop die verbonden is met de Raspberry Pi, dan kan een programma, draaiend op de Raspberry Pi, reageren op deze input door een een gestandaardiseerd bericht te sturen naar de [Twilio](https://www.twilio.com/) webservice, die op zijn beurt een sms verstuurd naar een specifieke ontvanger. De Raspberry Pi 3 Model B is ook nog uitgerust met een poort voor een [camera](https://www.kiwi-electronics.nl/raspberry-pi-camera-board-v2-8mp?search=camera%20raspberry%20Pi&sort=p.price&order=DESC). We kunnen hiermee bijvoorbeeld een bewakingscamera implementeren.

In de kit zit de **[Sense HAT](https://www.raspberrypi.org/products/sense-hat/)** is een uitbreidingsbord dat bovenop de Raspberry Pi 3 Model B wordt aangebracht via de GPIO. Dit bord werd speciaal ontwikkeld voor de **[Astro Pi](https://astro-pi.org/)**-missie naar het International Space Station (2015).

De Sense Hat bestaat uit:

- 8×8 RGB LED matrix;
- five-button;
- Gyroscope;
- Accelerometer;
- Magnetometer;
- Temperature;
- Barometric pressure;
- Humidity.

Leuke hoeveelheid led's, inputs en sensoren. Ideaal om een aantal leuke projecten te maken voor het opleidingsonderdeel Web Of Things. Om de Sense Hat stevig te plaatsen, monteren we eerst de afstandshouders aan de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133044.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Afstandhouders" caption="Raspberry Pi 3 IoT Learner Kit - Afstandhouders" %}

Vervolgens plaatsen we de Raspberry Pi in de meegeleverde case en monteren we de Sense Hat via de GPIO en de afstandshouders aan de Raspberry Pi. Het doosje mag nu ook afgesloten worden m.b.v. doorzichtig deksel.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133144.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Raspberry Pi in Case" caption="Raspberry Pi 3 IoT Learner Kit - Raspberry Pi in Case" %}

De Raspberry Pi heeft een [besturingssysteem](https://www.raspberrypi.org/downloads/) nodig. We hebben keuzen in heel wat distributies. De meest bekende is **[Raspbian](https://www.raspberrypi.org/downloads/)**. Om dit besturingssysteem op een eenvoudige manier te installeren kunnen we gebruik maken van **[NOOBS](https://www.raspberrypi.org/downloads/noobs/)**. Deze laatste distributie is aanwezig in de kit.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_131115.jpg" alt="Raspberry Pi 3 IoT Learner Kit - NOOBS Operating System" caption="Raspberry Pi 3 IoT Learner Kit - NOOBS Operating System" %}

De SD-kaart plaatsen we met de juiste zijde in de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133405.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Juiste richting om SD in te pluggen" caption="Raspberry Pi 3 IoT Learner Kit - Juiste richting om SD in te pluggen" %}

Na het aansluiten van een extern scherm via HDMI, toetsenbord en muis kunnen we aan de slag met de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_134046.jpg" alt="Raspberry Pi 3 Aansluiten" caption="Raspberry Pi 3 Aansluiten" %}
