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


Node.js
-------

Om Node.js op Raspberry Pi3 te installeren voeren we de volgende commando's uit:

{% highlight bash %} 
wget https://nodejs.org/dist/v10.9.0/node-v10.9.0-linux-armv7l.tar.gz 
tar -xvf node-v10.9.0-linux-armv7l.tar.gz  
cd node-v10.9.0-linux-armv7l.tar.gz 
sudo cp -R * /usr/local/ 
sudo reboot 
{% endhighlight %}

Om de installatie te testen, na reboot, voeren we de volgende commando's uit:

{% highlight bash %}
node -v
npm -v
{% endhighlight %}

Deze commando's tonen de versie van respectievelijk de node- en nmp-cli. Op 24-08-2018 draagt node de versie v10.9.0.