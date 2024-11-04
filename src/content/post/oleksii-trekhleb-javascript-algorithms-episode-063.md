---
pubDatetime: 2018-07-14T10:10:00Z
title: Oleksii Trekhleb | Javascript algorithms (Longest increasing subsequence)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://nhavantuonglai.com/image/cover/001-563.jpg
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

The longest increasing subsequence problem is to find a subsequence of a given sequence in which the subsequence's elements are in sorted order, lowest to highest, and in which the subsequence is as long as possible. This subsequence is not necessarily contiguous, or unique.

## Complexity

The longest increasing subsequence problem is solvable in time `O(n log n)`, where `n` denotes the length of the input sequence.

Dynamic programming approach has complexity `O(n  n)`.

## Example

In the first 16 terms of the binary Van der Corput sequence

```
0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15
```

a longest increasing subsequence is

```
0, 2, 6, 9, 11, 15.
```

This subsequence has length six; the input sequence has no seven-member increasing subsequences. The longest increasing subsequence in this example is not unique: for instance,

```
0, 4, 6, 9, 11, 15 or
0, 2, 6, 9, 13, 15 or
0, 4, 6, 9, 13, 15
```

are other increasing subsequences of equal length in the same input sequence.

<figure><img src="https://nhavantuonglai.com/image/cover/001-127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>