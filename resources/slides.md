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

Hello! We're going to have a look at Resources, which I believe are one of the core reactive primitives we've been missing. But first a quick introduction of myself 

-->


---
src: ./pages/intro/index.md
---

---
src: ./pages/disclaimers/index.md 
---

---
src: ./pages/primitives/index.md 
---

---
src ./pages/resources-intro/index.md
---

---
layout: end
---
# Thank You 

Find me [`@NullVoxPopuli`](https://linktr.ee/nullvoxpopuli)

[![My LinkTree](/pages/qrcode.png)](https://linktr.ee/nullvoxpopuli)

<!-- 

...and that's it!  
Thanks for listening, 
and as always, you can ask me anything @NullVoxPopuli

-->




---
layout: end
---