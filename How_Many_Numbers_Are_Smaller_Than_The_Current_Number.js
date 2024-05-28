// 1365. How Many Numbers Are Smaller Than the Current Number


// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.




/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {

    let array = []

    for(let current = 0; current < nums.length; current++){
        let count = 0
        for(let j = 0; j < nums.length; j++){
            if(nums[j] < nums[current]){
                count+=1
            }
        }

        array.push(count)
    }

    return array
};