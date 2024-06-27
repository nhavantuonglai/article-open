---
pubDatetime: 2009-11-01T10:00:00Z
title: Oleksii Trekhleb | Javascript algorithms (Is a power of two)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0047.jpg
tags:
  - developer
  - github
  - github book
  - github guide
  - oleksii trekhleb
  - trekhleb
  - javascript
  - learn to code
  - training providers
  - training materials
---

Given a positive integer, write a function to find if it is
a power of two or not.

Naive solution

In naive solution we just keep dividing the number by two
unless the number becomes `1` and every time we do so, we
check that remainder after division is always `0`. Otherwise, the number can't be a power of two.

Bitwise solution

Powers of two in binary form always have just one bit set.
The only exception is with a signed integer (e.g. an 8-bit
signed integer with a value of -128 looks like: `10000000`)

```
1: 0001
2: 0010
4: 0100
8: 1000
```

So after checking that the number is greater than zero,
we can use a bitwise hack to test that one and only one
bit is set.

```
number & (number - 1)
```

For example for number `8` that operations will look like:

```
  1000
- 0001
  ----
  0111

  1000
& 0111
  ----
  0000
```

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>