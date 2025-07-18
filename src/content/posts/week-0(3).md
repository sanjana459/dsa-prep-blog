---
title: "Hash Tables & Sets – Time & Space Complexity"
meta_title: "Hash Maps & Sets in Python – Big‑O Operations"
description: "Understand Python dict/set behavior, time complexity of key-value operations, and implementation tradeoffs."
date: 2025-07-21
image: "/images/posts/hash-tables-cover.jpg"
categories: ["basics"]
tags: ["hash tables", "dictionaries", "sets"]
draft: false
---

<div class="prose max-w-none prose-tight">
  <style>
    hr {
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  </style>

## 📌 Week 2 Goals
- Understand how Python implements `dict` and `set`
- Learn time and space complexity of common operations
- Compare hash tables vs lists for key-value access

---

## 🧠 Hash Table Basics

* A **hash table** stores key-value pairs using a hash function to compute array indices, enabling fast access (`O(1)` on average).
* A **hash function** converts a key into a fixed-size integer (hash code) that maps to an index in the underlying array.
* **Collisions** happen when different keys hash to the same index; they're handled using:
  - **Chaining** (linked lists at each index), or
  - **Open addressing** (linear probing, quadratic probing, etc.).
* Hash tables are used for efficient lookups, inserts, and deletes — essential in problems like:
  - Frequency counting
  - Caching
  - Indexing
* Python `set` is an **unordered collection of unique, hashable items**, backed by a hash table for `O(1)` operations.
* Python `dict` (map) stores **key-value pairs using a hash table**:
  - Keys must be **hashable** (immutable)
  - Values can be any data type
* Examples of **hashable (valid key)** types:
  - `str`, `int`, and tuples of hashable elements
* Examples of **unhashable (invalid key)** types:
  - `list`, `dict`, `set` — all mutable and cannot be used as dictionary keys or set elements.

---

## 🧪 Python Dictionary (Hash Map) – Big‑O Cheat Sheet

| Operation           | Time   | Space | Example                        |
|---------------------|--------|--------|--------------------------------|
| `d[k]` (get/set)    | O(1)   | O(1)   | val = d[key] or d[k] = v   |
| `del d[k]`          | O(1)   | O(1)   | del d[key]                   |
| `k in d`            | O(1)   | O(1)   | if k in d:                 |
| `d.keys()` / `d.values()` | O(n) | O(n) | All keys/values                |
| `len(d)`            | O(1)   | O(1)   | Number of items                |
| `for k in d:`       | O(n)   | O(1)   | Iteration                      |
| `copy = d.copy()`   | O(n)   | O(n)   | Shallow copy                   |
| `clear()`           | O(1)   | O(1)   | Empties the dictionary         |
| `d.update(...)`     | O(m)   | O(m)   | Merge another dict of size `m` |

---

## 🧪 Python Set – Big‑O Cheat Sheet

| Operation           | Time   | Space | Example                      |
|---------------------|--------|--------|------------------------------|
| `x in s`            | O(1)   | O(1)   | if x in s:                   |
| `s.add(x)`          | O(1)   | O(1)   | Add element                  |
| `s.remove(x)`       | O(1)   | O(1)   | Remove element               |
| `s.discard(x)`      | O(1)   | O(1)   | Safe remove (no error)       |
| `s.pop()`           | O(1)   | O(1)   | Remove and return an item    |
| `len(s)`            | O(1)   | O(1)   | Count elements               |
| `copy = s.copy()`   | O(n)   | O(n)   | Shallow copy                 |
| ` Iteration`        | O(n)   | O(1)   | for x in s:                  | 
| `Set operations`.   | O(n)   | O(n)   | Union, intersection, diff    |

---

## 🔍 Hash Map vs List – When to Use

| Use Case                         | Use `dict` or `set` | Use `list`        |
|----------------------------------|----------------------|-------------------|
| Lookup by key                    | ✅ Fast              | ❌ Slow (O(n))    |
| Ordered sequence of elements     | ❌ Not guaranteed    | ✅ Yes            |
| Index-based access               | ❌ No                | ✅ Yes            |
| Duplicate values                 | ✅ Allowed (`dict`)  | ✅ Allowed        |
| Need uniqueness enforcement      | ✅ Use `set`         | ❌ Must filter    |
| Insert/remove many elements      | ✅ Fast (amortized)  | ❌ Slower         |

> 🧠 **Best Practice**: If you're accessing values by a key, always prefer a `dict` or `set` over a list for performance.

---

## 🗂️ Python Dictionary (dict) — Master Guide

🔹 **1. Declaration / Initialization**
* Use `{}` or `dict()` to create a dictionary.
  - `d = {}` → Empty dict
  - `d = {'a': 1, 'b': 2}` → With initial values
  - `d = dict(x=10, y=20)` → Using keyword arguments
  - `d = dict([('a', 1), ('b', 2)])` → From key-value pairs

🔹 **2. Insertion / Update**
* Use `d[key] = value` to insert or update a key.
  - Example: `d['z'] = 99` adds or updates key `'z'`.

🔹 **3. Access / Lookup**
* Use `d[key]` to get the value — raises `KeyError` if key not found.
* Use `d.get(key, default)` to safely access — returns `default` if key not present.
  - Example: `d.get('x', 0)`

🔹 **4. Membership Test**
* Use `'key' in d` to check if a key exists.
  - Example: `if 'x' in d: print(d['x'])`

🔹 **5. Deletion**
* `del d[key]` → Removes key, raises `KeyError` if missing.
* `d.pop(key)` → Removes key and returns value.
* `d.clear()` → Empties the entire dictionary.

🔹 **6. Length**
* `len(d)` → Returns the number of key-value pairs.

🔹 **7. Copying**
* `d2 = d.copy()` → Shallow copy (keys and values copied, nested objects shared).

🔹 **8. Merging / Updating**
* `d.update(other_dict)` → Adds or updates entries from `other_dict`.

🔹 **9. Iteration**
* `for key in d:` → Iterate over keys.
* `for value in d.values():` → Iterate over values.
* `for key, value in d.items():` → Iterate over key-value pairs.

🔹 **10. Views**
* `d.keys()` → Returns a view of keys.
* `d.values()` → Returns a view of values.
* `d.items()` → Returns a view of (key, value) pairs.

🔹 **11. Dictionary from Sequence**
* `dict.fromkeys(seq, val)` → Creates dict from keys in `seq` with all values set to `val`.
  - Example: `dict.fromkeys(['a', 'b'], 0)` → `{'a': 0, 'b': 0}`

🔹 **12. Key Rules**
* Keys must be **hashable** and **immutable**:
  - ✅ Valid: `str`, `int`, `tuple`
  - ❌ Invalid: `list`, `set`, `dict`
---

## 💡 Interview Tip

- Always mention average vs worst-case time for dict/set in Python.
- Hash collisions, although rare, exist — avoid using non-primitive or custom types unless hashable.
- Python dictionaries preserve insertion order since 3.7 — useful when order matters.

</div>
