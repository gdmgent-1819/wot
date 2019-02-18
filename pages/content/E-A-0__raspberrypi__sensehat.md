---
title: SenseHAT
title_long: SenseHAT
permalink: raspberrypi/senseHAT/
---

Inleiding
---------

De **[Sense HAT](https://www.raspberrypi.org/products/sense-HAT/)** is een uitbreidingsbord dat bovenop de Raspberry Pi 3 Model B wordt aangebracht via de GPIO. Dit bord werd speciaal ontwikkeld voor de **[Astro Pi](https://astro-pi.org/)**-missie naar het International Space Station (2015).

[^HAT]: **HAT**: Hardware Attached on Top

De Sense HAT[^HAT] bestaat uit:

- 8×8 RGB LED matrix
- five-button
- Gyroscope
- Accelerometer
- Magnetometer
- Temperature
- Barometric pressure
- Humidity.

LED-matrix
----------



Omgevingssensoren (Eng.: environment sensors)
---------------------------------------------

IMU-sensoren
------------

IMU-sensor bestaat uit een combinatie van drie sensoren elk met een x, y en z-as. Hierdoor wordt het beschouwd als een 9 dof[^dof]-sensor.

<iframe width="100%" height="413" src="https://www.youtube.com/embed/pQ24NtnaLl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[^IMU]: **IMU**: Inertial Measurement Unit
[^dof]: **dof**: Degrees of freedom

Joystick
--------



Unboxing    
--------

We hebben de SenseHAT besteld via de bundel: Raspberry Pi 3 IoT Learner Kit (deze bundel is niet meer beschikbaar). Doen we de doos open, dan merken we een verzorgde verpakking met wit als dominante kleur en uiteraard ook de raspberry-kleur.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_131257.jpg" alt="Raspberry Pi 3 IoT Learner Kit" caption="Raspberry Pi 3 IoT Learner Kit" %}

Zoals eerder beschreven bestaat deze kit uit: [Raspberry Pi 3](https://www.kiwi-electronics.nl/raspberry-pi-3-model-b), [Voedingsadapter](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-stroomvoorzieningen/rpi-psu-5-1v-2-5a--eu-uk), [Behuizing](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-cases/raspberry-pi-HAT-behuizing-zwart), [Sense HAT](https://www.kiwi-electronics.nl/raspberry-pi-sense-HAT?search=senseHAT) en [16GB microSD kaart met Raspbian](https://www.kiwi-electronics.nl/raspberry-pi/raspberry-pi-sd-kaarten/16GB-SD-kaart-met-New-Out-Of-Box-Software-NOOBS-voorgeinstalleerd).

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_132448.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Onderdelen" caption="Raspberry Pi 3 IoT Learner Kit - Onderdelen" %}

Om de Sense HAT stevig te plaatsen, monteren we eerst de afstandshouders aan de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133044.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Afstandhouders" caption="Raspberry Pi 3 IoT Learner Kit - Afstandhouders" %}

Vervolgens plaatsen we de Raspberry Pi in de meegeleverde case en monteren we de Sense HAT via de GPIO en de afstandshouders aan de Raspberry Pi. Het doosje mag nu ook afgesloten worden m.b.v. doorzichtig deksel.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133144.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Raspberry Pi in Case" caption="Raspberry Pi 3 IoT Learner Kit - Raspberry Pi in Case" %}

De Raspberry Pi heeft een [besturingssysteem](https://www.raspberrypi.org/downloads/) nodig. We hebben keuzen in heel wat distributies. De meest bekende is **[Raspbian](https://www.raspberrypi.org/downloads/)**. Om dit besturingssysteem op een eenvoudige manier te installeren kunnen we gebruik maken van **[NOOBS](https://www.raspberrypi.org/downloads/noobs/)**. Deze laatste distributie is aanwezig in de kit.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_131115.jpg" alt="Raspberry Pi 3 IoT Learner Kit - NOOBS Operating System" caption="Raspberry Pi 3 IoT Learner Kit - NOOBS Operating System" %}

De SD-kaart plaatsen we met de juiste zijde in de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133405.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Juiste richting om SD in te pluggen" caption="Raspberry Pi 3 IoT Learner Kit - Juiste richting om SD in te pluggen" %}

Na het aansluiten van een extern scherm via HDMI, toetsenbord en muis kunnen we aan de slag met de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_134046.jpg" alt="Raspberry Pi 3 Aansluiten" caption="Raspberry Pi 3 Aansluiten" %}