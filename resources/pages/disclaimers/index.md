---
transition: fade
layout: section
---

# Disclaimers

<!-- 

Some may consider parts of this talk  "experimental".

For those that stick to only the what the official documentation recommends, that most certainly will be how this feels.

And what is a tried solution in open source may still be experimental within your organization -- every group of folks adopts knowledge at different speeds, and that's ok.

In any case, however, the aim here is to solve real problems more efficiently, while also reducing cognitive load on everyone writing their ember apps. 


-->

---
transition: fade
layout: center
---
<div class="related-note">Disclaimers</div>

# All examples use the new~ish `gjs` format

[RFC#779](https://github.com/emberjs/rfcs/pull/779) merged March 4th 2022, and research began maybe about a year prior.

<img 
    src="/pages/disclaimers/rfc-779.png" 
    alt="QR Code for the above linked RFC" 
    class="qr"
/>

<!--

All examples use the new gjs format.

This is, in part, so that I can keep the slides concise, and focused, 
and not have to specify the file paths of multiple snippets which need to be 
stitched together to create a single concept.

Thankfully!, we had a talk yesterday on this new format,
but here is a quick tl;dr (and maybe recap) for helping translate between old and new in your head:

-->

---
transition: fade
layout: two-cols
---
<div class="related-note">Disclaimers</div>

# Brief way to convert to/from gjs 

::left::

```js 
// app/components/first.gjs
import SomeComponent from './my-component';

<template>
  This is closest to a template-only component.
  But it's still a component.

  <SomeComponent />
</template>
```

<div v-click>

<br>

```hbs 
{{! app/components/template-only.hbs }}

This is a template-only component

<MyComponent /> 
{{! secret convention?
    where is it defined?
    who knows‽
}}
```

</div>

::right::

<div v-click>

```js 
// app/components/second.gjs
import Component from '@glimmer/component';
import SomeComponent from './my-component';

export default class Demo extends Component {
    greeting = 'hello world';
    <template>
        The content of the component
        <SomeComponent /> {{this.greeting}}
    </template>
}
```

</div>

<br>

<div v-click>

```js
// app/components/co-located.js
import Component from '@glimmer/component';

export default class Demo extends Component {
    greeting = 'hello world';
}
```

```hbs 
{{! app/components/co-located.hbs }}
The content of the component
<MyComponent /> {{this.greeting}}
```

</div>

<!-- 
Whenever you see a `<template>` block by itself, 
that is most similar to a template-only-component.

!! click 

The key thing here is that this is always a component, 
and you always know where things are defined.

!!click

Whenever you see a `<template>` block within a class-body, that's equivelant to a 
glimmer-component with a class -- normally two separate files.

!!click

The idea is that it does not make sense for templates to be a separate concept.

Both examples here are full blown components.

I'm not going to get in to the "why" of this change here, 
but this is the first feature that I know of in Ember's design 
where all the research, reasoning, and exploration is out in the open -- it's a good read.
-->

---
transition: fade
layout: center
---
<div class="related-note">Disclaimers</div>

# All of this is my opinion


<div v-click class="disclaimer-note">
But I have written a tutorial using these concepts over at 

[https://tutorial.glimdown.com](https://tutorial.glimdown.com)

<div style="max-height: 100px">

![Picture of the tutorial](/pages/disclaimers/tutorial.png)

</div>
<img src="/pages/intro/tutorial.png" alt="QRCode to the Glimmer tutorial I made" class="qr" />
</div>

<!-- 

All of this is my opinion -- 

!! click 

but I'm comitted to these opinions, 
and genuinely believe they make not only our ecosystem stronger and better, 
but the concepts benefit all ecosystems outside of ember as well.

-->

---
transition: fade
layout: center
---
<div class="related-note">Disclaimers</div>

# There are no RFCs for this stuff

<div v-click class="disclaimer-note">
  ...yet
</div>

<!-- 
There are no RFCs for any of what you're about to see -- as far as becoming part of the official blueprint is concerned.

!! click

However, I do plan on helping bring these concepts to the default experience.

-->


---
transition: fade
layout: center
---
<div class="related-note">Disclaimers</div>

# All APIs shown by libraries I provide will have codemods  

<div v-click class="disclaimer-note">
  No one will be left behind.
</div>

<!-- 
It's extremely important that there are easy migration paths within the community.

!!click 

Programming is hard, and some migration paths are not (and have not been) so easy.

I do believe that libraries I've made have direct code-moddable transition paths
to other, more official libraries -- such as Starbeam.

At the moment, I haven't written any codemods, 
becaues there is nothing certain to transition to quite yet.

Any behavioral difference between my libraries 
and the "stuff to be migrated to" is considered a bug.


--

Anywho, getting back to it...
-->




