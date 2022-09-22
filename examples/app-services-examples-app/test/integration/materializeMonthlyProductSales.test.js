const { connectToMongoDbClient, sleep } = require("./utils");

describe("Materialize monthly product sales", () => {
  let client;
  beforeAll(async () => {
    client = connectToMongoDbClient();
  });
  afterAll(async () => {
    await client.close();
  });
  afterEach(async () => {
    // const list = ["sales", "monthlyProductSales"];
    const storeDb = client.db("store");
    await storeDb.collection("sales").deleteMany({});
    await storeDb.collection("monthlyProductSales").deleteMany({});
    // const collections = (await storeDb.listCollections().toArray()).map(
    //   (collection) => collection.name
    // );

    // for (let i = 0; i < list.length; i++) {
    //   if (collections.indexOf(list[i]) !== -1) {
    //     await storeDb.dropCollection(list[i]);
    //   }
    // }
    // await client.db("store").collection("sales").drop();
    // await client.db("store").collection("monthlyProductSales").drop();
  });
  test("Should materialize sales", async () => {
    const sales = client.db("store").collection("sales");

    const productId = "pizza";
    const amountUsd = 3;
    const timeOfSale2 = new Date(2022, 9, 15);
    const timeOfSale1 = new Date(2022, 9, 20);
    const pizzaSale1 = { productId, timeOfSale: timeOfSale1, amountUsd };
    const pizzaSale2 = { productId, timeOfSale: timeOfSale2, amountUsd };
    await sales.insertMany([pizzaSale1, pizzaSale2]);

    // Give triggers time to execute
    await sleep(3000);
    const monthlySalesMaterialized = client
      .db("store")
      .collection("monthlyProductSales");
    const materializedSept22Sales = await monthlySalesMaterialized.findOne({
      productId,
      year: 2022,
      month: 9,
    });
    expect(materializedSept22Sales.totalSalesUsd).toBe(6);
  });
});
