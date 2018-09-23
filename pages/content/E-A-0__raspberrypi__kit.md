---
title: IoT Learner Kit
title_long: IoT Learner Kit
permalink: raspberrypi/kit/
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

In de kit zit de **[Sense HAT](https://www.raspberrypi.org/products/sense-hat/)** is een uitbreidingsbord dat bovenop de Raspberry Pi 3 Model B wordt aangebracht via de GPIO. Dit bord werd speciaal ontwikkeld voor de **[Astro Pi](https://astro-pi.org/)**-missie naar het International Space Station (2015).

[^HAT]HAT: Hardware Attached on Top

De Sense Hat[^HAT] bestaat uit:

- 8×8 RGB LED matrix;
- five-button;
- Gyroscope;
- Accelerometer;
- Magnetometer;
- Temperature;
- Barometric pressure;
- Humidity.

Leuke hoeveelheid led's, inputs en sensoren. Ideaal om een aantal leuke projecten te maken voor het opleidingsonderdelen [Internet Of Things](http://bamaflexweb.arteveldehs.be/BMFUIDetailxOLOD.aspx?a=103012&b=5&c=1) en [Web Of Things](http://bamaflexweb.arteveldehs.be/BMFUIDetailxOLOD.aspx?a=97782&b=5&c=1). Om de Sense Hat stevig te plaatsen, monteren we eerst de afstandshouders aan de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133044.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Afstandhouders" caption="Raspberry Pi 3 IoT Learner Kit - Afstandhouders" %}

Vervolgens plaatsen we de Raspberry Pi in de meegeleverde case en monteren we de Sense Hat via de GPIO en de afstandshouders aan de Raspberry Pi. Het doosje mag nu ook afgesloten worden m.b.v. doorzichtig deksel.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133144.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Raspberry Pi in Case" caption="Raspberry Pi 3 IoT Learner Kit - Raspberry Pi in Case" %}

De Raspberry Pi heeft een [besturingssysteem](https://www.raspberrypi.org/downloads/) nodig. We hebben keuzen in heel wat distributies. De meest bekende is **[Raspbian](https://www.raspberrypi.org/downloads/)**. Om dit besturingssysteem op een eenvoudige manier te installeren kunnen we gebruik maken van **[NOOBS](https://www.raspberrypi.org/downloads/noobs/)**. Deze laatste distributie is aanwezig in de kit.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_131115.jpg" alt="Raspberry Pi 3 IoT Learner Kit - NOOBS Operating System" caption="Raspberry Pi 3 IoT Learner Kit - NOOBS Operating System" %}

De SD-kaart plaatsen we met de juiste zijde in de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_133405.jpg" alt="Raspberry Pi 3 IoT Learner Kit - Juiste richting om SD in te pluggen" caption="Raspberry Pi 3 IoT Learner Kit - Juiste richting om SD in te pluggen" %}

Na het aansluiten van een extern scherm via HDMI, toetsenbord en muis kunnen we aan de slag met de Raspberry Pi.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/IMG_20170904_134046.jpg" alt="Raspberry Pi 3 Aansluiten" caption="Raspberry Pi 3 Aansluiten" %}

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