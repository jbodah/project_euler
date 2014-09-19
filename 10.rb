# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

# Find the sum of all the primes below two million.

class PrimeCollection
  def initialize(size)
    @max = size
    @arr = Array.new(@max-2, true)
  end

  def create
    (2..@max).to_a.each do |potential_prime|
      next if !is_prime?(potential_prime)
      current = potential_prime * 2
      while current < @max
        mark_not_prime(current)
        current += potential_prime
      end
    end
    self
  end

  def mark_not_prime(number)
    @arr[number-2] = false
  end

  def is_prime?(number) 
    @arr[number-2]
  end

  def primes
    return @primes if @primes
    @primes = []
    @arr.each_index {|idx| @primes << idx if is_prime?(idx)}
    @primes
  end
end

def primes_less_than(max)
  PrimeCollection.new(max).create.primes
end

puts primes_less_than(2000000).inject {|sum, i| sum+i}
