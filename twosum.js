/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Declare a function called twoSum that takes an array of numbers and a target sum
let nums = [1, 2, 3, 4, 5];
let target = 9;

var twoSum = function (nums, target) {
  // Create an empty object to store the index of each number in the array
  const numIndices = {};

  // Use a for loop to iterate through the array of numbers
  for (let i = 0; i < nums.length; i++) {
    // Create a variable (num) to retrive the current num from the array
    const num = nums[i];
    // Create a variable to check the difference between the target and the current number (num)
    const result = target - num;

    // Use an if statement to check if the differece (result) is already in the numIndices object
    if (result in numIndices) {
      // Return the index of the result and the current index
      return [numIndices[result], i];
    }
    // If the difference (result) is not in the numIndices, store the current number's index and restart the for loop from the current index
    numIndices[num] = i;
  }
  // If no pairs within the table are found equaling to the target, return null
  return null;
};

// Test the function and log the oututs
console.log(twoSum(nums, target));
