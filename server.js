const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

// const localDB = process.env.DATABASE_LOCAL;

// mongoose
//   .connect(localDB)
//   .then(() => console.log('Local DB connection successful.'));

const cloudDB = process.env.DATABASE_CLOUD;

mongoose
  .connect(cloudDB)
  .then(() => console.log('Cloud DB connection successful.'));

const port = process.env.PORT || 8000;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
