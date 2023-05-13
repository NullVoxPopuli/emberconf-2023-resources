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

---
layout: two-cols
---


# Functions

::left::

<div class="code-polaris">

```js 
import Component from '@glimmer/component';

class Demo extends Component {
    myFunction = () => 'Hello World!';

    <template>
        {{ (this.myFunction) }}
    </template>
}
```

</div>

<br>
<div class="code-ember-min-usable">

```js 
class Demo extends Component {
    myFunction = () => 'Hello World!';
}
```
```hbs 
{{ (this.myFunction) }}
```

</div>

::right::


<div class="code-polaris">

```js 
const myFunction = () => 'Hello World!';

<template>
    {{ (myFunction) }}
</template>
```

</div>


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

