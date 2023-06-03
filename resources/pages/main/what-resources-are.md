---
layout: center
---

# What's a Resource?

<blockquote v-click>
<h2>

A resource is a reactive function with cleanup logic.[^starbeam-resource-docs]

</h2>
</blockquote>


[^starbeam-resource-docs]: https://www.starbeamjs.com/guides/fundamentals/resources.html


<!-- 

What is a resource?

It is a reactive function, which represents a value, and has cleanup.


...

ok great, but why does that matter?
let's look at a number of examples

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
