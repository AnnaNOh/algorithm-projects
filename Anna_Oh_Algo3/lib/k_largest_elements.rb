require_relative 'heap'

def k_largest_elements(array, k)
  # ruby's sort method is quicksort, which is nlogn
  sorted = array.sort
  sorted[sorted.length - k..-1]
end
