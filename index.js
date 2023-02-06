const axios = require('axios').default
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };

(async () => {
  do {
    try{
      await sleep(500)
      var price = (await axios.get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")).data.price
      axios.post("https://Crypto.xitef156.repl.co", {price: Number(price)).catch(async() => await sleep(500))
      //console.log(price)
    } catch(e){
      console.error(e)
    }
  } while (true)
})();
