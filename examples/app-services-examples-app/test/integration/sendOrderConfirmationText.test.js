const { MongoClient } = require("mongodb");

const { DB_USER, DB_PASSWORD } = process.env;
console.log({ DB_USER, DB_PASSWORD });
const mongoDbConnectionUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bcup9.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(mongoDbConnectionUri);

describe("Order confirmation text", () => {
  afterAll(async () => {
    await client.close();
  });
  test("Should send text on DB post", async () => {
    const orders = client.db("store").collection("orders");

    const orderInfo = {
      confirmationNumber: "+19145895304",
      orderItemName: "String cheese",
    };
    await orders.insertOne(orderInfo);
    // TEST REQUIRES MANUAL VALIDATION ON PHONE THAT RECEIVES THE TEXT
  });
});
