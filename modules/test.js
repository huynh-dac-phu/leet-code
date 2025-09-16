export const expect = (callback, expectedResult) => {
  const result = callback();
  console.log(
    [result, expectedResult],
    result === expectedResult ? "✅" : "❌"
  );
};
