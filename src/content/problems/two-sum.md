---
title: "Two Sum"
slug: "two-sum"
date: 2025-07-17
difficulty: "Easy"
tags: ["Array", "HashMap"]
leetcode: "https://leetcode.com/problems/two-sum/"
---

## 🧠 Problem Explanation

Given an array of integers `nums` and an integer `target`, return **the indices** of the two numbers such that they add up to `target`.

You may assume that each input would have exactly **one solution**, and you may not use the same element twice.

You can return the answer in any order.

## 💡 Approach

- Use a **hash map** to store previously visited numbers.
- For each number, compute `target - num` and check if it's already in the map.
- If yes, return indices.
- If not, store `num: index` in the map.

## 📊 Complexities

- **Time Complexity:** O(n)
- **Space Complexity:** O(n)

## 🧾 Pseudocode

function twoSum(nums, target):
create empty map
for index, num in nums:
complement = target - num
if complement in map:
return [map[complement], index]
store num with its index in map

## ✅ Code

```python
def twoSum(nums, target):
    numMap = {}

    for i, num in enumerate(nums):
        diff = target - num
        if diff in numMap:
            return [numMap[diff], i]
        numMap[num] = i
```