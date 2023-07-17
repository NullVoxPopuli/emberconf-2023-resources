---
transition: fade
layout: two-cols
---

# [`fetch` <span class="inline-subtitle">before ...</span>][fetch-demo-0]

::left::

<style>
    .slidev-code-wrapper {
        max-height: 440px;
        overflow: auto;
    }
</style>

```gjs
import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { TrackedObject } from 'tracked-built-ins';

export default class RemoteData extends Component {
  <template>{{yield this.request}}</template>

  #state = new TrackedObject({ isLoading: true });

  @cached
  get request() {
    let { url } = this.args;

    (async () => {
      this.#controller?.abort();
      await Promise.resolve();

      this.#controller = new AbortController();

      fetch(url, { signal: controller.signal })
        .then((response) => {
          this.#state.status = response.status;
          return response.json();
        })
        .then((data) => this.#state.value = data)
        .catch((error) => {
          this.#state.error = error
        })
        .finally(() => {
          this.#state.isLoading = false;
        });
  })();

   return this.#state;
  }
    
  willDestroy() {
    this.#controller?.abort();
  }
}
```

::right::

```gjs
import RemoteData from './remote-data';

<template>
    <RemoteData @url="..." as |request|>
        {{#if request.isLoading}}
          ... loading ...
        {{/if}}

        {{#if request.value}}
          Result: 
            {{JSON.stringify request.value.name}}
        {{/if}}
    </RemoteData>
</template>
```

[fetch-demo-0]: https://limber.glimdown.com/edit?c=MQAgSgpgtg9gLhAIgQzskcAWEQwDYAmIA7sgJ4BQFABrQOYBWAziHgJYBuEFbUADjABOcEAGEY-GADsIUkQDNBEkAHIAAnXZQoEQQHoAxhIEy5KgNw9JwkAG8QB5AexEAviEXL1m3jv1xBJwBrNik6CxArARt7ABVAgyCIAgB5ACMGCAMRd08oVQDg5IBaNIBXNjw4YtCmCyoIAA9okQIIeWQyqoc8ZCYWSFgEFDQQJoQpAhZxSVMRWwoQJZAAHgR%2BXoQAPltbMjYIQgxMNiYAOkEIAEcyiCY4V1cVvXW%2BTYgtqmWQYCM5JTweF0lm%2BwHuqBwAF4QDJiCB4kVUhksnAABT2U4AGRgyAIoToAC4MIJbiBXABKSyLZZqRzOZLUpZ0CAiS43O5o8l2RnfBzSJj4CBnPAwOiolRs273FSUnnfIHzEBlQR4MkgaFYU5nZCCOhMKm85aovpkKQGECormQrbcw2GzXnX7SAL4IGCAD82rSQk5ILt32QpDYIgACkooKchZcBXguJaDf7lg6zk7-q7dOqYRA4QBBb3CcRpwG6eOLOV2%2BQs5yo5V4AA0dhATDYdCkyDwROTqZdxcEZ2brfbZPJ5f9ZywslRqOjJiYECtNoWibtXfBCH7aDgZRY0Jn-KFa%2B3fuX30uW8EUhAe6kc7OzGkpZPywpo7t4%2BwUinBFQyAXxy1YKbkKHDtqS0LfmgI5PksZyOHA1aoroSiCH%2Bq5AWcSFCJmmEoa%2BhpnPIoTtngZBTn%2BS7QUsaEQmcWI4niYSZh0eBzseJ4Umx3wUqWr5nsql7UQgbGuDyPLEJUeCIBySikVyFH2icjp-D2bqesg%2Ba%2BjyIkiRQazQG8EKfN8KyDPASA-iAai1pCABEmBwHAfBMASeh6EwpB8GwZxtBwejIJ5eh8BAMBvBAegAKwAIw2SAfQgAAPpKHLxUZdq7MAbDyFe1xSnAtFMNiuL4o8eEgGc5WsPR%2BJleVr67HomUleW6WZdl7L3GcIF4LcJXLiGugClIRK7AAUgAyikAByG6CPimVkG1uWdaBQptjovVpbYDXyBtSzPKZww-p8zyvO8nw0LQFBAA&format=glimdown

<!-- 

Here, same as before, we have a long file

!! scroll, skim it

this is quite a bit of code -- let's see what all it does

We're trying to handle loading state, error state, reactivity,
and we want to have stable reference to this state, so at-cached is needed,
we also need to handle cleanup, the combination of AbortController + willDestroy provides that...
but also _reactive_ cleanup as the URL argument changes.

-->



---
transition: fade
layout: two-cols
---

# `fetch` <span class="inline-subtitle">after ...</span>

::left::

```gjs
export const RemoteData = resourceFactory((url) => {
  let state = 
    new TrackedObject({ isLoading: true });
  let controller = new AbortController();
  
  return resource(({ on }) => {
    on.cleanup(() => controller.abort());

    fetch(url, { signal: controller.signal })
      .then((response) => {
        state.status = response.status;
        return response.json();
      })
      .then((data) => state.value = data)
      .catch((error) => state.error = error)
      .finally(() => {
        state.isLoading = false;
      });

    return state;
  });
})
```

::right::

```gjs
import { RemoteData } from './remote-data';

<template>
  {{#let (RemoteData @url) as |request|}}
    {{#if request.isLoading}}
      ... loading ...
    {{/if}}

    {{#if request.value}}
      Result: {{JSON.stringify request.value}}
    {{/if}}
  {{/let}}
</template>
```


---
transition: fade
---

<div class="slide-category">

`fetch`

</div> 

# [`RemoteData`][fetch-demo-1]

<style>
    .fetch-video {
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
  class="fetch-video"
  src="/pages/main/examples/recordings/remote-data.webm"></video>


[fetch-demo-1]: https://limber.glimdown.com/edit?c=MQAgSgpgtg9gLhAIgQzsgUOgBjg5gKwGcQAbASwDcJ0B6GkAIQCcyIAzEMqABxOggB2aOGRgCQMDrXoALOHG6EAXHVxk4MgK4AjAHQBjGFBoA5TSRIA1GAA8ACjG7myNaNohMAtEwiEYmpn1fGm0SGG0aKGQyAVcody8fPwCgwhpCQJpNERIaH1gETwATVGRdOEJ0Lm4YJjgQAGEjGoFBerYmIxAAcgABXHIoKA8aQx4xNu6AbirxupAAbxA4JmR9AGsIIpAAXxAOrr6BrmGmGhW19Zjcadma%2BaWxXf3OqB7etxHYIrI2ViZbtVavUlgAVVYbLYAeW0%2BAg%2BnqewOb26F0hRU82k0ZBIcE8MUIgLmIJASX8gQgADE1nBagBPAA0pN85KCz2RPU%2BiRZKV8t0whgEhHqARIlNqIAAvCAABRkIoASilAD4QFg5AplHRCAB3ZDcMi6IoQCg0fUubgQRx8GgAEgW8p2WBm6EFwvA0HgSFKUuZyQp1IR9JlMtFSslqoW6BApAg9WFqAgvtaOpA4Mu0Nh8LgMqWZEIABkYMgfgJcEplkxNBAmRRkCRqxWBOYSLsFTMY3x6oKVjALB5kxBUwBBbTAppCTr9pgy9vRkDznxwALiMm8kOPcQ7cOR%2BcxsQGPjIZvcEM7kA9qd8Ji6ZBjuqzucxmN7-Zx-QyUNMEhMpaEMi4AI9YVpefbXro-6AfWbavjG5QyIIIZJC0hAQOeUbPphIAJggEHCJoxDSshYioXhqAER2WExkuK5%2BihEC6EQYizpRmHbrBIDwYhMolGg544QxdYNkm0q8cgCocQYqAfiGHidEw-HCAxckStKKkKZJfxARYdJniqiwcTGAm6PmRYltcvpsPWqGsc%2B24uq%2BNFMOIAmUfZ6DuegAA8CA8CQibKvOCwLMAXaypABTemgsqiuKTAgAArAAjAqSrIMQAA%2BPgAI7VsKGU7Dsr7BcAvzMrlvhwCZhbFqWuCFZJui6KQtUWcFvSOnsTW6MVCwQCQqGcBwOV5VVQnVg1VHBSNlW6ONDFAcMk3PsFNC-Mtq1dg1XnnNAvABdgODoEAA&format=glimdown

<!-- 
I found out that the QR-code generating component that I'm using throws an error when URLs get too long.
Kinda silly.

But here's a demo!

The source code for this presentation has the direct link to this demo.

There is a bit of extra code in here to 
allow it to be more interactive and demonstrate the reactivity of the Resource.
I'm mostly showing it to try to prove this isn't smoke and mirrors.


-->

---
transition: fade
---

<div class="slide-category">

`fetch`

</div> 

```gjs {all|7-9}
import { resource } from 'ember-resources';
import { RemoteData } from 'ember-resources/util/remote-data';

const urlFor = (specifier) => `https://swapi.dev/api/${specifier}`;

const LoadData = resource(({ use }) => {
  const people = use(RemoteData(urlFor('people')));
  const planets = use(RemoteData(urlFor('planets')));
  const starships = use(RemoteData(urlFor('starships')));

  return { 
    get people() { return people.current; }, 
    get planets() { return planets.current; },
    get starships() { return starships.current; } 
  };
});

<template>
  {{#let (LoadData) as |requests|}}
    {{#each-in requests as |label request|}}
      {{label}}: 
      {{#if request.isLoading}} ... loading ... {{/if}}
      {{#if request.value}} {{request.value.results.length}} {{/if}}
      <br>
    {{/each-in}}
  {{/let}}
</template>
```

<div class="corner-br">
<QRCode style="margin-bottom: 30px" size="340" value="https://limber.glimdown.com/edit?c=MQAgSgpgtg9gLhAIgQzsgNCAxjKAHGAZwgBMAoMgA2oHMArQkAGwEsA3CMl-GAJzhABvELwiEYAV15YIIAL4gAZr1wgA5NABGEXgFpR4qTMJqA3Fx78h4aPCSpk8pSqjqtO-WMnSxAeglwLEy%2BorAIuiQOZhQ4AHaEAlJMAGJ8IAC8IAAUhHgQWCyKLDoAlBkAfCCUABZwcHiEAFy%2BvoQA7sh4LAB0JBBsvp0svgAkgrn5hcW8cpTmZHEJIAAyMMgkKGgZIl5GEFlZwhLE8mXplYJkINgw8QJ5MHhMspnH%2B5Bh9mhZSam8WWoHk8IGoSmDzNdFvcmMhYhA4IxXsQsh87JtkD9eCk%2BACnrD4SYwSUITc7iAEsheIRqiwGts3ijbAh0Zjsf81BSqTSGqDwRRrqI4FJYtYrtcQDR4SAgc8smVhILhdKII9nt0sFJRLE4KZ5JgxddJdD8Qi5dZFbwRXi4Qj1ZqINrdXJ0AaJVLOdTaYQzQr4UqPdzCHbeFqdU4xXJzHJiRQADwIfAwhDlMWCQTAZ4CLKrdbosrIRgAH1EAEcJGIEYW5HJXWngBBkFhqroWCLS%2BWEowCyBCzDtEwdmWK1Wa%2BLxWm%2BxAmNXGiB%2BWOhOnCoOO3BuixCDmSK2aNWQN0D8w1tvYjR94e075CtXXdc68v2xXumxkExy3u04%2BEs-X%2BXugYJCYW1nlPOBqg-QQr0UG8FxAWNNF4FMx0vBsmxbWIYMXXxMxvWNfATPFkyoagyCAA&format=glimdown"></QrCode>
</div>

<!-- 

What's super cool about using Resources to manage data fetching, is that you can 
then compose them...

...and you still get individual reactivity per resource.


!! click

Here, we configure RemoteData on 3 different endpoints

note here that this uses an example util from ember-resources.
fear not! ember-resources is a v2 addon, so if you don't import it, you don't pay for the bytes.

-->

---
transition: fade
---

<div class="slide-category">

`fetch`

</div> 

<style>
    .fetch-video {
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
  class="fetch-video"
  src="/pages/main/examples/recordings/composable-fetch.webm"></video>


<!-- 

When rendered it looks like this,

on the right,

you can see that each request, for people, planets, and starships,
takes its own amount of time to load.

This can be as fine-grained, or as combined as you need.

Like, some UX patterns may want fewer loading indicators than what you see here.



-->
