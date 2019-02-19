---
title: Development Environment
title_long: Development Environment
permalink: raspberrypi/devenvironment/
---

Besturingssysteem
-----------------

We zullen gebruik maken van een SD-kaart waarop [NOOBS](https://www.raspberrypi.org/documentation/installation/noobs.md) geïnstalleerd is. NOOBS staat voor **New Out Of the Box Software** en wordt gebruikt om bepaalde besturingssystemen te installeren voor de Raspberry Pi. Vanaf NOOBS v1.3.10 bevat deze installatiemanager enkel het **[Raspbian](http://raspbian.org/)** Operating System. Om een ander besturingssysteem te installeren hebben we netwerkconnectie nodig.

Start je met een **lege SD-kaart**, dan moet je:

- SD-kaart formatteren;
- [NOOBS downloaden](https://www.raspberrypi.org/downloads/noobs/);
- Het gedownload archiveerbestand uitpakken;
- Kopiëren van alle uitgepakte bestanden onder de root van de SD-kaart.

Op **05-07-2018** draagt NOOBS de versie **v2.8.2**.

### Installatie Raspbian besturingssysteem

Zoals we al eerder vertelden bevat de NOOBS installatiemanager het **Raspbian** besturingssysteem. Wil je niet gebruik maken van NOOBS, dan moet je [Raspbian-image](https://www.raspberrypi.org/downloads/raspbian/) zelf downloaden en de [installatieprocedure](https://www.raspberrypi.org/documentation/installation/installing-images/README.md) volgen via de officiële Raspberry Pi-website.

We selecteren via NOOBS het Raspbian besturingsysteem en stellen de taal **Nederlands** en de toetsenbordindeling **be** in.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_134136.jpg" alt="Installatie Raspbian" caption="Installatie Raspbian" %}

Raspbian is een gratis besturingssysteem gebasseerd op [Debian](https://www.debian.org/index.nl.html) en geoptimaliseerd voor de Raspberry Pi. Het **Raspbian** besturingssysteem bevat ongeveer 35000 pre-compiled packages, waaronder:

- Python;
- Scratch;
- Sonic Pi;
- Java;
- Mathematica (Wolfram Language);
- Minecraft;
- ... .

Na de installatie start het besturingssysteem automatisch op.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_140417.jpg" alt="Installatie Raspbian voltooid" caption="Installatie Raspbian voltooid" %}

Vervolgens selecteren we het **Artevelde HS Open** wifi-netwerk via het netwerk-icoon op de Raspbian-desktop. Start vervolgens de **Chromemium webbrowser** via de **Raspbian startknop &gt; Internet &gt; Chromium Web Browser**. Log vervolgens in met je Arteveldehogeschool-account. Andere mogelijke wifi-netwerken zijn **eduroam** en **Artevelde HS Veilig**. Om de wifi-routers to ontlasten op de GDM-campus kunnen we best **ethernet** gebruiken (inloggen is niet nodig) voor downloads van updates, upgrades, tools, software en andere pakketten via **npm** e.d. . In dit voorbeeld maken we gebruik van het **Artevelde HS Open** wifi-netwerk.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_150354.jpg" alt="Chromium webbrowser" caption="Chromium webbrowser" %}

### Update &amp; Upgrade

Nadat we geconnecteerd zijn met het Internet gaan we alle [paketten updaten](https://www.raspberrypi.org/documentation/raspbian/updating.md) die aanwezig zijn op het besturingssysteem. Dit kan eenvoudigweg door het volgende commando uit te voeren via de terminal (zwart icoon in de top-bar):

{% highlight bash %}
sudo apt-get update
{% endhighlight %}

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_150446.jpg" alt="Raspbian - Update" caption="Raspbian - Update" %}

Na de update installeren we al de nieuwste versies van alle paketten aanwezig op het systeem (paketten worden niet verwijderd via het `upgrade` commando) door het volgende commando uit te voeren:

{% highlight bash %}
sudo apt-get upgrade -y
{% endhighlight %}

We kunnen ook gebruik maken van het commando [`dist-upgrade`](https://askubuntu.com/questions/194651/why-use-apt-get-upgrade-instead-of-apt-get-dist-upgrade) waarmee alle niet-gerelateerde paketten automatisch verwijderd worden. 

Herstart het systeem na `update` en `upgrade` via `sudo reboot`.

{% highlight bash %}
sudo reboot
{% endhighlight %}

### Configuratie

De `update` en `upgrade`-procedure kan een tijdje duren, zeker via Wifi. Na een **Coffee Break** kunnen we de noodzakelijke configuration van het Raspbian besturingssysteem aanpakken. Start de **Raspberry Pi Configuration** applicatie via de **Raspbian startknop &gt; Preferences &gt; Raspberry Pi Configuration**.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_140728.jpg" alt="Raspbian - Configuratie" caption="Raspbian - Configuratie" %}

Via deze applicatie kunnen we het systeem (system), interfaces, performantie (performance) en localisatie (localisation) instellen. We activeren (enable) voorlopig de interfaces: **Camera**, **SSH** en **Remote GPIO (general purpose input/output)**. Hierdoor kunnen we een aangesloten camera uitlezen, SSH-verbinding maken met de Raspberry PI en de [GPIO-aansluitingen](https://www.raspberrypi.org/documentation/usage/gpio/) van de Raspberry PI aanspreken en sturen.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_140936.jpg" alt="Raspbian - Configuratie: Interfaces" caption="Raspbian - Configuratie: Interfaces" %}

Vervolgens stellen we de **Localisation** in, deze bestaat uit:

- Set Local  
Instellen van de taal (language), het land (country) en de karakterreeks (Character Set). De taal is `nl (Dutch)`, het land `BE (Belgium)` en de karakterreeks `UTF-8`. Uiteraard kies je voor de best passende instellingen die aanleunt bij je voorkeuren.
- Set Timezone  
Instellen van het gebied (area) en locatie (location). Het gebied is `Europe` en de locatie is `Brussels`.
- Set Keyboard  
Instellen van het land (country) en variant. Het land is `Belgium` en de variant `Belgian`.
- Set Wifi Country  
Instellen van het Wifi-land, in dit geval `BE Belgium`.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_140952.jpg" alt="Raspbian - Configuratie: Localisation" caption="Raspbian - Configuratie: Localisation" %}

Na het instellen van de interfaces en de localisatie, kunnen we ook deze instellingen en bijkomende instellingen doen via het commando `sudo raspi-config` in CLI (Command Line Interface).

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_141413.jpg" alt="Raspbian - Update" caption="Raspbian - CLI: raspi-config" %}

In deze configuratie verander best het **paswoord** voor de Raspberry Pi alsook de **hostname**. Zorg ervoor dat de naam van jouw Raspberry Pi uniek is!

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1718/syllabi/1718-wot/IMG_20170904_141439.jpg" alt="Raspbian - Update" caption="Raspbian - CLI: raspi-config" %}

We kunnen de datum en tijd instellen met en zonder het internet. Zonder het internet voeren we hetvolgende commando uit:

{% highlight bash %}
sudo date -s "Tue Jul 3 18:21:11 UTC 2018"
sudo dpkg-reconfigure tzdata
{% endhighlight %}

Of we kunnen, indien we internet hebben, gebruik maken van een **sntp**-server:

{% highlight bash %}
sudo sntp -s time.google.com
{% endhighlight %}

of

{% highlight bash %}
sudo sntp -s 0.debian.pool.ntp.prg
{% endhighlight %}

Via [ntpupdate](http://doc.ntp.org/4.1.1/ntpdate.htm) is het nog eenvoudiger om de datum en tijd aan te passen.

{% highlight bash %}
sudo apt-get install ntpdate
sudo ntpdate pool.ntp.org
{% endhighlight %}

De aanpassing van tijd en datum kan noodzakelijk zijn om bepaalde tools, software e.d. te kunnen downloaden. 

> Opmerking
> ---
> Herstart Raspbian na iedere wijziging in de configuratie!
{:.card.card-remark}

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


IDE's
-----

### Geany

Geany is een vrije platformonafhankelijke broncode-editor en IDE. Het is gebaseerd op GTK+ en het maakt gebruik van Scintilla. Geany kan op allerlei platform gebruikt worden, waaronder Windows, Linux, Mac OS X, BSD en Solaris. Geany is vrijgegeven onder de GPL en is bijgevolg opensourcesoftware. Het ondesretunt enorm veel [programmeertalen](https://www.geany.org/Main/AllFiletypes).

{% highlight bash %}
sudo apt-get update
sudo apt-get install geany
{% endhighlight %}

### Ninja

Ninja-IDE is een cross-platform IDE. Ninje-IDE runt op allerlei platformen, waaronder Windows, Linux, Mac OS X, BSD en Solaris. Het laat developers toe om applicaties te maken voor allerlei doelen en dat op een gemakkelijke en aangename manier.

{% highlight bash %}
sudo apt-add-repository ppa:ninja-ide-developers/ninja-ide-stable
sudo apt-get update
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

Samba is [beschikbaar](https://www.raspberrypi.org/magpi/samba-file-server/) in  de Raspbian’s standaard software repositories. Zorg ervoor dat het volledig is geupdated, en installeer vervolgens Samba via `apt-get`. Open een Terminal en type:

{% highlight bash %}
$ sudo apt-get update
$ sudo apt-get dist-upgrade
$ sudo apt-get install samba samba-common-bin
{% endhighlight %}

Aanmaak van de shared directory kunnen we via het `mkdir`-commando. Daarna stellen we de toegangsrechten in via `chmod`. `1777` betekent dat deze folder niet kan verwijderd worden (1) en dat iedereen toegang heeft tot deze folder (777), na inloggen.

{% highlight bash %}
$ mkdir /home/pi/pishared
$ chmod 1777 /home/pi/pishared
{% endhighlight %}

De twee regels kunnen ook in een regel geschreven worden:

{% highlight bash %}
$ sudo mkdir -m 1777 /home/pi/pishared
{% endhighlight %}

Editeer vervolgens de [Samba's config files](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) om de **file share** toegankelijk te maken.

{% highlight bash %}
$ sudo nano /etc/samba/smb.conf
{% endhighlight %}

Voeg de volgende inhoud toe aan het `smb.conf`-bestand.

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

Dit betekent dat iedereen alle bestanden kan lezen, schrijven en uitvoeren in deze gedeelde folder door in te loggen als een Samba gebruiker. Gewone bezoekers krijgen geen toegang tot deze bestanden.

Een Samba gebruiker kunnen we aanmaken d.m.v het `smbpasswd`-commando, zoals in het onderstaande voorbeeld.

{% highlight bash %}
sudo smbpasswd -a pi
{% endhighlight %}

Herstart de Samba-service zodat de wijzigingen van kracht zijn (smb.conf en Samba users).

{% highlight bash %}
sudo /etc/init.d/samba restart
{% endhighlight %}

> Samba start automatisch tijdens het opstarten van de Pi. Na connectie met een shared folder kunnen we de Raspberry Pi "headless" gebruiken, dus zonder monitor, toetsenbord en muis.
{:.card.card-definition}

##### macOS

1\. Verbinden met de Raspberry Pi, via IP-adres, m.b.v. "Verbind met de server"-optie in de Finder-app. Gebruik hierbij het [smb](https://en.wikipedia.org/wiki/Samba_(software))-protocol.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_1.png" alt="Samba - Verbind met server" caption="Samba - Verbind met server" %}

2\. Geef vervolgens jouw samba-account (naam em wachtwoord) in. Bewaar deze settings in jouw sleutelhanger indien gewenst. 

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_2.png" alt="Samba - Inloggen" caption="Samba - Inloggen" %}

3\. Selecteer de volumes die je wil activeren op het gekoppelde ip-adres. In dit geval selecteren we de "shared"-folder `PiSharedMercury`.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_3.png" alt="Samba - Selecteer volumes" caption="Samba - Selecteer volumes" %}

4\. Open shared folder in Finder

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_4.png" alt="Finder - Open shared folder" caption="Finder - Open shared folder" %}

5\. Do some stuff in Finder

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/smb_5.png" alt="Finder - Do some stuff" caption="Finder - Do some stuff" %}

##### Windows

1\. Ga naar de verkenner en selecteer "this pc". Klik vervolgens op de actieknop "Map network drive". Selecteer de **drive letter** die je wenst toe te kennen aan deze network drive. Geeft daarna de netwerk-folder in via ip-adres of netwerknaam.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/samba_1.png" alt="Verkenner - Map Network Drive" caption="Verkenner - Map Network Drive" %}

2\. Geef e netwerk credentials in.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/samba_2.png" alt="Verkenner - Network Drive Credentials" caption="Verkenner - Network Drive Credentials" %}

3\. De netwerk folder is nu beschikbaar via de verkenner.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/samba_3.png" alt="Verkenner - Network Drive Connected" caption="Verkenner - Network Drive Connected" %}

#### netatalk

[Netatalk](http://netatalk.sourceforge.net/) is een gratis "Open Source" AFP fileserver. Een Netatalk server is in staat vele Macintosh clients simultaan te dienen als een AppleShare File Server (AFP).

{% highlight bash %}
sudo apt-get install netatalk
{% endhighlight %}

2\. Stop de `netatalk` service

{% highlight bash %}
sudo /etc/init.d/netatalk stop
{% endhighlight %}

3\. Open het configuratiebestand `/AppleVolumes.default`.

{% highlight bash %}
sudo nano /etc/netatalk/AppleVolumes.default
{% endhighlight %}

Je kan de mount folder veranderen, de standaard waarde: `~/ "Home Directory`.

4\. Start de `netatalk` service opnieuw

{% highlight bash %}
sudo /etc/init.d/netatalk start
{% endhighlight %}

5\. Connectie maken met de netwerk folder via `open` commando in macOS.

{% highlight bash %}
open afp://10.5.128.3
{% endhighlight %}

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/open_afp.png" alt="Open - afp" caption="Open - afp" %}

