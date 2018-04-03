// example array = [1, 2, 3, 4, 6]

def teemo_poison(array)
  last_poison_tick = 0
  duration = 0
  second_tick = false
  
  i = 0
  while i < array.length
    while second_tick
      if last_poison_tick + 1 == array[i]   //if the next element in the array overlaps
        i += 1    // check the next element
        second_tick = true
        last_poison_tick += 1
        duration += 1      
      else
        last_poison_tick += 1
        duration += 1
        second_tick = false
      end
    end
    
    last_poison_tick = array[i]
    duration += 1
    second_tick = true
    i += 1
  
  end
  duration + 1

end
