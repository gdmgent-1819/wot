---
title: Labo 2
title_long: Labo 2
permalink: labo/wot/labo-2/
published: true
---

Weather App
-----------

{% highlight py %}
#-*- coding: utf-8 -*-

from sense_hat import SenseHat
from time import time, sleep
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
    
def main():
    while True:
        temp = round(get_temp(True));
        print('Temperature: {}{}C'.format(temp, ''))
        humidity = round(sense_hat.get_humidity())
        print('Humidity: %s %%' % humidity)
        pressure = round(sense_hat.get_pressure())
        print('Pressure: %s mbar' % pressure)
        sleep(5)
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sys.exit(0)
{% endhighlight %}{:data-file="index.html"}

Message in a loop
-----------------

{% highlight py %}
from sense_hat import SenseHat
from time import time, sleep
import os
import sys
from random import randint

# constants
TEXT = 'Hello! We are New Media Development :)'
SPEED = 0.1

# get random color
def get_random_color():
    random_red = randint(0, 255)
    random_green = randint(0, 255)
    random_blue = randint(0, 255)

    return (random_red, random_green, random_blue)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    while True:
        sense_hat.show_message(text_string=TEXT, text_colour=get_random_color(), back_colour=get_random_color(), scroll_speed=SPEED)
        sense_hat.clear()
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sense_hat.clear()
        sys.exit(0)
{% endhighlight %}

All letters of a string in a loop
---------------------------------

{% highlight py %}
from sense_hat import SenseHat
from time import time, sleep
import os
import sys
from random import randint

# constants
TEXT = 'NMD'

# get random color
def get_random_color():
    random_red = randint(0, 255)
    random_green = randint(0, 255)
    random_blue = randint(0, 255)

    return (random_red, random_green, random_blue)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    while True:
        for letter in TEXT:
            sense_hat.show_letter(letter, get_random_color())
            sleep(1)
        sleep(2)
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sense_hat.clear()
        sys.exit(0)
{% endhighlight %}

Mario jumps
-----------

{% highlight py %}
from sense_hat import SenseHat
from time import time, sleep
import sys

# constants
BK = (0,0,0)
WH = (255,255,255)
RD = (255, 0, 77)
BL = (41, 173, 255)
BR = (187, 90, 59)
PK = (255, 208, 174)
YL = (250, 252, 44)

MARIO = [
    BK, BK, BK, RD, RD, RD, WH, BK,
    BK, BK, BK, RD, RD, RD, RD, RD,
    BK, BK, BR, PK, BR, BK, PK, BK,
    BK, BK, BR, PK, PK, BR, BR, PK,
    BK, BK, BK, BR, PK, PK, PK, BK,
    BK, RD, RD, YL, BL, BL, YL, BK,
    WH, BK, BL, BL, BL, BL, BK, BL,
    BK, BK, BR, BK, BK, BK, RD, BK  
    
]

MARIO_JUMP = [
    BK, BK, BK, RD, RD, RD, RD, RD,
    BK, BK, BR, PK, BR, BK, PK, BK,
    BK, BK, BR, PK, PK, BR, BR, PK,
    BK, BK, BK, BR, PK, PK, PK, BK,
    WH, RD, BL, YL, BL, BL, YL, BL,
    BK, BK, BR, BK, BK, BK, RD, BK,  
    BK, BK, BK, BK, BK, BK, BK, BK,   
    BK, BK, BK, BK, BK, BK, BK, BK    
]

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    jump = False
    
    while True:        
        if jump:
          sense_hat.set_pixels(MARIO_JUMP)
        else:
          sense_hat.set_pixels(MARIO)
          
        sleep(1)
        
        jump = not jump
        sense_hat.clear()
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sense_hat.clear()
        sys.exit(0)
{% endhighlight %}

Pixelator
---------

{% highlight py %}
from sense_hat import SenseHat
from time import time, sleep
import os
import sys
from random import randint

# constants
M_ROWS = 7
M_COLS = 7
M_CLEAR_BEFORE_LOOP = True

# get random color
def get_random_color():
    random_red = randint(0, 255)
    random_green = randint(0, 255)
    random_blue = randint(0, 255)

    return (random_red, random_green, random_blue)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    while True:
        x_pos = 0
        y_pos = 0

        while (y_pos <= M_ROWS):
            if M_CLEAR_BEFORE_LOOP:
                sense_hat.clear()
                
            sense_hat.set_pixel(x_pos, y_pos, get_random_color())
            sleep(0.1)
            
            y_pos = (y_pos + 1) if (x_pos + 1 == M_COLS + 1) else (y_pos)
            x_pos = (x_pos + 1) if (x_pos + 1 <= M_COLS) else (0)

        sleep(2)
        sense_hat.clear()
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sense_hat.clear()
        sys.exit(0)
{% endhighlight %}

Randomizer Arcade Character
---------------------------

{% highlight py %}
from sense_hat import SenseHat
from time import time, sleep
import os
import sys
import random
from math import floor, ceil

# constants
COLOR_BLUE = (0, 0, 255)
COLOR_BLACK = (0, 0, 0)

# get random arcade matrix
def get_random_arcade_matrix():
    pattern = ''
    matrix = []
    for r in range(0,8):
        temp_str = ''
        for c in range(0, 4):
            temp_str = temp_str + str(round(random.random()))

        temp_str = temp_str + temp_str[::-1]
        pattern = pattern + temp_str                   
                    
    for p in range(0,64):
        bit = int(pattern[p])
        color = COLOR_BLUE if bit == 1 else COLOR_BLACK
        matrix.append(color)

    return(matrix)

try:
    # SenseHat
    sense_hat = SenseHat()
    sense_hat.set_imu_config(False, False, False)
except:
    print('Unable to initialize the Sense Hat library: {}'.format(sys.exc_info()[0]))
    sys.exit(1)
    
def main():
    while True:
        matrix = get_random_arcade_matrix();
        sense_hat.set_pixels(matrix)
        sleep(3)
        
if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, SystemExit):
        print('Interrupt received! Stopping the application...')
    finally:
        print('Cleaning up the mess...')
        sense_hat.clear()
        sys.exit(0)
{% endhighlight %}