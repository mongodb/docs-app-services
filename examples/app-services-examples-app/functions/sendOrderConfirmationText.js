async function sendOrderConfirmationText({ fullDocument }) {
  // TODO: create correct API for this
  const accountSid = context.values.get("TWILIO_ACCOUNT_SID");
  const authToken = context.values.get("TWILIO_AUTH_TOKEN");
  const fromNumber = context.values.get("TWILIO_FROM_NUMBER");

  const { confirmationNumber, orderId, orderItemName } = fullDocument;

  const twilioClient = require("twilio")(accountSid, authToken);
  const twilioRes = await twilioClient.messages.create({
    from: fromNumber,
    to: confirmationNumber,
    body: `Thank you for purchasing ${orderItemName}!\n\nYour order ID is: ${orderId}`,
  });
  console.log(twilioRes);
}
exports = sendOrderConfirmationText;
