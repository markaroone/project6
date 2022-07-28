const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const {
  userRouter,
  activityRouter,
  heartRateRouter,
  sleepRouter,
  stepRouter,
  hydrationRouter,
  weightRouter,
} = require('./routes/index');

const app = express();

if (process.env.NODE_ENV.trim() === 'development') app.use(morgan('dev'));

app.use(express.json());
app.use(cors());

app.use('/api/v1/users', userRouter);
app.use('/api/v1/activities', activityRouter);
app.use('/api/v1/heart-rate-records', heartRateRouter);
app.use('/api/v1/sleep-records', sleepRouter);
app.use('/api/v1/step-records', stepRouter);
app.use('/api/v1/hydration-records', hydrationRouter);
app.use('/api/v1/weight-records', weightRouter);

module.exports = app;
