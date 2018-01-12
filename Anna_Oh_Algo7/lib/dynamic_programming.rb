class DynamicProgramming

  def initialize
    @blair_cache = { 1 => 1, 2 => 2 }
    @frog_cache = { 1 => [[1]], 2 => [[1, 1], [2]], 3 => [[1, 1, 1], [1, 2], [2, 1], [3]] }
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
      frog_cache[i - 1].each do |el|
        frog_cache[1].each do |base1|
          frog_cache[i] << el + base1 if !frog_cache[i].include?(el + base1)
        end
      end
      # for frog's double jumps
      frog_cache[i - 2].each do |el|
        frog_cache[2].each do |base2|
          frog_cache[i] << el + base2 if !frog_cache[i].include?(el + base2)
        end
      end
      # for frog's triple jumps
      frog_cache[i - 3].each do |el|
        frog_cache[3].each do |base3|
          frog_cache[i] << el + base3 if !frog_cache[i].include?(el + base3)
        end
      end
    end

    frog_cache
  end

  def frog_hops_top_down(n)
    return @frog_cache[n] if @frog_cache[n]
    frog_hops_top_down_helper(n)
  end

  def frog_hops_top_down_helper(n)
    @frog_cache[n] = []
    # frog's single jumps
    frog_hops_top_down(n - 1).each do |el|
      @frog_cache[1].each do |base1|
        @frog_cache[n] << el + base1 if !@frog_cache[n].include?(el + base1)
      end
    end
    # frog's double jumps
    frog_hops_top_down(n - 2).each do |el|
      @frog_cache[2].each do |base2|
        @frog_cache[n] << el + base2 if !@frog_cache[n].include?(el + base2)
      end
    end
    # frog's triple jumps
    frog_hops_top_down(n - 3).each do |el|
      @frog_cache[3].each do |base3|
        @frog_cache[n] << el + base3 if !@frog_cache[n].include?(el + base3)
      end
    end
    @frog_cache[n]
  end

  def super_frog_hops(n, k)
    @super_frog_cache = { 1 => [[1]] }
    @super_frog_cache = n_cache_maker(n, @super_frog_cache)

    if k > n
      return @super_frog_cache[n]
    else
      ((k+1)..n).each do |i|
        hops = []
        (1..k).each do |i2|
          @super_frog_cache[i - i2].each do |combo|
            @super_frog_cache[i2].each do |hop_count|
              hops << combo + hop_count if !hops.include?(combo + hop_count)
            end
          end
        end
        @super_frog_cache[i] = hops
      end
    end
    @super_frog_cache[n]
  end

  def n_cache_maker(n, cache)
    (2..n).each do |i|
      hops = []
      (1...i).each do |i2|
        cache[i2].each do |combo|
          cache[i-i2].each do |hop_count|
            hops << combo + hop_count if !hops.include?(combo + hop_count)
          end
        end
      end
      cache[i] = hops + [[i]]
    end
    cache
  end

  def knapsack(weights, values, capacity)
    table = knapsack_table(weights, values, capacity)
    table[weights.length][capacity]
    # knapsack_table(weights, values, capacity)[weights.length][capacity]
  end

  # Helper method for bottom-up implementation
  def knapsack_table(weights, values, capacity)
    num_items = weights.length
        #create the hash
        weight_val_hash = {}
        (1..num_items).each do |i|
          weight_val_hash[i] = [weights[i - 1], values[i - 1]]
        end
        table = Array.new(num_items + 1) { Array.new(capacity + 1)}
        table[0].each_index do |idx|
          table[0][idx] = 0
        end
        (1..num_items).each do |i|
          weight, value = weight_val_hash[i]
          (0..capacity).each do |j|
            if weight > j
              table[i][j] = table[i-1][j]
            else
              table[i][j] = [table[i-1][j], table[i-1][j - weight] + value].max
            end
          end
        end
        return table

  # doesn't work. need to keep at it.
  #   num_items = weights.length
   #
  #   weight_hash = {}
  #   (1..num_items).each do |i|
  #     weight_hash[i] = [weights[i-1], values[i-1]]
  #   end
   #
  #   # table = Array.new(num_items + 1) { Array.new(capacity + 1)}
  #   # (0...table[0].length).each do |i|
  #   #   table[0][i] = 0
  #   # end
  #   table = Array.new(num_items + 1) { Array.new(capacity + 1)}
  #   table[0].each_index do |idx|
  #     table[0][idx] = 0
  #  end
   #
  #   (1..num_items).each do |i|
  #     weight, value = weight_hash[i]
  #     (0..capacity).each do |j|
  #       if weight > j
  #         table[i][j] = table[i - 1][j]
  #       else
  #         table[i][j] = [table[i - 1][j], table[i - 1][j - weight] + value].max
  #       end
  #     end
  #     table
  #   end

  end

  def maze_solver(maze, start_pos, end_pos)

  end
end

# their solution
