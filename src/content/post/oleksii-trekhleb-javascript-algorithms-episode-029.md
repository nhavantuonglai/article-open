---
pubDatetime: 2018-06-10T10:10:00Z
title: Oleksii Trekhleb | Javascript algorithms (Fast powering algorithm)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0529.jpg
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

The power of a number says how many times to use the number in a
multiplication.

It is written as a small number to the right and above the base number.

![Power](https://www.mathsisfun.com/algebra/images/exponent-8-2.svg)

## Naive Algorithm Complexity

How to find `a` raised to the power `b`?

We multiply `a` to itself, `b` times. That
is, `a^b = a  a  a … a` (`b` occurrences of `a`).

This operation will take `O(n)` time since we need to do multiplication operation
exactly `n` times.

## Fast Power Algorithm

Can we do better than naive algorithm does? Yes we may solve the task of
powering in `O(log(n))` time.

The algorithm uses divide and conquer approach to compute power. Currently the
algorithm work for two positive integers `X` and `Y`.

The idea behind the algorithm is based on the fact that:

For even `Y`:

```text
X^Y = X^(Y/2)  X^(Y/2)
```

For odd `Y`:

```text
X^Y = X^(Y//2)  X^(Y//2)  X
where Y//2 is result of division of Y by 2 without reminder.
```

For example

```text
2^4 = (2  2)  (2  2) = (2^2)  (2^2)
```

```text
2^5 = (2  2)  (2  2)  2 = (2^2)  (2^2)  (2)
```

Now, since on each step we need to compute the same `X^(Y/2)` power twice we may optimise
it by saving it to some intermediate variable to avoid its duplicate calculation.

Time Complexity

Since each iteration we split the power by half then we will call function
recursively `log(n)` times. This the time complexity of the algorithm is reduced to:

```text
O(log(n))
```

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>