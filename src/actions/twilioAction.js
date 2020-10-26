const { config } = require("../config");
const twilio = require("twilio");
const client = new twilio(config.twilio.sid, config.twilio.token);

const twilioAction = async (data) => {
  try {
    const message = await client.messages.create({
      body: `BUY ${data.name} £${data.latest}`,
      to: config.twilio.recipient,
      from: config.twilio.sender,
    });

    console.log(`Message Sent: `, message);
  } catch (error) {
    console.error(error);
  }
};
exports.twilioAction = twilioAction;
