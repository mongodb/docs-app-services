const mightFail = require("../../functions/mightFail");

describe("Recursive retry unit tests", () => {
  test("should not throw error", async () => {
    const successRes = await mightFail(3);
    expect(successRes).toBe(true);
  });

  test("should throw error", async () => {
    const failRes = await mightFail(6);
    expect(failRes).toBe(undefined);
  });
});
