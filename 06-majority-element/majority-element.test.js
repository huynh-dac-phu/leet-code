import { expect } from "../modules/test.js";
import { majorityElement } from "./index.js";
var test1 = [1, 1, 1, 2, 2, 3],
  test2 = [0, 0, 2, 3, 3];

// export first 'index' items
expect(majorityElement(test1), 1);

majorityElement(test2);
expect(majorityElement(test2), 3);
