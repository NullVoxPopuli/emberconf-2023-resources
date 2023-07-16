---
transition: fade
layout: two-cols
---

# A WebSocket <span class="inline-subtitle">before ...</span>

<style>
    .slidev-code-wrapper {
        max-height: 440px;
        overflow: auto;
    }
</style>

```gjs
export default class Demo extends Component {
    @tracked lastMessage = null;

    constructor(owner, args) {
        super(owner, args);

        this.#channel = Channel.subscribe(this.args.channelName);
        this.#channel.onMessage((message) => {
            this.lastMessage = message;
        });
    }

    get mostRecent() {
        let { channelName } = this.args;

        return this.lastMessage === null
            ? `[${channelName}] No messages received yet`
            : `[${channelName}] ${this.lastMessage.current}`;
    }

    willDestroy() {
        this.#channel?.unsubscribe();
    }

    <template>
      Most recent: {{this.mostRecent}}
    </template>
}
```

<!-- 
In this example, let's say we want to know the most recent person to have seen
the new spiderman movie: across the spiderverse.

We can assume that the method of retrieving that information exists, and the
implementation might look a little something like this.


this isn't a *lot* of code, but it does require scrolling

!! scroll to the bottom


What we are calling a value is "the most recent person to have seen Across the SpiderVerse"
-->

---
transition: fade
layout: two-cols
---

# A WebSocket <span class="inline-subtitle">after ...</span>

```gjs
const MostRecent = resourceFactory((channelName) => {
  return resource(({ on }) => {
    const lastMessage = cell(null);
    const channel = Channel.subscribe(channelName);
 
    channel.onMessage((message) => lastMessage.set(message));
    on.cleanup(() => channel.unsubscribe());
 
    return () => lastMessage.current === null
        ? `[${channelName}] No messages received yet`
        : `[${channelName}] ${lastMessage.current}`;
    };
  });
});

<template>
    Most recent: 
      {{MostRecent "Across the SpiderVerse"}}
</template>
```

<div class="corner-br">
<QRCode 
  size="390"
  value="https://limber.glimdown.com/edit?c=MQAgMglgtgRgpgJxAUQCYQC4HsEChcAicUWAdgM4YICGGEZIWAZiNSAEpzlYCuCAxnBAYAFrRAI4AB0nk4pDOWEihAIhKUJcQQpBQu5agHM4qrYIgA3OKkalWIAOpwYAZSz8A1nAwgAwmKkpHAANgB0%2BAAG0UYAVkohVnC40FI4vgDeWtx8ggBi1PzYCACeADTZvAJwFYIhISAAviBMCFhQIADkxPAIALSyVYLknQDc%2BAD0AFRTIAAKkhjytgHUQaEgqSHE8hi09PZMOCAwkpaYJSBTE7j8ZJqr6w0AvCAZuCAg5Dww5PwIEHgAC4QAAKfiBYIhABy1H0AEoQM8AHxvD6fEDbXz8aj1GCFTxKV4AbQAuuMMZifJsFIhLLikV8fABJWkIekhUGgxEotGUz5Yza2V4AWVoIjCbR4pFQoLFokla1Q7W5VxAAA4AAyIgDUIAAjBT%2BYKQHwXiBIiIMBgpOQgRMJuQAO7UKQQMKoOCWCauiATAAkGQhayhsP0jQDGQgqEakXw-JaPghoLN8PRCbConkoNkaQoQl5ufucDC8TI3LTCc%2BmZUpFBqFobF57yrGJxeIJ5DCUFd4NxIXxXiRqPbA4J9cbYVIcLg8MrVca8KNn0aFX1mo3S-jGMWfHsLf5ZBFBmMcBBoKYpB5I-7g8JYSkPHIIgvV7K6Yx0u%2Bv3%2BgLPYOvPkq1HO8iRAMll35fhtmoBBWSWdlcVBCA2Q5LcE0aD9MJXXBMNue5fBFLBKE4HRfFeQZcjgAoihwEouWDJ4w1nYcgN3BB7Eo6ouSyBhF1Yg9PjuChfBCahKGPchDBMRk6k5UgeHqdC2wIkBGKhRlHihMJvz%2BAF4HBSFQmY9CP3U0IwiPE8TC5fQpNPQCxIk6ySzkDBQTs6TZ2Uz4yDCaC4DWHgpC5QDzPCL8fj0v8K3GD92PsVVeScjBJK8-y%2BEkXRnhykAFPqD9PgAfgtYlA3C5jGlJEBoSwPQXKUSQLGsWwSh8OMExBSIyqDIyYRnKqQEDFK0tPDKECyjBYyNRdxlm-AAB4ligKQxKWZF0QW9BLC%2BDASm2Z5VBgHBPQQEF9SkAAPL4sESVBRhAKRqFQdBSCMc7JCgUZVA2ykiM0JrdhBDIMn%2BjBSN2EBVCkOAsFW0xGmwkAFombaNpR5bVtoOANuiOMgA&format=glimdown">
</QRCode>
</div>

<!--
When using a resource, we have a much easier time managing Socket information.

Cleanup is straightforward and co-located, 
we can manage state in an encapsulated fashion.

And we can define a sort of getter for formatting the output.

This QR code might be a little too bonkers.

So here is what the output looks like:
-->

---

<div class="related-note">WebSocket</div>

<style>
    .socket-video {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        height: 100%;
    }
    .slidev-page{
        background: black;
    }
</style>

<video 
  controls loop 
  autoplay
  class="socket-video"
  src="/pages/main/examples/recordings/socket.webm"></video>

<!--

This demo is using the starwars api... because it's free 

-->
