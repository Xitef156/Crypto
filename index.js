/*
const axios = require('axios').default
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };
(async () => {
  do {
    try{
      var price = (await axios.get(process.env["Crypto"])).data.price
      axios.post(process.env["URL"], {price: Number(price)}).catch(async() => await sleep(500))
      //console.log(price)
    } catch(e){
      console.error(e)
    }
  } while (true)
})();
*/
const http = require('node:http')
const server = http.createServer(function(request, response) {
  if (request.method == 'GET') {
    var html = `
            <html>
                <body><pre style="word-wrap: break-word; white-space: pre-wrap;">${Buffer.from(JSON.stringify(saved)).toString()}</pre>
                </body>
            </html>`
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(html)
  }
})

const port = 3000
server.listen(port)
console.log(`Listening`);
