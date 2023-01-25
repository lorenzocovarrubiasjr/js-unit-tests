import { expect, it } from "vitest";
import { add } from "./math";

it("should summarize all number values in an array", () => {
  //Arrange
  const numbers = [1, 2, 3];

  //Act
  const result = add(numbers);

  //Assert
  expect(result).toBe(6);
});

it("should yield NaN if at least one invalid number is provided", () => {
  //Arrange
  const inputs = ["invalid", 1];

  //Act
  const result = add(inputs);

  //Assert
  expect(result).toBeNaN();
});

it("should yield a correct sum if an array of numeric string values is provided", () => {
  //Arrange
  const strNumbers = ["1", "2", "3"];

  //Act
  const result = add(strNumbers);

  //Assert
  expect(result).toBe(6);
});

it("should 0 if an empty array is provided", () => {
  //Arrange
  const empty = [];

  //Act
  const result = add(empty);

  //Assert
  expect(result).toBe(0);
});

it("should throw an error if no value is passed into the function", () => {
  //Arrange
  const resultFn = () => {
    add();
  };

  //Assert
  expect(resultFn).toThrow();
});

it("should throw an erro if provided with multiple arguments instead of an array", () => {
  //Arrange
  const num1 = 1;
  const num2 = 2;
  const expectedError = /is not iterable/;

  //Act
  const resultFn = () => add(num1, num2);

  //Assert
  expect(resultFn).toThrow(expectedError);
});
