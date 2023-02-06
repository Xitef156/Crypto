var request = require('request')
async function sleep(t) { return new Promise(resolve => setTimeout(() => resolve(), t)) };
var err;

(async () => {
  do {
    await sleep(500)
    var money = 0
    request({
      method: 'get',
      url: "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
     }, (error, res ,body) => {
      if(error){
        console.log('error', error)
        err = 500
      }
    console.log(body)
      money = JSON.parse(body).price
    })
    var options = {
      method: 'post',
      body: {price: money}, // Javascript object
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
