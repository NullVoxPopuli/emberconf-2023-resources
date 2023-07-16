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
src: "./examples/websocket.md"
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


# These look familiar?
useEffect was taught wrong is the main thing.
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

