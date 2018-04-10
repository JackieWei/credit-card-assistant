let express = require('express');
let path = require('path');
let compression = require('compression');
let http = require("http");
let https = require("https");
let cards = require('./server/cards');

let app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, './src/public')));

// send all requests to index.html so browserHistory works
/*app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './src/public', 'index.html'));
})*/

app.use("/cards", cards);

let port = 9999;
http.createServer(app).listen(port, () => {
  console.log("Http Server starts on " + port);
});