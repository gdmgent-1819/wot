---
title: SenseHAT
title_long: SenseHAT
permalink: raspberrypi/sensehat/
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

SenseHat SDK
------------

De [installatie](https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat/2) van de Sense Hat-sdk is "pretty straightforward". Zorg er eerst voor dat alle APT-paketten up-to-date zijn. Vervolgens installeren we het sense-hat-pakket. Na installatie van dit pakket herstarten we het besturingssysteem Raspbian op de Raspberry Pi3.

{% highlight bash %}
sudo apt-get update 
sudo apt-get install sense-hat 
sudo reboot 
{% endhighlight %}

Om de laatste nieuwe versie van de Python-library voor de SenseHat te installeren voeren we de volgende commando's uit:

{% highlight bash %}
sudo apt-get remove python-sense-hat python3-sense-hat
sudo pip install sense_hat
sudo pip3 install sense_hat
sudo pip3.6 install sense_hat
{% endhighlight %}

Na deze installaties kunnen we gebruik maken van deze bibliotheek. De handleiding is bereikbaar via de [Sense Hat API reference](https://pythonhosted.org/sense-hat/api/).

Omgevingssensoren (Eng.: environment sensors)
---------------------------------------------

### Humidity (Nl.: luchtvochtigheid)

De **humidity** sensor berekent het percentage van relatieve vochtigheid (uitgedrukt in `%`).

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
humidity = sense.get_humidity()
print("Humidity: %s %%rH" % humidity)
# or alternative: print(sense.humidity)
{% endhighlight %}

### Pressure (Nl.: luchtdruk)

De **pressure** sensor berekent de luchtdruk (Eng.: air pressure) uitgedrukt in `mbar`[^mbar].

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
# or alternative: print(sense.temp)
# or alternative: print(sense.temperature)
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
# or alternative: print(sense.orientation_radians)
{% endhighlight %}

De methode `get_orientation()` roept de methode `get_orientation_degrees()` op.

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
orientation = sense.get_orientation()
print("p: {pitch}, r: {roll}, y: {yaw}".format(**orientation))
# alternative: print(sense.orientation)
{% endhighlight %}

> References
> ---
> - [SenseHat: Gyroscope](https://pythonhosted.org/sense-hat/api/#imu-sensor)
> - [W3.org: Gyroscope](https://w3c.github.io/gyroscope/)
{:.card.card-source}

### Accelerometer

De methoden `get_accelerometer()` en `get_accelerometer_raw()` spreken eerst de methode `set_imu_config(False, False, True)` aan en vervolgens de specifieke methoden voor de accelerometer.

 {% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
accel_only = sense.get_accelerometer()
print("p: {pitch}, r: {roll}, y: {yaw}".format(**accel_only))
# or alternative: print(sense.accel)
# or alternative: print(sense.accelerometer)
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
raw = sense.get_accelerometer_raw()
print("x: {x}, y: {y}, z: {z}".format(**raw))
# or alternative: print(sense.accel_raw)
# or alternative: print(sense.accelerometer_raw)
{% endhighlight %}

> References
> ---
> - [SenseHat: Accelerometer](https://pythonhosted.org/sense-hat/api/#imu-sensor)
> - [W3.org: Accelerometer](https://w3c.github.io/accelerometer/)
{:.card.card-source}

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
# or alternative: print(sense.compass)
{% endhighlight %}

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
raw = sense.get_compass_raw()
print("x: {x}, y: {y}, z: {z}".format(**raw))
# or alternative: print(sense.compass_raw)
{% endhighlight %}

[^IMU]: **IMU**: Inertial Measurement Unit
[^dof]: **dof**: degrees of freedom

> References
> ---
> - [Compass heading using magnetometers](https://aerocontent.honeywell.com/aero/common/documents/myaerospacecatalog-documents/Defense_Brochures-documents/Magnetic__Literature_Application_notes-documents/AN203_Compass_Heading_Using_Magnetometers.pdf)
> - [SenseHat: Magnetometer](https://pythonhosted.org/sense-hat/api/#imu-sensor)
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

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()
while True:
    for event in sense.stick.get_events():
        print("The joystick was {} {}".format(event.action, event.direction))
{% endhighlight %}

> References
> ---
> - [SenseHat: Joystick](https://pythonhosted.org/sense-hat/api/#joystick)
{:.card.card-source}

LED matrix
----------

De **LED[^LED] matrix** bevat 64 leds in een grid van 8 op 8. Via de API kunnen we iedere LED manipuleren: kleur en intensiteit. De volledige matrix kunnen we ook kleuren m.b.v. één methode. Deze LED matrix is ideaal om visuele feedback te krijgen van de algorithms die we programmeren via Python (en bijhorende SenseHat API).

[^LED]: **LED**: Light Emitting Diode

{% highlight py %}
from sense_hat import SenseHat

sense = SenseHat()

X = [255, 0, 0]  # Red
O = [255, 255, 255]  # White

question_mark = [
O, O, O, X, X, O, O, O,
O, O, X, O, O, X, O, O,
O, O, O, O, O, X, O, O,
O, O, O, O, X, O, O, O,
O, O, O, X, O, O, O, O,
O, O, O, X, O, O, O, O,
O, O, O, O, O, O, O, O,
O, O, O, X, O, O, O, O
]

sense.set_pixels(question_mark)
{% endhighlight %}

> References
> ---
> - [SenseHat: LED matrix](https://pythonhosted.org/sense-hat/api/#led-matrix)
{:.card.card-source}