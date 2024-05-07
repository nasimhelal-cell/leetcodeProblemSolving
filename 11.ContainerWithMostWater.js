var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let maxArea = 0;

  while (left < right) {
    let W = right - left;
    let H = Math.min(height[left], height[right]);

    let area = W * H;
    maxArea = Math.max(area, maxArea);

    if (height[left] < height[right]) {
      left++;
    } else right--;
  }

  return maxArea;
};

console.log(maxArea([1, 1]));
