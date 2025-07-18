---
title: "Lists, Arrays & Strings: Big‑O Overview"
meta_title: "Python Lists & Strings – Time & Space Complexity"
description: "Understand Python lists and strings through the lens of Big‑O analysis. Learn the difference between static and dynamic arrays, explore time and space complexity for key operations, and use practical cheat sheets to master list and string behaviors."
date: 2025-07-20
image: "/images/posts/lists-strings-big-o-cover.jpg"
categories: ["basics"]
tags: ["arrays", "lists", "strings", "python"]
draft: false
---

<div class="prose max-w-none prose-tight">
  <style>
    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  </style>


## 🧠 Static Arrays, Dynamic Arrays, and Strings – Big O Complexity

- The last element of a list is accessed at index `len(arr) - 1`.
- Python lists are **mutable**, meaning you can change, append, or remove elements.
- A **static array** has fixed size and cannot grow or shrink (Python uses dynamic lists).
- Static arrays support operations like indexing, updating, and iterating.
- Static arrays are similar to memory layout in low-level languages like C.
- Python lists are **dynamic arrays** that resize automatically when needed.
- Python internally resizes lists by **doubling capacity** (power of 2 growth).
- **Amortized time complexity** means average cost per operation stays low even if some operations are expensive.

> 🧠 **Practical Insight**: Understanding Python list resizing helps you avoid costly insertions or memory waste in tight loops or high-performance tasks.

---

## 🐍 Python List Big‑O Cheat Sheet

| Operation              | Time Complexity     | Space Complexity | Notes                       |
|------------------------|---------------------|------------------|-----------------------------|
| `arr[i]`               | O(1)                | O(1)             | Random index access         |
| `arr[i] = x`           | O(1)                | O(1)             | Update value                |
| `arr.append(x)`        | O(1) *(amortized)*  | O(1)             | Append at end               |
| `arr.insert(0,x)`      | O(n)                | O(n)             | Insert at beginning         |
| `arr.insert(i,x)`      | O(n)                | O(n)             | Insert at middle            |
| `arr.pop()`            | O(1)                | O(1)             | Remove last element         |
| `arr.pop(i)`           | O(n)                | O(n)             | Remove from index `i`       |
| `arr.remove(x)`        | O(n)                | O(1)             | Find and remove first `x`   |
| `x in arr`             | O(n)                | O(1)             | Membership test             |
| `arr.index(x)`         | O(n)                | O(1)             | Index of first occurrence   |
| `arr.count(x)`         | O(n)                | O(1)             | Count occurrences           |
| `del arr[i]`           | O(n)                | O(n)             | Delete by index             |
| `arr.sort()` / `sorted(arr)` | O(n log n)   | O(n) (Timsort)   | Stable sort                 |
| `arr.reverse()`        | O(n)                | O(1)             | In-place reverse            |
| `arr.copy()`           | O(n)                | O(n)             | Shallow copy                |
| `len(arr)`             | O(1)                | O(1)             | Constant-time length        |
| `Iteration`              | O(n)                | O(1)             | for x in arr              |
| `arr + arr2`           | O(n + m)            | O(n + m)         | Concatenation               |
| `arr * k`              | O(nk)               | O(nk)            | Repeat list `k` times       |

---

## ✅ Methods That Return a Value

| Method         | Returns What?                  | Example                   |
|----------------|-------------------------------|---------------------------|
| `arr.copy()`    | New shallow copy              | `copy_arr = arr.copy()`   |
| `arr.pop()`     | Last element                  | `last = arr.pop()`        |
| `arr.index(x)`  | First occurrence index        | `i = arr.index(3)`        |
| `arr.count(x)`  | Count of `x`                  | `c = arr.count(4)`        |
| `x in arr`      | `True` or `False`             | `found = x in arr`        |
| `sorted(arr)`   | New sorted list               | `s = sorted(arr)`         |
| `arr + arr2`    | Concatenated list             | `combined = arr + arr2`   |

> ✅ **Pro Tip**: Always assign the return value when using these methods. Otherwise, you lose the result.

---

## 🚫 Methods That Modify In‑Place

| Method              | In-place? | Correct Usage         |
|---------------------|-----------|------------------------|
| `arr.append(x)`     | ✅         | `arr.append(x)`        |
| `arr.sort()`        | ✅         | `arr.sort()`           |
| `arr.reverse()`     | ✅         | `arr.reverse()`        |
| `del arr[i]`        | ✅         | `del arr[2]`           |
| `arr.clear()`       | ✅         | `arr.clear()`          |
| `arr.insert(i,x)`   | ✅         | `arr.insert(1, 42)`    |
| `arr.remove(x)`     | ✅         | `arr.remove(5)`        |

> 🚫 **Common Mistake**: Don’t assign `arr.sort()` or `arr.reverse()` to a variable — it will return `None`.

---

## 🧵 String Big‑O Cheat Sheet

- Python strings are **immutable** — any "modification" creates a new string.

| Operation / Method        | Time   | Space  | Example                   |
|---------------------------|--------|--------|---------------------------|
| `s[i]`                    | O(1)   | O(1)   | `char = s[2]`             |
| `s1 + s2` (concat)        | O(n+m) | O(n+m) | `res = s1 + s2`           |
| `s.lower()`               | O(n)   | O(n)   | `s = s.lower()`           |
| `s.replace(a, b)`         | O(n)   | O(n)   | `new = s.replace(...)`    |
| `s.find(x)` / `s.index(x)`| O(n)   | O(1)   | `i = s.find("a")`         |
| `s.split()` / `s.join()`  | O(n)   | O(n)   | `words = s.split()`       |
| `'x' in s`                | O(n)   | O(1)   | `'cat' in s`              |

---

### ✅ String Methods That Return a Value

| Method / Operation        | Returns          | Example                     |
|---------------------------|------------------|-----------------------------|
| `s.lower()`, `s.upper()`  | new `str`        | `low = s.lower()`           |
| `s.replace(a, b)`         | new `str`        | `new = s.replace(...)`      |
| `s.strip()`               | trimmed `str`    | `s = s.strip()`             |
| `s.find()`, `s.count()`   | `int`            | `count = s.count("a")`      |
| `'x' in s`                | `bool`           | `if 'a' in s:`              |
| `s.split()`               | `list`           | `words = s.split()`         |

---

### 🚫 Strings Cannot Be Modified In-Place

> ❌ **Wrong**: `s.strip()`  
> ✅ **Right**: `s = s.strip()`

```python
s = " Hello "
s.strip()      # No effect
print(s)       # " Hello "

s = s.strip()  # Now it's trimmed
print(s)       # "Hello"
```