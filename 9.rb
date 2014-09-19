# A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

# a^2 + b^2 = c^2
# For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

# There exists exactly one Pythagorean triplet for which a + b + c = 1000.
# Find the product abc.

def compute_hypotenuse(a, b)
  Math.sqrt(a * a + b * b)
end

desired = 1000

a = b = 1

while b <= desired
  c = compute_hypotenuse(a, b)
  triplet = a + b + c

  if triplet == desired
    puts a * b * c
    break
  elsif triplet < desired
    b += 1
  else
    b = 1
    a += 1
  end
end
