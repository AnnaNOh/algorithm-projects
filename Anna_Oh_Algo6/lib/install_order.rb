# Given an Array of tuples, where tuple[0] represents a package id,
# and tuple[1] represents its dependency, determine the order in which
# the packages should be installed. Only packages that have dependencies
# will be listed, but all packages from 1..max_id exist.

# N.B. this is how `npm` works.

# Import any files you need to


require 'topological_sort'

def install_order(arr)
  vertices = []

  # find max id
  max_id = 0
  arr.each do |el|
    # find max id
    max_id = el[0] if el[0] > max_id
    max_id = el[1] if el[1] > max_id
  end
  # max_id = arr.flatten.sort[-1]

  # make all vertexes
  (1..max_id).each do |value|
    vertices << Vertex.new(value)
  end

  # make edges
  edges = []
  arr.each do |el|
    edges << Edge.new(vertices[el[0]-1], vertices[el[1]-1])
  end

  topological_sort(vertices).map { |vertex| vertex.value }.reverse!
end
