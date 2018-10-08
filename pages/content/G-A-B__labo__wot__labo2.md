---
title: Labo 2
title_long: Labo 2
permalink: labo/wot/labo-2/
published: true
---

WebApp Character Generator
--------------------------

### Omschrijving

Maak een applicatie waarmee een bezoeker (client) via een webapplicatie realtime een "character" kan genereren m.b.v. een UI (User Interface). De gebruiker kan in realtime modus gaan, of gewoonweg het character aanmaken. Het aangemaakte character kan bewaard worden in de databank. De client draait op GitHub pages en maak gebruikt van [Google Firebase](https://console.firebase.google.com/?pli=1). Op de Raspberry Pi draait een programma die kan anticiperen op wijzigingen binnen [Google Firebase Realtime Database](https://firebase.google.com/docs/database/?gclid=Cj0KCQjwi8fdBRCVARIsAEkDvnLoXYtP45_zI9pOh7H31C0b-KMJTSkLOgRVDnuRfU8qxMMhyblsdkYaAlZIEALw_wcB) of [Google Firebase Firestore](https://firebase.google.com/docs/firestore/?gclid=Cj0KCQjw3KzdBRDWARIsAIJ8TMQh8M6rogXOYo-rS-4a7r8ON6TZvxewH-5jjCQlat2jVQKmd99PNhAaAj6OEALw_wcB).

Structuur repository:

- README.md (geef omschrijving van het project, vermeld jouw prof. information)
- index.html (client)
- assets (folder)
  - js (folder)
    - app.js
- css (folder)
  - app.css
- pi (folder)
- app_char_generator.py

Domotica
--------

Maak een SmartHome-applicatie waarmee een geauthenticeerde bezoeker (client) devices kan sturen en/of uitlezen. De client draait op GitHub pages en maak gebruikt van [Google Firebase](https://console.firebase.google.com/?pli=1). Op de Raspberry Pi draait een programma die kan anticiperen op wijzigingen binnen [Google Firebase Firestore](https://firebase.google.com/docs/firestore/?gclid=Cj0KCQjw3KzdBRDWARIsAIJ8TMQh8M6rogXOYo-rS-4a7r8ON6TZvxewH-5jjCQlat2jVQKmd99PNhAaAj6OEALw_wcB)

Functionaliteiten:

- stuur alle lichtpunten;
- stuur alle stopcontacten;
- stuur de voor-en achterdeur;
- lees de temperatuur en humidity uit;
- alert knop (bijvoorbeeld inbraak): laat alle lichtpunten flikkeren, open alle deuren, speel een alarmgeluid af.

Structuur repository:

- README.md (geef omschrijving van het project, vermeld jouw prof. information)
- index.html (client)
- assets (folder)
  - js (folder)
    - app.js
- css (folder)
  - app.css
- pi (folder)
- app_domotica.py
