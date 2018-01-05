require_relative "heap"

class Array
  def heap_sort!
    # first heapify
    i = 1
    while i < self.length
      BinaryMinHeap.heapify_up(self, i, i + 1)
      i += 1
    end

    i = self.length - 1
    while i > 0
      # switch the first and last (pop off the least)
      temp = self[0]
      self[0] = self[i]
      self[i] = temp

      BinaryMinHeap.heapify_down(self, 0, i)
      i -= 1
    end

    self.reverse!

  end
end
