class Action {
  constructor(actionCb, interval) {
    this.action = actionCb;
    this.lastActioned = new Date().getTime() - interval;
    this.interval = interval;
    this.do = this.do.bind(this);
  }
  debouncer(cb) {
    if (new Date().getTime() - this.lastActioned > this.interval) {
      this.lastActioned = new Date().getTime();
      cb();
    }
  }
  do(data) {
    this.debouncer(() => this.action(data));
  }
}
exports.Action = Action;

/* 

  EXAMPLE ACTION DATA

  {
    id: "5b71fc48-3dd3-540c-809b-f8c94d0e68b5",
    base: "BTC",
    name: "Bitcoin",
    currency: "GBP",
    unit_price_scale: 2,
    market_cap: "186475460043.84",
    percent_change: -0.01579543236384932,
    latest: "10076.66",
    latest_price: {
      amount: { amount: "10076.66", currency: "GBP", scale: "2" },
      timestamp: "2020-10-26T03:50:28+00:00",
      percent_change: {
        hour: 0.002132203207513263,
        day: -0.01579543236384932,
        week: 0.12935388063883438,
        month: 0.20029397891165862,
        year: 0.3907550383274492,
        all: 144.93221742590626,
      },
    },
  };
*/
