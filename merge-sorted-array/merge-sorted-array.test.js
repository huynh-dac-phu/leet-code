import { expect } from "../modules/test.js";
import { merge } from "./index.js";
var test1 = [1, 2, 3, 0, 0, 0], test2 = [1], test3 = [0]

merge(test1, 3, [2, 5, 6], 3);
merge(test2, 1, [], 0)
merge(test3, 0, [1], 1)

expect(
  test1,
  [1, 2, 2, 3, 5, 6]
);
expect(test2, [1]);
expect(test3, [1]);
