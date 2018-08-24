---
title: Development Environment
title_long: Development Environment
permalink: raspberrypi/devenvironment/
---

Python
------

Het gebruik van de programmeertaal [Python](https://www.python.org/) is onontbeerlijk. Op 21-08-2018 zitten we reeds aan versie [Python 3.6.6](https://docs.python.org/release/3.6.6/). Deze laatste versie van Python zit niet in de Raspbian distributie. Om deze te installeren voeren we een aantal instructies uit.

1\. Installatie van de vereisten (prerequisites)

{% highlight bash %}
sudo apt-get update
sudo apt install libffi-dev libbz2-dev liblzma-dev libsqlite3-dev libncurses5-dev libgdbm-dev zlib1g-dev libreadline-dev libssl-dev tk-dev build-essential libncursesw5-dev libc6-dev openssl git
{% endhighlight %}

2\. Downloaden van de Pyhton 3.6.6 bronbestanden (source code) via [github](https://github.com/python/cpython/archive/v3.6.6.tar.gz) of via [python organisatie](https://www.python.org/ftp/python/3.6.6/Python-3.6.6.tar.xz).


{% highlight bash %}
wget https://www.python.org/ftp/python/3.6.6/Python-3.6.6.tar.xz
tar xf Python-3.6.6.tar.xz 
{% endhighlight %}

3\. Configuratie

{% highlight bash %}
cd Python-3.6.6
./configure --prefix=$HOME/.local
{% endhighlight %}

4\. Installatie via built proces

{% highlight bash %}
make -j 5 -l 4
make install
{% endhighlight %}

5\. Pad installen naar de Python3.6.6 uitvoerbaar bestand

We openen het bestand `~/.profile` en voegen de onderstaande content toe om de Python3.6 commandline tool te kunnen aanspreken. Herstart de Pi zodat deze instellingen van kracht zullen zijn.

{% highlight txt %}
if [ -d "$HOME/.local/bin" ] ; then
	PATH="$HOME/.local/bin:$PATH"
fi
{% endhighlight %}

6\. Testen van de installatie

We kunnen deze python versie testen door het bijhorende cli-tool uit te voeren.

{% highlight bash %}
Python 3.6.6 (default, Aug 22 2018, 16:25:49) 

[GCC 4.9.2] on linux

Type "help", "copyright", "credits" or "license" for more information.

>>> from tkinter import *

>>> dir()

['ACTIVE', 'ALL', 'ANCHOR', 'ARC', 'BASELINE', 'BEVEL', 'BOTH', 'BOTTOM', 'BROWSE', 'BUTT', 'BaseWidget', 'BitmapImage', 'BooleanVar', 'Button', 'CASCADE', 'CENTER', 'CHAR', 'CHECKBUTTON', 'CHORD', 'COMMAND', 'CURRENT', 'CallWrapper', 'Canvas', 'Checkbutton', 'DISABLED', 'DOTBOX', 'DoubleVar', 'E', 'END', 'EW', 'EXCEPTION', 'EXTENDED', 'Entry', 'Event', 'EventType', 'FALSE', 'FIRST', 'FLAT', 'Frame', 'GROOVE', 'Grid', 'HIDDEN', 'HORIZONTAL', 'INSERT', 'INSIDE', 'Image', 'IntVar', 'LAST', 'LEFT', 'Label', 'LabelFrame', 'Listbox', 'MITER', 'MOVETO', 'MULTIPLE', 'Menu', 'Menubutton', 'Message', 'Misc', 'N', 'NE', 'NO', 'NONE', 'NORMAL', 'NS', 'NSEW', 'NUMERIC', 'NW', 'NoDefaultRoot', 'OFF', 'ON', 'OUTSIDE', 'OptionMenu', 'PAGES', 'PIESLICE', 'PROJECTING', 'Pack', 'PanedWindow', 'PhotoImage', 'Place', 'RADIOBUTTON', 'RAISED', 'READABLE', 'RIDGE', 'RIGHT', 'ROUND', 'Radiobutton', 'S', 'SCROLL', 'SE', 'SEL', 'SEL_FIRST', 'SEL_LAST', 'SEPARATOR', 'SINGLE', 'SOLID', 'SUNKEN', 'SW', 'Scale', 'Scrollbar', 'Spinbox', 'StringVar', 'TOP', 'TRUE', 'Tcl', 'TclError', 'TclVersion', 'Text', 'Tk', 'TkVersion', 'Toplevel', 'UNDERLINE', 'UNITS', 'VERTICAL', 'Variable', 'W', 'WORD', 'WRITABLE', 'Widget', 'Wm', 'X', 'XView', 'Y', 'YES', 'YView', '__annotations__', '__builtins__', '__doc__', '__loader__', '__name__', '__package__', '__spec__', 'constants', 'enum', 'getboolean', 'getdouble', 'getint', 'image_names', 'image_types', 'mainloop', 're', 'sys', 'wantobjects']

>>> quit()
{% endhighlight %}

Python pakketten worden geïnstalleerd via het commandline tool `pip`. [pip](https://pypi.org/project/pip/), de python package manager, kunnen we voor de voorgaande geïnstalleerde versie van python testen m.b.v. `pip3.6`.

### SenseHat SDK

De [installatie](https://projects.raspberrypi.org/en/projects/getting-started-with-the-sense-hat/2) van de Sense Hat-sdk is "pretty straightforward". Zorg er eerst voor dat alle APT-paketten up-to-date zijn. Vervolgens installeren we het sense-hat-pakket. Na installatie van dit pakket herstarten we het besturingssysteem Raspbian op de Raspberry Pi3.

{% highlight bash %}
sudo apt-get update 
sudo apt-get install sense-hat 
sudo reboot 
{% endhighlight %}

### Flask

[Flask](http://flask.pocoo.org/)

### Pygame

[Pygame](https://www.pygame.org/wiki/GettingStarted#Pygame%20Installation)

### Processing

[Processing voor python](https://github.com/jdf/processing.py)


Node.js
-------

Om Node.js op Raspberry Pi3 te installeren kunnen we best gebruik maken van [Node Version Manager](https://github.com/creationix/nvm). De installatie van NVM is vrij eenvoudig.

{% highlight bash %} 
$ git clone https://github.com/creationix/nvm.git ~/.nvm
$ sudo echo "source ~/.nvm/nvm.sh" >> ~/.bashrc && sudo echo "source ~/.nvm/nvm.sh" >> ~/.profile
{% endhighlight %}

Op 24-08-2018 bedraagt de NVM versie 0.3.11. Eenvodig te bevragen via het commando `nvm --version`.

Om een bepaalde node.js versie te installeren voeren we, voor versie v10.9.0, het commando `nvm install 10.9.0` uit.

{% highlight bash %} 
$ node -v
v10.9.0
{% endhighlight %}

{% highlight bash %} 
$ nvm list
->      v10.9.0
         system
default -> 10.9.0 (-> v10.9.0)
node -> stable (-> v10.9.0) (default)
stable -> 10.9 (-> v10.9.0) (default)
iojs -> N/A (default)
unstable -> N/A (default)
lts/* -> lts/carbon (-> N/A)
lts/argon -> v4.9.1 (-> N/A)
lts/boron -> v6.14.4 (-> N/A)
lts/carbon -> v8.11.4 (-> N/A)
{% endhighlight %}

{% highlight bash %} 
$ npm -v
6.2.0
{% endhighlight %}

{% highlight bash %} 
$ npm -g install npm@latest --allow-root --unsafe-perm 
$ npm -v
6.4.0
{% endhighlight %}

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

https://github.com/troyth/node-raspicam
A Node.js-based controller module for the Raspberry Pi camera based on a command structure similar to Johnny-Five

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

IDE
---

### Geany

{% highlight bash %}
sudo apt-get install geany
{% endhighlight %}

### Ninja

{% highlight bash %}
sudo apt-get install ninja-ide
{% endhighlight %}