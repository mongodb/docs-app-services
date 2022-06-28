// database trigger
// :snippet-start: materialize-total-sales
exports = function (changeEvent) {
  const _id = changeEvent.documentKey._id;
  const totalSalesMaterialization = context.services
    .get("mongodb-atlas")
    .db("store")
    .collection("total_sales_materialized");
  totalSalesMaterialization.update(
    { _id },
    { $inc: { total_sales: 1 } },
    { upsert: true }
  );
};
// :snippet-end:
