---
pubDatetime: 2009-11-01T10:00:00Z
title: Oleksii Trekhleb | Javascript algorithms (k-Means algorithm)
description: This is a series of books diving deep into the core mechanisms of the JavaScript language.
featured: false
image: https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0050.jpg
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

The k-Means algorithm is an unsupervised Machine Learning algorithm. It's a clustering algorithm, which groups the sample data on the basis of similarity between dimensions of vectors.

In k-Means classification, the output is a set of classes assigned to each vector. Each cluster location is continuously optimized in order to get the accurate locations of each cluster such that they represent each group clearly.

The idea is to calculate the similarity between cluster location and data vectors, and reassign clusters based on it. [Euclidean distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-distance) is used mostly for this task.

The algorithm is as follows:

1. Check for errors like invalid/inconsistent data.

2. Initialize the `k` cluster locations with initial/random `k` points.

3. Calculate the distance of each data point from each cluster.

4. Assign the cluster label of each data point equal to that of the cluster at its minimum distance.

5. Calculate the centroid of each cluster based on the data points it contains.

6. Repeat each of the above steps until the centroid locations are varying.

Here is a visualization of k-Means clustering for better understanding.

The centroids are moving continuously in order to create better distinction between the different set of data points. As we can see, after a few iterations, the difference in centroids is quite low between iterations. For example between iterations `13` and `14` the difference is quite small because there the optimizer is tuning boundary cases.

<figure><img src="https://data.nhavantuonglai.com/image/illustrations/cover-nhavantuonglai-com-0127.jpg" alt="nhavantuonglai" title="nhavantuonglai" height=100% width=100%><figcaption><p></p></figcaption></figure>