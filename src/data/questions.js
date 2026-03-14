const questions = [
  // ==================== Arrays/String (1-30) ====================
  { id: 1, title: "Merge Sorted Array", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Easy", companies: ["Meta", "Amazon", "Microsoft"], link: "https://leetcode.com/problems/merge-sorted-array/", tag: "Both" },
  { id: 2, title: "Remove Element", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Easy", companies: ["Amazon", "Adobe", "Microsoft"], link: "https://leetcode.com/problems/remove-element/", tag: "Interview" },
  { id: 3, title: "Remove Duplicates from Sorted Array", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Easy", companies: ["Meta", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array/", tag: "Interview" },
  { id: 4, title: "Remove Duplicates from Sorted Array II", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Medium", companies: ["Meta", "Amazon", "Microsoft"], link: "https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/", tag: "Interview" },
  { id: 5, title: "Majority Element", topic: "Arrays/String", pattern: "Hash Map", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/majority-element/", tag: "Both" },
  { id: 6, title: "Rotate Array", topic: "Arrays/String", pattern: "Array Reversal", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/rotate-array/", tag: "Both" },
  { id: 7, title: "Best Time to Buy and Sell Stock", topic: "Arrays/String", pattern: "Kadane's", difficulty: "Easy", companies: ["Amazon", "Meta", "Google", "Goldman Sachs", "Bloomberg"], link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/", tag: "Both" },
  { id: 8, title: "Best Time to Buy and Sell Stock II", topic: "Arrays/String", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Goldman Sachs", "Bloomberg"], link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/", tag: "Interview" },
  { id: 9, title: "Jump Game", topic: "Arrays/String", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Apple"], link: "https://leetcode.com/problems/jump-game/", tag: "Both" },
  { id: 10, title: "Jump Game II", topic: "Arrays/String", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/jump-game-ii/", tag: "Interview" },
  { id: 11, title: "H-Index", topic: "Arrays/String", pattern: "Sorting", difficulty: "Medium", companies: ["Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/h-index/", tag: "Interview" },
  { id: 12, title: "Insert Delete GetRandom O(1)", topic: "Arrays/String", pattern: "Hash Map", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Uber"], link: "https://leetcode.com/problems/insert-delete-getrandom-o1/", tag: "Interview" },
  { id: 13, title: "Product of Array Except Self", topic: "Arrays/String", pattern: "Prefix Sum", difficulty: "Medium", companies: ["Amazon", "Meta", "Apple", "Microsoft"], link: "https://leetcode.com/problems/product-of-array-except-self/", tag: "Both" },
  { id: 14, title: "Gas Station", topic: "Arrays/String", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/gas-station/", tag: "Interview" },
  { id: 15, title: "Candy", topic: "Arrays/String", pattern: "Greedy", difficulty: "Hard", companies: ["Google", "Amazon", "Goldman Sachs"], link: "https://leetcode.com/problems/candy/", tag: "Interview" },
  { id: 16, title: "Trapping Rain Water", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Goldman Sachs", "Bloomberg"], link: "https://leetcode.com/problems/trapping-rain-water/", tag: "Both" },
  { id: 17, title: "Roman to Integer", topic: "Arrays/String", pattern: "Hash Map", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Adobe", "Bloomberg"], link: "https://leetcode.com/problems/roman-to-integer/", tag: "Both" },
  { id: 18, title: "Integer to Roman", topic: "Arrays/String", pattern: "Math", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Adobe"], link: "https://leetcode.com/problems/integer-to-roman/", tag: "Interview" },
  { id: 19, title: "Length of Last Word", topic: "Arrays/String", pattern: "String Traversal", difficulty: "Easy", companies: ["Amazon", "Google"], link: "https://leetcode.com/problems/length-of-last-word/", tag: "Interview" },
  { id: 20, title: "Longest Common Prefix", topic: "Arrays/String", pattern: "String Traversal", difficulty: "Easy", companies: ["Amazon", "Google", "Adobe"], link: "https://leetcode.com/problems/longest-common-prefix/", tag: "Both" },
  { id: 21, title: "Reverse Words in a String", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Medium", companies: ["Microsoft", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/reverse-words-in-a-string/", tag: "Interview" },
  { id: 22, title: "Zigzag Conversion", topic: "Arrays/String", pattern: "String Traversal", difficulty: "Medium", companies: ["Amazon", "Google", "PayPal"], link: "https://leetcode.com/problems/zigzag-conversion/", tag: "Interview" },
  { id: 23, title: "Find the Index of the First Occurrence in a String", topic: "Arrays/String", pattern: "String Matching", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Meta"], link: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", tag: "Interview" },
  { id: 24, title: "Text Justification", topic: "Arrays/String", pattern: "Simulation", difficulty: "Hard", companies: ["Google", "LinkedIn", "Airbnb", "Meta"], link: "https://leetcode.com/problems/text-justification/", tag: "Interview" },
  { id: 25, title: "Rotate Matrix", topic: "Arrays/String", pattern: "Matrix Traversal", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Apple", "Google"], link: "https://leetcode.com/problems/rotate-image/", tag: "Both" },
  { id: 26, title: "Merge Overlapping Subintervals", topic: "Arrays/String", pattern: "Sorting", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/merge-intervals/", tag: "Both" },
  { id: 27, title: "Merge Two Sorted Arrays Without Extra Space", topic: "Arrays/String", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Goldman Sachs", "Adobe"], link: "https://leetcode.com/problems/merge-sorted-array/", tag: "Both" },
  { id: 28, title: "Find the Duplicate in an Array of N+1 Integers", topic: "Arrays/String", pattern: "Cycle Detection", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/find-the-duplicate-number/", tag: "Both" },
  { id: 29, title: "Grid Unique Paths", topic: "Arrays/String", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/unique-paths/", tag: "Both" },
  { id: 30, title: "Majority Element (n/3 times)", topic: "Arrays/String", pattern: "Boyer-Moore Voting", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/majority-element-ii/", tag: "Interview" },

  // ==================== Two Pointers (31-36) ====================
  { id: 31, title: "Valid Palindrome", topic: "Two Pointers", pattern: "Two Pointers", difficulty: "Easy", companies: ["Meta", "Amazon", "Microsoft"], link: "https://leetcode.com/problems/valid-palindrome/", tag: "Both" },
  { id: 32, title: "Is Subsequence", topic: "Two Pointers", pattern: "Two Pointers", difficulty: "Easy", companies: ["Google", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/is-subsequence/", tag: "Both" },
  { id: 33, title: "Two Sum II - Input Array Is Sorted", topic: "Two Pointers", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Bloomberg", "Adobe"], link: "https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/", tag: "Both" },
  { id: 34, title: "Container With Most Water", topic: "Two Pointers", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Goldman Sachs"], link: "https://leetcode.com/problems/container-with-most-water/", tag: "Both" },
  { id: 35, title: "3Sum", topic: "Two Pointers", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg", "Microsoft"], link: "https://leetcode.com/problems/3sum/", tag: "Both" },
  { id: 36, title: "Move Zeroes", topic: "Two Pointers", pattern: "Two Pointers", difficulty: "Easy", companies: ["Meta", "Amazon", "Apple"], link: "https://leetcode.com/problems/move-zeroes/", tag: "Both" },

  // ==================== Sliding Window (37-40) ====================
  { id: 37, title: "Minimum Size Subarray Sum", topic: "Sliding Window", pattern: "Sliding Window", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/minimum-size-subarray-sum/", tag: "Both" },
  { id: 38, title: "Longest Substring Without Repeating Characters", topic: "Sliding Window", pattern: "Sliding Window", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg", "Microsoft"], link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/", tag: "Both" },
  { id: 39, title: "Substring with Concatenation of All Words", topic: "Sliding Window", pattern: "Sliding Window", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", tag: "Interview" },
  { id: 40, title: "Minimum Window Substring", topic: "Sliding Window", pattern: "Sliding Window", difficulty: "Hard", companies: ["Meta", "Amazon", "Google", "LinkedIn", "Uber"], link: "https://leetcode.com/problems/minimum-window-substring/", tag: "Both" },

  // ==================== Matrix (41-45) ====================
  { id: 41, title: "Valid Sudoku", topic: "Matrix", pattern: "Hash Map", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Uber"], link: "https://leetcode.com/problems/valid-sudoku/", tag: "Interview" },
  { id: 42, title: "Spiral Matrix", topic: "Matrix", pattern: "Matrix Traversal", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Apple"], link: "https://leetcode.com/problems/spiral-matrix/", tag: "Both" },
  { id: 43, title: "Rotate Image", topic: "Matrix", pattern: "Matrix Traversal", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Apple", "Google"], link: "https://leetcode.com/problems/rotate-image/", tag: "Both" },
  { id: 44, title: "Set Matrix Zeroes", topic: "Matrix", pattern: "Matrix Traversal", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft", "Oracle"], link: "https://leetcode.com/problems/set-matrix-zeroes/", tag: "Both" },
  { id: 45, title: "Game of Life", topic: "Matrix", pattern: "Simulation", difficulty: "Medium", companies: ["Google", "Amazon", "Snap"], link: "https://leetcode.com/problems/game-of-life/", tag: "Interview" },

  // ==================== Linked List (46-62) ====================
  { id: 46, title: "Linked List Cycle", topic: "Linked List", pattern: "Cycle Detection", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/linked-list-cycle/", tag: "Both" },
  { id: 47, title: "Add Two Numbers", topic: "Linked List", pattern: "Linked List", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/add-two-numbers/", tag: "Both" },
  { id: 48, title: "Merge Two Sorted Lists", topic: "Linked List", pattern: "Linked List", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Apple", "Google"], link: "https://leetcode.com/problems/merge-two-sorted-lists/", tag: "Both" },
  { id: 49, title: "Copy List with Random Pointer", topic: "Linked List", pattern: "Hash Map", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/copy-list-with-random-pointer/", tag: "Interview" },
  { id: 50, title: "Reverse Linked List II", topic: "Linked List", pattern: "Linked List", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/reverse-linked-list-ii/", tag: "Interview" },
  { id: 51, title: "Reverse Nodes in k-Group", topic: "Linked List", pattern: "Linked List", difficulty: "Hard", companies: ["Amazon", "Meta", "Microsoft", "Google"], link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", tag: "Interview" },
  { id: 52, title: "Remove Nth Node From End of List", topic: "Linked List", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Meta", "Apple"], link: "https://leetcode.com/problems/remove-nth-node-from-end-of-list/", tag: "Both" },
  { id: 53, title: "Remove Duplicates from Sorted List II", topic: "Linked List", pattern: "Linked List", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/", tag: "Interview" },
  { id: 54, title: "Rotate List", topic: "Linked List", pattern: "Linked List", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Samsung"], link: "https://leetcode.com/problems/rotate-list/", tag: "Interview" },
  { id: 55, title: "Partition List", topic: "Linked List", pattern: "Linked List", difficulty: "Medium", companies: ["Amazon", "Microsoft"], link: "https://leetcode.com/problems/partition-list/", tag: "Interview" },
  { id: 56, title: "LRU Cache", topic: "Linked List", pattern: "Design", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/lru-cache/", tag: "Both" },
  { id: 57, title: "Find Intersection Point of Y LinkedList", topic: "Linked List", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/intersection-of-two-linked-lists/", tag: "Interview" },
  { id: 58, title: "Detect a Cycle in Linked List", topic: "Linked List", pattern: "Cycle Detection", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/linked-list-cycle-ii/", tag: "Interview" },
  { id: 59, title: "Reverse a LinkedList in Groups of Size K", topic: "Linked List", pattern: "Linked List", difficulty: "Hard", companies: ["Amazon", "Meta", "Microsoft"], link: "https://leetcode.com/problems/reverse-nodes-in-k-group/", tag: "Interview" },
  { id: 60, title: "Check if a LinkedList is Palindrome or Not", topic: "Linked List", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/palindrome-linked-list/", tag: "Interview" },
  { id: 61, title: "Find the Starting Point of the Loop of LinkedList", topic: "Linked List", pattern: "Cycle Detection", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/linked-list-cycle-ii/", tag: "Interview" },
  { id: 62, title: "Flattening of a LinkedList", topic: "Linked List", pattern: "Linked List", difficulty: "Hard", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/flatten-a-multilevel-doubly-linked-list/", tag: "Interview" },

  // ==================== Stack (63-74) ====================
  { id: 63, title: "Valid Parentheses", topic: "Stack", pattern: "Stack", difficulty: "Easy", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/valid-parentheses/", tag: "Both" },
  { id: 64, title: "Simplify Path", topic: "Stack", pattern: "Stack", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft"], link: "https://leetcode.com/problems/simplify-path/", tag: "Interview" },
  { id: 65, title: "Min Stack", topic: "Stack", pattern: "Stack", difficulty: "Medium", companies: ["Amazon", "Bloomberg", "Goldman Sachs"], link: "https://leetcode.com/problems/min-stack/", tag: "Both" },
  { id: 66, title: "Evaluate Reverse Polish Notation", topic: "Stack", pattern: "Stack", difficulty: "Medium", companies: ["Amazon", "Google", "LinkedIn"], link: "https://leetcode.com/problems/evaluate-reverse-polish-notation/", tag: "Both" },
  { id: 67, title: "Basic Calculator", topic: "Stack", pattern: "Stack", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/basic-calculator/", tag: "Interview" },
  { id: 68, title: "Largest Rectangle in Histogram", topic: "Stack", pattern: "Monotonic Stack", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/largest-rectangle-in-histogram/", tag: "Both" },
  { id: 69, title: "Sliding Window Maximum", topic: "Stack", pattern: "Monotonic Queue", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/sliding-window-maximum/", tag: "Both" },
  { id: 70, title: "Implement Min Stack", topic: "Stack", pattern: "Design", difficulty: "Medium", companies: ["Amazon", "Bloomberg", "Goldman Sachs"], link: "https://leetcode.com/problems/min-stack/", tag: "Both" },
  { id: 71, title: "Rotten Oranges", topic: "Stack", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Samsung"], link: "https://leetcode.com/problems/rotting-oranges/", tag: "Both" },
  { id: 72, title: "Stock Span Problem", topic: "Stack", pattern: "Monotonic Stack", difficulty: "Medium", companies: ["Amazon", "Goldman Sachs", "Adobe"], link: "https://leetcode.com/problems/online-stock-span/", tag: "OA" },
  { id: 73, title: "Maximum of Minimums of Every Window Size", topic: "Stack", pattern: "Monotonic Stack", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/sliding-window-maximum/", tag: "OA" },
  { id: 74, title: "The Celebrity Problem", topic: "Stack", pattern: "Stack", difficulty: "Hard", companies: ["Amazon", "Meta", "LinkedIn", "Google"], link: "https://leetcode.com/problems/find-the-celebrity/", tag: "Interview" },

  // ==================== Recursion (75-80) ====================
  { id: 75, title: "Subset Sums", topic: "Recursion", pattern: "Recursion", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/subsets/", tag: "Both" },
  { id: 76, title: "Subset II", topic: "Recursion", pattern: "Recursion", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/subsets-ii/", tag: "Both" },
  { id: 77, title: "Combination Sum", topic: "Recursion", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Airbnb"], link: "https://leetcode.com/problems/combination-sum/", tag: "Both" },
  { id: 78, title: "Combination Sum II", topic: "Recursion", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/combination-sum-ii/", tag: "Both" },
  { id: 79, title: "Palindrome Partitioning", topic: "Recursion", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/palindrome-partitioning/", tag: "Both" },
  { id: 80, title: "K-th Permutation Sequence", topic: "Recursion", pattern: "Math", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/permutation-sequence/", tag: "Interview" },

  // ==================== Binary Tree General (81-94) ====================
  { id: 81, title: "Maximum Depth of Binary Tree", topic: "Binary Tree General", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/maximum-depth-of-binary-tree/", tag: "Both" },
  { id: 82, title: "Same Tree", topic: "Binary Tree General", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/same-tree/", tag: "Interview" },
  { id: 83, title: "Invert Binary Tree", topic: "Binary Tree General", pattern: "DFS", difficulty: "Easy", companies: ["Google", "Amazon", "Meta"], link: "https://leetcode.com/problems/invert-binary-tree/", tag: "Both" },
  { id: 84, title: "Symmetric Tree", topic: "Binary Tree General", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/symmetric-tree/", tag: "Interview" },
  { id: 85, title: "Construct Binary Tree from Preorder and Inorder Traversal", topic: "Binary Tree General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/", tag: "Interview" },
  { id: 86, title: "Construct Binary Tree from Inorder and Postorder Traversal", topic: "Binary Tree General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/", tag: "Interview" },
  { id: 87, title: "Populating Next Right Pointers in Each Node II", topic: "Binary Tree General", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft"], link: "https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/", tag: "Interview" },
  { id: 88, title: "Flatten Binary Tree to Linked List", topic: "Binary Tree General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft"], link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list/", tag: "Interview" },
  { id: 89, title: "Path Sum", topic: "Binary Tree General", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/path-sum/", tag: "Both" },
  { id: 90, title: "Sum Root to Leaf Numbers", topic: "Binary Tree General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft"], link: "https://leetcode.com/problems/sum-root-to-leaf-numbers/", tag: "Interview" },
  { id: 91, title: "Binary Tree Maximum Path Sum", topic: "Binary Tree General", pattern: "DFS", difficulty: "Hard", companies: ["Meta", "Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/binary-tree-maximum-path-sum/", tag: "Both" },
  { id: 92, title: "Binary Search Tree Iterator", topic: "Binary Tree General", pattern: "Stack", difficulty: "Medium", companies: ["Meta", "Amazon", "Microsoft"], link: "https://leetcode.com/problems/binary-search-tree-iterator/", tag: "Interview" },
  { id: 93, title: "Count Complete Tree Nodes", topic: "Binary Tree General", pattern: "Binary Search", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/count-complete-tree-nodes/", tag: "Interview" },
  { id: 94, title: "Lowest Common Ancestor of a Binary Tree", topic: "Binary Tree General", pattern: "DFS", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/", tag: "Both" },

  // ==================== Binary Tree BFS (95-98) ====================
  { id: 95, title: "Binary Tree Right Side View", topic: "Binary Tree BFS", pattern: "BFS", difficulty: "Medium", companies: ["Meta", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/binary-tree-right-side-view/", tag: "Both" },
  { id: 96, title: "Average of Levels in Binary Tree", topic: "Binary Tree BFS", pattern: "BFS", difficulty: "Easy", companies: ["Amazon", "Meta", "Microsoft"], link: "https://leetcode.com/problems/average-of-levels-in-binary-tree/", tag: "Interview" },
  { id: 97, title: "Binary Tree Level Order Traversal", topic: "Binary Tree BFS", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/binary-tree-level-order-traversal/", tag: "Both" },
  { id: 98, title: "Binary Tree Zigzag Level Order Traversal", topic: "Binary Tree BFS", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/", tag: "Both" },

  // ==================== Binary Search Tree (99-101) ====================
  { id: 99, title: "Minimum Absolute Difference in BST", topic: "Binary Search Tree", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/minimum-absolute-difference-in-bst/", tag: "Interview" },
  { id: 100, title: "Kth Smallest Element in a BST", topic: "Binary Search Tree", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg"], link: "https://leetcode.com/problems/kth-smallest-element-in-a-bst/", tag: "Both" },
  { id: 101, title: "Validate Binary Search Tree", topic: "Binary Search Tree", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Bloomberg", "Microsoft"], link: "https://leetcode.com/problems/validate-binary-search-tree/", tag: "Both" },

  // ==================== Graph General (102-107) ====================
  { id: 102, title: "Number of Islands", topic: "Graph General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg", "Microsoft"], link: "https://leetcode.com/problems/number-of-islands/", tag: "Both" },
  { id: 103, title: "Surrounded Regions", topic: "Graph General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/surrounded-regions/", tag: "Interview" },
  { id: 104, title: "Clone Graph", topic: "Graph General", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg"], link: "https://leetcode.com/problems/clone-graph/", tag: "Interview" },
  { id: 105, title: "Evaluate Division", topic: "Graph General", pattern: "DFS", difficulty: "Medium", companies: ["Google", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/evaluate-division/", tag: "Interview" },
  { id: 106, title: "Course Schedule", topic: "Graph General", pattern: "Topological Sort", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/course-schedule/", tag: "Both" },
  { id: 107, title: "Course Schedule II", topic: "Graph General", pattern: "Topological Sort", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/course-schedule-ii/", tag: "Both" },

  // ==================== Graph BFS (108-110) ====================
  { id: 108, title: "Snakes and Ladders", topic: "Graph BFS", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/snakes-and-ladders/", tag: "OA" },
  { id: 109, title: "Minimum Genetic Mutation", topic: "Graph BFS", pattern: "BFS", difficulty: "Medium", companies: ["Google", "Amazon", "Microsoft"], link: "https://leetcode.com/problems/minimum-genetic-mutation/", tag: "Interview" },
  { id: 110, title: "Word Ladder", topic: "Graph BFS", pattern: "BFS", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/word-ladder/", tag: "Both" },

  // ==================== Trie (111-113) ====================
  { id: 111, title: "Implement Trie (Prefix Tree)", topic: "Trie", pattern: "Trie", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/implement-trie-prefix-tree/", tag: "Both" },
  { id: 112, title: "Design Add and Search Words Data Structure", topic: "Trie", pattern: "Trie", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], link: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", tag: "Interview" },
  { id: 113, title: "Word Search II", topic: "Trie", pattern: "Trie", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/word-search-ii/", tag: "Interview" },

  // ==================== Backtracking (114-120) ====================
  { id: 114, title: "Letter Combinations of a Phone Number", topic: "Backtracking", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Uber"], link: "https://leetcode.com/problems/letter-combinations-of-a-phone-number/", tag: "Both" },
  { id: 115, title: "Combinations", topic: "Backtracking", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/combinations/", tag: "Interview" },
  { id: 116, title: "Permutations", topic: "Backtracking", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Microsoft"], link: "https://leetcode.com/problems/permutations/", tag: "Both" },
  { id: 117, title: "Combination Sum III", topic: "Backtracking", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Google"], link: "https://leetcode.com/problems/combination-sum-iii/", tag: "Both" },
  { id: 118, title: "N-Queens II", topic: "Backtracking", pattern: "Backtracking", difficulty: "Hard", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/n-queens-ii/", tag: "Interview" },
  { id: 119, title: "Generate Parentheses", topic: "Backtracking", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/generate-parentheses/", tag: "Both" },
  { id: 120, title: "Word Search", topic: "Backtracking", pattern: "Backtracking", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/word-search/", tag: "Both" },

  // ==================== Divide & Conquer (121-124) ====================
  { id: 121, title: "Convert Sorted Array to Binary Search Tree", topic: "Divide & Conquer", pattern: "Divide & Conquer", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/", tag: "Interview" },
  { id: 122, title: "Sort List", topic: "Divide & Conquer", pattern: "Divide & Conquer", difficulty: "Medium", companies: ["Amazon", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/sort-list/", tag: "Both" },
  { id: 123, title: "Construct Quad Tree", topic: "Divide & Conquer", pattern: "Divide & Conquer", difficulty: "Medium", companies: ["Google", "Amazon", "Uber"], link: "https://leetcode.com/problems/construct-quad-tree/", tag: "Interview" },
  { id: 124, title: "Merge k Sorted Lists", topic: "Divide & Conquer", pattern: "Divide & Conquer", difficulty: "Hard", companies: ["Amazon", "Meta", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/merge-k-sorted-lists/", tag: "Both" },

  // ==================== Kadane's Algorithm (125-126) ====================
  { id: 125, title: "Maximum Subarray", topic: "Kadane's Algorithm", pattern: "Kadane's", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Bloomberg", "Apple"], link: "https://leetcode.com/problems/maximum-subarray/", tag: "Both" },
  { id: 126, title: "Maximum Sum Circular Subarray", topic: "Kadane's Algorithm", pattern: "Kadane's", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/maximum-sum-circular-subarray/", tag: "Both" },

  // ==================== Binary Search (127-133) ====================
  { id: 127, title: "Search Insert Position", topic: "Binary Search", pattern: "Binary Search", difficulty: "Easy", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/search-insert-position/", tag: "Both" },
  { id: 128, title: "Search a 2D Matrix", topic: "Binary Search", pattern: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/search-a-2d-matrix/", tag: "Both" },
  { id: 129, title: "Find Peak Element", topic: "Binary Search", pattern: "Binary Search", difficulty: "Medium", companies: ["Meta", "Google", "Amazon"], link: "https://leetcode.com/problems/find-peak-element/", tag: "Both" },
  { id: 130, title: "Search in Rotated Sorted Array", topic: "Binary Search", pattern: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/search-in-rotated-sorted-array/", tag: "Both" },
  { id: 131, title: "Find First and Last Position of Element in Sorted Array", topic: "Binary Search", pattern: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg"], link: "https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/", tag: "Both" },
  { id: 132, title: "Find Minimum in Rotated Sorted Array", topic: "Binary Search", pattern: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/", tag: "Both" },
  { id: 133, title: "Median of Two Sorted Arrays", topic: "Binary Search", pattern: "Binary Search", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Goldman Sachs", "Apple"], link: "https://leetcode.com/problems/median-of-two-sorted-arrays/", tag: "Interview" },

  // ==================== Heap (134-137) ====================
  { id: 134, title: "Kth Largest Element in an Array", topic: "Heap", pattern: "Heap", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/kth-largest-element-in-an-array/", tag: "Both" },
  { id: 135, title: "IPO", topic: "Heap", pattern: "Heap", difficulty: "Hard", companies: ["Amazon", "Goldman Sachs", "Google"], link: "https://leetcode.com/problems/ipo/", tag: "Interview" },
  { id: 136, title: "Find K Pairs with Smallest Sums", topic: "Heap", pattern: "Heap", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/find-k-pairs-with-smallest-sums/", tag: "Interview" },
  { id: 137, title: "Find Median from Data Stream", topic: "Heap", pattern: "Heap", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/find-median-from-data-stream/", tag: "Both" },

  // ==================== Bit Manipulation (138-143) ====================
  { id: 138, title: "Add Binary", topic: "Bit Manipulation", pattern: "Bit Manipulation", difficulty: "Easy", companies: ["Meta", "Amazon", "Microsoft"], link: "https://leetcode.com/problems/add-binary/", tag: "Both" },
  { id: 139, title: "Reverse Bits", topic: "Bit Manipulation", pattern: "Bit Manipulation", difficulty: "Easy", companies: ["Amazon", "Apple", "Microsoft"], link: "https://leetcode.com/problems/reverse-bits/", tag: "Interview" },
  { id: 140, title: "Number of 1 Bits", topic: "Bit Manipulation", pattern: "Bit Manipulation", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Apple"], link: "https://leetcode.com/problems/number-of-1-bits/", tag: "Interview" },
  { id: 141, title: "Single Number", topic: "Bit Manipulation", pattern: "Bit Manipulation", difficulty: "Easy", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/single-number/", tag: "Both" },
  { id: 142, title: "Single Number II", topic: "Bit Manipulation", pattern: "Bit Manipulation", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/single-number-ii/", tag: "Interview" },
  { id: 143, title: "Bitwise AND of Numbers Range", topic: "Bit Manipulation", pattern: "Bit Manipulation", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/bitwise-and-of-numbers-range/", tag: "Interview" },

  // ==================== Math (144-149) ====================
  { id: 144, title: "Palindrome Number", topic: "Math", pattern: "Math", difficulty: "Easy", companies: ["Amazon", "Bloomberg", "Adobe"], link: "https://leetcode.com/problems/palindrome-number/", tag: "Both" },
  { id: 145, title: "Plus One", topic: "Math", pattern: "Math", difficulty: "Easy", companies: ["Google", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/plus-one/", tag: "Both" },
  { id: 146, title: "Factorial Trailing Zeroes", topic: "Math", pattern: "Math", difficulty: "Medium", companies: ["Google", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/factorial-trailing-zeroes/", tag: "Interview" },
  { id: 147, title: "Sqrt(x)", topic: "Math", pattern: "Binary Search", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Apple", "Bloomberg"], link: "https://leetcode.com/problems/sqrtx/", tag: "Both" },
  { id: 148, title: "Pow(x, n)", topic: "Math", pattern: "Math", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/powx-n/", tag: "Both" },
  { id: 149, title: "Max Points on a Line", topic: "Math", pattern: "Math", difficulty: "Hard", companies: ["Google", "Amazon", "LinkedIn"], link: "https://leetcode.com/problems/max-points-on-a-line/", tag: "Interview" },

  // ==================== 1D DP (150-154) ====================
  { id: 150, title: "Climbing Stairs", topic: "1D DP", pattern: "Dynamic Programming", difficulty: "Easy", companies: ["Amazon", "Google", "Microsoft", "Adobe"], link: "https://leetcode.com/problems/climbing-stairs/", tag: "Both" },
  { id: 151, title: "House Robber", topic: "1D DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Cisco"], link: "https://leetcode.com/problems/house-robber/", tag: "Both" },
  { id: 152, title: "Word Break", topic: "1D DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg", "Apple"], link: "https://leetcode.com/problems/word-break/", tag: "Both" },
  { id: 153, title: "Coin Change", topic: "1D DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/coin-change/", tag: "Both" },
  { id: 154, title: "Longest Increasing Subsequence", topic: "1D DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/longest-increasing-subsequence/", tag: "Both" },

  // ==================== Multidimensional DP (155-163) ====================
  { id: 155, title: "Triangle", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/triangle/", tag: "Interview" },
  { id: 156, title: "Minimum Path Sum", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/minimum-path-sum/", tag: "Both" },
  { id: 157, title: "Unique Paths II", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/unique-paths-ii/", tag: "Both" },
  { id: 158, title: "Longest Palindromic Substring", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/longest-palindromic-substring/", tag: "Both" },
  { id: 159, title: "Interleaving String", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/interleaving-string/", tag: "Interview" },
  { id: 160, title: "Edit Distance", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/edit-distance/", tag: "Both" },
  { id: 161, title: "Best Time to Buy and Sell Stock III", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/", tag: "Interview" },
  { id: 162, title: "Best Time to Buy and Sell Stock IV", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/", tag: "Interview" },
  { id: 163, title: "Maximal Square", topic: "Multidimensional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Apple", "Airbnb"], link: "https://leetcode.com/problems/maximal-square/", tag: "Both" },

  // ==================== Greedy (164-171) ====================
  { id: 164, title: "Task Scheduler", topic: "Greedy", pattern: "Greedy", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/task-scheduler/", tag: "OA" },
  { id: 165, title: "Non-overlapping Intervals", topic: "Greedy", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/non-overlapping-intervals/", tag: "OA" },
  { id: 166, title: "Minimum Number of Arrows to Burst Balloons", topic: "Greedy", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/", tag: "OA" },
  { id: 167, title: "Partition Labels", topic: "Greedy", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/partition-labels/", tag: "OA" },
  { id: 168, title: "Lemonade Change", topic: "Greedy", pattern: "Greedy", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/lemonade-change/", tag: "OA" },
  { id: 169, title: "Queue Reconstruction by Height", topic: "Greedy", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/queue-reconstruction-by-height/", tag: "OA" },
  { id: 170, title: "Reorganize String", topic: "Greedy", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/reorganize-string/", tag: "OA" },
  { id: 171, title: "Minimum Number of Platforms", topic: "Greedy", pattern: "Sorting", difficulty: "Medium", companies: ["Amazon", "Google", "Uber", "Goldman Sachs"], link: "https://leetcode.com/problems/meeting-rooms-ii/", tag: "OA" },

  // ==================== Advanced Graph (172-179) ====================
  { id: 172, title: "Cheapest Flights Within K Stops", topic: "Advanced Graph", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Uber"], link: "https://leetcode.com/problems/cheapest-flights-within-k-stops/", tag: "OA" },
  { id: 173, title: "Network Delay Time", topic: "Advanced Graph", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/network-delay-time/", tag: "OA" },
  { id: 174, title: "Swim in Rising Water", topic: "Advanced Graph", pattern: "Binary Search", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/swim-in-rising-water/", tag: "OA" },
  { id: 175, title: "Number of Provinces", topic: "Advanced Graph", pattern: "Union Find", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg", "Uber"], link: "https://leetcode.com/problems/number-of-provinces/", tag: "Both" },
  { id: 176, title: "Accounts Merge", topic: "Advanced Graph", pattern: "Union Find", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/accounts-merge/", tag: "OA" },
  { id: 177, title: "Making A Large Island", topic: "Advanced Graph", pattern: "DFS", difficulty: "Hard", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/making-a-large-island/", tag: "OA" },
  { id: 178, title: "Pacific Atlantic Water Flow", topic: "Advanced Graph", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/pacific-atlantic-water-flow/", tag: "OA" },
  { id: 179, title: "Alien Dictionary", topic: "Advanced Graph", pattern: "Topological Sort", difficulty: "Hard", companies: ["Meta", "Amazon", "Google", "Airbnb", "Bloomberg"], link: "https://leetcode.com/problems/alien-dictionary/", tag: "OA" },

  // ==================== Union Find (180-184) ====================
  { id: 180, title: "Longest Consecutive Sequence", topic: "Union Find", pattern: "Hash Map", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/longest-consecutive-sequence/", tag: "Both" },
  { id: 181, title: "Redundant Connection", topic: "Union Find", pattern: "Union Find", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/redundant-connection/", tag: "OA" },
  { id: 182, title: "Most Stones Removed with Same Row or Column", topic: "Union Find", pattern: "Union Find", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/", tag: "OA" },
  { id: 183, title: "Number of Connected Components in an Undirected Graph", topic: "Union Find", pattern: "Union Find", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "LinkedIn"], link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/", tag: "OA" },
  { id: 184, title: "Graph Valid Tree", topic: "Union Find", pattern: "Union Find", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "LinkedIn"], link: "https://leetcode.com/problems/graph-valid-tree/", tag: "OA" },

  // ==================== Additional DP (185-194) ====================
  { id: 185, title: "Longest Common Subsequence", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/longest-common-subsequence/", tag: "Both" },
  { id: 186, title: "Partition Equal Subset Sum", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/partition-equal-subset-sum/", tag: "OA" },
  { id: 187, title: "Target Sum", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Meta", "Google"], link: "https://leetcode.com/problems/target-sum/", tag: "OA" },
  { id: 188, title: "Palindromic Substrings", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Microsoft"], link: "https://leetcode.com/problems/palindromic-substrings/", tag: "OA" },
  { id: 189, title: "Decode Ways", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/decode-ways/", tag: "OA" },
  { id: 190, title: "Maximum Product Subarray", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg", "Microsoft"], link: "https://leetcode.com/problems/maximum-product-subarray/", tag: "Both" },
  { id: 191, title: "Distinct Subsequences", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Hard", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/distinct-subsequences/", tag: "OA" },
  { id: 192, title: "Burst Balloons", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/burst-balloons/", tag: "OA" },
  { id: 193, title: "Regular Expression Matching", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Hard", companies: ["Meta", "Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/regular-expression-matching/", tag: "OA" },
  { id: 194, title: "Wildcard Matching", topic: "Additional DP", pattern: "Dynamic Programming", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/wildcard-matching/", tag: "OA" },

  // ==================== Design (195-202) ====================
  { id: 195, title: "LFU Cache", topic: "Design", pattern: "Design", difficulty: "Hard", companies: ["Amazon", "Google", "Meta", "Microsoft"], link: "https://leetcode.com/problems/lfu-cache/", tag: "OA" },
  { id: 196, title: "Design Twitter", topic: "Design", pattern: "Design", difficulty: "Medium", companies: ["Amazon", "Twitter", "Meta"], link: "https://leetcode.com/problems/design-twitter/", tag: "OA" },
  { id: 197, title: "Implement Stack using Queues", topic: "Design", pattern: "Design", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/implement-stack-using-queues/", tag: "OA" },
  { id: 198, title: "Implement Queue using Stacks", topic: "Design", pattern: "Design", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/implement-queue-using-stacks/", tag: "OA" },
  { id: 199, title: "Design Circular Queue", topic: "Design", pattern: "Design", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/design-circular-queue/", tag: "OA" },
  { id: 200, title: "Serialize and Deserialize Binary Tree", topic: "Design", pattern: "DFS", difficulty: "Hard", companies: ["Meta", "Amazon", "Google", "Microsoft", "LinkedIn"], link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/", tag: "Both" },
  { id: 201, title: "Design HashMap", topic: "Design", pattern: "Design", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Goldman Sachs"], link: "https://leetcode.com/problems/design-hashmap/", tag: "OA" },
  { id: 202, title: "Design Browser History", topic: "Design", pattern: "Design", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/design-browser-history/", tag: "OA" },

  // ==================== OA Strings (203-210) ====================
  { id: 203, title: "Group Anagrams", topic: "OA Strings", pattern: "Hash Map", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg"], link: "https://leetcode.com/problems/group-anagrams/", tag: "Both" },
  { id: 204, title: "Valid Anagram", topic: "OA Strings", pattern: "Hash Map", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/valid-anagram/", tag: "OA" },
  { id: 205, title: "Longest Happy String", topic: "OA Strings", pattern: "Greedy", difficulty: "Medium", companies: ["Amazon", "Google", "Adobe"], link: "https://leetcode.com/problems/longest-happy-string/", tag: "OA" },
  { id: 206, title: "String to Integer (atoi)", topic: "OA Strings", pattern: "String Traversal", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Bloomberg", "Meta"], link: "https://leetcode.com/problems/string-to-integer-atoi/", tag: "OA" },
  { id: 207, title: "Multiply Strings", topic: "OA Strings", pattern: "Math", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Microsoft"], link: "https://leetcode.com/problems/multiply-strings/", tag: "OA" },
  { id: 208, title: "Minimum Remove to Make Valid Parentheses", topic: "OA Strings", pattern: "Stack", difficulty: "Medium", companies: ["Meta", "Amazon", "Bloomberg", "TikTok"], link: "https://leetcode.com/problems/minimum-remove-to-make-valid-parentheses/", tag: "OA" },
  { id: 209, title: "Find All Anagrams in a String", topic: "OA Strings", pattern: "Sliding Window", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Microsoft"], link: "https://leetcode.com/problems/find-all-anagrams-in-a-string/", tag: "OA" },
  { id: 210, title: "Encode and Decode Strings", topic: "OA Strings", pattern: "String Traversal", difficulty: "Medium", companies: ["Meta", "Google", "Amazon", "Airbnb"], link: "https://leetcode.com/problems/encode-and-decode-strings/", tag: "OA" },

  // ==================== OA Arrays (211-220) ====================
  { id: 211, title: "Two Sum", topic: "OA Arrays", pattern: "Hash Map", difficulty: "Easy", companies: ["Amazon", "Google", "Meta", "Apple", "Bloomberg"], link: "https://leetcode.com/problems/two-sum/", tag: "Both" },
  { id: 212, title: "Subarray Sum Equals K", topic: "OA Arrays", pattern: "Prefix Sum", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/subarray-sum-equals-k/", tag: "OA" },
  { id: 213, title: "Next Permutation", topic: "OA Arrays", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/next-permutation/", tag: "OA" },
  { id: 214, title: "Sort Colors", topic: "OA Arrays", pattern: "Two Pointers", difficulty: "Medium", companies: ["Amazon", "Microsoft", "Adobe"], link: "https://leetcode.com/problems/sort-colors/", tag: "OA" },
  { id: 215, title: "First Missing Positive", topic: "OA Arrays", pattern: "Hash Map", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/first-missing-positive/", tag: "OA" },
  { id: 216, title: "Kth Missing Positive Number", topic: "OA Arrays", pattern: "Binary Search", difficulty: "Easy", companies: ["Amazon", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/kth-missing-positive-number/", tag: "OA" },
  { id: 217, title: "Maximum Points You Can Obtain from Cards", topic: "OA Arrays", pattern: "Sliding Window", difficulty: "Medium", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/", tag: "OA" },
  { id: 218, title: "Continuous Subarray Sum", topic: "OA Arrays", pattern: "Prefix Sum", difficulty: "Medium", companies: ["Meta", "Amazon", "Google"], link: "https://leetcode.com/problems/continuous-subarray-sum/", tag: "OA" },
  { id: 219, title: "Range Sum Query 2D - Immutable", topic: "OA Arrays", pattern: "Prefix Sum", difficulty: "Medium", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/range-sum-query-2d-immutable/", tag: "OA" },
  { id: 220, title: "Count of Smaller Numbers After Self", topic: "OA Arrays", pattern: "Divide & Conquer", difficulty: "Hard", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/count-of-smaller-numbers-after-self/", tag: "OA" },

  // ==================== OA Trees & Heap (221-229) ====================
  { id: 221, title: "Diameter of Binary Tree", topic: "OA Trees & Heap", pattern: "DFS", difficulty: "Easy", companies: ["Meta", "Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/diameter-of-binary-tree/", tag: "OA" },
  { id: 222, title: "Balanced Binary Tree", topic: "OA Trees & Heap", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/balanced-binary-tree/", tag: "OA" },
  { id: 223, title: "Vertical Order Traversal of a Binary Tree", topic: "OA Trees & Heap", pattern: "BFS", difficulty: "Hard", companies: ["Meta", "Amazon", "Bloomberg"], link: "https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/", tag: "OA" },
  { id: 224, title: "Binary Tree Postorder Traversal", topic: "OA Trees & Heap", pattern: "DFS", difficulty: "Easy", companies: ["Amazon", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/binary-tree-postorder-traversal/", tag: "OA" },
  { id: 225, title: "Kth Largest Element in a Stream", topic: "OA Trees & Heap", pattern: "Heap", difficulty: "Easy", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/kth-largest-element-in-a-stream/", tag: "OA" },
  { id: 226, title: "Top K Frequent Elements", topic: "OA Trees & Heap", pattern: "Heap", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "Bloomberg"], link: "https://leetcode.com/problems/top-k-frequent-elements/", tag: "Both" },
  { id: 227, title: "K Closest Points to Origin", topic: "OA Trees & Heap", pattern: "Heap", difficulty: "Medium", companies: ["Amazon", "Meta", "Google", "LinkedIn"], link: "https://leetcode.com/problems/k-closest-points-to-origin/", tag: "OA" },
  { id: 228, title: "Last Stone Weight", topic: "OA Trees & Heap", pattern: "Heap", difficulty: "Easy", companies: ["Amazon", "Google", "Goldman Sachs"], link: "https://leetcode.com/problems/last-stone-weight/", tag: "OA" },
  { id: 229, title: "Sort Characters By Frequency", topic: "OA Trees & Heap", pattern: "Heap", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/sort-characters-by-frequency/", tag: "OA" },

  // ==================== Intervals (230-234) ====================
  { id: 230, title: "Meeting Rooms II", topic: "Intervals", pattern: "Sorting", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg", "Uber"], link: "https://leetcode.com/problems/meeting-rooms-ii/", tag: "OA" },
  { id: 231, title: "Insert Interval", topic: "Intervals", pattern: "Sorting", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "LinkedIn"], link: "https://leetcode.com/problems/insert-interval/", tag: "Both" },
  { id: 232, title: "Interval List Intersections", topic: "Intervals", pattern: "Two Pointers", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Uber"], link: "https://leetcode.com/problems/interval-list-intersections/", tag: "OA" },
  { id: 233, title: "Employee Free Time", topic: "Intervals", pattern: "Sorting", difficulty: "Hard", companies: ["Amazon", "Google", "Airbnb", "Bloomberg"], link: "https://leetcode.com/problems/employee-free-time/", tag: "OA" },
  { id: 234, title: "My Calendar I", topic: "Intervals", pattern: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/my-calendar-i/", tag: "OA" },

  // ==================== OA Graph & Search (235-242) ====================
  { id: 235, title: "Walls and Gates", topic: "OA Graph & Search", pattern: "BFS", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/walls-and-gates/", tag: "OA" },
  { id: 236, title: "Open the Lock", topic: "OA Graph & Search", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/open-the-lock/", tag: "OA" },
  { id: 237, title: "Shortest Path in Binary Matrix", topic: "OA Graph & Search", pattern: "BFS", difficulty: "Medium", companies: ["Meta", "Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/shortest-path-in-binary-matrix/", tag: "OA" },
  { id: 238, title: "Detonate the Maximum Bombs", topic: "OA Graph & Search", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "TikTok"], link: "https://leetcode.com/problems/detonate-the-maximum-bombs/", tag: "OA" },
  { id: 239, title: "Number of Enclaves", topic: "OA Graph & Search", pattern: "DFS", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/number-of-enclaves/", tag: "OA" },
  { id: 240, title: "01 Matrix", topic: "OA Graph & Search", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft", "Bloomberg"], link: "https://leetcode.com/problems/01-matrix/", tag: "OA" },
  { id: 241, title: "As Far from Land as Possible", topic: "OA Graph & Search", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/as-far-from-land-as-possible/", tag: "OA" },
  { id: 242, title: "Shortest Bridge", topic: "OA Graph & Search", pattern: "BFS", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/shortest-bridge/", tag: "OA" },

  // ==================== OA Miscellaneous (243-250) ====================
  { id: 243, title: "Longest Repeating Character Replacement", topic: "OA Miscellaneous", pattern: "Sliding Window", difficulty: "Medium", companies: ["Amazon", "Google", "Uber"], link: "https://leetcode.com/problems/longest-repeating-character-replacement/", tag: "OA" },
  { id: 244, title: "Map Sum Pairs", topic: "OA Miscellaneous", pattern: "Trie", difficulty: "Medium", companies: ["Amazon", "Google", "Microsoft"], link: "https://leetcode.com/problems/map-sum-pairs/", tag: "OA" },
  { id: 245, title: "Daily Temperatures", topic: "OA Miscellaneous", pattern: "Monotonic Stack", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Bloomberg"], link: "https://leetcode.com/problems/daily-temperatures/", tag: "OA" },
  { id: 246, title: "Car Fleet", topic: "OA Miscellaneous", pattern: "Monotonic Stack", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/car-fleet/", tag: "OA" },
  { id: 247, title: "Asteroid Collision", topic: "OA Miscellaneous", pattern: "Stack", difficulty: "Medium", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/asteroid-collision/", tag: "OA" },
  { id: 248, title: "Next Greater Element I", topic: "OA Miscellaneous", pattern: "Monotonic Stack", difficulty: "Easy", companies: ["Amazon", "Google", "Bloomberg"], link: "https://leetcode.com/problems/next-greater-element-i/", tag: "OA" },
  { id: 249, title: "Time Based Key-Value Store", topic: "OA Miscellaneous", pattern: "Binary Search", difficulty: "Medium", companies: ["Amazon", "Google", "Meta", "Netflix"], link: "https://leetcode.com/problems/time-based-key-value-store/", tag: "OA" },
  { id: 250, title: "Trapping Rain Water II", topic: "OA Miscellaneous", pattern: "Heap", difficulty: "Hard", companies: ["Amazon", "Google", "Meta"], link: "https://leetcode.com/problems/trapping-rain-water-ii/", tag: "OA" },
];

export default questions;
