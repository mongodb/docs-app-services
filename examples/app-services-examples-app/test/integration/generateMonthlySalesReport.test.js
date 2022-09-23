const Realm = require("realm");
const { connectToMongoDbClient, sleep } = require("./utils");

const app = new Realm.App(process.env.APP_ID);
const april = 3; // starting with January as 0 index
const twenty22 = 2022;
let client;
beforeAll(async () => {
  await app.logIn(Realm.Credentials.serverApiKey(process.env.LOCAL_TEST_KEY));
  client = connectToMongoDbClient();
});

afterAll(async () => {
  await app.currentUser.logOut();
  await client
    .db("store")
    .collection("monthlyProductSales")
    .deleteMany({ month: april, year: twenty22 });
  await client.close();
});

test("Generate monthly sales report", async () => {
  const materializedSales = client
    .db("store")
    .collection("monthlyProductSales");

  const materializedSales1 = {
    year: twenty22,
    month: april,
    productId: "Ramen",
    totalSalesUsd: 15,
  };
  const materializedSales2 = {
    year: twenty22,
    month: april,
    productId: "Salmon skin hand roll",
    totalSalesUsd: 200,
  };
  const materializedSales3 = {
    year: twenty22,
    month: april,
    productId: "Ceviche",
    totalSalesUsd: 1000,
  };

  await materializedSales.insertMany([
    materializedSales1,
    materializedSales2,
    materializedSales3,
  ]);
  sleep(500);

  const aprilTwenty22SalesReport =
    await app.currentUser.functions.generateMonthlySalesReport(april, twenty22);
  expect(aprilTwenty22SalesReport.length).toBe(3);
});
