// Runtime: O(n)
function hasTargetSum(array, target) {
    const seenNumbers = {};

    for (const number of array) {
        // n steps
        const complement = target - number;
        if (complement in seenNumbers) return true;
        seenNumbers[number] = true;
    }

    return false;
}

// Runtime: O(n^2)
// function hasTargetSum(array, target) {
//   for (let i = 0; i < array.length; i++) {
//     const complement = target - array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       if (array[j] === complement) return true;
//     }
//   }

//   return false;
// }

// O(n) runtime
function findSock(array) {
    for (const item of array) {
        if (item === "sock") return "sock";
    }
}

// O(1) runtime
function findSock(object) {
    if (object.sock) return "sock";
}
/* 
  Write the Big O time complexity of your function here
  Runtime: O(n^2)
  Space: O(n)
*/

/* 
  hasTargetSum([1,2,3,4], 6)
  seenNumbers = {
    1: true,
    2: true,
    3: true
  }
  create an object to keep track of numbers we've already seen
  iterate through each number in the array
    for the current num, identify a complement that adds to the target (comp = target - num)
    check if any key on our object is the complement
      if so, return true
      otherwise, add that number to the object
  if I reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", hasTargetSum([2, 19, 11, 5, 15, 9], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([12, 24, 4, 1, 19], 15));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([2, 3, 9], 5));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", hasTargetSum([10], 10));

    console.log("");

    console.log("Expecting: true");
    console.log("=>", hasTargetSum([10, 6, 14, 8], 16));
}

module.exports = hasTargetSum;