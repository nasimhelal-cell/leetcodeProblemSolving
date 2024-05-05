var findMaxK = function(nums) {

     nums = nums.sort((a, b) => b-a)

     let positiveNumber = nums.filter(item=>item>0);

     let negativeNumber = nums.filter(item=>item<0)
     
    let theLargestValue = -1

    return positiveNumber
};

console.log(findMaxK([-10,8,6,7,-2,-3]))