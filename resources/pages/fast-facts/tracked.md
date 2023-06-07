---
transition: fast-fact
---

<div class="fast-fact">

# <fa-angle-double-right /> Fast Fact! <fa-angle-double-right />

</div>

## _`@tracked` can be thought of as a light wrapper around reactive values_

```js {all|11-16}
function tracked(target, key, descriptor) { /* "legacy decorator" (stage 1) */
	let cache = new WeakMap();
	let getCell = (ctx) => {
		let reactiveValue = cache.get(ctx);
		if (!reactiveValue) {
			cache.set(ctx, reactiveValue = cell(descriptor.initializer?.()));
		}
		return reactiveValue;
	}
	return {
		get() {
		  return getCell(this).current;
		},
		set(value) {
		  getCell(this).set(value);
		}
	}
}
```
<div class="disclaimer-footnote">*not real implementation, approximation</div>

<!--

TODO: do I just want to get rid of this slide? decorator implementation isn't important

[[ **In a de-emphacized tone**  this isn't important to the talk, but could be fun ]]

The `@tracked` decorator could be thought of as a small wrapper
around reactive values.

!! click

The decorator only needs to provide native getter/setter functionality
around the "reactive API", similar to what we saw on the right-hand side of the last slide.

-->


