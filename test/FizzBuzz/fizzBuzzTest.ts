import * as chai from "chai";
import { fizzBuzz } from "../../src/FizzBuzz/fizzBuzz";

describe("fizzBuzzのテスト", () => {
  it("1を入力すると1が返ってくる", () => {
    const input = 1;
    const expected = "1";

    const actual = fizzBuzz(input);

    chai.assert.equal(actual, expected);
  });
});
