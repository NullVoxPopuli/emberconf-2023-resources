---
transition: fade
layout: two-cols
---

# An interval <span class="inline-subtitle">before ...</span>

::left::

```js 
// app/components/timer.js
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class Timer extends Component {
  @tracked _time;

  get time() {
    if (!this.timer) {
      this.timer = setInterval(() => {
        this._time = new Date();
      }, 1000);
    }

    return this._time || new Date();
  }

  willDestroy() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}
```

::right::

```hbs 
{{! app/components/timer.hbs }}
{{this.time}}
```

<QRCode class="qr-code" size="350" value="https://limber.glimdown.com/edit?c=FAEQpgtg9gBAZgJyhGkBGYEGMoDs4wBMADIQMzDAAGNA5gFYDOMANgJYBuYwbEADlAQAXGAGFkA3GFwjEyGAHIAArXYQImAPQ5%2BeaUIUBuHruEwA3jCEIAhlgDWYACYwAvvCQplq3hoSbrO3s2XFojEwEzSzw3D3lldC1oJzY4Nkxw4DAAD0iRJzA4GwBXFhEsFhtGZgAJMBYWKAB1QRYXHKFpJ2ZxXSkZC2AYGAAeTv5KzoA%2BIeGYABVeMAAuC3MhAAs2RgA6ISXXV1mRgMg%2BSbAZ2aVAh2cYAH19jWNZ2jARZ7AACgBKQbmMFSMG%2BAEJNts9ksEP9zLNARDdl8EDAALwwRgfACSMkwHBsLG%2BfzRUwBgLmiJ2TyWaJgUgA7jAQDZOn9jOS3AAaGAARmI-N%2B7LmR3hMAQH2KCFwVi2u2pGhgAB9FXSwIzmazBbMRcN6WwGuBGNYoABPYlwwHA76U5Gw0XDCpgGwIHGdBD4wk26FawFHYZHI40KjAIA&format=glimdown"></QRCode>


<!-- 

Before diving in to this example, I'm sure the first thing ya'll saw
was the static on the right
this is a big QR Code, as it contains all the text on the slide
and re-directs you to a REPL or Playground where you can play this example..

If you'd like to play along, and your phone happens to not be a telescope, 
feel free to get closer to scan the QR code.


Here, we define an interval which we use to represent a clock.
This has a number of problems:
- our "time" value is bound to a component,
    so we can't tear down our interval at any granularity smaller than a component.
    I'm sure ya'll have seen components that do too much, and this pattern adds to that.
- the teardown, and setup are disjoint... there is a lifecycle hook you have to know aobut.
    since components lend themselves to be overburdened with responsibility, it's very easy 
    intermingle different behaviors' cleanup and setup all over the place within a component. 
- we've hacked in a lifecyle event via a set-once property.
    the getter is still re-evaluated every time underscore time changes.
    ... and if we were to add tracked data in to the mix, we are at high risk for a memory leak.


This ... is a disaster.

-->


---
transition: fade
---

# An interval <span class="inline-subtitle">after ...</span>


```gjs 
// app/components/timer.gjs
import { resource, cell } from 'ember-resources';

const Time = resource(({ on }) => {
  let time = cell(new Date());
  let interval = 
    setInterval(() => time.current = new Date(), 1000);

  on.cleanup(() => clearInterval(interval));

  return time;
});

<template>
  {{Time}}
</template>
```


<QRCode class="qr-code" size="350" value="https://limber.glimdown.com/edit?c=FAEQpgtg9gBAZgJyhGkBGYEGMoDs4wBMADIQMzDAAGNA5gFYDOMANgJYBuYwbEADlAQAXGAG8YCMIygBXbGAA0MLGBYsYAX3hIUAcnSYAtJOlyVjXQG5KOXIxEAVXmBgBeCVNnyAFN-F5NAEo3AD4xYBhlPHsYIWc3ZVUWb1wwAHcYEABDITBvQMDrSNsYtlxchA4s9XdGMCEASXLMKuT80NjnADosOUlyhNSM7Nz8pQBGYinCyki8HpYwLNwZPl9g1zCsRayEJorW7zKD6oLrCI8hOVxOiDBrDRngAB5c-hYcsBCL0VEnO40GheAHo3nwPrlvjQqMAgA&format=glimdown"></QRCode>


<!-- 

Here we can already see that this looks way less complicated
- setup and teardown of the interval are co-located
- the entire construct is focused on a single responsibility
- teardown occurs at the curly-brace level where Time is used, rather than at the component level
- we don't need to hack in our own lifecycle via a set-once property.

-->


---
transition: fade
---


<style>
    .interval-video {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        height: 100%;
    }
</style>

<video 
  controls loop 
  autoplay
  class="interval-video"
  src="/pages/main/examples/recordings/interval.webm"></video>

<!--

Here is that code rendered.

On the right here you can see that time is progressing steadily, one second at a time

Now Let's compose this interval like we saw in sample code on a previous slide.

-->
