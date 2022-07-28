const router = require('express').Router();
const heartRateController = require('../controllers/heartRateController');

router
  .route('/')
  .get(heartRateController.getAllRecords)
  .post(heartRateController.createHeartRateRecord);

router
  .route('/:id')
  .get(heartRateController.getUserRecords)
  .put()
  .patch()
  .delete(heartRateController.deleteRecord);

module.exports = router;
