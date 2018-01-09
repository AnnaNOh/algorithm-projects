# There are many ways to implement these methods, feel free to add arguments
# to methods as you see fit, or to create helper methods.
require 'bst_node'
require 'byebug'

class BinarySearchTree
  attr_accessor :root

  def initialize
    @root = nil
  end

  def insert(value)
    return @root = BSTNode.new(value) if @root == nil
    inserted = false
    compared = @root

    until inserted
      if value <= compared.value
        if compared.left == nil
          compared.left = BSTNode.new(value)
          compared.left.parent = compared
          inserted = true
        else
          compared = compared.left
        end
      else
        if compared.right == nil
          compared.right = BSTNode.new(value)
          compared.right.parent = compared
          inserted = true
        else
          compared = compared.right
        end
      end
    end

  end

  def find(value, tree_node = @root)
    compared = tree_node
    finished = false

    until finished
      if compared == nil
        return nil
      elsif value == compared.value
        return compared
      elsif value < compared.value
        compared = compared.left
      else
        compared = compared.right
      end
    end

  end

  def delete(value)
    deleted = self.find(value)
    return nil if deleted == nil
    # return nil if deleted.parent == nil

    # both left and right are nil
    if deleted.left == nil && deleted.right == nil
      return @root = nil if deleted == @root

      if deleted.parent.left == deleted
        deleted.parent.left = nil
      else
        deleted.parent.right = nil
      end
    # either one is nil
    elsif deleted.left == nil || deleted.right == nil
      promoted = deleted.left if deleted.left != nil
      promoted = deleted.right if deleted.right != nil

      if deleted.parent.left == deleted
        deleted.parent.left = promoted
      else
        deleted.parent.right = promoted
      end
      promoted.parent = deleted.parent

    # two children, so get largest node in the left subtree
    else
      promoted = self.maximum(deleted.left)
      promoted.right = deleted.right

      if deleted.parent.left == deleted
        deleted.parent.left = promoted
      else
        deleted.parent.right = promoted
      end
      # promotes its own children to its spot
      promoted.parent.right = promoted.left
      promoted.parent = deleted.parent

    end
    return deleted
  end

  # helper method for #delete:
  def maximum(tree_node = @root)

    max = tree_node
    compared = max.right

    until compared == nil
      max = compared if compared.value > max.value
      compared = compared.right
    end

    return max
  end

  def depth(tree_node = @root)
    return 0 if tree_node == nil
    count = 0
    current_node = [tree_node]
    prev_node = [tree_node]
    while current_node.length != 0
      current_node = []
      prev_node.each do |node|
        current_node << node.left if node.left != nil
        current_node << node.right if node.right != nil
      end
      prev_node = current_node
      count += 1
    end
    count-1
  end

  def is_balanced?(tree_node = @root)
    current_node = [tree_node]
    prev_node = [tree_node]
    while current_node.length != 0
      current_node = []
      prev_node.each do |node|
        current_node << node.left if node.left != nil
        current_node << node.right if node.right != nil
        return false if depth(node.left) - depth(node.right) > 1 || depth(node.left) - depth(node.right) < -1
      end
      prev_node = current_node
    end
    true
  end

  # did not get this one to work in the end
  def in_order_traversal(tree_node = @root, arr = [])
    result = arr

    # until tree_node == nil
    #   current_node = tree_node
    #   until current_node.left == nil
    #     current_node = current_node.left
    #   end
    #   result << current_node.value
    #   p result
    #   self.delete(current_node.value)
    # end

    # until @root == nil
    #   result << self.maximum.value
    #   self.delete(maximum.value)
    # end
    # return result.reverse


    current_node = [tree_node]
    prev_node = [tree_node]
    while current_node.length != 0
      current_node = []
      prev_node.each do |node|
        current_node << node.left if node.left != nil
        current_node << node.right if node.right != nil
        result << node.value
      end
      prev_node = current_node
    end
    return result.sort!
  end


  private
  # optional helper methods go here:

end
