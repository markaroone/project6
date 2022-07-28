const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hydrationSchema = new Schema({
  userId: String,
  id: String,
  date: Date,
  amount: Number,
});

const Hydration = mongoose.model('Hydration-record', hydrationSchema);

module.exports = Hydration;
