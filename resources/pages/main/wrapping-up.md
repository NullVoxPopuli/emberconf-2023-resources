---
transition: fade
---

# ECMAScript Explicit Resource Management

<blockquote class="big">

This proposal intends to address a common pattern in software development **regarding the lifetime** and management of various resources (memory, I/O, etc.). This pattern generally includes the allocation of a resource and the ability to explicitly release critical resources. 
  [^tc39-explicit-resource-management]

</blockquote>

[^tc39-explicit-resource-management]: https://github.com/tc39/proposal-explicit-resource-management

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

Here is a post about TypeScript's implementation.

The mechanics of this are a **smidge** different from Ember's Resources, 
but the purpose is generally the same 

_co-locate the setup and cleanup of a value_, and make the interaction 
with that value easy so that the consumer of the abstraction does not 
need to worry about potential cleanup
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
- to get started:

    ```bash 
    pnpm add ember-resources
    ```


<div class="qr-code-list corner-br">
<QRCode 
    size="240"
    value="https://github.com/NullVoxPopuli/ember-resources/blob/main/docs/docs/README.md"></QRCode>
    Docs

<QRCode 
    size="240"
    value="https://github.com/NullVoxPopuli/ember-resources"></QRCode>
    Code
</div>

<!--

in much the same way as promises are better than callbacks, 
resources are better than effects, and other means and managing a lifetime.

- I didn't explicitly talk about this, but derived data is the secret to performance and clarity.
- resources help you model any situation as derived data 
- resources are not effects -- someone has to pull on the resource for it to start


You can get going right now before 
I walk off stage with `pnpm add ember-resources`

-->

