require("dotenv").config();
const { config } = require("./config");
const { Action } = require("./Action");
const { fetchData } = require("./fetchData.js");
const { checkStocks } = require("./checkStocks.js");
const { twilioAction } = require("./actions/twilioAction");
const { minsToMillis } = require("./utils/minsToMillis");

const checkInterval = minsToMillis(config.intervals.action);
const actionInterval = minsToMillis(config.intervals.check);

const action = new Action(twilioAction, actionInterval);

const main = async () => {
  try {
    const data = await fetchData();
    checkStocks(config.currencies, data, action.do);
  } catch (error) {
    console.error(error);
  }
};

main();

setInterval(main, checkInterval);
