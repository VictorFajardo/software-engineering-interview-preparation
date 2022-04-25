# Software Engineering Interview Preparation
- Behavioral Interview
- [Coding Interview](#coding-interview)
- Design Interview

---

## Coding Interview

### Patters to Review

- Sliding Window
- Two Pointers
- Fast & Slow Pointers
- Merge Intervals
- Cyclic Sort
- Linked List (Reverse)
- Breadth First Search
- Depth First Search
- Two Heaps
- Subsets
- Binary Search
- Bit Manipulation
- Top 'K' Elements
- K-way Merge
- Dynamic Programming
- Topological Sort
- Shortest Path

### Data Structures to Review

- Arrays
- Strings
- Linked Lists
- Stacks
- Queues
- Heaps
- Trees (Tries)
- Hash Maps
- Hash Sets
- Graphs

### Algorithms to Review

- Binary Search
- Sorting
  - Quick Sort
  - Merge Sort
- Recursion
- Divide and Conquer
- Dynamic Programming
- Greedy
- Breadth First Search
- Depth First Search
- Dijkstra
- Bellman-Ford
- Floyd-Warshall

---

## Code Snippets 

### Merge Sort
```javascript
var mergeSort = function(array) {
    if (array.length === 1) return array
    const mid = Math.floor(array.length / 2)
    const left = array.slice(0, mid)
    const right = array.slice(mid)
    
    return merge(mergeSort(left), mergeSort(right))
}

var merge = function(left, right) {
    const merged = []
    let leftIndex = 0
    let rightIndex = 0
    
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            merged.push(left[leftIndex])
            leftIndex++
        } else {
            merged.push(right[rightIndex])
            rightIndex++
        }
    }
    
    while (leftIndex < left.length) {
        merged.push(left[leftIndex])
        leftIndex++        
    }
    
    while (rightIndex < right.length) {
        merged.push(right[rightIndex])
        rightIndex++        
    }
    
    return merged
}
```

### Quick Sort

```javascript
var quickSort = function(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivot = getPivot(arr, start, end)
        quickSort(arr, start, pivot - 1)
        quickSort(arr, pivot + 1, end)
    }
    return arr
}

var getPivot = function(arr, start, end) {
    let pivot = arr[start]
    let swapIndex = start
    
    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIndex++
            [arr[swapIndex], arr[i]] = [arr[i], arr[swapIndex]]
        }
    }
    
    [arr[swapIndex], arr[start]] = [arr[start], arr[swapIndex]]
    return swapIndex
}
```