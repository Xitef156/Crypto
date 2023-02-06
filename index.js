var request = require('request')
const { SuperfaceClient } = require("@superfaceai/one-sdk");
const sdk = new SuperfaceClient();
async function sleep(t) { return new Promise(resolve => setTimeout(() => resolve(), t)) };
var err;

(async () => {
  do {
    await sleep(500)
    const profile = await sdk.getProfile('crypto/exchange-rate@1.0.1');
    const result = await profile.getUseCase("GetExchangeRate").perform({
      from: "BTC",
      to: "USDT",
    }, {
      provider: 'binance'
    });
    const money = result.unwrap()
    var options = {
      method: 'post',
      body: {price: money.rate}, // Javascript object
      json: true, // Use,If you are sending JSON data
      url: "https://Crypto.xitef156.repl.co"
    }
    request(options, error => {
      if (error) {
        console.log('Error :', error)
        err = error
        return;
      }
    });
  } while (err == undefined)
})();
