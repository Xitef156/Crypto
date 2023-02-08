const express = require("express");
const app = express();
const port = process.env.PORT || 3001;
const axios = require('axios').default
async function sleep(t) { return new Promise(resolve => setTimeout(resolve, t)) };
function SendD(message){
  return new Promise(async resolve => {
    console.log(message)
    var params = {
        username: "Render",
        avatar_url: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///9G47c84rQt4bGY7dKQ7NCi79ju/fg44rPC9OT3/vz6/v3p/PaI681Q5Lp76cjO9+rZ+O596smr8Nq48+BY5b3G9ecg4K4D36vT9+zj+vNo58K99OKb7tXD9OWv8d1v6MNEnehfAAADXklEQVR4nO3d23aiMBhA4RpPUesBFa0HRt//KTu9mbVif1RyDrO/a0qzJ4INOvDxAQAAAAAAAAAAAORnWm2ut93kXU1l/PRM3GhhbNNIu/kTo21+2m1r/ZfqYHg19rGUflibhUdpk2XwvGpy+UkbdKVnZqG0B2UWDqVNxmHzzs1Kd48rp3B2sc0ro3C/0tZ5JRReB0592Reease+zAvnW+l39ajwYPHeUFTh2MME5lw4rX1MYMaFlae+bAsPzqfQzAuvfg7BfAtvHgOzLPQ5g1kWHrwGZlhY+TvJ5Fk49fY2kWth7Tkwu8LxO1OolH7f0bxOsz0OBWbhl7DF0dN1mtdnGaXVZXzbVOfPd839DM2P+asZ1Hq5yWrEXW2fFip9P6QeoaPT09eoXp9TD9DZ6tkE1tXrHeTu9uS9XjepR+dD+0Go1Cn14Hxon0JVF33+/Kf1KFSXxeufLkDrsl5dUg/Nk3vLYahW/ZjBj8/WKZymHponk5Yp1L04i/5oWTXpSeqB+XJueZHWKQajVr8NRo473ckvUp3kT7UgK+CLfJZZexlxVyEKFy1TmGY1EaLwJB6GiaYwSKF8GOqNnxF3FaJQXtwrPwPuLESh+G6oXE/QtkIUiodhsj9nAhRO5RNNqlVhgEL5s4pkq6YAheLaMNlhGKJwL36YsPc04M4CFIpvh+nWTdEKk10ADlAoLn91ssU9hRYojIxCC7kVSv8boVeF97Vg57TLzAoDoLB8FJaPwvJRWD4Ky0dh+TIrPGwEbtfFMis8Cl+mHrp9Czqzwv9gjU9hdxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWqAwsv5fp7nOBG7fssusMAAKy0dh+SgsH4Xlo7B8FJYvs8LtUnBz2mVmheJd53u1Au7/Gp9CCxRGRqEFCiOj0AKFkVFogcLIKLRAYWQUWhALh70qlB7Zl64wwHWaxVziabzdiaPpyX1iAQAAgF5rpAdpfZnbaOlZW+ZNXDfSbvJ4Zpe8Aja3ER9hcjc2Ee8Knsdz1yikkEIKKaSQQgoppJBCCimkkMJ+FDbSp9xHc5uB9NHzQ6F0u/jhQ6H0qx4KxU+53a7THMaj3x7+0Rphk5F5K/izuBvzAYN7aTcjs1Dazci8oAUAAAAAAAAAAAAE8w39zlW3oYFBQgAAAABJRU5ErkJggg==",
        content: message
    }
    await axios.post("https://discord.com/api/webhooks/1062084677223055380/__-2E3p5xbBjfKsrsOoggnqTOyqldPJoXF6a16bbsdAbvAn_w4qaO4z8sWptM_mtCaf7", params).catch(console.error)
    resolve()
  })
}

app.get("/", (req, res) => res.type('html').send(html));
app.get("/go/", async (req, res) => {
    res.type('html').send(go)
    await SendD("Go !")
// Raising FirstEvent
em.emit('FirstEvent');
});

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}!`)
  await SendD("Ready !")
});
// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var em = new events.EventEmitter();

//Subscribe for FirstEvent
em.on('FirstEvent', async () => {
    while (true){
    try{
      var price = (await axios.get(process.env["Crypto"])).data.price
      await axios.post(process.env["URL"], {price: Number(price)}).catch(async() => await sleep(500))
      //console.log(price)
    } catch(e){
      console.error(e)
    }
  }
});

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
