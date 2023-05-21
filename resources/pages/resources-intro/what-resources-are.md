---
transition: fade-out
---

# What's a Resource?

<!-- -->

---
transition: fade-out
---

# A Resource is like...

a hook

<!-- -->

---
transition: fade-out
---

# A Resource is like...

a cached getter

<!-- -->

---
transition: fade-out
---

# A Resource is like...

a memoized cached getter hack

<!-- -->


---
transition: fade-out
---

# tl;dr: 

<style>
    code {
        font-size: 1.5rem;
        line-height: 1.75rem;
    }
</style>

- derived data is the secret to performance 
- resources help you model any situation as derived data.
- to get started:

    ```bash 
    pnpm add ember-resources
    ```

    Docs: [https://ember-resources.pages.dev/](https://ember-resources.pages.dev/) 

<br>
<br>



<div class="abs-br m-6 flex gap-2">
  <a href="https://github.com/NullVoxPopuli/ember-resources" target="_blank" alt="GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!-- -->

---
transition: fade-out
---

# These look familiar?

When squinting, they kinda look like effects, yet are derived data, and effects cause performance issues by rendering more times than needed.
Also, like hooks, in that they can be composed, and represent a value.

    ```js 
    const CurrentTime = resource(() => { /* ... */ });

    export const FormattedTime = resource(({ use }) => {
        return use(CurrentTime);
    });
    ```

<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->
