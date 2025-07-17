---
title: "Longest Substring Without Repeating Characters"
slug: "longest-substring"
date: 2025-07-17
difficulty: "Easy"
tags: ["String", "Sliding Window"]
leetcode: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
---

## 🧠 Problem Explanation

Given a string `s`, find the length of the longest substring without repeating characters.

## 💡 Approach

Use a sliding window with a hash set to track characters. Move the window as soon as a character repeats.

