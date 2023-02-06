const {Axios} = require('axios')
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };

(async () => {
  //do {
    try{
      await sleep(500)
      var money = 0
      var price = await new Axios().get("https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT")
      console.log(price)/*
      money = JSON.parse(price).price
      console.log(money)
      new Axios().post("https://Crypto.xitef156.repl.co", {price: price})*/
    } catch(e){
      console.error(e)
    }
  //} while (true)
})();
