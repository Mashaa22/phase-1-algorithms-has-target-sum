
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === complement) return true;
    }
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)

*/

/*
  Add written explanation of your solution here
  To determine the difference between a particular number in the array and the target, use the for loop. To see if the difference is a number in the array, loop it again. If the answer is yes, then return is true. If not, the return is false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 43, 4, 6, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([21, 14, 4, 6, 1], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([5, 9, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([20], 20));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([14, 3, 7, 3], 6));
}

module.exports = hasTargetSum;