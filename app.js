const express = require('express')
const https = require("https");
const config = require('config')
const path = require('path')

const app = express()
//app.use('/api/auth', require('./routes/auth.routes'))

if(process.env.NODE_ENV === 'production'){
  app.use('', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

app.get("/api/votes", (req, res) => {
  https.get(
    "https://nodes-testnet.wavesnodes.com/addresses/data/3N8zSfXh8RJTC5dUToydUBJ7HpK5qVzWeZf",
    apiRes => {
      apiRes.setEncoding("utf8");

      // wait for data
      apiRes.on("data", function (chunk) {
        res.write(chunk);
      });

      apiRes.on("close", function () {
        res.end();
      });

      apiRes.on("end", function () {
        res.end();
      });
    }
  )
    .on("error", function (e) {
      console.log(e.message);
      console.log('/api/votes - error');
      res.writeHead(500);
      res.end();
    });
});

const PORT = config.get('port') || 5000

async function start() {
  try {
    app.listen(PORT, () => console.log(`__ App started port ${PORT} ... 127.0.0.1 __`))
  } catch (e) {
    console.log('Server Error', e.message)
    process.exit(1)
  }
}
 
start()