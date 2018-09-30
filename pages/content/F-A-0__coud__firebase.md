---
title: Firebase
title_long: Firebase
permalink: cloud/firebase/
published: true
---

Wat is Firebase?
-------------

> Definitie
> ---
> Firebase is een BAAS[^BAAS]. Een platform dat toelaat om op een eenvoudige manier kwalitatieve apps en webapplicaties te schrijven met enorm veel nuttige eigenschappen (Eng.: features), zoals: realtime database, storage, authentication, cloud functions (gecompliceerde logica), analytics, testing, ... . Eenvoudig betekent dat je zelf:
> - geen server moet opzetten en beheren
> - geen backend code moet schrijven
> - geen databases moet aan te maken en beheren
> - ...
{:.card.card-definition}

[^BAAS]: **BAAS**: Backend As A Service

> References
> ---
> - [Google: Firebase](https://firebase.google.com/)
> - [Hackernon: Firebase](https://hackernoon.com/introduction-to-firebase-218a23186cd7)
> - [Wikipedia: Firebase](https://en.wikipedia.org/wiki/Firebase)
> - [Quora: What is Firebase?](https://www.quora.com/What-is-firebase)
{:.card.card-source}

Admin SDK Python
----------------

Om Firebase te gebruiken binnen Python (versie 2.7+), moeten we gebruik maken van de [Firebase Admin SDK](https://firebase.google.com/docs/admin/setup?authuser=0). De Firebase Admin SDK laat toe om te intrageren met Firebase uit bevoorrechte omgevingen (Eng.: privilegde environments), zoals een server, om acties uit te voeren zoals:

- lezen en schrijven van realtime database data met volledige admin rechten
- verzende van Firebase Cloud Messaging boodschappen (Eng.: messages)), alternatieve aanpak i.v.m. [FCM Server protocols](https://firebase.google.com/docs/cloud-messaging/server#choose)
- genereren en verifiëren van Firebase auth tokens
- toegang tot het [Google Cloud Platform](https://cloud.google.com/)
- ...

> References
> ---
> - [Google: The Firebase Blog](https://firebase.googleblog.com/2017/07/accessing-database-from-python-admin-sdk.html)
> - [Youtube: Getting startend with Cloud Firestore and Python](https://www.youtube.com/watch?v=yylnC3dr_no)
> - [GitHub: Firebase Admin Python](https://github.com/firebase/firebase-admin-python)
> - [Firebase opensource Admin SDK Python](https://firebaseopensource.com/projects/firebase/firebase-admin-python/)
> - [Hackernoon: Introduction to Firebase](https://hackernoon.com/introduction-to-firebase-218a23186cd7)
> - [Assist: Cloud offering: Comparison between IaaS, PaaS, SaaS, BaaS](https://assist-software.net/blog/cloud-offering-comparison-between-iaas-paas-saas-baas)
> - [Community Tutorials: Falcon API on App Engine Standard Environment](https://cloud.google.com/community/tutorials/appengine-python-falcon)
> - [Medium: Firebase: Developing a Web Service with Admin SDK, Flask and Google Cloud](https://medium.com/google-cloud/firebase-developing-a-web-service-with-admin-sdk-flask-and-google-cloud-6fb97eb38b80)
{:.card.card-source}

> Opmerking
> ---
> - [Patrick Triest: 10 tips to host your web apps for free](https://blog.patricktriest.com/host-webapps-free/)
{:.card.card-remark}

### Setup

1\. Installeren van de Firebase Admin SDK Python versie op de Raspberry Pi.

{% highlight bash %}
sudo pip3 install firebase-admin
{% endhighlight %}

2\. Aanmaak van een Firebase-project via de [Firebase console](https://console.firebase.google.com/?authuser=0). Navigeer naar de [Service Accounts](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk?authuser=0) via de instellingspagina van het aangemaakt project.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/firebase_newproject.png" alt="Firebase: new project" caption="Firebase: new project" %}

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/firebase_projectsettings.png" alt="Firebase: project informatie" caption="Firebase: project informatie" %}

Maak vervolgens een **nieuwe privésleutel** aan. Uw privésleutel geeft toegang tot de Firebase-services van uw project. Houd deze vertrouwelijk en sla deze nooit op in een publieke opslagplaats. Bewaar dit bestand goed. Uw nieuwe sleutel kan namelijk niet worden hersteld als u deze verliest. De sleutel, een JSON-bestand, wordt gegeneerd en automatisch gedownload.

{% include shared/figure.html src="http://www.arteveldehogeschool.be/campusGDM/gdmgent/wot/firebase_serviceaccount.png" alt="Firebase: new project" caption="Firebase: new project" %}

3\. Initaliseer de SDK

Het initaliseren van de SDK is relatief eenvoudig:

- importeren van de noodzakelijke bibliotheken
- het service accound, JSON-bestand, koppelen
- initaliseren via de gekoppelde credentials

{% highlight py %}
import firebase_admin
from firebase_admin import credentials

cred = credentials.Certificate('path/to/serviceAccountKey.json')
default_app = firebase_admin.initialize_app(cred)
{% endhighlight %}

### Weather app

#### `server.py`

{% highlight py %}
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
from sense_hat import SenseHat
from time import time, sleep
import os
import sys

serviceAccountKey = '../../../../../keys/wot-1819-firebase-adminsdk-rdty1-0f1422347a.json'
databaseURL = 'https://wot-1819.firebaseio.com'

try:
    # Fetch the service account key JSON file contents
    firebase_cred = credentials.Certificate(serviceAccountKey)

    # Initalize the app with a service account; granting admin privileges
    firebase_admin.initialize_app(firebase_cred, {
    'databaseURL': databaseURL
    })

    # As an admin, the app has access to read and write all data
    firebase_ref_pi_sensehat_environment_sensors = db.reference('pi-sensehat-environment-sensors')
except:
    print('Unable to initialize Firebase: {}'.format(sys.exc_info()[0]))
    sys.exit(1)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    while True:
        temperature = round(sense_hat.get_temperature())
        humidity = round(sense_hat.get_humidity())
        pressure = round(sense_hat.get_pressure())
        data = {
            "temperature": temperature,
            "humidity": humidity,
            "pressure": pressure
        }
        firebase_ref_pi_sensehat_environment_sensors.push().set(data)
        sleep(60)
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sys.exit(0)
{% endhighlight %}

> References
> ---
> - [Real Python: Working With JSON Data in Python](https://realpython.com/python-json/)
{:.card.card-source}

#### Uitbreiding

Via de file `sensehat_temperature.py`, met bijhorende onderstaande code, kunnen we de "echte" temperatuur opvragen van de omgeving. Dit bestand print uiteindelijk deze temperatuur naar het output-scherm in de terminal.

{% highlight py %}
#-*- coding: utf-8 -*-

from sense_hat import SenseHat
import os
import sys

# constants
TEMP_CORRECTION_FACTOR = 1.5

# get the CPU temperature
def get_cpu_temp():
    res = os.popen('vcgencmd measure_temp').readline()
    t = float(res.replace('temp=', '').replace("'C\n", ''))
    return(t)

# use moving average to smooth readings
def get_smooth(x):
  if not hasattr(get_smooth, "t"):
    get_smooth.t = [x,x,x]
  get_smooth.t[2] = get_smooth.t[1]
  get_smooth.t[1] = get_smooth.t[0]
  get_smooth.t[0] = x
  xs = (get_smooth.t[0]+get_smooth.t[1]+get_smooth.t[2])/3
  return(xs)

# get the real temperature
def get_temp(with_case):
    temp_humidity = sense_hat.get_temperature_from_humidity()
    temp_pressure = sense_hat.get_temperature_from_pressure()
    temp = (temp_humidity + temp_pressure)/2
    if with_case:
        temp_cpu = get_cpu_temp()
        temp_corrected = temp - ((temp_cpu - temp)/TEMP_CORRECTION_FACTOR)
        temp_smooth = get_smooth(temp_corrected)
    else:
        temp_smooth = get_smooth(temp)
    return(temp_smooth)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main(argv):
    in_case = eval(argv[0])
    temp = round(get_temp(in_case))
    print(temp)
        
if __name__ == "__main__":
    try:
        main(sys.argv[1:])
    except (KeyboardInterrupt, SystemExit):
        pass
    finally:
        sys.exit(0)
{% endhighlight %}

Aanpassingen aan de file `server.py`:

{% highlight py %}
...
import subprocess
...
def get_sensehat_temp():
    process = subprocess.Popen('sudo python3 sensehat_temperature.py True', shell=True, stdout=subprocess.PIPE)
    (output, err) = process.communicate()
    process_status = process.wait()
    temp_str = str(output).replace("b'", "").replace("\\n'", "")
    temp = float(temp_str)    
    return(temp)
...
    
def main():
    while True:
        temperature = round(get_sensehat_temp())
        humidity = round(sense_hat.get_humidity())
        pressure = round(sense_hat.get_pressure())
        data = {
            "temperature": temperature,
            "humidity": humidity,
            "pressure": pressure
        }
        firebase_ref_pi_sensehat_environment_sensors.push().set(data)
        sleep(60)
        
...
{% endhighlight %}

> References
> ---
> - [Stack Abuse: Python's os and subprocess Popen Commands](https://stackabuse.com/pythons-os-and-subprocess-popen-commands/)
> - [Cyberciti: Python Run External Command And Get Output On Screen or In Variable](https://www.cyberciti.biz/faq/python-run-external-command-and-get-output/)
> - [tutorialspoint: Python - Command Line Arguments](https://www.tutorialspoint.com/python/python_command_line_arguments.htm)
{:.card.card-source}


Google Cloud Firestore
----------------------

> References
> ---
> - [Google: Google Cloud Firestore](https://pypi.org/project/google-cloud-firestore/)
{:.card.card-source}

### Installatie

1\. Wil je gebruik maken van de Firestore functionaliteit, dan moeten we [Google Cloud Firestore Python SDK](https://pypi.org/project/google-cloud-firestore/) downloaden.

{% highlight bash %}
sudo pip3 install --upgrade google-cloud-firestore
{% endhighlight %}