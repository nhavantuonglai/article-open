---
pubDatetime: 2009-11-01T10:00:00Z
title: Oleksii Trekhleb | Javascript algorithms (Rail rence cipher)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0084.jpg
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

The rail fence cipher (also called a zigzag cipher) is a [transposition cipher](https://en.wikipedia.org/wiki/Transposition_cipher) in which the message is split across a set of rails on a fence for encoding. The fence is populated with the message's characters, starting at the top left and adding a character on each position, traversing them diagonally to the bottom. Upon reaching the last rail, the direction should then turn diagonal and upwards up to the very first rail in a zig-zag motion. Rinse and repeat until the message is fully disposed across the fence. The encoded message is the result of concatenating the text in each rail, from top to bottom.

From [wikipedia](https://en.wikipedia.org/wiki/Rail_fence_cipher), this is what the message `WE ARE DISCOVERED. FLEE AT ONCE` looks like on a `3`-rail fence:

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. E . R . D . S . O . E . E . F . E . A . O . C .
. . A . . . I . . . V . . . D . . . E . . . N . .
-------------------------------------------------
             WECRLTEERDSOEEFEAOCAIVDEN
```

The message can then be decoded by re-creating the encoded fence, with the same traversal pattern, except characters should only be added on one rail at a time. To illustrate that, a dash can be added on the rails that are not supposed to be populated yet. This is what the fence would look like after populating the first rail, the dashes represent positions that were visited but not populated.

```
W . . . E . . . C . . . R . . . L . . . T . . . E
. - . - . - . - . - . - . - . - . - . - . - . - .
. . - . . . - . . . - . . . - . . . - . . . - . .
```

It's time to start populating the next rail once the number of visited fence positions is equal to the number of characters in the message.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>