const calculator = require("../calculator");

describe("Calculator function tests", () => {
  test("subtract 1 from 2 to equal 1", () => {
    const result = calculator.subtract(2, 1);
    console.log("Result of 2 + 3: ", result);
    expect(result).toBe(1);
  });

  test("subtract 4 from 6 to not equal 8", () => {
    const result = calculator.subtract(6, 4);
    console.log("Result of 6 - 4: ", result);
    expect(result).not.toBe(8);
  });

  test("subtract 4.002 from 6.001 to be close to 2", () => {
    const result = calculator.subtract(6.001, 4.002);
    console.log("Result of 6.001 - 4.002: ", result);
    expect(result).toBeCloseTo(2);
  });

  test("add 1 + 2 to equal 3", () => {
    const result = calculator.sum(1, 2);
    console.log("Result of 1 + 2: ", result);
    expect(result).toBe(3);
  });

  test("add 2 + 3 to not equal 6", () => {
    const result = calculator.sum(2, 3);
    console.log("Result of 2 + 3: ", result);
    expect(result).not.toBe(6);
  });

  test("add 6 + 6 to strictly equal 12", () => {
    const result = calculator.sum(6, 6);
    console.log("Result of 6 + 6: ", result);
    expect(result).toStrictEqual(12);
  });

  test("add 6 + 6 to not strictly equal 12", () => {
    const result = calculator.sum(6, "6");
    console.log("Result of 6 + 6: ", result);
    expect(result).not.toStrictEqual(12);
  });
});
