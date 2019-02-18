---
title: Internet
title_long: Internet
permalink: internet/
published: false
---

Wat is het internet?
--------------------

> Definitie
> ---
> Het **internet**[^internet] is het grootste computernetwerk ter wereld, en het bestaat eigenlijk uit verschillende aan elkaar gekoppelde netwerken. Het internet is dus een netwerk van netwerken en bestaat uit enorm veel locale- en globale netwerken, zoals: privénetwerken, publiek toegankelijke netwerken, academische netwerken, bedrijfsnetwerken, regeringsnetwerken, ... .
{:.card.card-definition}

[^internet]: Het internet schrijven we met een **onderkast** (kleine letter) omdat het de laatste twee decennia zo alomtegenwoordig geworden is.

{% include shared/figure.html src="https://media.giphy.com/media/GrkrL1cGVv0FW/giphy.gif" alt="The internet: IT wrowd - Bron: Giphy.com" caption="The internet: IT wrowd - Bron: Giphy.com" %}

Hoe werkt het internet?
-----------------------

Het internet is een wereld waarin alle aangesloten computers een eigen, **uniek adres** hebben en waarin alle aangesloten computers gegevens kunnen uitwisselen over een wereldomspannend wegennet voor het vervoer van computerbestanden. Het unieke adres van de aangesloten computers wordt het **IP-adres** genoemd. Al die computers bij elkaar vormen de grootste, virtuele harde schijf van de wereld en je hebt toegang tot een heel groot deel van die wereldwijde harde schijf. Het internet is een **Internet of Computers (IoC)**.

> Opgelet
> ---
> Het **World Wide Web** is slechts een onderdeel van het internet en is een gigantische verzameling van webpagina's. 
{:.card.card-warning}

> Definitie
> ---
> Een **pakketje** is een kleine hoeveelheid gegevens die als geheel verstuurd wordt. Het bevat onder andere de bestemmeling en gegevens.
{:.card.card-definition}

Via **TCP/IP**[^TCPIP] worden de pakketjes verstuurd:

[^TCPIP]: **TCP/IP**: Transmission Control Protocol/Internet Protocol

 - **Transmission Control Protocol**  
   Zorgt voor het opsplitsen in pakketjes en het terug samenstellen.
 - **Internet Protocol**  
   Zorgt voor het versturen van de individuele pakketjes. 

Een groot bestand versturen:

 1. Het bestand wordt eerst opgesplitst in vele pakketjes.
 1. Elk pakketje wordt afzonderlijk verstuurd.
 1. Het versturen verloopt via een aantal computers (servers).
 1. Elke tussenliggende computer stuurt een pakketje 1 **hop** verder en kiest een route via routering-tabellen. Elk pakketje kan een andere weg volgen.
 1. Bij de ontvanger wordt het bestand opnieuw samengesteld in de juiste volgorde.

> Tip
> ---
> Met de [Visual Trace Route Tool](http://www.monitis.com/traceroute/index.jsp?url=arteveldehogeschool.be&testId=1414916) kan je de **traceroute** (hops die de pakketjes volgen) naar een bepaald domein (bv. `arteveldehogeschool.be`) visueel laten weergeven.
{:.card.card-tip}

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/web-design/webd_traceroute_1.PNG" alt="Visual Trace Route Tool: facebook.com" caption="Visual Trace Route Tool: facebook.com" %}

> Definitie
> ---
> Een **server** is een gespecialiseerde computer die serversoftware bevat en diensten levert aan andere computers.
{:.card.card-definition}

Servers moeten doorgaans 24 uur per dag en 7 dagen per week hard werken en dat jaren aan een stuk. Daarom moet de hardware aan de hoogste kwaliteitseisen voldoen en is is die heel erg duur.

{% include shared/figure.html src="https://www.curvature.com/sites/default/files/poweredge-rack-servers-a.jpg" alt="Dell PowerEdge Rack Servers - Bron: Curvature" caption="Dell PowerEdge Rack Servers - Bron: Curvature" %}

Adressen
--------

Computers vinden elkaar via een IP-adres[^IP-adres]. Binnen een netwerk moeten IP-adressen uniek zijn.

[^IP-adres]: **IP-adres**: Internet Protocol-adres

Op Windows kunnen we met behulp van de [Command Prompt](https://www.lifewire.com/command-prompt-2625840) en CLI[^CLI] via het command `ipconfig` de IP-configuratie opvragen. Op [linux](https://www.linux.org/)-distributies kunnen we deze configuratie opvragen m.b.v [bash](https://linuxconfig.org/bash-scripting-tutorial) en CLI via het command [ifconfig](https://www.computerhope.com/unix/uifconfi.htm). Meer informatie omtrent CLI[^CLI] krijg je in het opleidingsonderdeel **besturingssystemen**.

[^CLI]: *CLI**: Command Line Interface

{% highlight bash %}
C:\Users\phildp>ipconfig

Windows IP Configuration


Ethernet adapter Ethernet:

   Connection-specific DNS Suffix  . : arteveldehs.be
   Link-local IPv6 Address . . . . . : fe80::1c55:bab6:71f2:c16d%4
   IPv4 Address. . . . . . . . . . . : 10.5.129.13
   Subnet Mask . . . . . . . . . . . : 255.255.254.0
   Default Gateway . . . . . . . . . : 10.5.129.254

Wireless LAN adapter Wi-Fi:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . : arteveldehs.be

Wireless LAN adapter Local Area Connection* 2:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Wireless LAN adapter Local Area Connection* 4:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :

Ethernet adapter Bluetooth Network Connection:

   Media State . . . . . . . . . . . : Media disconnected
   Connection-specific DNS Suffix  . :
{% endhighlight %}

### IPv4-adressen

IPv4[^IPv4] wordt momenteel nog veel gebruikt, maar biedt een onvoldoende aantal unieke IP-adressen voor alle toestellen die op het internet aangesloten zijn.

[^IPv4]: **IPv4**: Internet Protocol version 4

**32-bits** (4 groepen van 8-bits getallen).

Theoretisch zijn er $2^{32}$ mogelijke, unieke adressen. Dat zijn er meer dan **4 miljard**[^miljard].

[^miljard]: Een **miljard** [*(Eng. short scale: billion, (British) Eng. long scale: milliard)*](http://mathworld.wolfram.com/LargeNumber.html) is een getal met 9 nullen.

> Voorbeeld
> ---
> `192.168.0.1`
{:.card.card-example}

### IPv6-adressen

IPv6[^IPv6] biedt een oplossing voor de tekortkomingen van IPv4, doordat het biedt: meer dan mogelijkheden.

[^IPv6]: **IPv6**: Internet Protocol version 6

**128-bits** (8 groepen van 4 hexadecimale cijfers).

Theoretisch zijn er $2^{128}$ mogelijke, unieke adressen. Dat zijn er meer dan **340 sexiljoen**[^sexiljoen].

[^sexiljoen]: Een **sexiljoen** [*(Eng. short scale: undecillion, (British) Eng. long scale: sexillion)*](http://mathworld.wolfram.com/LargeNumber.html) is een getal met 36 nullen.

> Voorbeeld
> ---
> `3ffe:6a88:85a3:08d3:1319:8a2e:0370:7344`
{:.card.card-example}

Protocollen
-----------

Om de internetdiensten te kunnen voorzien, moeten er **protocollen** (afspraken) gemaakt worden. 

| Protocol      | Waarvoor wordt het gebruikt?                                |
|---------------|-------------------------------------------------------------|
| HTTP[^HTTP]   | Webpagina’s versturen.                                      |
| HTTPS[^HTTPS] | Webpagina’s versturen over een versleutelde verbinding.     |
| FTP[^FTP]     | Om bestanden te versturen.                                  |
| SFTP[^SFTP]   | Om bestanden te versturen over een versleutelde verbinding. |
| SMTP[^SMTP]   | Om e-mails te versturen en te ontvangen.                    |
{:.table.table--primary}

[^HTTP]: **HTTP**: Hypertext Transfer Protocol
[^HTTPS]: **HTTPS**: Hypertext Transfer Protocol Secure
[^FTP]: **FTP**: File Transfer Protocol
[^SFTP]: **SFTP**: SSH File Transfer Protocol
[^SMTP]: **SMTP**: Simple Mail Transfer Protocol

Domeinnamen
-----------

### Hoe kunnen mensen IP-adressen onthouden?

IP-adressen zijn makkelijk voor computers, maar niet zo gebruiksvriendelijk voor mensen. Die gebruiken liever makkelijk te onthouden **domeinnamen**.

**DNS**[^DNS] koppelt IP-adresssen aan domeinnamen. Meerdere IP-adressen kunnen aan 1 domeinnaam gekoppeld zijn, en vice versa.

[^DNS]: **DNS**: Domain Name System

> Voorbeeld
> ---
> - <http://www.arteveldehogeschool.be> is eigenlijk <http://193.191.137.217>
> - <http://www.gdm.gent> is eigenlijk <http://104.27.148.234> (Directe IP-toegang is in dit geval niet toegelaten)
> - <http://www.catawiki.be> is eigenlijk <http://88.221.69.175> (Directe IP-toegang is in dit geval niet toegelaten)
{:.card.card-example}

### Anatomie van een domeinnaam

www.arteveldehogeschool.be

| Onderdeel             | Benaming  | Beheer             |
|-----------------------|-----------|--------------------|
| `www`                 | subdomein | Webserverbeheerder |
| `arteveldehogeschool` | domein    | DNS Belgium        |
| `.be`                 | TLD[^TLD] | ICANN              |
{:.table.table--primary}

[^TLD]: **TLD**: Top-Level Domain

> Task
> ---
> Hoeveel kost de registratie van een `.be`-domeinnaam voor een jaar?
{:.card.card-task}

[ICANN][] is een van oorsprong Amerikaanse non-profitorganisatie die de TLD's beheert:

| TLD         |  Type         | Betekenis                        |
|-------------|--------------:|----------------------------------|
| `.apple`    |  gTLD[^gTLD]  | Apple, Inc.                      |
| `.at`       | ccTLD[^ccTLD] | Oostenrijk                       |
| `.au`       | ccTLD         | Australië                        |
| `.com`      |  gTLD         | *Company*                        |
| `.ca`       | ccTLD         | Canada                           |
| `.cn`       | ccTLD         | China                            |
| `.de`       | ccTLD         | Duitsland                        |
| `.dk`       | ccTLD         | Denemarken                       |
| `.edu`      |  sTLD[^sTLD]  | *Education*                      |
| `.el`       | ccTLD         | Griekenland                      |
| `.es`       | ccTLD         | Spanje                           |
| `.eu`       | ccTLD         | Europese Unie                    |
| `.fi`       | ccTLD         | Finland                          |
| `.fr`       | ccTLD         | Frankrijk                        |
| `.google`   |  gTLD         | Google                           |
| `.ie`       | ccTLD         | Ierland                          |
| `.il`       | ccTLD         | Israël                           |
| `.it`       | ccTLD         | Italië                           |
| `.io`       | ccTLD         | Brits Indische Oceaanterritorium |
| `.lu`       | ccTLD         | Luxemburg                        |
| `.net`      |  gTLD         | *Network*                        |
| `.nl`       | ccTLD         | Nederland                        |
| `.no`       | ccTLD         | Noorwegen                        |
| `.org`      |  gTLD         | *Organization*                   |
| `.pt`       | ccTLD         | Portugal                         |
| `.se`       | ccTLD         | Zweden                           |
| `.tv`       | ccTLD         | Tuvalu                           |
| `.us`       | ccTLD         | Verenigde Staten                 |
| `.youtube`  |  gTLD         | YouTube                          |
| `localhost` |  tTLD[^tTLD]  | `127.0.0.1`                      |
| …           |             … | …                                |
{:.table.table--primary}

[^ccTLD]: **ccTLD**: Country-Code Top-Level Domain
[^gTLD]: **gTLD**: Generic Top-Level Domain
[^sTLD]: **sTLD**: Sponsored Top-Level Domain
[^tTLD]: **tTLD**: Test Top-Level Domain

> Opmerking
> ---
> Sinds **1 oktober 2016** is [ICANN een onafhankelijke organisatie](https://www.icann.org/news/announcement-2016-10-01-en) die niet langer afhangt van NTIA (Amerikaans Ministerie van Handel).
{:.card.card-remark}

| Belgische TLD |  Type | Beheer domeinnamen voor deze TLD |
|---------------|------:|----------------------------------|
| `.be`         | ccTLD | [DNS Belgium][]                  |
| `.brussels`   |  gTLD | [DNS Belgium][]                  |
| `.gent`       |  gTLD | [.GENT][]                        |
| `.vlaanderen` |  gTLD | [DNS Belgium][]                  |
{:.table.table--primary}

> Zie ook
> ---
> - [IANA Root Zone Database](http://www.iana.org/domains/root/db)
> - [IANA WHOIS](http://www.iana.org/whois)
{:.card.card-link}

De domeinnamen binnnen de Belgische TLD's domeinnamen (met als TLD `.be`, `.brussels` of `.vlaanderen`) worden beheerd door [DNS Belgium][].

Zelf een domeinnaam registreren doe je niet rechtstreeks bij [DNS Belgium][], maar via een erkende **Registrar**.

Om te weten wie achter een bepaalde domeinnaam schuil gaat, kun je de WHOIS-informatie raadplegen. Voor .be-domeinnamen kun je dat bijvoorbeeld via de website van dnsbelgium.be.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/wanm/1617_webd1/whois_arteveldehogeschool.png" alt="" caption="In het voorbeeld hierboven kan je de WHOIS-gegevens van de domeinnaam <code>arteveldehogeschool.be</code> zien." %}

Statistieken
------------

Op 2018-09-12 zijn er:

 - [**7,649384491 miljard** mensen](http://www.worldometers.info/world-population/) op aarde.
 - [**4,018463745 miljard** internetgebruikers](http://www.internetlivestats.com/internet-users/), ca. **52,5 %** van de wereldbevolking.
 - [**1,47 miljard** dagelijks actieve Facebook-gebruikers](http://newsroom.fb.com/company-info/) per maand.

### Meest bezochte websites Wereldwijd (2018-09-12)

| Plaats        | Website                                                                        |
|---------------|--------------------------------------------------------------------------------|
| 1 | google.com |
| 2 | youtube.com |
| 3 | facebook.com |
| 4 | baidu.com |
| 5 | wikipedia.org |
| 6 | yahoo.com |
| 7 | qq.com |
| 8 | taobao.com |
| 9 | tmall.com |
| 10 | twitter.com |
| 11 | amazon.com |
| ... | ... |
| 13 | instagram.com |
| 17 | reddit.com |
| 26 | netflix.com |
| 34 | twitch.tv | 
| 41 | ebay.com |
| 43 | microsoft.com | 
| 44 | office.com |
{:.table.table--primary}

Bron: <https://www.alexa.com/topsites>

### Meest bezochte websites Belgie (2018-09-12)

| Plaats | Website        |
|--------|--------------  |
| 1      | google.be      |
| 2      | youtube.com    |
| 3      | google.com     |
| 4      | facebook.com   |
| 5      | live.com       |
| 6      | wikipedia.org  |
| 7      | reddit.com     |
| 8      | instagram.com  |
| 9      | hln.be         |
| 10     | twitter.com    |
| ...    | ...            |
| 12     | 2dehands.be    |
| 15     | nieuwsblad.be  |
| 16     | netflix.com    |
| 18     | twitch.tv      |
{:.table.table--primary}

Bron: <https://www.alexa.com/topsites/countries/BE>

### Meest populaire Android Apps (Augustus 2018)

| App | Gebruikers        |
|--------|--------------  |
| WhatsApp Messenger    | 	71.66  |
| Messenger    | 	58.84  |
| Helix Jump    | 	37.08  |
| Instagram    | 	33.86  |
 |Tik Tok - incl. musical.ly    | 	33.44  |
| Facebook    | 	29.59  |
| Facebook Lite    | 	26.04  |
| Rise Up    | 	25.91  |
| Hello Stars    | 	24.36  |
| Messenger Lite    | 	19.27  |
{:.table.table--primary}

Bron: <https://www.statista.com/chart/8553/the-global-top-10-android-apps/>

### Meest gevolgde Belgische influencers op instagram (juli 2018)

| Naam | Volgers        |
|--------|--------------  |
| gaellegd (Gaelle Garcia Diaz)    | 	864,664  |
| elvis.romeo (Roméo Elvis)    | 	430,267  |
| amelie_lens (Amelie Lens)    | 	354,750  |
| angele_vl (Angèle)    | 	349,919  |
| matthiasgeerts (Matthias Geerts)    | 	300,284  |
| chloekitembo (Chloe Kitembo)    | 	296,899  |
| josjecoos (Josje Huisman)    | 	283,149  |
| pommelinetilliere (Pommeline Tillière)    | 	275,358  |
| davidolkarny (David Olkarny)    | 	256,057  |
| tomvdink (Tom)    | 	169,903  |
{:.table.table--primary}

Bron: <https://www.statista.com/statistics/818251/most-followers-instagram-belgium/>

