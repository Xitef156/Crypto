
  const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})
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
