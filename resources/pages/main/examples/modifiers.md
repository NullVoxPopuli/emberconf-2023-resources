--- 
transition: fade
---

# Resources used as Modifiers 

<!-- 
We've seen that resources can be wrapped in functions to reactively handle arguments.

We can extend this to modifiers.

-->

--- 
transition: fade
---

<div class="slide-category">Resources used as Modifiers</div> 

```gjs
import { modifier } from 'ember-resources/modifier';

const intensify = modifier((element, intensity) => {
    return resource(({ on }) => {
        let animation = element.animate([
            { transform: `translateX(${intensity}px)` },
            { transform: `translateY(${intensity}px)` },
            { transform: `translateX(-${intensity}px)` },
        ], {
            duration: 100,
            iterations: Infinity,
        });

        on.cleanup(() => animation.cancel());
    });
});


<template>
    <div {{intensify 2}}>resource pattern intensifies</div>
</template>
```

<!-- 
This will be supported in ember-resources shortly after emberconf, 
but following in the footsteps of Starbeam, we can do modifiers like this.

For those worried about bundle size, fear not!
ember-resources is a v2 addon, so if you don't import it, you don't pay for the bytes.
-->

