const mightFail = require("../../functions/mightFail");

test("No error", async () => {
  let initVal = 0;
  try {
    const res = await mightFail(initVal);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
});
