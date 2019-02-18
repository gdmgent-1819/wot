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

### Humidity (Nl.: luchtvochtigheid)

De **humidity** sensor berekent het percentage van relatieve vochtigheid (uitgedrukt in `%`).

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
humidity = sense.get_humidity()
print("Humidity: %s %%rH" % humidity)
# alternative: print(sense.humidity)
{% endhighlight %}

### Pressure (Nl.: luchtdruk)

De **pressure** sensor berekent de luchtdruk (Eng.: air pressure) uitgedrukt in `mbar`.

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
pressure = sense.get_pressure()
print("Pressure: %s Millibars" % pressure)
# alternative: print(sense.pressure)
{% endhighlight %}

[^mbar]: **mbar**: millibar

### Temperature

De temperatuur (Eng.: temperature) kan via de SenseHat opgevraagd worden door drie methoden (waarde uitgedrukt in graden Celsius `°C`):

- `get_temperature()`  
Tempertauur ophalen via de vochtigheidssensor. Deze methode roept de methode `get_temperature_from_humidity()` aan.
- `get_temperature_from_humidity()`  
Tempertauur ophalen via de vochtigheidssensor.
- `get_temperature_from_pressure()`  
Tempertauur ophalen via de luchtdruksensor.

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
temp = sense.get_temperature_from_pressure()
print("Temperature: %s C" % temp)
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
temp = sense.get_temperature_from_humidity()
print("Temperature: %s C" % temp)
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
temp = sense.get_temperature()
print("Temperature: %s C" % temp)
#alternatives: print(sense.temp)
#alternatives: print(sense.temperature)
{% endhighlight %}

> References
> ---
> - [SenseHat: environment sensors](https://pythonhosted.org/sense-hat/api/#environmental-sensors)
{:.card.card-source}

IMU-sensoren
------------

IMU-sensor bestaat uit een combinatie van drie sensoren elk met een x, y en z-as. Hierdoor wordt het beschouwd als een 9 dof[^dof]-sensor.

### Gyroscope

<iframe width="100%" height="480" src="https://www.youtube.com/embed/pQ24NtnaLl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

De methoden `get_orientation_radians()`, `get_orientation_degrees()` en `get_orientation()` spreken eerst de methode `set_imu_config(False, True, False)` aan en vervolgens de specifieke methoden voor de accelerometer.

SenseHat-**dictionary** voor gyroscope: `pitch`, `roll` en `yaw`.

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
orientation_rad = sense.get_orientation_radians()
print("p: {pitch}, r: {roll}, y: {yaw}".format(**orientation_rad))
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
orientation = sense.get_orientation_degrees()
print("p: {pitch}, r: {roll}, y: {yaw}".format(**orientation))
# alternative: print(sense.orientation_radians)
{% endhighlight %}

De methode `get_orientation()` roept de methode `get_orientation_degrees()` op.

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
orientation = sense.get_orientation()
print("p: {pitch}, r: {roll}, y: {yaw}".format(**orientation))
# alternative: print(sense.orientation)
{% endhighlight %}

### Accelerometer

De methoden `get_accelerometer()` en `get_accelerometer_raw()` spreken eerst de methode `set_imu_config(False, False, True)` aan en vervolgens de specifieke methoden voor de accelerometer.

 {% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
accel_only = sense.get_accelerometer()
print("p: {pitch}, r: {roll}, y: {yaw}".format(**accel_only))
# alternative: print(sense.accel)
# alternative: print(sense.accelerometer)
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
raw = sense.get_accelerometer_raw()
print("x: {x}, y: {y}, z: {z}".format(**raw))
# alternative: print(sense.accel_raw)
# alternative: print(sense.accelerometer_raw)
{% endhighlight %}

### Magnetometer

De **Magnetometer** berekent het magnetisch veld rond deze sensor. Deze sensor berekent het magnetisme voor de x-, y- en z-as. M.b.v. van deze 3 assen kunnen we een accurate kompas (Eng.: compass) maken.

<iframe width="100%" height="480" src="https://www.youtube.com/embed/_ZiLwoClRGQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

<iframe width="100%" height="480" src="https://www.youtube.com/embed/k6ccH8QYGK8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

De methoden `get_compass()` en `get_compass_raw()` spreken eerst de methode `set_imu_config(True, False, False)` aan en vervolgens de specifieke methoden voor de accelerometer.

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
north = sense.get_compass()
print("North: %s" % north)
# alternative: print(sense.compass)
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
raw = sense.get_compass_raw()
print("x: {x}, y: {y}, z: {z}".format(**raw))
# alternative: print(sense.compass_raw)
{% endhighlight %}

[^IMU]: **IMU**: Inertial Measurement Unit
[^dof]: **dof**: degrees of freedom

> References
> ---
> - [COMPASS HEADING USING MAGNETOMETERS](https://aerocontent.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/Magnetic__Literature_Application_notes-documents/AN203_Compass_Heading_Using_Magnetometers.pdf)
> - [W3.org: Magnetometer](https://www.w3.org/TR/magnetometer/)
{:.card.card-source}


Joystick
--------

De **Joystick** op de SenseHat bevat 5 richtingen, namelijk:

- `up`: naar boven
- `down`: naar beneden
- `left`: naar links
- `right`: naar rechts
- `middle`: indrukken

Alle richtingen bevatten 3 toestanden of acties (Eng.: actions), namelijk:

- `pressed`: kort ingedrukt
- `released`: kort losgelaten
- `held`: toestand lang vastgehouden

De laatste eigenschap is de tijd waar de gebeurtenis (Eng.: Event) heeft plaatsgevonden. De waarde van deze tijd is vergelijkbaar met een [timestamp](https://www.unixtimestamp.com/).

> References
> ---
> - [SenseHat: Joystick](https://pythonhosted.org/sense-hat/api/#joystick)
{:.card.card-source}


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