---
transition: fade-out
layout: center
---

# What are the reactive primitives in Ember? 

<!-- 
    - Values (or cells)
    - Functions
    - Modifiers
    - Elements
    ... and 
    - Resources

-->

---
layout: two-cols
---

# Values 

<small class="related-note">_(aka cells [^starbeam])_</small>


::left::

<div class="code-polaris">

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

<div v-click="2" class="code-polaris">

```js {all|all|3,6}
import { cell } from 'ember-resources';

const value = cell(1);

<template>
    {{cell.current}}
</template>
```

</div>

[^starbeam]: https://www.starbeamjs.com/guides/fundamentals/cells.html

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

```js 
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



```js 
import { cell } from 'ember-resources';

const data = cell({ greeting: 'Hello World!' });

<template>
    {{ (JSON.stringify data null 4) }}
</template>
```

<!--

    In both of these examples, 
    JSON.stringify is a function that many of us are familiar with.
    Because functions are 

-->


---

# Elements 

```js 
<template>
  <button>Click</button>
</template>
```

---

# Modifiers 

```js 
<template>
    
</template>
```


---

# These are the _Reactive Primitives_ 

- Values 
- Functions 
- Resources
- Modifiers
- Elements

