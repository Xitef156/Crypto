const fs = require('fs')
var all = []
var last = 0
const { SuperfaceClient } = require("@superfaceai/one-sdk");
const sdk = new SuperfaceClient();
async function sleep(t) { return new Promise(resolve => setTimeout(() => resolve(), t)) }
const http = require('http')

const server = http.createServer(function(request, response) {
  console.dir(request.param)

  if (request.method == 'POST') {
    console.log('POST')
    var body = ''
    request.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)
    })
    request.on('end', function() {
      console.log('Body: ' + body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })
  } else {
    console.log('GET')
    var html = `
            <html>
                <body>
                    <form method="post" action="http://localhost:3000">Name: 
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})

const port = 3000
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)

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
