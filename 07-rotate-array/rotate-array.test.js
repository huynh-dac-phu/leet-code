import { expect } from "../modules/test.js";
import { rotate } from "./index.js";
var test1 = [1, 1, 1, 2, 2, 3],
  test2 = [0, 0, 2, 3, 3];

// export first 'index' items
rotate(test1, 2);
expect(test1, [2, 3, 1, 1, 1, 2]);

rotate(test2, 3);
expect(test2, [2, 3, 3, 0, 0]);
