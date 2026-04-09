import { sum } from "../components/sum.js";

test("Function should calculate the sum of two numbers",() => {
    // assertion
    expect(sum(6,5)).toBe(11);
});