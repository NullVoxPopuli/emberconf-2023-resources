---
layout: center
---

# Octane Patterns are not enough

<!-- 
There are specific patterns for which Resources 
fit really nicely in to these awkward situations.
-->

---

# Route-based data-loading is not enough

<h2 v-click>Loading data in and from components is non-trivial</h2>

---

# Lifecycle Management

timeline of improvements:

Note: still undecomposed components 
- migratory period:
  - did-insert 
  - did-update
  - will-destroy  


- 3.22: Destroyables - primitive for destroying 
- 
- how do you make sure you clean up when applicable?
  - what if you didn't have to worry about it?


---

# Leaky shallow abstractions 

- Components often intermingled with lifecycle modifiers
- Components often intermingled with multiple responsibilities
- Where does the component boundary end and the *feature* boundary begin?

Octane: 
- decomposition required using a lot of files, not so with template tag -- decomposition is easy 