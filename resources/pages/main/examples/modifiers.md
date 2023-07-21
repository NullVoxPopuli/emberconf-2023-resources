--- 
transition: fade
layout: center
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

```gjs {all|6-13|5-16|4|4,21|all}
import { resource } from 'ember-resources';
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
    <div {{intensify 2}}>
        resource pattern intensifies
    </div>
</template>
```

<div style="position: fixed; bottom: 1rem; right: 1rem;">
<QRCode size="375" value="https://limber.glimdown.com/edit?c=LYewJglgZhCmBOACMtSKiJqBGCDGIAdlIgEwAMpAzAFA0AGjA5gFYDOiANhAG6w0RgAB0wAXRAG9E8WGxABXeHliIAvunghgiAOQ4EAWhlzFytjoDcA4WMmJQkGAjUatu-fCOyFS2QHoHaDh4SzoCQjZxCEJRWAjoAE9EAF57cCCEAApM2E5UONEAGkRo2PjRBIBKFIA%2BSRpERulYUUVCZpNfbKkiNWrkuokGppG88QBDQkFx0Qhe1Nz8mIA6SenYzIBtYZHdu1F4SbYMeGAALkR6A6POGdgADUyAEglSuLYICtUhAA9K%2BjUhR2eyaUmuERO50u4LYt1iAE1nq8Yu9Pglvn8AaogSDdmDDhDMFCrgTYXdHgYXm9yujfv9AcCRgBdYpDXEjMCKGZzQgXACM5HIOPZjU%2BCG5RDYFwAksRomjhXtVJUrIymkRlng8pN5EJsv06mtgBLCJrJspOJlKirgcqrHa6DQADyxYRw2A1YFOyA8STIsofKBJUiqVSe3HGHzKRBCGaxeDtamBuBsL1%2BH2ep1%2BV1Cd2exj0IA&format=glimdown">
</QRCode>
</div>

<style>
    .modifier-video {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
    }
</style>

<video 
    v-click="5"
  controls loop 
  autoplay
  class="modifier-video"
  src="/pages/main/examples/recordings/modifiers.webm"></video>

<!-- 

This will be supported in ember-resources shortly after emberconf, 
but following in the footsteps of Starbeam, we can do modifiers like this.

!!click

here, we set up an animation effect on an element.

!! click

the important thing is that this resource is the same as any other resource, 
same API.

!!click 

it's only wrapped in a function that receives an element, 

!! click

and then whatever args that were passed to the modifier.

!! click :: demo shows

This is what the animation looks like



Now, for those worried about bundle size, fear not!
ember-resources is a v2 addon, so if you don't import it, you don't pay for the bytes.
-->

