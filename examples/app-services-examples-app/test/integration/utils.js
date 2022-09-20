const { MongoClient } = require("mongodb");

function connectToMongoDbClient() {
  const { DB_USER, DB_PASSWORD } = process.env;
  const mongoDbConnectionUri = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.bcup9.mongodb.net/?retryWrites=true&w=majority`;

  const client = new MongoClient(mongoDbConnectionUri);
  return client;
}

module.exports = { connectToMongoDbClient };
