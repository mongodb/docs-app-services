const { app_id } = require("../../realm_config.json");
const Realm = require("realm");

const app = new Realm.App(app_id);

beforeAll(async () => {
  await app.logIn(Realm.Credentials.anonymous());
});
afterAll(async () => {
  await app.currentUser.logOut();
});

describe("Recursive retry integration tests", () => {
  test("should not fail", async () => {
    let passVal = 0;
    const res = await app.currentUser.callFunction("mightFail", [passVal]);
    expect(res).toBe(true);
  });
  test("should fail", async () => {
    let failVal = 6;
    const res = await app.currentUser.callFunction("mightFail", [failVal]);
    expect(res).toBe(null);
  });
});

jest.setTimeout(20000);
// for this one, i wasn't sure how to properly test. but looked at the logs
// to verify behavior
test("Database Trigger retry test", async () => {
  let failed = false;
  let res;
  while (!failed) {
    sleep(100);
    res = await app.currentUser.callFunction(
      "additionWithRetryHandler",
      [1, 2]
    );
    if (res === null) {
      failed = true;
    }
  }
});

async function sleep(milliseconds) {
  await new Promise((resolve) => setTimeout(resolve, milliseconds));
}
