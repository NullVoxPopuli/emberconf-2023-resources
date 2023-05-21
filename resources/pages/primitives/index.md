---
transition: fade-out
layout: center
preload: false
---

<style>
    .display-list li {
        font-size: 2rem;
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
    <li v-click>Values</li>
    <li v-click>Functions</li>
    <li v-click>Modifiers</li>
    <li v-click>Elements</li>
    <li v-click>Resources</li>
</ul>

<!--
What are the reactive primitives?

(wait ~1s)

(Click through each one)

- Values (or cells)
- Functions
- Modifiers
- Elements
... and
- Resources

Ok, so what do I mean by these being primitives?

-->

---
transition: fade-out
layout: center
---

# Components are not primitives.

<!--

Components are not primitives.

They wrappers of the primitives.
Components wrap one or more
values, functions, modifiers, elements, and resources
and components cannot alone, without these primitives.

However each of the primitives can be used and defined in isolation.
-->

---
layout: two-cols
---

# Values

<small class="related-note">_(aka cells [^starbeam])_</small>

::left::

<div>

```js {all|5,8}
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

```js {all|all|3,6}
import { cell } from 'ember-resources';

const value = cell(1);

<template>
	{{cell.current}}
</template>
```

</div>

[^starbeam]: https://www.starbeamjs.com/guides/fundamentals/cells.html

<!-- 
Values are identifiable (!!click) via `@tracked` property,

!!click

values can also be used in class-less components. 
(!!click)

((( REVIEW DAY OF -- how much have folks heard about starbeam? )))

Here, a cell is a reactive value, like in starbeam.

-->

---
transition: fast-fact
---

<div class="fast-fact">

# <fa-angle-double-right /> Fast Fact! <fa-angle-double-right />

</div>

## _`@tracked` can be thought of as a light wrapper around reactive values_

```js {all|11-16}
function tracked(target, key, descriptor) { /* "legacy decorator" (stage 1) */
	let cache = new WeakMap();
	let getCell = (ctx) => {
		let reactiveValue = cache.get(ctx);
		if (!reactiveValue) {
			cache.set(ctx, reactiveValue = cell(descriptor.initializer?.()));
		}
		return reactiveValue;
	}
	return {
		get() {
		  return getCell(this).current;
		},
		set(value) {
		  getCell(this).set(value);
		}
	}
}
```

<!--

The `@tracked` decorator could be thought of as a small wrapper
around reactive values.

!! click

The decorator only needs to provide native getter/setter functionality
around the "reactive API".

--

This is not the real implementation,
but I think it could be -- or very close to this, conceptually.

-->

---
layout: two-cols
---

# Functions

::left::

```js {all|9}
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

```js {all|6}
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
Since Ember 4.5 (released a little more than 12 months ago) plain functions are natively supported.
A lot more options open up to uss and we are less constrained to the framework.

-->

---

# Elements

```js
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

Which I think is important because it means we can refer to The MDN Docs.
-->

---

# Modifiers

```js
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
-->

---
layout: cover
---

# These are the _Reactive Primitives_

<ul class="big-list">
  <li>Values</li>
	<li>Functions</li>
	<li>Elements</li>
	<li>Modifiers</li>
	<li v-click>Resources</li>
</ul>



<!-- 
In Summary, these are the primitives.

!!click 

and then Resources are what we'll cover going forward!
Let's get in to it.
-->