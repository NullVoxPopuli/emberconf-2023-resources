--- 
transition: fade
layout: center
---

# Load data anywhere without any downsides

<!--

In ember, there are a couple places to load components:

- in routes
- and not in routes 

loading data outside of routes is immensely useful when you would otherwise be forced to drill props through countless layers of components. 

Some folks imperatively manage data as properties on a service, updated from routes, but this is troublesome due to how error-prone unencapsulated behaviors _are_.

A common thing developers reach for, and something resources make easier, is fetching data within components. However, If not properly managed, this could lead to the n+1 data loading problem, where you render a list, and that list renders a component where each item within that list makes yet another request.

Today - This can be mitigated by making the implementation of data-fetching resources use a 

backing service to manage a shared cache between the resources, and also batch requests together to minimize the number of requests.

In yesterday's Keynote, we saw that Resources will soon power 
the next generation of route-loading behavior, and mitigate waterfall data fetching.

Very exciting!!

-


Don't say this live:

I think that ember-data should implement this by default, because it'd be the ember-data cache that the default ember-data experience could benefit from -- similar to TanStack Query.
-->

