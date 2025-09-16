import { expect } from '../modules/test.js'
import { climbStairs, climbStairsComplexity } from "./index.js";

expect(() => climbStairs(2), 2);
expect(() => climbStairs(3), 3);
expect(() => climbStairs(5), 8);
expect(() => climbStairs(6), 13);
expect(() => climbStairs(24), 75025);
expect(() => climbStairs(35), 14930352);
expect(() => climbStairs(45), 1836311903);

expect(() => climbStairsComplexity(2), 2);
expect(() => climbStairsComplexity(3), 3);
expect(() => climbStairsComplexity(5), 8);
expect(() => climbStairsComplexity(6), 13);
expect(() => climbStairsComplexity(24), 75025);
expect(() => climbStairsComplexity(35), 14930352);
expect(() => climbStairsComplexity(45), 1836311903);