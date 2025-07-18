---
title: "Sliding Window Algorithm – Fixed & Variable Length"
meta_title: "Sliding Window Pattern for Subarrays & Substrings"
description: "Master the sliding window technique for solving subarray and substring problems. Learn when to use fixed vs variable windows, common patterns, and how to optimize with two-pointer strategies."
date: 2025-07-21
image: "/images/posts/sliding-window-cover.jpg"
categories: ["patterns"]
tags: ["sliding window", "arrays", "substrings", "subarrays", "techniques"]
draft: false
---

<div class="prose max-w-none prose-tight">
  <style>
    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  </style>

## 📌 When to Use Sliding Window

- If a problem asks for:
  - Longest/shortest subarray with a condition
  - Fixed-length sum/subarray
  - Substring problems with characters/frequency
- And constraints mention:
  - Positive integers or lowercase letters
  - Contiguous window
- Then **Sliding Window** is your go-to strategy.

> 🔍 **Keyword Clue**: Subarray / Substring  
> 🧠 **Technique Hint**: Start with two pointers → expand → shrink

---

## 🪟 Sliding Window Types

| Type            | Use Case Example                                  | Window Behavior              |
|-----------------|---------------------------------------------------|------------------------------|
| Fixed Length    | Max sum of k elements                             | Always move right pointer k  |
| Variable Length | Longest substring with at most 2 distinct chars   | Expand + shrink based on rule|

---

## 🔒 Fixed-Length Window

Use when you're given a fixed window size `k` and need to compute something over every window of size `k`.

✅ Constant time to slide window: `+arr[i] - arr[i-k]`  
✅ Efficient for problems involving sums or frequency over exact-sized windows

---

## 🔓 Variable-Length Window

Use two pointers (`start`, `end`) to dynamically expand and shrink the window depending on conditions.

✅ Great for problems where you don't know the window size up front  
✅ Use when constraints say things like:
- "at most K characters"
- "longest subarray with sum ≤ target"
- "substring with K distinct characters"

---

💡 **Key Insight**

When you see problems like:

- "subarray", "substring"  
- Sum, max/min, count  
- Length `k`, or conditions like "at most" or "exactly"

✅ **Think Sliding Window!**

---

🧠 **Sliding Window Patterns**

| Pattern                      | Strategy Description                |
|-----------------------------|--------------------------------------|
| Fixed window of size `k`    | Slide right pointer, remove left     |
| Longest subarray with sum   | Expand with end, shrink with start   |
| Substring with distinct chars | Use hashmap to track frequency       |

</div>
