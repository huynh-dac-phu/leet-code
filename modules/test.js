export const expect = (result, expectedResult) => {
  let status = false;
  if (Array.isArray(expectedResult)) {
    status = JSON.stringify(result) === JSON.stringify(expectedResult);
  } else {
    status = result === expectedResult;
  }
  console.log({
    result,
    expectedResult,
    status: status ? "✅" : "❌",
  });
};
