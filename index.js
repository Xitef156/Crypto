const fetch = require('node-fetch')
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
    fetch("https://Crypto.xitef156.repl.co", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({price: money.rate})
    })
  }
})();
