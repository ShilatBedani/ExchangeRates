const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exchangerate = new Schema({
  month: Number,
  avg: Number
});

const ModelExchangeRate = mongoose.model('exchangerates', exchangerate);

module.exports = ModelExchangeRate;