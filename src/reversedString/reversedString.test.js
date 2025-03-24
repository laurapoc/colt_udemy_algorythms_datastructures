import { reversedString } from "./reversedString";

describe("reversedString", () => {
  it("should reverse a string", () => {
    expect(reversedString("hello")).toBe("olleh");
  });
});
