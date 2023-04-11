const exercise = require("../exercise1");

describe("fizzbuzz", () => {
  it("should throw an exception if input is not a number", () => {
    expect(() => {
      exercise.fizzBuzz("1");
    }).toThrow();
  });

  it("should return FizzBuzz if input is divisible by both 3 and 5", () => {
    const result = exercise.fizzBuzz(15);
    expect(result).toBe("FizzBuzz");
  });

  it("should return Fizz if input is divisible by both 3", () => {
    const result = exercise.fizzBuzz(3);
    expect(result).toBe("Fizz");
  });

  it("should return Buzz if input is divisible by 5", () => {
    const result = exercise.fizzBuzz(5);
    expect(result).toBe("Buzz");
  });

  it("should return input if its neither divisible by 3 or 5", () => {
    const result = exercise.fizzBuzz(4);
    expect(result).toBe(4);
  });
});
