--- 
transition: fade
layout: center
---

# Components?

<!-- 

Can a resource also be a component?

not really, but also kind of.
It starts to get a little awkward here.
I mean, at least not universally across all frameworks.
lit-html and React might be able use resources as components by
returning JSX as their value.

But many other frameworks, which use templating, such as
- angular
- svelte
- and ember


The main thing is that every framework has legit component implementations,
and 

-->

--- 
transition: fade
---

<small class="related-note">Components?</small>

# We can do it though

```gjs
import { resource, cell } from 'ember-resources';
import { on } from '@ember/modifier';

const Demo = resource(() => {
  let count = cell(0);
  let increment = () => count.current++;
  
  return (
    <template>
      {{count}}<br>
  
      <button {{on 'click' increment}}>Add</button>
    </template>
  );
});

<template>
  {{#let (Demo) as |whatHaveIDone|}}
    <whatHaveIDone />
  {{/let}}
</template>
```

<div class="corner-br">
<QRCode size="450" value="https://limber.glimdown.com/edit?c=MQAgSgpgzg9grgJwMbRAQygOm5kSYC2ADjAHYSkAuUA-AFB0B8IgOAQCa8CIUSAlhZV5RqIAO4QEEbjBBFJMJEjhF%2BAEzG9KACzFaI2iSAMBPPPAA2qgDRG9p1b1WkA5JW6UYRIzO29SAaxBeADNbCFMoLQtVTEBcAgY6AANkgHMAKygQc14ANwg6XmIYBDcAbxBJWEQUGxRzcxAAXxBghEIQZwgCACMJAFpKzhQoZwBuAqKSkHKyJpa2gg6AAS7ehAB6AhgHYP4EMYZ8UmEQABEumQBeCughiAAKe4BKEEvmUroQLP0zOCpXvAQer3AAMT3GX3MPz8SEkBAEAOer2Y%2BD%2BlEwSgQkioAGocRCQJ8bpREKQQPciV8ADyULpEcxoWmMSlfaalVFURqNKndBDMr4s6ndOCUDxk0qlWbOJDZJD%2BZxBUiwroCLmMACCqlUVPWwtFZH5rJ1tOIDKZRPBdEalroNLpZogholwChbnu5y2LwwIAAPqItIyABJoPIASVOZAgPq5LKp-qDIYg4cjIHWjB5fNj8cowbDEfIqadpXWrq5GaLLp%2B7ouXsyfoDOcTyfI0caWYbuaT%2BakaaJEpL%2BhjxvtjMdSWSQA&format=glimdown"></QRcode>
</div>

<!--

We can do it!

But this is super goofy, and I don't think I'd recommend this to anyone.

I only discovered this was possible a couple days ago.

-->

--- 
transition: fade
---

<small class="related-note">Components?</small>

# We can do it though

```gjs
import { resource, cell } from 'ember-resources';
import { on } from '@ember/modifier';

const Demo = resource(() => {
  let count = cell(0);
  let increment = () => count.current++;
  
  return (
    <template>
      {{count}}<br>
  
      <button {{on 'click' increment}}>Add</button>
    </template>
  );
});

<template>
  <Demo />
</template>
```

<div class="corner-br">
<QRCode size="450" value="https://limber.glimdown.com/edit?c=MQAgSgpgzg9grgJwMbRAQygOm5kSYC2ADjAHYSkAuUA-AFB0B8IgOAQCa8CIUSAlhZV5RqIAO4QEEbjBBFJMJEjhF%2BAEzG9KACzFaI2iSAMBPPPAA2qgDRG9p1b1WkA5JW6UYRIzO29SAaxBeADNbCFMoLQtVTEBcAgY6AANkgHMAKygQc14ANwg6XmIYBDcAbxBJWEQUGxRzcxAAXxBghEIQZwgCACMJAFpKzhQoZwBuAqKSkHKyJpa2gg6AAS7ehAB6AhgHYP4EMYZ8UmEQABEumQBeCughiAAKe4BKEEvmUroQLP0zOCpXvAQer3AAMT3GX3MPz8SEkBAEAOer2Y%2BD%2BlEwSgQkioAGocRCQJ8bpREKQQPciV8ADyULpEcxoWmMSlfaalVFURqNKndBDMr4s6ndOCUDxk0qlWbOJDZJD%2BZxBUiwroCLmMACCqlUVPWwtFZH5rJ1tOIDKZRPBdEalroNLpZogholwChbnu5y2LwwIAAPqItIyABJoPIASVOZAgPq5LKp-qDIYg4cjIHWjB5fNj8cowbDEfIqadpXWrq5GaLLp%2B7ouXsyfoDOcTyfI0caWYbuaT%2BakaaJEpL%2BhjxvtjMdSWSQA&format=glimdown"></QRcode>
</div>

<!--

And what's crazy is that this is only a component-manager implementation away
from actually working.

But why would we do this?
We already have enough changes coming for Polaris to get used to.

-->

--- 
transition: fade
layout: center
---

<small class="related-note">Components?</small>

<video 
  controls 
  loop autoplay
  class="component-video"
  src="/pages/main/examples/recordings/resources-as-components.webm"></video>

<div v-click class="component-managers">
<QRCode size="400" value="https://github.com/emberjs/rfcs/blob/master/text/0213-custom-components.md">Component Managers</QRCode>
</div>

<style>
    .component-video {
        position: fixed;
        right: 0;
        bottom: 0;
        top: 0;
    }
    .component-managers {
        position:fixed;
        left: 1rem;
        bottom: 1rem;
        background: black;
        border-radius: 0.5rem;
        box-shadow: 0 0 10px rgba(0,0,0,0.8);
        transition: all 0.2s;
    }
</style>

<!-- 

Here is what the demo looks like.

You can see that the resource still needs to be invoked like a function,
and that if we only invoke it once, each time we render the component returned from the resource,
they share the same state.

I don't know if this has any use cases,
but an important thing to note is that this 
thing is returning a component.

!! click

we could adapt this to a component manager
and have the invocation happen automatically for us 
creating a new closure around the returned component,
but... I don't know if it's all worth it. 

anyway... 
-->

--- 
transition: fade
layout: center
---

<small class="related-note">Components?</small>

# Components are not primitives



<!--

I mentioned this a while back, and I want to revisit this idea.

Components are not primitives.

-->

--- 
transition: fade
layout: center
---

<div class="slide-category">Components are not primitives</div> 
<small class="related-note">Components?</small>

# The Primitives

<v-clicks class="big-list">

- values
- helpers / functions
- resources

</v-clicks>

<!--

So re-capping the primitives,


We know from Ember Octane, and now that we've renamed some of the primitives that Octane introduced,
we have:

!!click

values.

!! click

functions

!! click

and now, resources, which represent a value bound to a lifetime


...

These can all be authored and shared anywhere.

-->

--- 
transition: fade
layout: center
---

<small class="related-note">Components?</small>

# Components are not primitives


<!--

Components _wrap_ the primitives.

Components are refactoring boundaries.

They are containers for organizing higher-level concepts.


-->
