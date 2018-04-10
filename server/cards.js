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

module.exports(cards);