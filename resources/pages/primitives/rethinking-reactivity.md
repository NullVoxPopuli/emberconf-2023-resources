---
transition: fade-out
layout: two-cols
clicks: 3
---

# Rethinking Reactivity

<Arrow x1="250" y1="125" x2="500" y2="125" v-click="1" />
<Arrow x1="350" y1="225" x2="500" y2="180" v-click="2" />
<Arrow x1="370" y1="345" x2="500" y2="260" v-click="3" />
<Arrow x1="350" y1="425" x2="500" y2="270" v-click="3" />

::left::

<ul class="display-list">
    <li><code>@tracked</code></li>
    <li>
        helpers
        <ul class="display-list">
            <li>function helpers</li>
            <li>
                class helpers
                <ul class="display-list">
                    <li>tracked state</li>
                    <li>cleanup</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>


::right::


<ul class="display-list">
    <li v-click="1">values</li>
    <li v-click="2">functions</li>
    <li v-click="3">functions <em>with lifetime and cleanup</em></li>
</ul>


<!-- 

I'd like to propose, we as a community rethink reactivity in general.

Instead of at-tracked, 

!! click

let's think of and redefine these as values, making the at-tracked decorator a user of reactive values -- a value the most basic kind of reactive primitive we could possibly have -- these can exist in within functions, outside classes, anywhere -- this will be a theme throughout this new way of thinking about reactivity. 

!! click

for function-based helpers, we can use _plain javascript functions_, 
supporting plain javascript functions as a reactive primitive, 
_as well as their arguments_, 
is **essential** for reducing the number of abstractions folks need to learn when they learn ember.

!! click

for class-based-helpers, we can use use a new primitive -- 
"functions with lifetime and cleanup" -- 
this allows us to compose our value primitives, 
for managing state throughout the **lifetime** of a the parent object.
and then we can have optional cleanup -- we'll expand on both of these concepts momentarily.


!! click until you get to the next slide, Sli.dev has bugs.


-->



---
transition: fade-out
layout: two-cols
---

# Rethinking Reactivity

<Arrow x1="240" y1="125" x2="550" y2="125" v-click="1" />
<Arrow x1="260" y1="185" x2="550" y2="185" v-click="2" />
<Arrow x1="470" y1="245" x2="550" y2="245" v-click="3" />

::left::

<ul class="display-list">
    <li>values</li>
    <li>functions</li>
    <li>functions <em>with lifetime and cleanup</em></li>
</ul>

::right::


<ul class="display-list" style="margin-left: 4em;">
    <li v-click="1">cells</li>
    <li v-click="2">functions</li>
    <li v-click="3">resources</li>
</ul>

<!-- 

For a couple of these we still need abstractions, 
because reactivity is not built in to the browser.

!! click

we'll call values "cells", 
and Cells will provide the abstraction with which we can built at-tracked, 
and allow us to use reactive values everywhere -- not just classess

!! click

functions, we can leave as-is, 
because they can directly access the state on cells -- these will auto-track and are completely transparent to the renderer -- just like getters in classes.

!! click

functions with lifetime and cleanup... are _Resources_.

These are the key abstraction that I'll focus on for (almost) the rest of this talk.



!! click until you get to the next slide, Sli.dev has bugs.

-->

---
transition: fade
layout: fact
---

# Cells

```js
export default class Demo extends Component {
  @tracked name;
}
```

=>

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

<!-- 

a few slides ago, we hand-waved over the fact that `@tracked` abstracts a secret value 
-->

---
transition: fade
layout: fact
---

# Cells

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

=>

```js {all|2}
export default class Demo extends Component {
    #secretValue = cell();

    get name() {
        return this.#secretValue.current;
    }
    set name(value) {
        this.#secretValue.current = value;
    }
}
```

<!-- 

here are the secrets behind the hand wave. 

!! click

the secretValue *can* be thought of as .. a cell.


-->
