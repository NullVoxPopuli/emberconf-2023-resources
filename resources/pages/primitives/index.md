---
transition: fade-out
layout: center
preload: false
---

<style>
    .display-list li {
        font-size: 2rem;
    }
    .skew-a-bit {
        transform: skew(13deg, 2deg);
    }
    .modifier-eventual-crossout {
      position: relative;
    }
    .modifier-eventual-crossout span {
       position: absolute; 
    }
</style>

<h1 
   v-motion
  :initial="{ y: 150 }"
  :enter="{ 
    y: 0,
    transition: {
      delay: 1500,
    },
  }"
>What are the reactive primitives in Ember?</h1>
 
<ul class="display-list">
    <li v-click="1">Values</li>
    <li v-click="2">Functions</li>
	<li v-click="3" class="modifier-eventual-crossout">
        <span v-click="6"><del>Modifiers</del></span>
        <span v-click="3" v-click-hide="6">Modifiers</span>
    </li>
    <li v-click="4">Elements</li>
    <li v-click="5">
	   Resources
		<ul>
	      <li v-click="7">Modifiers</li>
	      <li v-click="8" class="skew-a-bit">
            Services
          </li>
		</ul>
	 </li>
</ul>

<!--
for some context, we need to know what the reactive primitives are.
So.. what are they?

(wait ~1s or until the title moves up to the top of the slide)

(Click through each one)

- Values (or cells)
- Functions
- Modifiers
- Elements
... and
- Resources

(click), I think modifiers need to move though

(click), yeah, how about here

(click), while we're at it, let's throw services under here as well

Ok, so what do I mean by these being primitives?

-->

---
transition: fade-out
layout: center
---

# Components are not primitives.

<!--

Components are not primitives.

Components used to be primitives way back when they were associated with a wrapping div.
- Components abstracted an element 
- modifiers do this now -- the lifecycle, the required element 
- ...attributes provide the rest of the functionality you'd want on an element 

Components are a tool for refactoring
- they are a place for tracked state to live or be injected in to 
- there are also other tools for refactoring which can serve similar purposes
  and sometimes more focused purposes

They are **wrappers** of the primitives.
- Components wrap one or more
  values, functions, modifiers, elements, and resources
  
- ...and components cannot, alone, exist without these primitives.

The main thing is that each of the primitives can be used and defined in isolation.
-->

---
layout: two-cols
---

# Values

<small class="related-note">_(aka cells [^starbeam])_</small>

[^starbeam]: https://www.starbeamjs.com/guides/fundamentals/cells.html

::left::

<div>

```gjs {all|5} 
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

class Demo extends Component {
	@tracked value = 1;

	<template>
		{{this.value}}
	</template>
}
```

</div>

::right::

<div v-click="2">

```gjs {all|all|5-10}
import Component from '@glimmer/component';
import { cell } from 'ember-resources';

class Demo extends Component {
	#value = cell(1);
	get value() {
		return this.#value.current;
	}
	set value(value) {
      this.#value.current = value;
	}

	<template>
		{{this.value}}
	</template>
}
```

</div>

<!-- 

First, we have values.
Here, we have a tracked value.

!!click 

Which, if we expand --


or peek behind the curtain of 
-- the decorator, 

!!click

we get the implementation on the right.

!!click

a getter and a setter with the real value hidden


(you may need to click twice to get to the next slide for some reason)
-->

---
layout: two-cols
---

# Values 

<small class="related-note">_(aka cells [^starbeam])_</small>

[^starbeam]: https://www.starbeamjs.com/guides/fundamentals/cells.html

::left::

<div>

```gjs
// "component" state
<template>
  {{#let (createState 1) as |s|}}
    {{s.value}}
	 access args, use attributes, etc 

  {{/let}}
</template>

class Demo {
  @tracked value;
  constructor(initial) { this.value = initial; }
  double = () => this.value *= 2;
}

function createState(initialValue) {
	return new Demo(initialValue);
}
```

</div>

::right::

<div v-click>

```gjs 
// "component" state
<template>
  {{#let (createState 1) as |s|}}
    {{s.value}}
	 access args, use attributes, etc 

  {{/let}}
</template>

function createState(initialValue) {
  let value = cell(initialValue);

  return {
    get value() { return value.current; }
    double: () => value.current *= 2; 
  }
}
```
</div>


<!-- 

Coming back to values, they are primitives, because we can use them anywhere

For example, the `@tracked` decorator doesn't need to be used in components.

!! click 

on the right is an alternative implementation of the same behavior, using a new value primitive available in both starbeam and the ember-resources library's family of utilities.

-->

---
layout: two-cols
---

# Values 

<small class="related-note">_(aka cells [^starbeam])_</small>

[^starbeam]: https://www.starbeamjs.com/guides/fundamentals/cells.html

::left:: 

```gjs 
import { cell } from 'ember-resources';

const value = cell(1);

<template>
  {{cell.current}}
</template>
```

<!-- 

Last point about values for now,

You don't even need a container to use them.
(whether that's a class, component, function, etc)

Though,
While you could use module state, and module state works great for demos,
it doesn't scale with an app.

-->


---
layout: two-cols
---

# Functions

::left::

```gjs {all|9}
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

class Demo extends Component {
	@tracked data = { greeting: 'Hello World!';

	<template>
		<pre>
			{{ (JSON.stringify this.data null 4) }}
		</pre>
	</template>
}
```

::right::

```gjs {all|6}
import { cell } from 'ember-resources';

const data = cell({ greeting: 'Hello World!' });

<template>
	{{ (JSON.stringify data.current null 4) }}
</template>
```

<!--

In both of these examples, 

[[ click twice (to highlight the function lines) ]]

JSON.stringify is a function that many of us are familiar with.
Plain functions are natively supported starting in Ember 4.5 (so, for about the last 12 months).
A polyfill is available for Ember 3.25.

For about the last 28 months since Ember 3.25's release, we have had a lot more options open up to us and we are less constrained to the framework.

-->

---

# Elements

```gjs {all|6-13}
<template>
	<style>
		.loading { /* ... */ }
		@media (prefers-reduced-motion) { /* ... */ }
	</sytle>

	<button 
		class="loading" 
		aria-busy="true" 
		aria-label="Do the thing"
	>
	  Loading...
	</button>
</template>
```

<!-- 
I consider elements a primitive, because Ember supports *all* HTML 

!! click 

...its elements...
...and its properties

Which I think is important because it means we can refer to **The MDN Docs**.
-->

---

# Modifiers

```gjs
import { on } from '@ember/modifier';
import { cell } from 'ember-resources';

const active = cell(false);

<template>
	<button {{on 'click' active.toggle}}>
		{{#if active.current}}
			Ugh, fine, you can click Me
		{{else}}
			Please don't click me 
		{{/if}}
	</button>
</template>
```

<!--
Modifiers are not only a primitive in ember, I think they are a key 
*missing* primitive in other frameworks.

They allow single-pass wiring of element behavior without needing to manage
references to that element and additionally provide cleanup behavior all bundled in a co-located fashion.
-->

---
layout: cover
---

# These are the _Reactive Primitives_

<ul class="big-list">
    <li>Values</li>
    <li>Functions</li>
    <li>Elements</li>
    <li>
	   Resources <span v-click>← up next</span>
		<ul>
	      <li>Modifiers</li>
	      <li>Services</li>
		</ul>
	 </li>
</ul>



<!-- 
In Summary, these are the primitives.

!!click 

and then Resources are what we'll cover going forward!
-->
