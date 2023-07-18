---
theme: aneo
fonts:
  sans: Comfortaa
background: /pages/paul-wong-uKWdq9TcaiI-unsplash.jpg
class: text-center
highlighter: shiki
lineNumbers: false
info: >
  ## Resources on Resources  


  by Preston, for ember.


  Source on
  [GitHub](https://github.com/NullVoxPopuli/presentation-2023-resources)
drawings:
  persist: false
transition: slide-left
css: unocss
title: Resources²
---

<!--
  What was in the CFP?

Details

This talk will briefly cover 
- the reactivity primitives, 
- what problems resources solve, 
- how Octane patterns aren't enough, 
- and how Resources can effectively be used for solving different kinds of problems, 
  and especially beyond the async function use case. 

- Additionally, since resources are a non-core library, 
  it'll be important to mention how easily code-moddable the existing resources are to other implementations, such as from Starbeam.

Notes to hit:
- but Resources give you a nice easy to share thing with your team where they don't need to worry about any of the behavioral or implementation details

- when talking about Octane, be sure to mention how easy it is to integrate with vanilla JS -- one of the easiest frameworks do integrate with vanilla JS

Pitch

Ember Octane is missing primitives, and resources are one such primitive that make dealing working with custom reactive values much easier.

Tools used for making this presentation
- https://sli.dev/
- https://www.the-qrcode-generator.com/

-->

<style>
    * {
         text-shadow: 0px 0px 4px rgb(0, 0, 0);
         color: white;
    }
</style>


# Resources²

Resources on Resources: the missing primitive.

<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/NullVoxPopuli/presentation-2023-resources" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--

Hello! 

This is Resources squared, or otherwise 

(hopefully) 

resources on resources, what I believe to be a core primitive when it comes to reactivity.

(not just for Ember)

But first a quick introduction of myself 

-->

---
src: ./pages/intro/index.md
---

---
src: ./pages/disclaimers/index.md 
---

---
src: ./pages/primitives/octane.md 
---

---
src: ./pages/primitives/rethinking-reactivity.md 
---

---
src: ./pages/primitives/resources.md 
---

---
src: ./pages/main/what-resources-are.md
---

---
src: ./pages/main/wrapping-up.md
---

---
src: ./pages/end.md
---
