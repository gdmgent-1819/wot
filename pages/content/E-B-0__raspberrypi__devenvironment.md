---
title: Development Environment
title_long: Development Environment
permalink: raspberrypi/devenvironment/
---

Python
------

Het gebruik van de programmeertaal [Python](https://www.python.org/) is onontbeerlijk. Op 21-08-2018 zitten we reeds aan versie [Python 3.7](https://docs.python.org/release/3.7.0/). Deze laatste versie van Python zit niet in de Raspbian distributie. Om deze te installeren voeren we een aantal instructies uit.

1\. Installatie van de vereisten (prerequisites)

{% highlight bash %}
sudo apt install libffi-dev libbz2-dev liblzma-dev libsqlite3-dev libncurses5-dev libgdbm-dev zlib1g-dev libreadline-dev libssl-dev tk-dev build-essential libncursesw5-dev libc6-dev openssl git
{% endhighlight %}

2\. Downloaden van de Pyhton 3.7.0 bronbestanden (source code) via [github](https://github.com/python/cpython/archive/v3.7.0.tar.gz) of via [python organisatie](https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz).


{% highlight bash %}
wget https://www.python.org/ftp/python/3.7.0/Python-3.7.0.tar.xz 
tar xf Python-3.7.0.tar.xz 
{% endhighlight %}

3\. Configuratie

{% highlight bash %}
cd Python-3.7.0
./configure --prefix=$HOME/.local --enable-optimizations
{% endhighlight %}

4\. Installatie via built proces

{% highlight bash %}
make -j 4 -l 4
make install
{% endhighlight %}

pip install --upgrade pip