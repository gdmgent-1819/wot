---
title: Programming
title_long: Programming
permalink: programming/
published: false
---

Node.js bibliotheken voor de Raspberry PI
-----------------------------------------

### nodeimu

Nodejs bindings om toegang te hebben tot IMU, pressure, humidity en temperature data gebruik makend van de [RTIMULib2](https://github.com/richards-tech/RTIMULib2.git)-bibliotheek. Deze bibliotheek gebruikt [nodejs/nan](https://github.com/nodejs/nan.git). Deze bibliotheek bevat **Native Abstractions** voor Nodejs. nodeimu is getest op de [Sense Hat](https://www.raspberrypi.org/products/sense-hat/) en op [GrovePi+](http://www.dexterindustries.com/grovepi/) voor de Raspberry Pi3.

{% highlight bash %}
git clone https://github.com/rupnikj/nodeimu --recursive
cd nodeimu 
npm install node-gyp -g 
npm install 
{% endhighlight %}

### Raspberry Pi Sense HAT LED matrix driver

[Node module](https://github.com/resin-io-playground/sense-joystick) om de Raspberry Pi Sense HAT 8x8 RGB LED matrix aan te spreken via javascript. Origineel een fork van Jochen Hinrichsen's [sense-hat-matrix](https://github.com/jhinrichsen/sense-hat-matrix) bibliotheek. We voegen deze toe aan een bestaand project via `npm` of `yarn`.

{% highlight bash %}
npm install sense-hat-led --save
{% endhighlight %}

of

{% highlight bash %}
yarn add sense-hat-led
{% endhighlight %}

### Sense Hat Joystick

Een [node module](https://github.com/resin-io-playground/sense-joystick) om te intrageren met de sensehat joystick. We voegen deze toe aan een bestaand project via `npm` of `yarn`.

{% highlight bash %}
npm install sense-joystick --save
{% endhighlight %}

of

{% highlight bash %}
yarn add sense-joystick
{% endhighlight %}

### node-rpio

[node-rpio](https://github.com/jperkin/node-rpio) Raspberry Pi bibliotheek (node.js) voor toegang tot de GPIO interface alsook i²c, PWM, en SPI.

{% highlight bash %}
npm install rpio --save
{% endhighlight %}

of

{% highlight bash %}
yarn add rpio
{% endhighlight %}

Standaard wordt de module `/dev/gpiomem`gebruikt om toegang te hebben tot de GPIO. De gebruiker, die toegang wil hebben tot de GPIO, moet lid zijn van de **gpio groep**.

{% highlight bash %}
$ cat >/etc/udev/rules.d/20-gpiomem.rules <<EOF
SUBSYSTEM=="bcm2835-gpiomem", KERNEL=="gpiomem", GROUP="gpio", MODE="0660"
EOF
{% endhighlight %}

### rpi-gpio

M.b.v. de [rpi-gpio](https://github.com/JamesBarwell/rpi-gpio.js#readme) bibliotheek kunnen we de GPIO pinnen aanspreken.

{% highlight bash %}
npm install rpi-gpio --save
{% endhighlight %}

of

{% highlight bash %}
yarn add rpi-gpio
{% endhighlight %}

### onoff

[onoff](https://github.com/jperkin/node-rpio) geeft GPIO toegang en **interrupt** detectie met Node.js op Linux boards zoals de Raspberry Pi, C.H.I.P. or BeagleBone.

{% highlight bash %}
npm install onoff --save
{% endhighlight %}

of

{% highlight bash %}
yarn add onoff
{% endhighlight %}

### Pi-camera

[Pi-camera](https://github.com/stetsmando/pi-camera#readme) bibliotheek om de [Raspberry Pi Camera CLI](https://www.raspberrypi.org/documentation/usage/camera/raspicam/README.md) aan te spreken.

{% highlight bash %}
npm install pi-camera --save
{% endhighlight %}

of

{% highlight bash %}
yarn add pi-camera
{% endhighlight %}

### node-raspicam

[node-raspicam](https://github.com/troyth/node-raspicam) is een Node.js controller module voor de Raspberry Pi camera gebaseerd op een structuur gelijkaardig met Johnny-Five.

{% highlight bash %}
npm install raspicam --save
{% endhighlight %}

of

{% highlight bash %}
yarn add raspicam
{% endhighlight %}

### Johnny-Five

[Johnny-Five](http://johnny-five.io/) is de [JavaScript Robotics & IoT Platform](http://www.amazon.com/Make-JavaScript-Robotics-Raspberry-BeagleBone/dp/1457186950). Uitgegeven door [Bocoup](http://www.bocoup.com/) in 2012.

[Pin outline](https://github.com/nebrius/raspi-io/wiki/Pin-Information)
[WiringPi pin outline](https://pinout.xyz/pinout/wiringpi)