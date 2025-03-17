import {tesRunFunction} from "./testFile";

describe("tesRunFunction", () => {
  it("should pass", () => {
    expect(tesRunFunction()).toEqual("Hello World");
  });
});
