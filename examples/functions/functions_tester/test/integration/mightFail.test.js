const { app_id } = require("../../realm_config.json");
const Realm = require("realm");

const app = new Realm.App(app_id);

beforeEach(async () => {
  await app.logIn(Realm.Credentials.anonymous());
});
test("should first", async () => {
  let initVal = 0;
  const res = await app.currentUser.callFunction("mightFail", [initVal]);
  console.log(res);
});
