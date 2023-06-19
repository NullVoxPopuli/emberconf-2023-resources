---
layout: center
---

# What's a Resource?

<blockquote v-click class="big">
<h2>

A resource is a reactive function with cleanup logic.[^starbeam-resource-docs]

</h2>
</blockquote>


[^starbeam-resource-docs]: https://www.starbeamjs.com/guides/fundamentals/resources.html


<!-- 

What is a resource?

!!click

It is a reactive function -- and has cleanup.



-->

---
transition: fade
---

# ECMAScript Explicit Resource Management

<blockquote class="big">

This proposal intends to address a common pattern in software development **regarding the lifetime** and management of various resources (memory, I/O, etc.). This pattern generally includes the allocation of a resource and the ability to explicitly release critical resources. 
  [^tc39-explicit-resource-management]

</blockquote>

[^tc39-explicit-resource-management]: https://github.com/tc39/proposal-explicit-resource-management

<!-- 

Resources are also a concept in javascript itself.
Here is a snippet from a TC39 proposal readme that is in stage 3, or the implementation phase.

The javascript resources have a similar purpose -- they provide 
a means to manage the lifetime of an object.

Ember and starbeam Resources provide reactive implementations of this concept, and it may make sense for the implementations to build on top of JavaScript resources once they're shipped.



-->

---
transition: fade
layout: center 
---

<style>
    .ts-native-container {
       img.ts-native { height: 620px; position: fixed; left: 0; top: -45px; }
       img.matt { position: fixed; right: 0; top: 0; width: 380px; }
       .qr-code { position: fixed; bottom: 0; right: 0; };
    }
</style>


<div class="ts-native-container">
    <img class="ts-native" src="/pages/main/typescript-native.jpeg" />
    <img class="matt" src="/pages/main/typescript-native-matt.png" />
    <QRCode class="qr-code" size="260" value="https://twitter.com/mattpocockuk/status/1670687511763353600"></QRCode>
</div>


<!-- 

Here is a post about TypeScript's implementation.

The mechanics of this are a **smidge** different from Ember's Resources, 
but the purpose is generally the same 

_co-locate the setup and cleanup of a value_, and make the interaction 
with that value easy so that the consumer of the abstraction does not 
need to worry about potential cleanup
-->

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

<h1 v-click>with a lifetime</h1>

<div style="text-align: right">
<h2 v-click>Values</h2>
<h2 v-click>Modifiers</h2>
<h2 v-click>Services</h2>
</div>


<!-- 

Resources 

!! click

allow us to implement concepts that we are familiar with, but with
greater ergonomics

!! click<br>
Values - these *could* have cleanup.

!! click<br>
Modifiers - often have cleanup.

!! click<br>
and Services - always have cleanup.



Let's start with some examples of Resources as Values
-->


---
src: "./examples/interval.md"
---


---


# A Resource is like...

a hook

- setInterval 
- resizeObserver = modifier = element () => resource 
- WebSocket - connected status
- FireBase
- find MDN apis that have cleanup, disconnect

<!-- -->

---


# A Resource is like...


a cached getter


not a resource:
```js 
@cached 
get foo() {
    let instance = new Foo();

    // no cleanup!
    // no link!
    return instance;
}
```

autotracked instantation
autotracking frame somewhere
resource = any reactive object that you want to instantiate

<!-- -->

---


# A Resource is like...

a memoized cached getter hack

```js 
get foo() {
  if (this._foo) return this._foo;

    this._foo = new Foo();

    // problems: 
    //   no update!
    //   no cleanup!
    //   no link!
    return this._foo;
}
```


<!-- -->


---


# tl;dr: 

<style>
    code {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }
</style>

- derived data is the secret to performance and clarity
- resources help you model any situation as derived data.
- more points 
- to get started:

    ```bash 
    pnpm add ember-resources
    ```

    Docs: [https://ember-resources.pages.dev/](https://ember-resources.pages.dev/) 

<br>
<br>



<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/NullVoxPopuli/ember-resources" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
"much the same way that promises are better than callbacks"

"resources are not effects"
someone has to request data 
 -->

---


# These look familiar?

When squinting, they kinda look like effects, yet are derived data, and effects cause performance issues by rendering more times than needed.
Also, like hooks, in that they can be composed, and represent a value.

```js 
const CurrentTime = resource(() => { /* ... */ });

export const FormattedTime = resource(({ use }) => {
    return use(CurrentTime);
});
```

<!--

-->

--- 

# Resources used as Modifiers 

---

# Resources used as Services 

```js 
import { service } from 'ember-resources/service';

// ...
```

---

_focus on story as a continuous set of improvements_

resources are focused on data
resources unify a bunch of concepts 
- cleanup 
- lifetime 
- data 
there is data, and there are lifetimes 

rationalization and simplification of all these things

helper: lifetime of block 
modifiers: lifetime of element 
services: lifetime of app 
