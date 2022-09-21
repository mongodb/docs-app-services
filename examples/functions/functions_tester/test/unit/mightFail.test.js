const mightFail = require("../../functions/mightFail");

describe("Recursive retry unit tests", () => {
  test("should not throw error", async () => {
    const successVal = 3;
    const successRes = await mightFail(successVal);
    expect(successRes).toBe(true);
  });

  test("should throw error", async () => {
    const failVal = 6;
    const failRes = await mightFail(failVal);
    expect(failRes).toBe(undefined);
  });
});
