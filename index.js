const axios = require('axios').default
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };

(async () => {
  do {
    try{
      await sleep(500)
      var price = (await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")).data.price
      if(`${price}.000`.slice(0,9) == NaN) console.log(price)
      axios.post("https://Crypto.xitef156.repl.co", {price: `${price}.000`.slice(0,9)}).catch(async() => await sleep(500))
      //console.log(price)
    } catch(e){
      console.error(e)
    }
  } while (true)
})();
