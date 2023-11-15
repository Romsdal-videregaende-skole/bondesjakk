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

<style>
img {
  margin-left: 20px;
 }  
</style>

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

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
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


---
layout: image-right
image: https://source.unsplash.com/collection/94734566/1920x1080
---

# Bondesjakk - Samspill mellom teknologiene
* HTML skaper ruter på spillbrettet
* CSS gir farge og stil
* JavaScript legger til spill-logikken


```ts {all|2|1-6|9|all}
interface User {
  id: number
  firstName: string
  lastName: string
  role: string
}

function updateUser(id: number, update: User) {
  const user = getUser(id)
  const newUser = { ...user, ...update }
  saveUser(id, newUser)
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

---

# Avslutning
* Nå skal vi bruke disse teknologiene
* Vi lager vår egen versjon av bondesjakk!