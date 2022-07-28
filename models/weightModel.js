const mongoose = require('mongoose');

const weightSchema = new mongoose.Schema(
  {
    userId: String,
    date: Date,
    weight: Number,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
const Weight = mongoose.model('weight-records', weightSchema);

module.exports = Weight;
