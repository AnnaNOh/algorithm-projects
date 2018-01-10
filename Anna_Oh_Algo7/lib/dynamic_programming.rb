class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
  end

  def blair_nums(n)
    # return blair_nums(n-1) + blair_nums(n-2) + (n-1)*2-1

    return @blair_cache[n] if @blair_cache[n]
    result = blair_nums(n - 1) + blair_nums(n - 2) + (n - 1) * 2 - 1
    @blair_cache[n] = result
    result
  end

  def frog_hops_bottom_up(n)
    frog_cache = frog_cache_builder(n)
    frog_cache[n]
  end

  def frog_cache_builder(n)
    # base case
    frog_cache = { 1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
    return frog_cache if n <= 3

    (4..n).each do |i|
      frog_cache[i] = []
      # for frog's single jumps
      # add to 1 every element from the hash entry one before it
      # so [1,1,1] + [1] sums to 4
      frog_cache[i-1].each do |el|
        frog_cache[1].each do |base1|
          frog_cache[i] << el + base1 if !frog_cache[i].include?(el + base1)
        end
      end
      # for frog's double jumps
      frog_cache[i-2].each do |el|
        frog_cache[2].each do |base2|
          frog_cache[i] << el + base2 if !frog_cache[i].include?(el + base2)
        end
      end
      # for frog's triple jumps
      frog_cache[i-3].each do |el|
        frog_cache[3].each do |base3|
          frog_cache[i] << el + base3 if !frog_cache[i].include?(el + base3)
        end
      end
    end
    
    frog_cache
  end

  def frog_hops_top_down(n)

  end

  def frog_hops_top_down_helper(n)

  end

  def super_frog_hops(n, k)

  end

  def knapsack(weights, values, capacity)

  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)

  end

  def maze_solver(maze, start_pos, end_pos)
  end
end
