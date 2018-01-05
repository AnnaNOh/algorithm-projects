require 'byebug'

class BinaryMinHeap
  attr_reader :store, :prc

  def initialize(&prc)
    @store = []
    @prc = prc || Proc.new { |a,b| a <=> b }
  end

  def count
    @store.length
  end

  def extract
    removed = @store[0]
    @store[0] = @store.pop
    self.class.heapify_down(@store, 0, &prc)
    removed
  end

  def peek
    @store[0]
  end

  def push(val)
    @store << val
    self.class.heapify_up(@store, self.count - 1, @prc)
  end

  public
  # made these class methods so for heap sort it will be easier to write
  def self.child_indices(len, parent_index)
    result = []

    result << 2 * parent_index + 1 if 2 * parent_index + 1 < len
    result << 2 * parent_index + 2 if 2 * parent_index + 2 < len
    result
  end

  def self.parent_index(child_index)
    raise "root has no parent" if child_index == 0
    (child_index - 1) / 2
  end

  def self.heapify_down(array, parent_idx, len = array.length, &prc)
    prc = prc || Proc.new { |a, b| a <=> b }

    child1_idx = self.child_indices(len, parent_idx)[0]
    child2_idx = self.child_indices(len, parent_idx)[1]
    child1 = array[child1_idx] if child1_idx
    child2 = array[child2_idx] if child2_idx
    parent = array[parent_idx]

    # swap if child1 or child2 > parent
    if [child1, child2].any? { |child| child != nil && prc.call(parent, child) == 1 }
      if child2 == nil || prc.call(child1, child2) <= 0
        new_idx = child1_idx
        array[parent_idx] = child1
        array[child1_idx] = parent
      else
        new_idx = child2_idx
        array[parent_idx] = child2
        array[child2_idx] = parent
      end
    end

    # checks if swapping occured or not
    if parent == array[parent_idx]
      return array
    else
      self.heapify_down(array, new_idx, len, &prc)
    end
  end

  def self.heapify_up(array, child_idx, len = array.length, &prc)
    prc = prc || Proc.new { |a,b| a <=> b }

    return array if child_idx == 0

    parent_idx = self.parent_index(child_idx)
    parent = array[parent_idx]
    child = array[child_idx]

    # if parent < child, it's done so return array
    if prc.call(parent, child) <= 0
      return array
    else
    # swap parent and child
      array[child_idx] = parent
      array[parent_idx] = child
      heapify_up(array, parent_idx, len, &prc)
    end

  end
end
