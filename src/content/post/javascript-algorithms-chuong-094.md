---
pubDatetime: 2018-05-01T10:10:00Z
title: Oleksii Trekhleb | Javascript algorithms (Sieve of eratosthenes)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://nhavantuonglai.com/image/cover/001-594.jpg
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

The Sieve of Eratosthenes is an algorithm for finding all prime numbers up to some limit `n`.

It is attributed to Eratosthenes of Cyrene, an ancient Greek mathematician.

## How it works

1. Create a boolean array of `n + 1` positions (to represent the numbers `0` through `n`)
2. Set positions `0` and `1` to `false`, and the rest to `true`
3. Start at position `p = 2` (the first prime number)
4. Mark as `false` all the multiples of `p` (that is, positions `2  p`, `3  p`, `4  p`… until you reach the end of the array)
5. Find the first position greater than `p` that is `true` in the array. If there is no such position, stop. Otherwise, let `p` equal this new number (which is the next prime), and repeat from step 4

When the algorithm terminates, the numbers remaining `true` in the array are all the primes below `n`.

An improvement of this algorithm is, in step 4, start marking multiples of `p` from `p  p`, and not from `2  p`. The reason why this works is because, at that point, smaller multiples of `p` will have already been marked `false`.

## Example

![Sieve](https://upload.wikimedia.org/wikipedia/commons/b/b9/Sieve_of_Eratosthenes_animation.gif)

## Complexity

The algorithm has a complexity of `O(n log(log n))`.

<figure><img src="https://nhavantuonglai.com/image/cover/001-127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>