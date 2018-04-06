
def longest_sub(input)
  start_i = 0
  end_i = 0
  longest = input[start_i..end_i]
  current_longest = input[start_i..end_i]
  hash = Hash.new(nil)

  while (end_i < input.length)
    if (hash[input[end_i]]) != nil
      start_i = hash[input[end_i]] + 1
    end

    hash[input[end_i]] = end_i
    current_longest = input[start_i..end_i]

    if longest.length < current_longest.length
      longest = current_longest
    end
    end_i += 1
  end
  longest
end


# test example
string1 = "abcdeaef"
print longest_sub(string1)
