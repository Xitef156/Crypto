const axios = require('axios').default
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };
const express = require('express');
const app = express();
const port = 3000;
var go = false

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.get('/go', (req, res) => {
  go = true
  res.send('go')
})

app.get('/stop', (req, res) => {
  go = false
  res.send('stop')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});

(async () => {
  do {
    try{
      if(go){
        var price = (await axios.get(process.env["Crypto"])).data.price
        axios.post(process.env["URL"], {price: Number(price)}).catch(async() => await sleep(500))
        //console.log(price)
      }
    } catch(e){
      console.error(e)
    }
  } while (true)
})();
