const { MongoClient } = require("mongodb");

function connectToMongoDbClient() {
  const { DB_USER, DB_PASSWORD } = process.env;
  const mongoDbConnectionUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bcup9.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(mongoDbConnectionUri);
  return client;
}

function initS3Client() {
  const { S3Client } = require("@aws-sdk/client-s3");
  const s3 = new S3Client({
    credentials: {
      accessKeyId: "AKIAZ6OLG2JWZRUEWQHR",
      secretAccessKey: process.env.APP_SECRET_S3_SECRET_KEY,
    },
    region: "us-east-1",
  });
  return s3;
}

const streamToString = (stream) =>
  new Promise((resolve, reject) => {
    const chunks = [];
    stream.on("data", (chunk) => chunks.push(chunk));
    stream.on("error", reject);
    stream.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
  });

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = {
  connectToMongoDbClient,
  sleep,
  initS3Client,
  streamToString,
};
