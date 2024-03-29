---
transition: fade
layout: center
---

# Some fun things 

<div v-click>

<h2 style="transform: rotate(-4deg); line-height: 2.5rem">
ember-data-resources is not ember-data resources ::<br> 
resources on resources, using resources to fetch resources with your resources
</h2>

</div>

<!-- 

and the word "resources" may be a bit overloaded, depending on your background, 

!! click

I don't know if you anyone saw in the discord chat yesterady, but we had some goofy word play.


but here are some somewhat related fun things 

-->

---
transition: fade
---

# ECMAScript Explicit Resource Management

<blockquote class="big">

This proposal intends to address a common pattern in software development **regarding the lifetime** and management of various resources (memory, I/O, etc.). This pattern generally includes the allocation of a resource and the ability to explicitly release critical resources. 

</blockquote>

<div class="corner-br">
<QRCode size="200" value="https://github.com/tc39/proposal-explicit-resource-management"></QRCode>
</div>


<!-- 

Resources are also a concept in javascript itself.
Here is a snippet from a TC39 proposal readme that is in stage 3, or the implementation phase.

The javascript resources have a similar purpose -- they provide 
a means to manage the lifetime of an object.

Ember and starbeam Resources provide reactive implementations of this concept, and it may make sense for the implementations to build on top of JavaScript resources once they're shipped.



-->

---
transition: fade
layout: center 
---

<style>
    .ts-native-container {
       img.ts-native { height: 620px; position: fixed; left: 0; top: -45px; }
       img.matt { position: fixed; right: 0; top: 0; width: 380px; }
       .qr-code { position: fixed; bottom: 0; right: 0; };
    }
</style>


<div class="ts-native-container">
    <img class="ts-native" src="/pages/main/typescript-native.jpeg" />
    <img class="matt" src="/pages/main/typescript-native-matt.png" />
    <QRCode class="qr-code" size="260" value="https://twitter.com/mattpocockuk/status/1670687511763353600"></QRCode>
</div>


<!-- 

-- skip this slide if low on time --

Here is a post about TypeScript's implementation.

The mechanics of this are a **smidge** different from Ember's Resources, 
but the purpose is generally the same 

_co-locate the setup and cleanup of a value_, and make the interaction 
with that value easy so that the consumer of the abstraction does not 
need to worry about potential cleanup
-->

---

# What's left?

<v-clicks class="big-list">

- prototype Starbeam Ember Renderer
- Integrate Starbeam deep within `@glimmer/*` (changing the _implementation_ of @glimmer/tracking)
- ensure parity between Starbeam and `ember-resources`
- codemods
- RFCs

</v-clicks>

<!-- 

So, what's left?

!! click

Mainly, I need to do more work with Starbeam itself, 

!!click 

get in in to @glimmer, 

!!click  
!!click

and write some codemods for folks using `ember-resources`, 

!!click

...and put up some RFCs... because (i mean, at least I think that) the whole way we thinking about reactivity has become a real cohesive story and is quite a bit more buttoned up since Octane's release.

-->

---

# tl;dr: 

<style>
    code {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }
</style>

- derived data is the secret to performance and clarity
- resources help you model any situation as derived data.
- universal primitive 
- to get started:

    ```bash 
    pnpm add ember-resources
    ```


<div class="qr-code-list corner-br">

<QRCode value="https://github.com/NullVoxPopuli/ember-resources/blob/main/docs/docs/README.md?" size="240">
Docs
</QRCode>

<QRCode value="https://github.com/NullVoxPopuli/ember-resources?" size="240">
Code
</QRCode>

</div>

<!--

in much the same way as promises are better than callbacks, 
resources are better than effects or other ways of working with lifetimes

Some last thoughts I leave with you before the end here,  

- derived data is really really good.
- resources help you model any situation as derived data 
- resources are not effects -- someone has to pull on the resource for it to start
- resources are part of a plan to bring ember's reactivity to everyone -- through starbeam


You can install this right now and get started before I walk off stage.

-->



