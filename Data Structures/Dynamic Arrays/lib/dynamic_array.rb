require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize
    @store = StaticArray.new(8)
    @capacity = 8
    @length = 0
  end

  # O(1)
  def [](index)
    if index >= @length
      raise "index out of bounds"
    else
      return @store[index]
    end
  end

  # O(1)
  def []=(index, value)
    if index >= @length
      raise "index out of bounds"
    else
      @store[index] = value
    end
  end

  # O(1)
  def pop
    raise "index out of bounds" if @length == 0

    removed = @store[length - 1]
    @store[length - 1] = nil
    @length -= 1

    removed
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    self.resize! if @length + 1 > capacity

    @store[length] = val
    @length += 1
  end

  # O(n): has to shift over all the elements.
  def shift
    raise "index out of bounds" if @length == 0

    removed = @store[0]
    (0...@length).each { |i| @store[i] = @store[i + 1] }

    @store[@length - 1] = nil
    # temp = StaticArray.new(capacity)
    # (0...length).each { |i| temp[i] = @store[i + 1] }
    # @store = temp
    @length -= 1

    removed
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
    resize! if length + 1 > capacity

    temp = @store[0]
    @store[0] = val
    prev = temp
    (1...@length).each do |i|
      temp = @store[i]
      @store[i] = prev
      prev = temp
    end
    @store[@length] = 0


    @length += 1
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
    @store[index]
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
    temp = StaticArray.new(capacity * 2)
    @length.times do |i|
      temp[i] = @store[i]
    end

    @store = temp
    @capacity *= 2

  end
end
