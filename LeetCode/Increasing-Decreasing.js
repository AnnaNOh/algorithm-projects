Increasing-Decreasing Array
Find the maximum element in an array which is first increasing and then decreasing
Algorithm
Use a binary search technique
At every step calculate the mid element
Compare the mid element with its neighbors
if they are increasing then search the right sub array,
if they are decreasing then search the left sub array
else we have found the max element
