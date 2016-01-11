#!/usr/bin/env node

var num = parseInt(process.argv[2]);

function puzzle(n){

  // if(!isInt(n)) return undefined
  if(n < 1) return undefined
  if(n == 1) return 1
  if(n > 1){
    var recursionResult;
    var nx;
    if(isEven(n)){
      nx = n/2;
      recursionResult = 2*puzzle(nx)-1;
      console.log("Puzzle("+n+")->"+recursionResult);
    } else {
      nx = (n+1)/2;
      recursionResult = 2*(mod(puzzle(nx)-2,nx)+1)-1;
      console.log("Puzzle("+n+")->"+recursionResult+" (odd)");
    }
    
    return recursionResult;
  }
}

function solution2(x){
  var n = Math.log2(x);
  if (isInt(n)) return 1
  else {
    n = Math.floor(n);
    var y = 1+2*(x-Math.pow(2,n));
    return y;
  }
}


function solution2b(x){
  var n = Math.floor(Math.log2(x));
  var y = 1+2*(x-Math.pow(2,n));

  return y;
} 

// Source - http://stackoverflow.com/questions/14636536/how-to-check-if-a-variable-is-an-integer-in-javascript
function isInt(value) {
  return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
}

function isEven(n) {
   return n % 2 == 0;
}

function isOdd(n) {
   return Math.abs(n % 2) == 1;
}

function mod(n,div){
  return (n+div)%div;
}

// execute function
console.log("->"+puzzle(num));

console.log("Solution 2: " +  solution2(num));
console.log("Solution 2b: "+ solution2b(num));

