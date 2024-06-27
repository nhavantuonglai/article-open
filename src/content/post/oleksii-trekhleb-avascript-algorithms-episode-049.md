---
pubDatetime: 2009-11-01T10:00:00Z
title: Oleksii Trekhleb | Javascript algorithms (Jump search)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0049.jpg
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

Like Binary Search, Jump Search (or Block Search) is a searching algorithm for sorted arrays. The basic idea is to check fewer elements (than linear search) by jumping ahead by fixed steps or skipping some elements in place of searching all elements.

For example, suppose we have an array `arr[]` of size `n` and block (to be jumped)
of size `m`. Then we search at the indexes `arr[0]`, `arr[m]`, `arr[2  m]`, …, `arr[k  m]` and so on. Once we find the interval `arr[k  m] < x < arr[(k+1)  m]`, we perform a linear search operation from the index `k  m` to find the element `x`.

What is the optimal block size to be skipped?
In the worst case, we have to do `n/m` jumps and if the last checked value is greater than the element to be searched for, we perform `m - 1` comparisons more for linear search. Therefore the total number of comparisons in the worst case will be `((n/m) + m - 1)`. The value of the function `((n/m) + m - 1)` will be minimum when `m = √n`. Therefore, the best step size is `m = √n`.

## Complexity

Time complexity: `O(√n)` - because we do search by blocks of size `√n`.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>