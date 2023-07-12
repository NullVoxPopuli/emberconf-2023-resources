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

<QRCode class="qr-code" size="350" value="https://limber.glimdown.com/edit?c=MQAgMglgtgRgpgJxAUQCYQC4HsEChcC0IABgDYQBucxIRA%2BgnAHaqIDOIETIADqQIYBjOHUIlyVXowoQ4AdxoNmrBBy68BwgDQahXAOYgMACzgg2WAK4JhIfgDMMiI6ZASzjFolG5if-QBWHO640Dw4GCAAwlhQ4UzMkfYIsSAA5AAC%2BuRQUIgA9IKx8YlpANyhcREgAN5GCEIA1nCoIAC%2BIMmpmdnQeQj5GA2CjQblleEIkXVY3B1dUOkZcLAFUFjo9rII47hwAB6Tkaz2-JakkYICbBwAEnCkpFgA6jikrQdOLBwxVQlM01wIBAAB4nHEBE4AHxA4EgAAq0DgAC5ajUTBA2AA6DBItptWEgwYrPj8aH4YEZIZNFogOi4vIVWH6OCRBlwAAUAEparDgRB7CAOQBCDHY9kIHk1PlwsU4pFIAC85lZAEkAYgKPxSBzuSBFVDeXDjS5MVj6Uj9SAEnIQAARMmcrkVE3tHQARgADN7nTKCTLGBhrNw5Ra8iAAD4R63ye2O7ku9oUkByCCPO1wNhDLAATz10uNAqFcolUplwKucH4CHVTgQWp1JYVvuNBOBBIJfmIuCAA&format=glimdown"></QRCode>


<!-- 

Before diving in to this example, I'm sure the first thing ya'll saw
was the static on the right,
this QR code will take you to a REPL/Playground whene you can play with 
the example if you want.


Here, we define an interval which we use to represent a clock.
This has a number of problems:
- our "time" value is bound to a component,
    so we can't tear down our interval at any granularity smaller than a component.
    I'm sure ya'll have seen components that do too much, and this pattern adds to that.
- the teardown, and setup are disjoint... there is a lifecycle hook you have to know aobut.
    since components lend themselves to be overburdened with responsibility, it's very easy 
    intermingle different behaviors' cleanup and setup all over the place within a component. 
- we've hacked in a lifecyle event via a set-once property.
    the getter is still re-evaluated every time underscore time changes


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
  const time = cell(new Date());
  const interval = setInterval(() => {
    time.current = new Date()
  }, 1000);

  on.cleanup(() => clearInterval(interval));

  return () => time.current;
});

<template>
  {{Time}}
</template>
```


<QRCode class="qr-code" size="350" value="https://limber.glimdown.com/edit?c=MQAgMglgtgRgpgJxAUQCYQC4HsEChcC0IABgDYQBucxIRA%2BgnAHaqIDOIETIADqQIYBjOHUIlyVXowoQ4AdxoNmrBBy68BwgDQahXAOYgMACzgg2WAK4JhIfgDMMiI6ZASzjFolG5if-QBWHO640Dw4GCAA3iCMFtbaIMKkpCAAviD2CFhQIADkcLCIBHFWNnBseQDc%2BIJYTGyRACrQZgC8sRVlwgAUPTH16QCUIG0AfNG4IEn1jUato0lwKT1M8iAAIvxOPUNDNdN1DZFcTggU-KkdbHAYAJJMZxekfSPj81BwAHSC1p6RHTWck22zgux0AEYAAww-b4ab1H6kOD8JiWHivUYTQTI-gIB5PS49U6IZ57GpTToYazcXZYj7fX4If41NJw3AAHicUD4oLGlKiURanzSaU5AHpubynPy-MRcEA&format=glimdown"></QRCode>


<!-- 

Here we can already see that this looks way less complicated
- setup and teardown of the interval are co-located
- the entire construct is focused on a single responsibility
- teardown occurs at the curly-brace level where Time is used, rather than at the component level
- we don't need to hack in our own lifecycle via a set-once property.

-->

