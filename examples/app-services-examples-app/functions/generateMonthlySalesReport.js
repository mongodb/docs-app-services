// function generateCsvReport(documents) {
//   const { parse } = require("json2csv");
//   const fields = Object.keys(documents[0]);
//   const opts = { fields };
//   const csvString = parse(documents, opts);
//   return csvString;
// }

// async function putReportInS3(reportBody) {
//   const S3 = require("@aws-sdk/client-s3");
//   const s3 = new S3({
//     accessKeyId: context.values.get("awsAccessKeyId"),
//     secretAccessKey: context.values.get("awsSecretAccessKey"),
//     region: "us-east-1",
//   });
//   await s3
//     .putObject({
//       Bucket: "bucketName",
//       Key: "keyName",
//       Body: reportBody,
//     })
//     .promise();
// }

async function generateMonthlySalesReport(monthZeroEleven, year) {
  let monthToReport, yearToReport;

  // For when arguments not provided to the Function,
  // such as when used in the `generatePreviousMonthSalesReport` Scheduled Trigger,
  // the Function generates the report for the previous month.
  if (!monthZeroEleven || !year) {
    const now = new Date();
    const thisMonth = now.getUTCMonth();
    const thisYear = now.getUTCFullYear();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const lastMonthYear = now.getUTCMonth() === 0 ? thisYear - 1 : thisYear;
    monthToReport = lastMonth;
    yearToReport = lastMonthYear;
  } else {
    monthToReport = monthZeroEleven;
    yearToReport = year;
  }

  console.log(
    "month::",
    typeof monthToReport,
    "// year::",
    typeof yearToReport
  );
  const monthlySalesMaterializations = context.services
    .get("mongodb-atlas")
    .db("store")
    .collection("monthlyProductSales");
  const lastMonthsMaterializedSales = await monthlySalesMaterializations
    .find()
    .toArray();
  console.log(Object.keys(lastMonthsMaterializedSales));
  // .count();
  // {month: monthToReport,
  // year: yearToReport}
  // .toArray();
  console.log("results::", lastMonthsMaterializedSales);
  return lastMonthsMaterializedSales;

  // const csvReport = generateCsvReport(lastMonthsMaterializedSales);
  // await putReportInS3(csvReport);
}

exports = generateMonthlySalesReport;
