--- 
transition: fade
layout: center
---

# Components?

<!-- 

Can a resource also be a component?

not really, but also kind of.
It starts to get a little awkward here.
I mean, resources probably don't make sense as components universally across all frameworks.

lit-element, React, angular, svelte, etc ..  maybe could use resources as components by
returning a template-only (or presentational, or stateless) component as their value, using the closed over function within the resource _as_ the state.

The main thing is that every framework already has legit component implementations,
and those implementations are good at what they do.

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

You can see that, today, the resource still needs to be invoked like a function,
and that if we only invoke it once, each time we render the component returned from the resource,
they share the same state.

I don't know if this has any use cases,
but an important thing to note is that this 
is a function that returns a component.

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


<style>
   .logos img { 
        position: fixed;
    }

    .logos .ember  { top: 1rem; left: 1rem; width: 250px; }
    .logos .react  { top: 7rem; left: 10rem; width: 250px; }
    .logos .preact { top: 14rem; left: 15rem; width: 250px;}
    .logos .vue    { top: 5rem; left: 20rem; width: 250px;}
    .logos .svelte { top: 10rem; left: 25rem; width: 250px;}

</style>
<div class="logos">
<img class="ember" v-click src="/pages/logos/ember-e-circle-icon-4c.svg" alt="the ember 'e' logo" />
<img class="react" v-click src="/pages/logos/react.svg" alt="the React logo" />
<img class="preact" v-click src="/pages/logos/preact.png" alt="the Preact logo" />
<img class="vue" v-click src="/pages/logos/vue.svg" alt="the Vue logo" />
<img class="svelte" v-click src="/pages/logos/svelte.png" alt="the svelte logo" />
</div>

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

And that's the main goal of Starbeam.
We can write our application logic once, 
data-fetching, UI logic, modifiers... anything reactive...


and use it 


!!click 

in not only Ember, but  

!!click

React,

!!click Preact, 

!!click Vue, 

!!click Svelte, you name it.


It's super exciting, 
because most other frameworks don't have modifiers,  
and none of them have resources, as far as I know.

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
