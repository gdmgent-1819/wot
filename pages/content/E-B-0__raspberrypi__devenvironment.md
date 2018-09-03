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

Sharing
-------

### hostname

De hostname van de PI kan ingesteld worden via het menu Home > Preferences > Raspberry Pi Configuration. In het tabblad System kan je bij het invulveld bij hostname deze wijzigen. 

> - Naamgeving hostname: `pi-ahs-{ahs-loginnaam}`. Bijv. `pi-ahs-phildp`.
> - Wijzig ook het paswoord van jouw Raspberry Pi. Standaard is dit het paswoord `raspberry`.
> - Herstart steeds de Pi na aanpassingen aan de configuratie.
{:.card.card-definition}

### IP-adres

Het [IP-adres](https://nl.wikipedia.org/wiki/IP-adres) wordt toegekend aan de Raspberry Pi na connectie met een netwerk. Met het commando `ifconfig`, op de Pi, kunnen we dit IP-adres opvragen. In het onderstaande voorbeeld is het IP-adres `192.168.0.7` toegekend.

{% highlight bash %}
$ ifconfig

eth0      Link encap:Ethernet  HWaddr b8:27:eb:2c:eb:a7
          inet6 addr: fe80::22ec:737d:b91:e8b1/64 Scope:Link
          UP BROADCAST MULTICAST  MTU:1500  Metric:1
          RX packets:0 errors:0 dropped:0 overruns:0 frame:0
          TX packets:0 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:0 (0.0 B)  TX bytes:0 (0.0 B)

lo        Link encap:Local Loopback  
          inet addr:127.0.0.1  Mask:255.0.0.0
          inet6 addr: ::1/128 Scope:Host
          UP LOOPBACK RUNNING  MTU:65536  Metric:1
          RX packets:204 errors:0 dropped:0 overruns:0 frame:0
          TX packets:204 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1 
          RX bytes:16896 (16.5 KiB)  TX bytes:16896 (16.5 KiB)

wlan0     Link encap:Ethernet  HWaddr b8:27:eb:79:be:f2 
          inet addr:192.168.0.7  Bcast:192.168.0.255  Mask:255.255.255.0
          inet6 addr: fe80::4aec:7221:9d0d:368e/64 Scope:Link
          UP BROADCAST RUNNING MULTICAST  MTU:1500  Metric:1
          RX packets:784 errors:0 dropped:0 overruns:0 frame:0
          TX packets:471 errors:0 dropped:0 overruns:0 carrier:0
          collisions:0 txqueuelen:1000 
          RX bytes:975509 (952.6 KiB)  TX bytes:51520 (50.3 KiB)
{% endhighlight %}

Het toegekend IP-adres kan ook opgevraagd worden, op de Pi, via het `hostname` commando.

{% highlight bash %}
$ hostname -I
192.168.0.7
{% endhighlight %}

De bovenstaande methoden kunnen enkel toegepast worden indien een scherm, toetsenbord en muis verbonden is met de Pi. Wanneer we de Pi headless (zonder scherm, toetsenbord en muis) connecteren, moeten we gebruik maken van andere [methoden](https://www.raspberrypi.org/documentation/remote-access/ip-address.md). 

Op Raspbian wordt standaard de [Avahi-service](https://en.wikipedia.org/wiki/Avahi_(software)) actief meegeleverd, dat ondermeer [Multicast DNS](https://en.wikipedia.org/wiki/Multicast_DNS) ondersteunt. Via mDNS kunnen we de Pi aanspreken m.b.v. de hostname aangevuld met `.local`.

{% highlight bash %}
$ ping pi-mercury.local
PING pi-mercury.local (192.168.0.7): 56 data bytes
64 bytes from 192.168.0.7: icmp_seq=0 ttl=64 time=6.787 ms
64 bytes from 192.168.0.7: icmp_seq=1 ttl=64 time=12.070 ms
64 bytes from 192.168.0.7: icmp_seq=2 ttl=64 time=8.184 ms
64 bytes from 192.168.0.7: icmp_seq=3 ttl=64 time=8.082 ms
64 bytes from 192.168.0.7: icmp_seq=4 ttl=64 time=15.633 ms
64 bytes from 192.168.0.7: icmp_seq=5 ttl=64 time=8.122 ms
64 bytes from 192.168.0.7: icmp_seq=6 ttl=64 time=16.413 ms
64 bytes from 192.168.0.7: icmp_seq=7 ttl=64 time=6.134 ms
64 bytes from 192.168.0.7: icmp_seq=8 ttl=64 time=9.032 ms
64 bytes from 192.168.0.7: icmp_seq=9 ttl=64 time=43.510 ms
64 bytes from 192.168.0.7: icmp_seq=10 ttl=64 time=11.083 ms
64 bytes from 192.168.0.7: icmp_seq=11 ttl=64 time=8.686 ms
64 bytes from 192.168.0.7: icmp_seq=12 ttl=64 time=6.532 ms
^C
--- pi-mercury.local ping statistics ---
13 packets transmitted, 13 packets received, 0.0% packet loss
round-trip min/avg/max/stddev = 6.134/12.328/43.510/9.532 ms
{% endhighlight %}

Nog andere populaire methoden om het netwerk te scannen zijn: [nmap](https://nmap.org/download.html) en [Fling](https://www.fing.io/).

> Binnen het netwerk van de Arteveldehogeschool zal de hostname-methode niet werken.
{:.card.card-definition}

### SSH

Om een [SSH](https://en.wikipedia.org/wiki/Secure_Shell)-verbinding tot stand te brengen met de Pi kunnen we [macOS](https://www.raspberrypi.org/documentation/remote-access/ssh/unix.md) gebruik maken van het `ssh` cli-tool, op Windows maken we gebruik van bijvoorbeeld [Putty](https://www.putty.org/). SSH staart voor Secure SHell en wordt gebruikt om remote in te loggen met een een computer en dit op een veilige manier.

{% highlight bash %}
$ ssh pi@192.168.0.7
The authenticity of host '192.168.0.7 (192.168.0.7)' can't be established.
ECDSA key fingerprint is 1c:45:e2:51:0e:c6:dc:a8:bf:8d:00:65:41:f4:98:6c.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.168.0.7' (ECDSA) to the list of known hosts.
pi@192.168.0.7's password:

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Aug 27 19:37:57 2018 from 192.168.0.6
manpath: can't set the locale; make sure $LC_* and $LANG are correct
manpath: can't set the locale; make sure $LC_* and $LANG are correct
manpath: can't set the locale; make sure $LC_* and $LANG are correct
pi@pi-mercury:~ $
{% endhighlight %}

Wanneer je de fout **manpath: can't set the locale; make sure $LC_* and $LANG are correct** ervaart, moeten we de volgende handelingen uitvoeren.

{% highlight bash %}
$ sudo dpkg-reconfigure locales
{% endhighlight %}

Selecteer vervolgens de locales: `en_GB.UTF-8`, `en_US.UTF-8`, `nl_BE.UTF-8` en `nl_NL.UTF-8`.

Vermits de Pi ook een hostname heeft gekregen, kunnen we via SSH ook connecteren via de hostname m.b.v. mDNS.

{% highlight bash %}
$ ssh pi@pi-mercury.local
Warning: Permanently added the ECDSA host key for IP address 'fe80::4aec:7221:9d0d:368e%en0' to the list of known hosts.
pi@pi-mercury.local's password:

The programs included with the Debian GNU/Linux system are free software;
the exact distribution terms for each program are described in the
individual files in /usr/share/doc/*/copyright.

Debian GNU/Linux comes with ABSOLUTELY NO WARRANTY, to the extent
permitted by applicable law.
Last login: Mon Aug 27 20:41:33 2018
pi@pi-mercury:~ $
{% endhighlight %}

We merken ook op dat de voorgaanden fout i.v.m. **locales** verdwenen is.

Om de SSH-sessie te verlaten voeren we het commando `exit` uit in de terminal.

{% highlight bash %}
$ exit
uitgelogd
Connection to pi-mercury.local closed.
{% endhighlight %}

### Folders

#### samba

{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get dist-upgrade
$ sudo apt-get install samba samba-common-bin
{% endhighlight %}

{% highlight bash %}
$ mkdir /home/pi/pishared
$ chmod 777 /home/pi/pishared
{% endhighlight %}

{% highlight bash %}
$ sudo nano /etc/samba/smb.conf
{% endhighlight %}

{% highlight txt %}
[PiSharedMercury]
comment = Mercury Pi Server Folder
path = /home/pi/pishared
browseable = yes
writeable = yes
only guest = no
create mask = 0777
directory mask = 0777
public = no
read only = no
guest ok = no
{% endhighlight %}

##### macOS


Verbinden met de Raspberry Pi, via IP-adres, m.b.v. "Verbind met de server"
{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_1.png" alt="Samba - Verbind met server" caption="Samba - Verbind met server" %}
{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_2.png" alt="Samba - Inloggen" caption="Samba - Inloggen" %}
{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_3.png" alt="Samba " caption="Raspbian - Update" %}
{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_4.png" alt="Raspbian - Update" caption="Raspbian - Update" %}
{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_5.png" alt="Raspbian - Update" caption="Raspbian - Update" %}