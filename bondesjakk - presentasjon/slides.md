---
theme: light-icons
class: text-center
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
title: Velkommen til Informasjonsteknologi!
mdc: true
layout: intro
image: 'https://images.unsplash.com/photo-1645709890294-b59f87cc70e9?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
---

  <div class="absolute pt-6 left-12">
    <span class="p-1 rounded opacity-60 flex justify-center items-center">
      Informasjonsteknologi og medieproduksjon
    </span>
  </div>
  <div class="mb-4 absolute bottom-4 left-12">
    <span class="text-6xl text-primary-lighter text-opacity-80" style="font-weight:500;" >
      HTML, CSS og JavaScript <light-icon icon="brand-github"/>
    </span>
    <div class="text-9xl text-white text-opacity-60" style="font-weight:600;" >
      Webutvikling
    </div> 
  </div>


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
layout: image-left
transition: slide-up
image: 'static/HTML_DALL·E 2023-11-15 21.11.11.png'
---

# Hva er HTML?

- Står for 'HyperText Markup Language'
- Struktur og innhold av en nettside
- Eksempel:
- 
  ```html
  <html>
    <head>
      <title>Eksempel</title>
    </head>
    <body>
      <div>Hello World!</div>
    </body>
  </html>
  ```
<!--
Hardware:
* Viktigheten av å forstå fysisk teknologi.
Eksempler: Arbeid med Arduino, 3D-printere og feilsøking.

Python:
* Grunnleggende og kraftfullt programmeringsspråk.
Relevans i ulike teknologifelt, alt fra webteknologi, dataanalyse, maskinlæring, scripting og automatisering, informasjonssikkerhet, spillutvikling. 


Film og Foto:
* Kreative ferdigheter i visuell historiefortelling. Har også tilgang på droner, selv om disse ikke blir så mye brukt. 

Webteknologi:
* Webutvikling med HTML, CSS og JavaScript. Vekt på moderne rammeverk som Svelte Kit.

Kunstig Intelligens (AI), AR og VR:
* Innføring i fremtidens teknologier.

Nettverk og Sikkerhet:
* Grunnleggende innføring i nettverk med Cisco, UniFi og Wireshark. Sikkerhetsaspekter med Linux og SIEM.
  
Server- og Lagringsteknologi:
* Håndtering av servere og lagringssystemer (NAS
* Virtualiseringsteknikker med Proxmox og docker. 
* SQL og NoSQL databaser
  
Skytjenester og infrastruktur:
* Bruk av Azure for forståelse av skybaserte tjenester. Office365 og AzureAD. 
  
Hvorfor Velge Denne Linjen?

* Linjen kombinerer teoretisk kunnskap med praktiske prosjekter.
* Viktig med teknologisk kompetanse i dagens og fremtidens jobbmarked. 
* Linja gir en solid forståelse av både hardware og software, og forbereder for videre utdanning eller yrker innen IT og medieproduksjon.
* Stor etterspørsel av akkurat denne kunnskapen. Over gjennomsnittet godt betalte jobber. 
  
-->

---
layout: image-right
image: '/static/CSS-1_DALL·E 2023-11-15 21.11.40.png'
---
# Hva er CSS?

* Står for 'Cascading Style Sheets'
* Stil og utseende av nettside
* Eksempel:

```css
div {
  color: blue;
  font-size: 20px;
}
```

<!--
Definisjon: 'Cascading Style Sheets'.
Formål: Styrer stil og utseende av nettsider.

1. Hvordan virker CSS:
* Selektorer: Velger HTML-elementer å style (f.eks., div, p).
* Egenskaper: Bestemmer stilen (f.eks., color, font-size).

2. Cascading effekt:
* Arv: Stiler kan arves fra foreldreelementer.
* Prioritet: Mer spesifikke regler har forrang.

3. Betydning for Webutvikling:
 * Separasjon av "Innhold og Stil": Holder HTML-kode rent for innhold, mens CSS håndterer design.
 * Forbedrer brukeropplevelsen: Gjør nettsider mer tiltalende og leservennlige.

4. Gode praksiser:
* Responsivt design: Viktigheten av å designe for ulike skjermstørrelser.
* Enkelhet: Start med grunnleggende stiler og bygg videre etter behov.
-->

---
layout: image-left
image: '/static/JS_1_DALL·E 2023-11-15 21.11.51.png'
transition: slide-up
---

# Hva er JavaScript?

* Programmeringsspråk for internett
* Interaktivetet og dynamisk funksjoner
* Eksempel:
```javascript
document.querySelector('div').addEventListener('click', function() {
  alert('Div klikket!');
});
```
<!--
JavaScript er et programmeringsspråk spesifikt for internett.
Har som formål å gjøre nettsider interaktive og dynamiske.

2. Hvordan JavaScript fungerer:
* Klient-side Scripting: Kjører i brukerens nettleser.
* Manipulerer HTML/CSS: Endrer og styrer webinnhold og stil.

3. Interaktivitet og dynamikk:
* Interaktive elementer: Legger til brukerinteraksjoner som klikk, scroll, input.
* Dynamiske endringer: Oppdaterer innholdet på siden uten å laste den på nytt.

4. JavaScript og webutvikling:
* Uunnværlig for moderne web: Nødvendig for nesten alle aspekter av moderne webutvikling.
* Samspill med HTML og CSS: Skaper en fullstendig brukeropplevelse ved å kombinere struktur (HTML), stil (CSS) og funksjonalitet (JavaScript).

6. Moderne JavaScript-rammeverk:
* Frontend Rammeverk: React, Angular, Vue, og Svelte for mer avanserte og interaktive brukergrensesnitt.
* Backend Rammeverk: Django, Flask, Laravel for server-side programmering og databasestyring.

-->

---
layout: image-right
image: 'static/bondesjakk.png'
---

# Bondesjakk - Samspill mellom teknologiene
* HTML lager ruter på spillbrettet
* CSS gir farge og stil
* JavaScript legger til spill-logikken


```javascript {all|4-5|1-6|10|all}
  const forkynner = document.querySelector(".forkynner");
  const restartKnapp = document.querySelector("#restart");
  
  let brett = Array(9).fill("");
  let aktivSpiller = "X";

  function sjekkVinner() {
    return vinnerBetingelser.some((betingelse) => {
      return betingelse.every((i) => {
        return brett[i] === aktivSpiller;
      });
    });
  }
```

<arrow v-click="[3, 4]" x1="400" y1="420" x2="230" y2="330" color="#564" width="3" arrowSize="1" />

[^1]: [Learn More](https://sli.dev/guide/syntax.html#line-highlighting)

<style>
.footnotes-sep {
  @apply mt-20 opacity-10;
}
.footnotes {
  @apply text-sm opacity-75;
}
.footnote-backref {
  display: none;
}
</style>

<!--
1. HTML - Struktur:
* Ruter på spillbrettet: HTML brukes til å skape de grunnleggende elementene i spillet, som spillruter og knapper.

Eksempel: <div class="rute"></div> lager en enkelt rute på brettet.

2. CSS - Utseende:
* Stil og design: CSS gir farge, størrelse og layout til spillelementene.

Eksempel: CSS-kode kan style hver div-rute for å se ut som en del av et Bondesjakkbrett.

3. JavaScript - Logikk:
* Spillmekanikker: JavaScript legger til funksjonaliteten, som å håndtere spillernes trekk og bestemme vinneren.

Eksempel: JavaScript-koden du har inkludert håndterer spillernes trekk, sjekker etter en vinner, og håndterer spillstatusen.

4. Samspill og Samordning:
* Integrert funksjon: Vis hvordan HTML, CSS og JavaScript samarbeider for å skape en sømløs spillopplevelse.
* Dynamisk interaksjon: Forklar hvordan JavaScript reagerer på brukerinteraksjon og oppdaterer HTML og CSS dynamisk.

-->
---
layout: intro
image: 'https://images.unsplash.com/photo-1645709890294-b59f87cc70e9?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
---
  <div class="mb-4 absolute bottom-4 left-12">
    <span class="text-6xl text-primary-lighter text-opacity-80" style="font-weight:500;" >
      Informasjonsteknlogi og medieproduksjon
    </span>
    <div class="text-9xl text-white text-opacity-60" style="font-weight:600;" >
      Søk!  
    </div> 
  </div>


<!--
Søk linja da vell!
-->