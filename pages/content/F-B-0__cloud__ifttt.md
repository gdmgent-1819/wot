---
title: IFTTT
title_long: If this then that
permalink: cloud/ifttt/
published: false
---

Wat is IFTTT?
-------------

> Definitie
> ---
> IFTTT[^IFTTT]
{:.card.card-definition}

[^IFTTT]: **IFTTT**: If This Then That

> References
> ---
> - [IFTTT](https://ifttt.com/discover)
{:.card.card-source}

Wat is Zapier?
-------------

> Definitie
> ---
> 
{:.card.card-definition}

> References
> ---
> - [Zapier](https://zapier.com/)
{:.card.card-source}

Voorbeeld: RasPi Alert Button to IFTTT
--------------------------------------

{% highlight py %}
# Event: nmd_wot_button_pressed
# Documentation: https://ifttt.com/services/maker_webhooks/settings
# Settings: https://ifttt.com/services/maker_webhooks/settings
# Connection: https://maker.ifttt.com/use/c9KgUA_naJd3ZDRJbFb26t
# Test URL: curl -X POST https://maker.ifttt.com/trigger/nmd_wot_button_pressed/with/key/dNKChU0OqeQvY2s-SJO3ed
'''
drdynscript@MacBook-Pro-van-Philippe:~/ahs/gdm/gdmgent-1819-code/wot/ifttt$ curl -X POST https://maker.ifttt.com/trigger/nmd_wot_button_pressed/with/key/dNKChU0OqeQvY2s-SJO3ed
Congratulations! You've fired the nmd_wot_button_pressed eventdrdynscript@MacBook-Pro-van-Philippe:~/ahs/gdm/gdmgent-1819-code/wot/ifttt$
'''
#-*- coding: utf-8 -*-
from sense_hat import SenseHat, ACTION_PRESSED
from time import sleep
import platform
import sys
from signal import pause
import requests
import time
import json

headers_json = {
    'Content-type': 'application/json',
    'Accept': 'text/plain'
}

def pushed_middle(event):
    if event.action != ACTION_PRESSED:
        print('Middle Button pressed on the SenseHat!')
        launchIFTTTWebRequest()

def launchIFTTTWebRequest():
    data = {
        'value1': platform.uname()[1],
        'value2': time.time()
    }
    r = requests.post('https://maker.ifttt.com/trigger/nmd_wot_button_pressed/with/key/dNKChU0OqeQvY2s-SJO3ed', data=json.dumps(data), headers=headers_json)
    print('Sent request to IFTTT Webhook')

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    sense_hat.stick.direction_middle = pushed_middle
    pause()
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sys.exit(0)
{% endhighlight %}

Voorbeeld: RasPi Doors to IFTTT
-------------------------------

{% highlight py %}
#-*- coding: utf-8 -*-
# Event: nmd_doors_open_or_close
# Documentation: https://ifttt.com/services/maker_webhooks/settings
# Settings: https://ifttt.com/services/maker_webhooks/settings
# Connection: https://maker.ifttt.com/use/c9KgUA_naJd3ZDRJbFb26t
# Test URL: curl -X POST https://maker.ifttt.com/trigger/nmd_doors_open_or_close/with/key/c9KgUA_naJd3ZDRJbFb26t'
from sense_hat import SenseHat, ACTION_PRESSED, ACTION_HELD, ACTION_RELEASED
from time import sleep
import platform
import sys
from signal import pause
import requests
import time
import json

headers_json = {
    'Content-type': 'application/json',
    'Accept': 'text/plain'
}

def pushed_up(event):
    if event.action != ACTION_RELEASED:
        print('Front door is opened!')
        launchIFTTTWebRequest('front', 'opened')

def pushed_down(event):
    if event.action != ACTION_RELEASED:
        print('Front door is closed!')
        launchIFTTTWebRequest('front', 'closed')

def pushed_left(event):
    if event.action != ACTION_RELEASED:
        print('Back door is opened!')
        launchIFTTTWebRequest('back', 'opened')

def pushed_right(event):
    if event.action != ACTION_RELEASED:
        print('Back door is closed!')
        launchIFTTTWebRequest('back', 'closed')

def launchIFTTTWebRequest(door, state):
    data = {
        'value1': door,
        'value2': state
    }
    r = requests.post('https://maker.ifttt.com/trigger/nmd_doors_open_or_close/with/key/c9KgUA_naJd3ZDRJbFb26t', data=json.dumps(data), headers=headers_json)
    print('Sent request to IFTTT Webhook')

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    sense_hat.stick.direction_up = pushed_up
    sense_hat.stick.direction_down = pushed_down
    sense_hat.stick.direction_left = pushed_left
    sense_hat.stick.direction_right = pushed_right
    pause()
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sys.exit(0)
{% endhighlight %}