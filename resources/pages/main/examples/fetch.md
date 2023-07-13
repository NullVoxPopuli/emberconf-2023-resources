---
transition: fade
layout: two-cols
---

# `fetch` <span class="inline-subtitle">before ...</span>

---
transition: fade
---

# `fetch` <span class="inline-subtitle">after ...</span>


[fetch-resource]: https://limber.glimdown.com/edit?c=MQAgSgpgtg9gLhAIgQzsgUOgBjg5gKwGcQAbASwDcJ0B6GkAIQCcyIAzEMqABxOggB2aOGRgCQMDrXoALOHG6EAXHVxk4MgK4AjAHQBjGFBoA5TSRIA1GAA8ACjG7myNaNohMAtEwiEYmpn1fGm0SGG0aKGQyAVcody8fPwCgwhpCQJpNERIaH1gETwATVGRdOEJ0Lm4YJjgQAGEjGoFBerYmIxAAcgABXHIoKA8aQx4xNu6AbirxupAAbxA4JmR9AGsIIpAAXxAOrr6BrmGmGhW19Zjcadma%2BaWxXf3OqB7etxHYIrI2ViZbtVavUlgAVVYbLYAeW0%2BAg%2BnqewOb26F0hRU82k0ZBIcE8MUIgLmIJASX8gQgADE1nBagBPAA0pN85KCz2RPU%2BiRZKV8t0whgEhHqARIlNqIAAvCAABRkIoASilAD4QFg5AplHRCAB3ZDcMi6IoQCg0fUubgQRx8GgAEgW8p2WBm6EFwvA0HgSFKUuZyQp1IR9JlMtFSslqoW6BApAg9WFqAgvtaOpA4Mu0Nh8LgMqWZEIABkYMgfgJcEplkxNBAmRRkCRqxWBOYSLsFTMY3x6oKVjALB5kxBUwBBbTAppCTr9pgy9vRkDznxwALiMm8kOPcQ7cOR%2Bcxthx-QyUNMEhMpaEMi4AT1is9qd8Ji6S-X%2BttvcxkDlGSCENJFqEBAO6LB%2Bn4gAmCDPsImjENK-5iIBUGoDBHZgZ%2BS4rn6AEQLoRBiLOqFgduoFfhov4yiUaDAVGaGfhBOF1g2SbSpRyCEZ%2BxG0QYqBHiGHidEw1EkTG9G6PxErSuJTDsTG266H8N4WHSIZCbRInCDh%2BZFiW1y%2Bmw9aATJbYumBGFMOI9GoduMzEa6CH1HYHh%2BOI0oADwIDwJCJsq84LAswBdrKkAFN6aCyqK4pMCAvTygqSrIMQAA%2BPgAI7VsKiU7DsH5%2BcAvzMmlvhwLoWnFqWuBZSRujVaQZW6X5MVFFlX7VTlCwQCQgGcBwqXpcVjHVpVtF%2Bb1RW6ANOE3sMQ2fn5NC-DNc1dpVrnnNAvDeZgEA2Pc9TGvp5jdl5hDEIgnogNtCACEUxBNOMrRCCBMa9GimzbPKvoAKwAIyoZo3CURAACS2zSjKJptMBGj5iVoMXVQQjlMgTC4HG431tWJkgO561eQgPlga5PwUCA%2BjHYQkoAERjkwxpRdwngACwgLgLDbLg%2BpM5TBNqa5jlMM50XypKfnQ4QsPNTQPnCdjXnuCQPNqZ%2B-OC0DiAy4TMROHAGtqXAdKWpK3TNvEHjdLrtFkwlFPdDTdMgNwNieAAzA7dKeAATObStKxNIsLGLEvZT7al%2BU83Ra9k3TLDIMP-YDINZYraGrXLHXJ6txM86tHkbfj6DZTgWDoEAA&format=glimdown

[fetch-resource-abort-even]: https://limber.glimdown.com/edit?c=MQAgSgpgtg9gLhAIgQzsgUOgBjg5gKwGcQAbASwDcJ0B6GkAIQCcyIAzEMqABxOggB2aOGRgCQMDrXoALOHG6EAXHVxk4MgK4AjAHQBjGFBoA5TSRIA1GAA8ACjG7myNaNohMAtEwiEYmpn1fGm0SGG0aKGQyAVcody8fPwCgwhpCQJpNERIaH1gETwATVGRdOEJ0Lm4YJjgQAGEjGoFBerYmIxAAcgABXHIoKA8aQx4xNu6AbirxupAAbxA4JmR9AGsIIpAAXxAOrr6BrmGmGhW19Zjcadma%2BaWxXf3OqB7etxHYIrI2ViZbtVavUlgAVVYbLYAeW0%2BAg%2BnqewOb26F0hRU82k0ZBIcE8MUIgLmIJASX8gQgADE1nBagBPAA0pN85KCz2RPU%2BiRZKV8t0whgEhHqARIlNqIAAvCAABRkIoASilAD4QFg5AplHRCAB3ZDcMi6IoQCg0fUubgQRx8GgAEgW8p2WBm6EFwvA0HgSFKUuZyQp1IR9JlMtFSslqoW6BAzLgAXEZN5Ice4h24cj0ZjpAg9WFqAgvtaOpA4Mu0Nh8LgMqWZEIABkYMgfgJcEplkxNBAmRRkCRO22BOYSLsFTMs9n6oKVjALB5CxBiwBBbTAppCTqzpgy0eZzMxsQGPjIQfcEPpkBTjd8Ji6ZArurbnd7-Y5-QyUNMEhMpaEMi4AS9m2l4zteui-v%2BvYjs%2BMblDIgghkkLSEBA6aIWIyG6EQYiPtBICwfBMolGg555ggug9n2BbSkRyAKrh%2BECDKyCEHSAj6LK55FiAdivLWEAymSJBUCqIDIXAoJcFa2QCSyQldiAACsAAMKkKmp9H6Kgb4hh4nRMCRwgQLoukStKJn6fRfwARYdJniJpFGbWDZNtcvpsL2yFPuOPhxkw4gOWOI4zGmArofUdgeH44jSgAPAgPAkPmyqZgsCzAHw9QypABTemgsqiuKTAgL08pqSAzEgAAPj4ACOnbCpVOw7M%2BqXAL8zJ1b4cC6E5jbNrgTX0bouikH1rmpSVRRNXhw0tQsEAkMhnAcLV9XdRRnaDeOMapatXXkb2na6ABwxbVmqU0L8Z0XRlg0xec0C8ElmDjm69S1gAolQ0WyoOUCcZobwAKQgAATFKkrSkpLoQDY9z1Ma7nmJOiWEMQiCeiAsMIAIRTEE04ytEIiyZr0aKbNs8q%2BgpACMgWaNwREQAAkts0oyiabTnhotY9WzWPfd1aBMLgOYHZRLoxnFj2JQgyXjjFPwUBeqOEJKABE97GkV3CeAALCAuAsNsuD6vr6vy4saXtXKhBfYIywyLzpVndtIAxRFTBRcV8qSqlPOEHz000JbVuXWwg24VLiXuCQodu1mnve8ziBR9tMUxE4cBpwnyx0pakrdH9CTdDnCf6Krhda3O3A2J4ADMIDcHSnig6Xue5xtEB%2BwsAdB81HcJ6lTzdJn2TdI7vMM0zrNNfHCs0DHC3x-dSuW-d8VPXL6DNTgWDoEAA&format=glimdown