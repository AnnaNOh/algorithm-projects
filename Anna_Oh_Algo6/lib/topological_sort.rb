require_relative 'graph'

# Implementing topological sort using both Khan's and Tarian's algorithms

def topological_sort(vertices)

  # Kahn's Algorithm

  sorted = []
  top = []
  hash = Hash.new(0)

  vertices.each do |vertex|
    hash[vertex] = vertex.in_edges.length
    if vertex.in_edges.empty?
      top.unshift(vertex)
    end
  end

  until top.empty?
    current = top.pop
    sorted << current
    current.out_edges.each do |edge|
      if hash[edge.to_vertex] <= 1
        top.unshift(edge.to_vertex)
      end
      hash[edge.to_vertex] -= 1
    end
  end
  if sorted.length == vertices.length
    sorted
  else
    []
  end

  # this one doesn't work right now because it is missing cyclic or unconnected graph
  # fix at another time and try again with this method
  # unsorted = Hash.new
  # zero = []
  # temp = []
  #
  # vertices.each do |vertex|
  #   unsorted[vertex] = vertex.in_edges.length
  #   if vertex.in_edges.length == 0
  #     zero << vertex
  #     temp << vertex
  #   end
  # end
  #
  # while zero.length < vertices.length
  #   temp.each do |vertex|
  #     vertex.out_edges.each do |edge|
  #       unsorted[edge.to_vertex] -= 1
  #       edge.destroy!
  #     end
  #   end
  #
  #   temp = []
  #   unsorted.keys.each do |vertex|
  #     if vertex.in_edges.length == 0
  #       zero << vertex
  #       temp << vertex
  #     end
  #   end
  # end
  #
  # zero

  # result = []
  # zero.each do |vertex|
  #   result << vertex.value
  # end
  # result
end


# && !zero.include?(vertex)
