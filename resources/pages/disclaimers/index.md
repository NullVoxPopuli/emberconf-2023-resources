---
transition: fade
layout: section
---

# Disclaimers

<!-- 

I'm going to try to get through these real quick, but.

Some may consider parts of this talk  "experimental" .
and that's ok. 

There are certainly a couple gaps today
- we need more learning materials on resources, patterns, (in and outside of ember)
- we need to actually implement Starbeam for Ember

For those that stick to only the what the official documentation recommends, this may all feel experimental and out of reach.

However, to help mitigate that feeling, I've been working on some learning materials and tutorials. 

I'm working to help close the gaps -- I'll try to answer anyone's questions, provide help, you name it.

The goal is to solve real problems more efficiently, while also reducing cognitive load on everyone writing their ember apps. 

-->

---
transition: fade
layout: center
---
<div class="related-note">Disclaimers</div>

# All examples use the new~ish `gjs` format

[RFC#779](https://github.com/emberjs/rfcs/pull/779) merged March 4th 2022, and research began maybe about a year prior.

<div class="corner-br">
<QRCode value="https://github.com/emberjs/rfcs/pull/779" size="200">RFC #799</QRCode>
</div>

<!--

All examples use the new gjs format.

-- skip for time --

This is, in part, so that I can keep the slides concise, and focused, 
and not have to specify the file paths of multiple snippets which need to be 
stitched together to create a single concept.

-- but say this --

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

```gjs 
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

```gjs 
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
It's only of a matter of if the component has its own state.


SKIP:

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

but I'm committed to these opinions, 
I mean, not to say some of these opinions are not shared by others.. but
I genuinely believe they make not only our ecosystem stronger and better, 
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

...And I'm starting an RFC on defining what resources are to ember when I get home after the conference.

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

<div v-click class="disclaimer-note">
    Also ember-source@3.28 will be supported for the foreseeable and unforeseeable future.
</div>

<!-- 
Ok, last disclaimer!!, I promise.

It's extremely important that there are easy migration paths within the community.

!!click 

Programming is hard, and some migration paths are not (and have not been) so easy.

The overall goal for everything I'm working on for and around this talk, Resources, etc 
is to be a _polyfill_ for Starbeam -- I ultimately want Starbeam to be *the* Resource implementation we use, but in this talk, I demonstrate with the library `ember-resources`, because you can install and use it today.  

At the moment, I haven't written any codemods, 
because there are some design details still being worked out in Starbeam.

But  
Any behavioral difference between my library, `ember-resources` 
and Starbeam is considered a bug.

!! click

I'm committing on keeping support for ember-source@3.28 for as long as I can. I know a good number of folks were caught off guard by some deprecations that came up during the v3 series (I think I heard yesterday that were more than 70 deprecations? a lot), so, I want to make sure that folks still on v3 can use the patterns coming in the future.

--

Anywho, getting back to it...
-->




