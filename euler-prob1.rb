#Euler Problem 1: Multiples of 3 & 5
#If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

#Find the sum of all the multiples of 3 or 5 below 1000.

def find_the_answer number
  good_numbers = Array.new
  total = 0
  number.times do |i|
    if i % 3 == 0 || i % 5 == 0
      good_numbers.push(i)
    end
  end
  total = good_numbers.reduce(0, :+)
  puts total
end

find_the_answer 1000
