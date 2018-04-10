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

app.use("/cards", (() => {
  let express = require('express');
  let cardsOption = {
    caseSensitive: true,
    mergeParams: true,
    strict: false
  };
  let cards = express.Router(cardsOption);

  let dataCards = [{
    id: 100001,
    type: "Credit Card",
    startDate: "2017-01-01",
    expiredDate: "2022-01-01",
    billDate: 17,
    interestFreeDays: 50,
    dueDate: 4
  }, {
    id: 100002,
    type: "Credit Card",
    startDate: "2017-01-01",
    expiredDate: "2022-01-01",
    billDate: 17,
    interestFreeDays: 50,
    dueDate: 4
  }, {
    id: 100003,
    type: "Credit Card",
    startDate: "2017-01-01",
    expiredDate: "2022-01-01",
    billDate: 17,
    interestFreeDays: 50,
    dueDate: 4
  }, {
    id: 100004,
    type: "Credit Card",
    startDate: "2017-01-01",
    expiredDate: "2022-01-01",
    billDate: 17,
    interestFreeDays: 50,
    dueDate: 4
  }];

  cards.use((req, res, next) => {
    next();
  });

  cards.get("/", (req, res, next) => {
    res.send(dataCards);
  });

  return cards;
})());

let port = 9999;
http.createServer(app).listen(port, () => {
  console.log("Http Server starts on " + port);
});