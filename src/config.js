const config = {
  currencies: [
    { currency: "BTC", valueAlert: 9999 },
    { currency: "ETH", valueAlert: 300 },
    { currency: "LTC", valueAlert: 40 },
  ],
  twilio: {
    sid: process.env.TWILIO_SID,
    token: process.env.TWILIO_TOKEN,
    recipient: process.env.TWILIO_RECIPIENT,
    sender: process.env.TWILIO_SENDER,
  },
  intervals: {
    action: 60,
    check: 15,
  },
};
exports.config = config;
