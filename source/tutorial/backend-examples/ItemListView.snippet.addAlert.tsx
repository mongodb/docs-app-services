
// addAlert() takes in an alert term and inserts the term into a collection in Atlas
const addAlert = async (term: string) => {
  const mongodb = user?.mongoClient("mongodb-atlas");
  const alertTerms = mongodb?.db("todo").collection("alerts");
  await alertTerms?.insertOne({ text: term.toLowerCase() });
};
