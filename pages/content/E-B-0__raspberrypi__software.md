---
title: Software
title_long: Software
permalink: raspberrypi/software/
---

Software
--------

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