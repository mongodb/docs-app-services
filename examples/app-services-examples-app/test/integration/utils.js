const { MongoClient } = require("mongodb");

function connectToMongoDbClient() {
  const { DB_USER, DB_PASSWORD } = process.env;
  const mongoDbConnectionUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bcup9.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(mongoDbConnectionUri);
  return client;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

module.exports = { connectToMongoDbClient, sleep };
