const router = require('express').Router();
const stepController = require('../controllers/stepController');

router
  .route('/')
  .get(stepController.getAllRecords)
  .post(stepController.createStepRecord);

router
  .route('/:id')
  .get(stepController.getUserRecords)
  .put(stepController.updateStepRecord)
  .patch(stepController.updateStepRecord)
  .delete(stepController.deleteRecord);

module.exports = router;
