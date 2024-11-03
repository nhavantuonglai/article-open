---
pubDatetime: 2018-06-21T10:10:00Z
title: Oleksii Trekhleb | Javascript algorithms (Heap data-structure)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0540.jpg
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

In computer science, a heap is a specialized tree-based
data structure that satisfies the heap property described
below.

In a min heap, if `P` is a parent node of `C`, then the
key (the value) of `P` is less than or equal to the
key of `C`.

![MinHeap](https://upload.wikimedia.org/images/min-heap.jpeg)

Made with [okso.app](https://okso.app)

In a max heap, the key of `P` is greater than or equal
to the key of `C`

![MaxHeap](https://upload.wikimedia.org/images/max-heap.jpeg)

![Array Representation](https://upload.wikimedia.org/images/array-representation.jpeg)

The node at the _top_ of the heap with no parents is
called the root node.

## Time Complexities

Here are time complexities of various heap data structures. Function names assume a max-heap.

| Operation | find-max | delete-max | insert| increase-key| meld |
| --------  - | -------  - | ---------  - | ----  - | ----------  - | ---  - |
| [Binary](https://en.wikipedia.org/wiki/Binary_heap) | `Θ(1)` | `Θ(log n)` | `O(log n)` | `O(log n)` | `Θ(n)` |
| [Leftist](https://en.wikipedia.org/wiki/Leftist_tree) | `Θ(1)` | `Θ(log n)` | `Θ(log n)` | `O(log n)` | `Θ(log n)` |
| [Binomial](https://en.wikipedia.org/wiki/Binomial_heap) | `Θ(1)` | `Θ(log n)` | `Θ(1)` | `O(log n)` | `O(log n)` |
| [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_heap) | `Θ(1)` | `Θ(log n)` | `Θ(1)` | `Θ(1)` | `Θ(1)` |
| [Pairing](https://en.wikipedia.org/wiki/Pairing_heap) | `Θ(1)` | `Θ(log n)` | `Θ(1)` | `o(log n)` | `Θ(1)` |
| [Brodal](https://en.wikipedia.org/wiki/Brodal_queue) | `Θ(1)` | `Θ(log n)` | `Θ(1)` | `Θ(1)` | `Θ(1)` |
| [Rank-pairing](https://nhavantuonglai.com/) | `Θ(1)` | `Θ(log n)` | `Θ(1)` | `Θ(1)` | `Θ(1)` |
| [Strict Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_heap) | `Θ(1)` | `Θ(log n)` | `Θ(1)` | `Θ(1)` | `Θ(1)` |
| [2-3 heap](https://en.wikipedia.org/wiki/2%E2%80%933_heap) | `O(log n)` | `O(log n)` | `O(log n)` | `Θ(1)` | `?` |

Where:

  - find-max (or find-min): find a maximum item of a max-heap, or a minimum item of a min-heap, respectively (a.k.a. peek)

  - delete-max (or delete-min): removing the root node of a max heap (or min heap), respectively

  - insert: adding a new key to the heap (a.k.a., push)

  - increase-key or decrease-key: updating a key within a max  - or min-heap, respectively

  - meld: joining two heaps to form a valid new heap containing all the elements of both, destroying the original heaps.

> In this repository, the [MaxHeap.js](https://upload.wikimedia.org/MaxHeap.js) and [MinHeap.js](https://upload.wikimedia.org/MinHeap.js) are examples of the Binary heap.

## Implementation

  - [MaxHeap.js](https://upload.wikimedia.org/MaxHeap.js) and [MinHeap.js](https://upload.wikimedia.org/MinHeap.js)

  - [MaxHeapAdhoc.js](https://upload.wikimedia.org/MaxHeapAdhoc.js) and [MinHeapAdhoc.js](https://upload.wikimedia.org/MinHeapAdhoc.js)

  - The minimalistic (ad hoc) version of a MinHeap/MaxHeap data structure that doesn't have external dependencies and that is easy to copy-paste and use during the coding interview if allowed by the interviewer (since many data structures in JS are missing).

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>