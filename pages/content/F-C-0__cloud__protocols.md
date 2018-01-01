---
title: Protocols
title_long: Protocols
permalink: cloud/protocols/
published: false
---

Wat is MQTT?
------------

> Definitie
> ---
> MQTT[^MQTT] is een [ISO-standaard](https://en.wikipedia.org/wiki/International_Organization_for_Standardization) "publish-subscribe"-gebaseerde messaging protocol. Het is een laag bovenop het TCP/IP-protocol. Het is ontwerpen voor situaties waarin de bandbreedte (Eng.: network bandwith) beperkt is en waardoor kleine berichten, met een kleine voetafdruk (Eng.: foorprint), verstuurd kunnen worden. Het energieverbruik wordt mede hierdoor beperkt.
{:.card.card-definition}

Een **"message broker"** is vereist om de trafiek te regelen tussen de "publisher" en de "subscriber". Meerdere "subscribers", lees ontvangers, zijn mogelijk in MQTT. Alternatieve protocols zijn mogelijk, zoals: AMQP[^AMQP] (het meest bekende alternatief), STOMP[^STOMP], XMPP[^XMPP], ... .

{% include shared/figure.html src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/MQTT_protocol_example_without_QoS.svg/600px-MQTT_protocol_example_without_QoS.svg.png" alt="Wikipedia: MQTT protocol" caption="Wikipedia: MQTT protocol" %}

[^MQTT]: **MQTT**: Message Queuing Telemetry Transport
[^AMQP]: **AMQP**: Advanced Message Queuing Protocol
[^STOMP]: **STOMP**: Streaming Text Oriented Messaging Protocol
[^XMPP]: **XMPP**: Extensible Messaging and Presence Protocol

> References
> ---
> - [MQTT: What is MQTT?](http://mqtt.org/)
> - [AMQP: What is it?](https://www.amqp.org/)
> - [Github: STOMP](https://stomp.github.io/)
> - [Wikipedia: XMPP](https://en.wikipedia.org/wiki/XMPP)
{:.card.card-source}