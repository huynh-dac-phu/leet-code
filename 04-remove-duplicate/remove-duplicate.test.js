import { expect } from "../modules/test.js";
import { removeDuplicates } from "./index.js";
var test1 = [1, 1, 2],
  test2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

// export first 'index' items
expect(test1, [1, 2]);
removeDuplicates(test1, 3);

removeDuplicates(test2, 2);
expect(test2, [0,1,2,3,4]);
