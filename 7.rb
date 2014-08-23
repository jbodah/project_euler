# 10001st prime
# Problem 7
# By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

# What is the 10001st prime number?

def get_nth_prime(n, memo)
  sentinel = nil
  2.upto(n) do |index|
    next if memo[index] == sentinel
    memo = sieve(index, memo, sentinel)
  end
  # Not efficent but clean
  memo = memo.reject {|item| item == sentinel || item < 2}
  memo.size < n ? (raise 'Memo too small, use a bigger memo') : memo[n-1]
end

def sieve(value, memo, sentinel)
  current = value + value # don't mark the prime
  while current < memo.size do
    memo[current] = sentinel
    current += value
  end
  memo
end

puts get_nth_prime(10001, (0..1000000).to_a)
