// :snippet-start: materialize-total-sales-test
const { app_id } = require("../../realm_config.json");
const Realm = require("realm");
const { BSON } = require("realm");

let user;
const app = new Realm.App(app_id);
const sandwichId = BSON.ObjectId();
const saladId = BSON.ObjectId();

// utility function
async function sleep(ms) {
  await new Promise((resolve) => setTimeout(resolve, ms));
}

beforeEach(async () => {
  const credentials = Realm.Credentials.anonymous();
  user = await app.logIn(credentials);
});
// Clean up. Removes user and data created in the test.
afterEach(async () => {
  const db = user.mongoClient("mongodb-atlas").db("store");
  await db.collection("sales").deleteMany({});
  await db.collection("total_sales_materialized").deleteMany({});
  await app.deleteUser(user);
});

test("Trigger creates a new materialization", async () => {
  const sales = user
    .mongoClient("mongodb-atlas")
    .db("store")
    .collection("sales");

  await sales.insertOne({
    _id: BSON.ObjectId(),
    productId: sandwichId,
    price: 12.0,
    timestamp: Date.now(),
  });

  // give time for trigger to execute
  await sleep(1000);

  const totalSalesMaterialized = user
    .mongoClient("mongodb-atlas")
    .db("store")
    .collection("total_sales_materialized");
  const allSandwichSales = await totalSalesMaterialized.findOne({
    _id: sandwichId,
  });
  expect(allSandwichSales.total_sales).toBe(1);
});

test("Trigger updates an existing materialization", async () => {
  const sales = user
    .mongoClient("mongodb-atlas")
    .db("store")
    .collection("sales");

  await sales.insertOne({
    _id: BSON.ObjectId(),
    productId: saladId,
    price: 15.0,
    timestamp: Date.now(),
  });
  await sales.insertOne({
    _id: BSON.ObjectId(),
    productId: saladId,
    price: 15.0,
    timestamp: Date.now(),
  });

  // give time for trigger to execute
  await sleep(1000);

  const totalSalesMaterialized = user
    .mongoClient("mongodb-atlas")
    .db("store")
    .collection("total_sales_materialized");
  const allSaladSales = await totalSalesMaterialized.findOne({
    _id: saladId,
  });
  expect(allSaladSales.total_sales).toBe(2);
});
// :snippet-end:
