class QuickSort
  # Quick sort has average case time complexity O(nlogn), but worst
  # case O(n**2).

  # Not in-place. Uses O(n) memory.
  def self.sort1(array)
    return array if array.lenth <= 1

    pivot = array[0]

    i = 0
    left = []
    right = []
    while i < array.length
      if array[i] < pivot
        left << array[i]
      else
        right << array[i]
      end
      i += 1
    end

    self.sort1(left) + [pivot] + self.sort1(right)
  end

  # In-place.
  def self.sort2!(array, start = 0, length = array.length, &prc)
    return array if length <= 1

    prc = prc || Proc.new { |a, b| a <=> b }
    
    pivot_idx = partition(array, start, length, &prc)
    length_left = pivot_idx - start
    length_right = length - (length_left + 1)

    # recursively call on left and right side
    sort2!(array, start, length_left, &prc)
    sort2!(array, pivot_idx + 1, length_right, &prc)

    array
  end

  def self.partition(array, start, length, &prc)
    prc = prc || Proc.new { |a, b| a <=> b }

    pivot = array[start]
    partition_idx = start + 1

    i = start + 1
    while i < start + length
      if prc.call(pivot, array[i]) == 1
        # switch big numbers out of the partition
        temp = array[i]
        array[i] = array[partition_idx]
        array[partition_idx] = temp

        partition_idx += 1
      end
      i += 1
    end
    # move pivot to its proper position
    array[start], array[partition_idx - 1] = array[partition_idx - 1], array[start]
    partition_idx - 1
  end
end
