const fs = require('fs')
var all = []
var last = 0
const { SuperfaceClient } = require("@superfaceai/one-sdk");
const sdk = new SuperfaceClient();
async function sleep(t) { return new Promise(resolve => setTimeout(() => resolve(), t)) };

(async () => {
  for (let index = 0; index < 10; index++) {
    await sleep(500)
    var money = await new Promise(async resolve => {
      const profile = await sdk.getProfile('crypto/exchange-rate@1.0.1');
      const result = await profile.getUseCase("GetExchangeRate").perform({
        from: "BTC",
        to: "USDT",
      }, {
        provider: 'binance'
      });
      resolve(result.unwrap())
    })
    var price = money.rate
    if (price == last) console.log("pareil", price)
    else {
      last = price
      all.push(price)
      fs.writeFileSync("./BTC.json", `[${all.join(",")}]`)
    }
  }
})();
