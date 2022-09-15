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
    const res2 = await app.currentUser.callFunction("returnUndefined");
    expect(res).toBe(null);
    expect(res2).toBe(undefined);
  });
});
