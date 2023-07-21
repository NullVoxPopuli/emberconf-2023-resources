---
transition: fade
layout: center
---

# Ok, but why? what's the deal?

<!--

...

ok great, but why does any of this matter?
-->

---
transition: fade
layout: center
---

# Resources allow us to model anything

<style>
    .lifetime .slidev-vclick-hidden {
        opacity: 1 !important;
    }
    .lifetime .slidev-vclick-prior {
        opacity: 0.5 !important;
    }
</style>

<h1 v-click="1" class="lifetime">
  <em v-click="2">➡️  with a lifetime</em>
</h1>
<h1 v-click="2" class="derived"><em>➡️  as derived data</em></h1>

<div style="text-align: right">
<h2 v-click="3">Values</h2>
<h2 v-click="4">Modifiers</h2>
<h2 v-click="5">Services</h2>
</div>


<!-- 

Resources 

!! click

allow us to implement concepts that we are familiar with, but with
greater ergonomics

!! click

they allow us to _define_ how data or state is derived

with the flexibility of optional cleanup.

!! click<br>

This represents values, we've seen the Clock example, where the value is the current time.

!! click<br>

We can manage the setup and teardown of Modifiers as modifiers are a resource scoped to an element.

!! click<br>

And services, are resources scoped to an app


Not only do Resources allow us to implement all these 
concepts in a coherent and concise way, 
rationalizing class-based helpers, modifiers, services, everything.

they allow us to bring our reactive concepts to the broader JavaScript ecosystem -- which is the goal of Starbeam.


Let's start with some examples of Resources as Values
-->


---
src: "./examples/interval.md"
---

---
src: "./examples/composed-interval.md"
---

---
src: "./examples/websocket.md"
---

---
src: "./examples/fetch.md"
---

---
src: "./ideas/data-loading-without-problems.md"
---

---
src: "./examples/modifiers.md"
---

---
src: "./examples/services.md"
---

---
src: "./ideas/components.md"
---
