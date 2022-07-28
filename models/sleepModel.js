const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sleepSchema = new Schema(
  {
    userId: String,
    sleepDate: Date,
    wakeUpDate: Date,
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

// sleepSchema.pre('save', async function (next) {
//   const duration =
//     (this.wakeUpDate.getTime() - this.sleepDate()) / 1000 / 60 / 60;

//   const hours = Math.trunc(duration);
//   const minutes = Math.round((duration - hours) * 60);

//   this.stats = {
//     duration,
//     hours,
//     minutes,
//   };

//   next();
// });

sleepSchema.virtual('stats').get(function () {
  const duration =
    (this.wakeUpDate.getTime() - this.sleepDate.getTime()) / 1000 / 60 / 60;

  const hours = Math.trunc(duration);
  const minutes = Math.round((duration - hours) * 60);

  return {
    duration,
    hours,
    minutes,
  };
});

const Sleep = mongoose.model('Sleep-record', sleepSchema);

module.exports = Sleep;
