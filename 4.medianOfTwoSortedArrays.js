var findMedianSortedArrays = function (nums1, nums2) {
  let mergedArray = [...nums1, ...nums2].sort((a, b) => a - b);

  let mid = Math.floor(mergedArray.length / 2);

  let ans =
    mergedArray.length % 2 === 1
      ? mergedArray[mid]
      : (mergedArray[mid] + mergedArray[mid - 1]) / 2;
  return ans.toFixed(5);
};

console.log(findMedianSortedArrays([1, 3], [2]));
