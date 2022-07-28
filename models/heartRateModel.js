const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const heartRateSchema = Schema({
  userId: String,
  date: Date,
  result: Number,
});

const HeartRate = mongoose.model('Heart-rate-record', heartRateSchema);

module.exports = HeartRate;
