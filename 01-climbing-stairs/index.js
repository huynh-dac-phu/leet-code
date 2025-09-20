/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = function (n) {
  const recursion = (n) => {
    if (n <= 1) return 1;
    return recursion(n - 1) + recursion(n - 2);
  };
  return recursion(n);
};

export const climbStairsComplexity = (n) => {
  let arr = new Array(n + 1);
  arr[1] = 1;
  arr[2] = 2;
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
};
