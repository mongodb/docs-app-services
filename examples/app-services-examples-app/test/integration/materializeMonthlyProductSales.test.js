const { connectToMongoDbClient } = require("./utils");

describe("Materialize monthly product sales", () => {
  let client;
  beforeAll(async () => {
    client = connectToMongoDbClient();
  });
  afterAll(async () => {
    await client.close();
  });
  test("Should materialize sales", async () => {
    const sales = client.db("store").collection("sales");

    const pizzaSale1 = {};
    const pizzaSale2 = {};
    await sales.insertMany([pizzaSale1, pizzaSale2]);
    // TEST REQUIRES MANUAL VALIDATION ON PHONE THAT RECEIVES THE TEXT
  });
});
