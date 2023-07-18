--- 
transition: fade
layout: center
---

# Resources used as Services 

<!-- 

We know that Resources are bound to a lifetime.. 
and that applications have lifetime.

This means that if we install resources on an application,
the resource effectively acts as a Service.

-->

--- 
transition: fade
layout: two-cols
---

<div class="slide-category">Resources used as Services</div> 

::left::

```js 
import { resource, cell } from 'ember-resources';

export const Counter = resource(() => {
  const count = cell(0);

  return {
    get count() { return count.current; },
    increment() { count.current++; }
  }
});
```

<QRCode size="300" value="https://limber.glimdown.com/edit?c=MQAgSgpgzg9grgJwMbRAQyiAyhBA3ASxSgCgSAzGBECAWwCNckYA7ckAJgAYOBmMgAZCA5gCtMAGwJ4IJArQAOVAC4gA3iATR4yCABoQKCRJABfEOQQxaIAOR1GCALRbYiYrYDcZZiyiqAYXgWZVwQAF5NbXcIAApYgEoIgD51EhBDVn9MuBCIwwhjWK4E73So5UQWNIyM4QhVZlzlRPUKqpyQgDokRC0QzzM9coyCFiQtWggQ1o0m7t6EfuUAahXB03LN01KyeSUEQOslFmnVS2s7AAFhKVophAB6ZkVWM685V8O21jMLKxstiuDlwj1oMAAJgRyARcB99io2lBcIQUH8LoCQc5XDpiI9kfgiBAPiQkBIMJgACJ0GA0AAeoRYEMwQVepzyanKVwJqLiQWauCS81CCDKGQAPKFFOTQskRiBxfQ4MplL81GpfrYyUQANa2EDKAAWBCgPWCIq6YwmdDOplMctqtXVRpNZoFCDdITt8vFjyVKtYDoVjylChlEDlmxAJEldDDaFl5XF1PBIEeqQAPgqU7T0yAs8maWnUjGQ3Hw3KhAIgA&format=glimdown"></QRCode>

::right::

<div v-click="1">

```gjs {all|all|8|all}
import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { service } from 'ember-resources/service';

import { Counter } from './counter';

class Demo extends Component {
  @service(Counter) counter;
  
  <template>
    <button {{on 'click' this.counter.increment}}>
      {{this.counter.count}}
    </button>
  </template>
}
 
<template>
  <Demo /> | <Demo /> | <Demo /> 
</template>
```

</div>



<style>
    .services-video {
        position: fixed;
        right: 0;
        bottom: 0;
    }
</style>

<div v-click="3">
<video 
  controls loop 
  autoplay
  class="services-video"
  src="/pages/main/examples/recordings/services.webm"></video>
</div>

<!-- 

We can define a resource that has some state, 
that state will be a number.
With this resource we can return a getter to get the current value,
as well as a method to increment that value.

The object is containing both of these things is the value of the resource.

!!click
    
We can then create a component which then uses the Counter resource,
here

!!click

This decorator is what does the linking between the resource and the overall application.

!!click

and here is what it looks like in action

You can see that all the buttons share the same state.



-->
