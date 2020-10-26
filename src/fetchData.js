const axios = require("axios");
const fetchData = async () => {
  try {
    const result = await axios(
      "https://www.coinbase.com/api/v2/assets/summary?base=GBP&filter=listed&include_prices=true&resolution=day"
    );
    return result.data.data;
  } catch (error) {
    throw error;
  }
};

exports.fetchData = fetchData;
