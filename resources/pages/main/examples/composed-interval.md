---
transition: fade
---

# An interval <span class="inline-subtitle">composed ...</span>

```gjs
import { resource, cell, resourceFactory } from 'ember-resources';

const Time = resource(({ on }) => { /* ... */ });

const FormattedTime = resourceFactory((locale) => {
    const formatter = 
      new Intl.DateTimeFormat(locale, { /* ... */ });

    return resource(({ use }) => {
        const time = use(Time);

        return () => formatter.format(time.current);
    });
});

<template>
  {{FormattedTime "en-US"}}<br>
  {{FormattedTime "es-PR"}}<br>
  {{FormattedTime "ko-KR"}}<br>
  {{FormattedTime "ja-JP"}}<br>
</template>
```

<div class="corner-br">
<QRCode size="400" value="https://limber.glimdown.com/edit?c=FAEQpgtg9gBAZgJyhGkBGYEGMoDs4wBMADIQMzDAAGNA5gFYDOMANgJYBuYwbEADlAQAXGAG8YCMIygBXbGAA0MLGBYslk6XJUAxAIZYhggJ4wAvvCQoA5OkwBaTbPmNrAbko5cjEQBVeYDAAvBJSzioAFBHieOYAlMEAfGLAMMp4PjBCAcHKqiwRuGAA7jAgekJgEXFxHmlemWy4lQgceiy5qWkwjGBCAJLNmG0F1UlZAQB0WHKSzblFpeWV1UoAjMSbtZRpeNMsYHq4MnxRCUHJWAd6CIMtIxFN9%2B01Hl2SQnK4ExBgHmbbYANEQ6QQQCqVAAm-l%2BuSc2jA%2BkMJiiLCgWHaYHOyVEXWB8DBEMwnW6MEWMDuLEmyzAMMRhKEETRGIOSlxpLSAAtnAAuGAAImOvwQbCw-IUXVJECaMkqfMFMmFovFku6vS8kPlQswyolHJg3Lka0IfKECBkilVALepI%2BX1CWnkUXEMl68XG7P16W8IlwUFKIVdVTp2y9oU%2BCG%2BYwuBIQ4KELUmcAZhX901mYGaoe61uAueAAB5KvwWBUwIkuqJRKC40ToTl%2BZn7ABVADK-LMZgLaAQFbSVZr8ahdIFUnsAAUAEodrs9vtiasM4cNgDWUHsAGlp53u73K4vawmwPXYfz6Hp7AApccz3cVgsAemLfFLlQrlBoVGAQA&format=glimdown"></QRCode>
</div>

<!--

Here we compose, using the `use` utility given to us by the `resource`.
And format the current value of the Time resource.

I've set up an argument-receiving function so that we can see 
how we can use this composition to make re-usable, yet configurable
atomic concepts.

-->


---
transition: fade
---


<style>
    .composed-interval-video {
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
  class="composed-interval-video"
  src="/pages/main/examples/recordings/composed-interval.webm"></video>


<!--

And here is what that looks like.

At the top here is the original time-providing resource.
and then we can compose it just underneath.

This is using the INTL-DateTimeFormat built in utility.

and we can render the current time in 4 different locales.

-->
