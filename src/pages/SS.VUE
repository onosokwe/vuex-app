// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

//Examples

// Input: nums = [2,2,1]
// Output: 1


// Input:  nums = [12,1,3,1,3]
// output: 12
'

Leave the coding environment by closing this tab
let nums = [23, 23, 45, 89, 45, 90, 89]

function solve  () {
  
  nums.sort((a,b) => a-b)

  let i = 0
  let j = 1

  while (true){
   if (nums[i] != nums[j]){
     return nums[i]
   }

    i += 2
    j += 2

  }
}

console.log(solve())