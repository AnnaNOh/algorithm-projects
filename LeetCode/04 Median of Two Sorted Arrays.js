// DROPPED

// Didn't agree with this solution entirely but it works most of the time
//
// Example
// Array A = [1,2,3]
// Array B = [4,5,6]
//
// Index ia starts in the middle of A
// Index ib starts in the middle of B
//
// Then it's three main cases:
// 1. Median is too little
// If A[ia] is less than the B[ib -1], move A[ia] over right once
//
// 2. Median is right
//
// 3. Median is too big
