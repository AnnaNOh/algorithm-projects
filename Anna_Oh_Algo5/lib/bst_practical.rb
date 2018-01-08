
def kth_largest(tree_node, k)
  result = []

  current_node = [tree_node]
  prev_node = current_node
  while current_node.length != 0
    current_node = []
    prev_node.each do |node|
      current_node << node.left if node.left != nil
      current_node << node.right if node.right != nil
      result << node
    end
    prev_node = current_node
  end
  result.sort! { |a,b| b.value <=> a.value }
  result[k-1]
end
