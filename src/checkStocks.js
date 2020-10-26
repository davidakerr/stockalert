const checkStocks = (config, data, successAction) => {
  const cryptos = config.map((configItem) =>
    data.find((item) => item.base == configItem.currency)
  );

  cryptos.forEach((crypto, index) => {
    const { prices, ...rest } = crypto;
    const currentPrice = crypto.latest;
    const desiredPrice = config[index].valueAlert;
    const isDesiredPrice = currentPrice <= desiredPrice;
    const buyString = isDesiredPrice ? "BUY NOW" : `Don't Buy`;
    const output = `${rest.name} - current: £${currentPrice} desired: £${desiredPrice} [${buyString}]`;

    if (successAction && isDesiredPrice) {
      successAction(rest);
    }

    console.log(output);
  });
};

exports.checkStocks = checkStocks;
