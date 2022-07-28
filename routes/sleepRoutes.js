const router = require('express').Router();
const sleepController = require('../controllers/sleepController');

router
  .route('/')
  .get(sleepController.getAllRecords)
  .post(sleepController.createSleepRecord);

router
  .route('/:id')
  .get(sleepController.getUserRecords)
  .put()
  .patch()
  .delete(sleepController.deleteRecord);

module.exports = router;
