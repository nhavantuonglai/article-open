---
pubDatetime: 2018-08-09T10:10:00Z
title: Oleksii Trekhleb | Javascript algorithms (Regular expression matching)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-05288.jpg
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

Given an input string `s` and a pattern `p`, implement regular expression matching with support for `.` and ``.

  - `.` Matches any single character.
  - `` Matches zero or more of the preceding element.

The matching should cover the entire input string (not partial).

Note

  - `s` could be empty and contains only lowercase letters `a-z`.
  - `p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or ``.

## Examples

Example #1

Input:
```
s = 'aa'
p = 'a'
```

Output: `false`

Explanation: `a` does not match the entire string `aa`.

Example #2

Input:
```
s = 'aa'
p = 'a'
```

Output: `true`

Explanation: `` means zero or more of the preceding element, `a`. Therefore, by repeating `a` once, it becomes `aa`.

Example #3

Input:

```
s = 'ab'
p = '.'
```

Output: `true`

Explanation: `.` means "zero or more (``) of any character (`.`)".

Example #4

Input:

```
s = 'aab'
p = 'cab'
```

Output: `true`

Explanation: `c` can be repeated 0 times, `a` can be repeated 1 time. Therefore it matches `aab`.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>