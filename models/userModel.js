const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  account: {
    firstName: {
      type: String,
      required: [true, 'Please enter your first name.'],
    },
    lastName: {
      type: String,
      required: [true, 'Please enter your last name.'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email address.'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please enter a valid email address.'],
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
      minlength: [
        8,
        'Password length must be greater than or equal to 8 characters',
      ],
      select: false,
    },
    birthDate: Date,
  },
  physicalStatus: {
    age: Number,
    gender: String,
    height: Number,
    weight: Number,
    bmi: Number,
  },
  personalRecords: {
    steps: {
      day: {
        stepsCount: Number,
        year: Number,
      },
      week: {
        stepsCount: Number,
        year: Number,
      },
      month: {
        stepsCount: Number,
        year: Number,
      },
    },
    running: {
      km1: {
        time: String,
        year: Number,
      },
      mil1: {
        time: String,
        year: Number,
      },
      km5: {
        time: String,
        year: Number,
      },
      km10: {
        time: String,
        year: Number,
      },
      halfMarathon: {
        time: String,
        year: Number,
      },
      marathon: {
        time: String,
        year: Number,
      },
      longestRun: {
        distance: Number,
        year: Number,
      },
    },
    cycling: {
      km40: {
        time: String,
        year: Number,
      },
      totalAscent: {
        totalAscent: Number,
        year: Number,
      },
      longestRide: {
        distance: Number,
        year: Number,
      },
    },
  },
  lifetimeTotals: {
    activities: {
      activitiesTotal: Number,
      distanceTotal: Number,
      timeTotal: String,
      caloriesTotal: Number,
      ascentTotal: Number,
    },
    steps: {
      steps: Number,
      distance: Number,
      avgSteps: Number,
      calories: Number,
    },
  },
  subscription: {
    isSubscribed: Boolean,
    typeOfSub: String,
    price: Number,
    paymentDate: Date,
    expirationDate: Date,
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
