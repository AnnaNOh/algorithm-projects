require_relative "static_array"

class RingBuffer
  include Enumerable
  attr_reader :length

  def initialize
    @store = StaticArray.new(8)
    @capacity = 8
    @length = 0
    @start_idx = 0
  end

  # O(1)
  def [](index)
    raise "index out of bounds" if index < 0 || index >= @length
    @store[(index + @start_idx) % @capacity]
  end

  # O(1)
  def []=(index, val)
    # raise "index out of bounds" if index < 0 || index >= @length
    @store[(index + @start_idx) % capacity] = val
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0
    removed = self[@length - 1]
    self[@length - 1] = nil
    @length -= 1
    removed
  end

  # O(1) ammortized
  def push(val)
    self.resize! if @length == capacity

    @length += 1
    self[@length - 1] = val
  end

  # O(1)
  def shift
    raise "index out of bounds" if @length == 0
    removed = self[0]
    self[0] = nil
    @start_idx = (@start_idx + 1) % capacity
    @length -= 1
    removed
  end

  # O(1) ammortized
  def unshift(val)
    self.resize! if @length == capacity

    @start_idx = (@start_idx - 1) % capacity
    @length += 1
    self[0] = val
  end

  protected
  attr_accessor :capacity, :start_idx, :store
  attr_writer :length

  def check_index(index)
    self[index]
  end

  def resize!

    temp = StaticArray.new(@capacity * 2)
    @length.times do |i|
      temp[i] = self[i]
    end

    @store = temp
    @capacity = @capacity * 2
    @start_idx = 0
  end
end
