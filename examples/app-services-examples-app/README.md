# App Services Examples

This repository contains example use cases for [MongoDB Atlas App Services](https://www.mongodb.com/docs/atlas/app-services/).

## Triggers

This repository contains the following example [Atlas Triggers](https://www.mongodb.com/docs/atlas/app-services/triggers/overview/).

| Name                                                                   | Trigger Type   | Description                                                                                                                                                                         |
| :--------------------------------------------------------------------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`sendOrderConfirmationText`](sendOrderConfirmationText)               | Database       | Sends an SMS message with the Twilio SMS API when a document is added to a collection.                                                                                              |
| [`materializeMonthlyProductSales`](materializeMonthlyProductSales)     | Database       | Update a materialized view document when a document is added to a collection.                                                                                                       |
| [`createCustomUserDataOnSignUp`](createCustomUserDataOnSignUp)         | Authentication | Create a [Custom User Data](https://www.mongodb.com/docs/atlas/app-services/users/enable-custom-user-data/) Object when a user creates an account with App Services Authentication. |
| [`generatePreviousMonthSalesReport`](generatePreviousMonthSalesReport) | Scheduled      | Post a CSV report of previous month's sales totals to an AWS S3 bucket.                                                                                                             |

### sendOrderConfirmationText

Database Trigger that sends an SMS message with the Twilio SMS API
when a document is added to the `orders` collection.

Relevant files:

- [`triggers/sendOrderConfirmationText.json`](./triggers/sendOrderConfirmationText.json):
  Trigger configuration file
- [`functions/sendOrderConfirmationText.js`](./functions/sendOrderConfirmationText.js):
  Function invoked by Trigger
- [`functions/config.json`](./functions/config.json): Function configuration
- The following Values and Secrets are used to call the Twilio API:
  - [`values/TWILIO_ACCOUNT_SID.json`](./values/TWILIO_ACCOUNT_SID.json)
  - [`values/TWILIO_AUTH_TOKEN.json`](./values/TWILIO_AUTH_TOKEN.json)
  - [`values/TWILIO_FROM_NUMBER.json`](./values/TWILIO_FROM_NUMBER.json)

### materializeMonthlyProductSales

Database Trigger that updates a materialized view document in the `monthlyProductSales`
when a document is added to the `sales` collection.

Relevant files:

- [`triggers/materializeMonthlyProductSales.json`](./triggers/materializeMonthlyProductSales.json):
  Trigger configuration file
- [`functions/materializeMonthlyProductSales.js`](./functions/materializeMonthlyProductSales.js):
  Function invoked by Trigger
- [`functions/config.json`](./functions/config.json): Function configuration

### createCustomUserDataOnSignUp

Authentication Trigger that creates a [Custom User Data](https://www.mongodb.com/docs/atlas/app-services/users/enable-custom-user-data/)
object when a user creates an account with App Services Authentication.

Relevant files:

- [`triggers/materializeMonthlyProductSales.json`](./triggers/materializeMonthlyProductSales.json):
  Trigger configuration file
- [`functions/materializeMonthlyProductSales.js`](./functions/materializeMonthlyProductSales.js):
  Function invoked by Trigger
- [`functions/config.json`](./functions/config.json): Function configuration

### generatePreviousMonthSalesReport

Scheduled Trigger that posts a CSV report of previous month's sales totals
to an AWS S3 bucket. Runs at the beginning of each month to report on the previous month.

Relevant files:

- [`triggers/generatePreviousMonthSalesReport.json`](./triggers/generatePreviousMonthSalesReport.json):
  Trigger configuration file
- [`functions/generateMonthlySalesReport.js`](./functions/generateMonthlySalesReport.js):
  Function invoked by Trigger
- [`functions/config.json`](./functions/config.json): Function configuration
- The following Values and Secrets are used to call the AWS S3 API:
  - [`values/AWS_S3_ACCESS_KEY_ID.json`](./values/AWS_S3_ACCESS_KEY_ID.json)
  - [`values/AWS_S3_ACCESS_KEY_SECRET.json`](./values/AWS_S3_ACCESS_KEY_SECRET.json)
  - [`values/AWS_S3_BUCKET_NAME.json`](./values/AWS_S3_BUCKET_NAME.json)
  - [`values/AWS_S3_BUCKET_REGION.json`](./values/AWS_S3_BUCKET_REGION.json)

## Integration Tests

All the examples in this repository include integration tests to validate functionality
which you can find in the [`test/integration` directory](./test/integration/).
