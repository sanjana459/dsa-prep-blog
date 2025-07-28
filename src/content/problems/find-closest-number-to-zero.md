---
title: "Find Closest Number to Zero"
slug: "find-closest-number-to-zero"
date: 2025-07-19
difficulty: "Easy"
tags: ["Arrays", "linear scan"]
leetcode: "https://leetcode.com/problems/find-closest-number-to-zero/"
---
<div class="max-w-none prose-tight">
  <style>
    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  </style>

<div class="prose prose-tight max-w-none">

## 📄 Problem Statement

✅ Problem: **Find Closest Number to Zero**

Given an integer array `nums`, return the number with the value closest to 0.

**Note:**
- If there are multiple answers, return the number with the **largest value**.
- Use absolute value to determine closeness.

**Example 1:**
- Input: `nums = [-4, -2, 1, 4, 8]`
- Output: `1`

**Example 2:**
- Input: `nums = [2, -1, 1]`
- Output: `1`

**Constraints:**
- `1 <= nums.length <= 1000`
- `-10^5 <= nums[i] <= 10^5`

---

## 🧠 Problem Explanation

Given an integer array `nums`, return the number with the value closest to 0.

If there are multiple answers (e.g., -x and x), return the number with the **larger value** (i.e., the positive one).

## 💡 Approach

- Use a linear scan to go through the array.
- Track the number with the smallest absolute value.
- If two numbers are equally close to 0, pick the positive one.

## 📊 Complexities

- **Time Complexity:** O(n)
- **Space Complexity:** O(1)

## 🧾 Pseudocode
```yaml
function: findClosestNumber
params:
  - nums: List[int]
logic:
  - initialize closest with nums[0]
  - for each num in nums:
      - if abs(num) < abs(closest):
          - set closest = num
      - else if abs(num) == abs(closest) and num > closest:
          - set closest = num
  - return closest
```

## ✅ Code

```python
class Solution(object):
    def findClosestNumber(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        number = nums[0]
        for i in nums:
            if abs(i) < abs(number):
                number = i

        if abs(number) in nums:
            return abs(number)
        else:
            return number
```

## 🧪 Example Tests

- **Input:** `[-4, -2, 1, 4, 8]`  
  **Expected Output:** `1`

- **Input:** `[2, -1, 1]`  
  **Expected Output:** `1`


## 📝 Notes

- **Pattern Used:** Linear Scan  
- **Insights:**
  - I came up with a solution intuitively using a brute-force approach. Since the time complexity was acceptable, I decided to proceed with it.
  - How to use `abs()` for comparison and handle tie-breaking effectively.

