const Realm = require("realm");
const { GetObjectCommand, DeleteObjectCommand } = require("@aws-sdk/client-s3");
const {
  connectToMongoDbClient,
  sleep,
  initS3Client,
  streamToString,
} = require("./utils");

jest.setTimeout(30000);

const app = new Realm.App(process.env.APP_ID);
const s3Client = initS3Client();
const april = 3; // starting with January as 0 index
const twenty22 = 2022;
const bucketParams = {
  Bucket: "app-services-integration-testing",
  Key: `${twenty22}-${april}-sales-report.csv`,
};

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
  await s3Client.send(new DeleteObjectCommand(bucketParams));
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

  const response = await app.currentUser.functions.generateMonthlySalesReport(
    april,
    twenty22
  );
  const data = await s3Client.send(new GetObjectCommand(bucketParams));
  const report = await streamToString(data.Body);
  expect(
    report.startsWith('"_id","year","month","productId","totalSalesUsd"')
  ).toBe(true);
  expect(response.$metadata.httpStatusCode).toBe(200);
});
