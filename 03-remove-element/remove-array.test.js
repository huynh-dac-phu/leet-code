import { expect } from "../modules/test.js";
import { removeElement } from "./index.js";
var test1 = [3, 2, 2, 3],
  test2 = [0, 1, 2, 2, 3, 0, 4, 2];

// export first 'val' items
removeElement(test1, 3);
expect(test1, [2, 2]);

removeElement(test2, 2);
expect(test2, [0,1,4,0,3]);
