# Dynamic Arrays and Ring Buffer

[reading](https://github.com/appacademy/sf-job-search-curriculum/blob/master/algorithms/arrays/arrays_reading.md

Static Arrays only have access to these methods:

* []
* []=
* initialize(length)

Dynamic Arrays have access to:

* push
* pop
* unshift
* shift

keeping track of:

* @capacity
* @count
* @store
* @start_idx
  you can make a Dynamic Array with a ring buffer
  push/pop is O(1) time because of mortgaged time
  unshift/shift need a ring buffer, just move the start_idx as needed

If you need to push/unshift another element into the dynamic array when it's at full capacity, just create a new static array with capacity \* 2 length.
