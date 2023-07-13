---
transition: fade-out
layout: center
---

# Reactivity in Ember Octane

<ul class="display-list">
    <li v-click="1"><code>@tracked</code></li>
    <li v-click="2">functions</li>
</ul>


<!-- 

With the introduction of Ember's first edition, Octane, a new Reactivity system was introduced.

"tracked properties"

By the end of the 3-ex series, leading up to v4, we had **two* user-facing reactive primitives 

!! click 

at tracked 

!! click 

functions

-->


---
transition: fade-out
layout: center
---

# `@tracked` 

```js
export default class Demo extends Component {
  @tracked name;
}
```

<div v-click>

✨✨✨✨✨

```js 
this.name = this.name + ' foo';
```

The decorator abstraction:

```js
export default class Demo extends Component {
    get name() {
        return this.#secretValue; /* 👋 hand wave 👋 */
    }
    set name(value) {
        this.#secretValue = value;
    }
}
```

</div>

<!-- 

 In Ember Octane, it was assumed that all reactive state, 
 "root state" (the very root of what auto-tracking pulled on),  
 would exist on a property in class instance, 
 which could then be decorated with the @tracked decorator. 

 !! click

 This use of a decorator allows for a hidden getter and setter 
 so that the reactivity system can operate 
 while still allowing "native property getting and setting" 
 (e.g.: without Ember.get and Ember.set).

-->



---
transition: fade-out
layout: two-cols
---

# `function`s 

::left::

<ul class="display-list">
    <li v-click="1">
        helpers
        <ul class="display-list">
            <li v-click="2">function helpers</li>
            <li v-click="3">
                class helpers
                <ul class="display-list">
                    <li v-click="4">tracked state</li>
                    <li v-click="5">cleanup</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>

::right::

<div v-click>

```js 
import { helper } from '@ember/component/helper';

export default helper(positional, named) {

}
```

</div>
<br>
<div v-click>

```js 
import Helper from '@ember/component/helper';

export default class MyHelper extends Helper {
    compute(positional, named) {}
    willDestroy() {} 
}
```

</div>

<!-- 

In Ember Octane and before, 

!!click 

functions were called "helpers". 

It wasn't until ember-source@4.5 that plain functions became supported as a reactive primitive without the polyfill. 

However, "helpers", (now called "classic helpers") 
had two implementations: 

!!click

a simpler function-based version, 

!! click

and class-based version. 

These both required framework-specific abstractions to use and build, 

but the class-based version of these classic helpers 
had cleanup capabilities (albeit, awkwardly, via inheritance).

-->

---
transition: fade-out
layout: center
---

# What about ...?

<ul class="display-list">
    <li v-click="1">modifiers</li>
    <li v-click="2">components</li>
</ul>

<!-- 

What about...?

!! click 

modifiers

!! click 

or components?

We'll come back to these later, but when Octane was released, 
ergonomic modifiers in user-land were not yet available.

Of course, we have a library to help out now, but 
anyway, -- keep the concept of modifiers in the back of your head.


For components, I am going to propose that those are not primitives at all.

_stand by_.

-->