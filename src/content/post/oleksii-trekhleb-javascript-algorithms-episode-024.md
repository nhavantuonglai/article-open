---
pubDatetime: 2018-06-05T10:10:00Z
title: Oleksii Trekhleb | Javascript algorithms (Doubly linked list)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0524.jpg
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

In computer science, a doubly linked list is a linked data structure that
consists of a set of sequentially linked records called nodes. Each node contains
two fields, called links, that are references to the previous and to the next
node in the sequence of nodes. The beginning and ending nodes' previous and next
links, respectively, point to some kind of terminator, typically a sentinel
node or null, to facilitate the traversal of the list. If there is only one
sentinel node, then the list is circularly linked via the sentinel node. It can
be conceptualized as two singly linked lists formed from the same data items,
but in opposite sequential orders.

![Doubly Linked List](https://upload.wikimedia.org/images/doubly-linked-list.jpeg)

_Made with [okso.app](https://okso.app)_

The two node links allow traversal of the list in either direction. While adding
or removing a node in a doubly linked list requires changing more links than the
same operations on a singly linked list, the operations are simpler and
potentially more efficient (for nodes other than first nodes) because there
is no need to keep track of the previous node during traversal or no need
to traverse the list to find the previous node, so that its link can be modified.

## Pseudocode for Basic Operations

### Insert

```text
Add(value)
Pre: value is the value to add to the list
Post: value has been placed at the tail of the list
n ← node(value)
if head = ø
head ← n
tail ← n
else
n.previous ← tail
tail.next ← n
tail ← n
end if
end Add
```

### Delete

```text
Remove(head, value)
Pre: head is the head node in the list
value is the value to remove from the list
Post: value is removed from the list, true; otherwise false
if head = ø
return false
end if
if value = head.value
if head = tail
head ← ø
tail ← ø
else
head ← head.next
head.previous ← ø
end if
return true
end if
n ← head.next
while n != ø and value !== n.value
n ← n.next
end while
if n = tail
tail ← tail.previous
tail.next ← ø
return true
else if n != ø
n.previous.next ← n.next
n.next.previous ← n.previous
return true
end if
return false
end Remove
```

### Reverse Traversal

```text
ReverseTraversal(tail)
Pre: tail is the node of the list to traverse
Post: the list has been traversed in reverse order
n ← tail
while n != ø
yield n.value
n ← n.previous
end while
end Reverse Traversal
```

## Complexities

## Time Complexity

| Access | Search | Insertion | Deletion |
| :----: | :----: | :-------: | :------: |
|  O(n)  |  O(n)  |   O(1)    |   O(n)   |

### Space Complexity

O(n)

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>