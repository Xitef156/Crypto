const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios').default
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };
async function SendD(message){
    console.log(message)
    var params = {
        username: "Render",
        avatar_url: "",
        content: message
    }
    axios.post(process.env.Token, params).catch(console.error)
}

app.get("/", (req, res) => res.type('html').send(html));
app.get("/go/", async (req, res) => {
    res.type('html').send(go)
    launch()
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`)
  await SendD("Ready !")
});
async function launch() {
    try{
      var price = (await axios.get(process.env["Crypto"])).data.price
      await axios.post(process.env["URL"], {price: Number(price)})
      .catch(async() => await sleep(500))
      .then(launch)
      //console.log(price)
    } catch(e){
      await SendD(e)
      launch()
    }
};

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`
const go = `
<!DOCTYPE html>
<html>
  <head>
    <title>go</title>
  </head>
  <body>
    <section>
      Go !
    </section>
  </body>
</html>
`
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
process.on('unhandledRejection', async (reason, promise) => {
  await SendD(`Crash :( reason : ${String(reason.stack || reason).slice(0,1000)}${String(reason.stack || reason).length > 30 ? "..." : ''}`)
})
