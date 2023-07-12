---
transition: fade-out
layout: two-cols
---

# Rethinking Reactivity

<Arrow x1="250" y1="125" x2="500" y2="125" />
<Arrow x1="350" y1="225" x2="500" y2="180" />
<Arrow x1="370" y1="345" x2="520" y2="270" />
<Arrow x1="350" y1="425" x2="520" y2="300" />

::left::

<ul class="display-list">
    <li><code>@tracked</code></li>
    <li>
        helpers
        <ul class="display-list">
            <li>function helpers</li>
            <li>
                class helpers
                <ul class="display-list">
                    <li>tracked state</li>
                    <li>cleanup</li>
                </ul>
            </li>
        </ul>
    </li>
</ul>


::right::


<ul class="display-list" v-click="1">
    <li>values</li>
    <li>functions</li>
    <li>functions <em>with lifetime and cleanup</em></li>
</ul>


<!-- 

I'd like to propose, we as a community rethink reactivity in general.



-->
