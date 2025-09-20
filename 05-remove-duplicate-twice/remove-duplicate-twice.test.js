import { expect } from "../modules/test.js";
import { removeDuplicates } from "./index.js";
var test1 = [1, 1, 1, 2, 2, 3],
  test2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];

// export first 'index' items
removeDuplicates(test1);
expect(test1, [1, 1, 2, 2, 3]);


removeDuplicates(test2);
expect(test2, [0, 0, 1, 1, 2, 3, 3]);
