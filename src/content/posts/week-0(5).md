---
title: "Two Pointers Algorithm – Intuition & Patterns"
meta_title: "DSA Pattern: Two Pointers (Squeeze Technique)"
description: "Understand the two pointers technique and how it simplifies array and string problems by reducing nested loops. Learn key patterns, types of pointer movement, and when to apply this strategy effectively."
date: 2025-07-21
image: "/images/posts/two-pointers-cover.jpg"
categories: ["patterns"]
tags: ["two pointers", "arrays", "strings", "techniques"]
draft: false
---

<div class="max-w-none prose-tight">
  <style>
    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  </style>

## 🧠 What is the Two Pointers Technique?

*The two pointers algorithm* uses two indices that move towards each other (or in the same direction) to scan through data — typically an array or string — to find solutions faster than nested loops.

> I like to call this the **squeeze algorithm** — because the pointers "squeeze" the problem space from both ends until the condition is met.

---

## 🔍 Where is it Used?

- Sorted arrays (common in questions asking for pair sums)
- Strings or arrays with substructure (e.g., palindromes, reverse operations)
- Finding or optimizing subarrays or subsequences
- Eliminating nested loops when scanning with start-end pairs

---

## 🧩 Types of Movement

1. **Same Direction**  
   - Start both pointers at the beginning  
   - Example: slow/fast runners, merging sorted arrays

2. **Opposite Direction**  
   - One pointer at start, the other at end  
   - Ideal for sum-based or palindrome problems

---

## 🪄 Why it Works

- Reduces time complexity from O(n²) to O(n) in many problems
- Works well with sorted data or problems where left/right symmetry helps
- Simple to implement but powerful when identifying the correct window or combination

---

## 💡 Key Insight

If a brute-force solution requires nested loops comparing two values at a time — think if those comparisons can be done **by moving two pointers instead**.

✅ Efficient  
✅ Clean logic  
✅ Lower space usage  
</div>
