const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stepSchema = new Schema({
  userId: String,
  id: String,
  date: Date,
  steps: Number,
});

const Step = mongoose.model('Step-record', stepSchema);

module.exports = Step;
