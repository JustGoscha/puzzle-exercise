Puzzle
======

## Solution 1

## Solution 2
This solution I only found after implementing Solution 1 and iterating over several numbers manually. You see an observable pattern that the numbers go up by 2 for consecutive solutions until it comes to a number thats a power of 2.

For every number x where 2^n = x (with n being integer). *The solution is 1.*
For every other number x the solution is:

```
n = floor(log2(x))
1 + [x-(2^n)] * 2
```

TODO:
Do tests for large numbers 
Do tests for small numbers


## Performance test:
http://jsperf.com/puzzle-simple-test

## Conclusion 
Solution 2 is much faster. The recursive solution has to compute every solution log2(x) times. Whereas in solution 2, with the equation, the computation takes place only once (albeit a power and a log computation which can be fairly expensive).
It's easy to see, but the test also confirms it. It's only faster for x < 100 or x < 1000.
