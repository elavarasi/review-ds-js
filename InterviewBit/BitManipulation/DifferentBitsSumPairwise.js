/**
 We define f(X, Y) as number of different corresponding bits in binary representation of X and Y.
 For example, f(2, 7) = 2, since binary representation of 2 and 7 are 010 and 111, respectively.
 The first and the third bit differ, so f(2, 7) = 2.

 You are given an array of N positive integers, A1, A2 ,…, AN. Find sum of f(Ai, Aj) for all pairs (i, j) such that 1 ≤ i, j ≤ N. Return the answer modulo 109+7.

 For example,

 A=[1, 3, 5]

 We return

 f(1, 1) + f(1, 3) + f(1, 5) +
 f(3, 1) + f(3, 3) + f(3, 5) +
 f(5, 1) + f(5, 3) + f(5, 5) =

 0 + 1 + 1 +
 1 + 0 + 2 +
 1 + 2 + 0 = 8
 **/


//Ela's own good solution (time exceeded, so partial credit)
module.exports = self = {
  //param A : array of integers
  //return an integer
  cntBits : function(A) {
    let sum = 0;
    for(let i=0; i< A.length-1; i++) {
      let j = i+1;
      while(j<= A.length-1) {
        let xor = A[i] ^ A[j];
        let totaldiffbits = 0;
        while (xor > 0) {
          if (xor & 1 ==1) {
            totaldiffbits ++;
          }
          xor = xor >> 1;
        }
        sum = sum + (totaldiffbits * 2);
        j++;
      }
    }
    return sum;
  }
};

let A = [ 1, 3, 5 ];
console.log(self.cntBits(A));
