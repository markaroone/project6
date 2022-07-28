const router = require('express').Router();
const weightController = require('../controllers/weightController');

router
  .route('/')
  .get(weightController.getAllRecords)
  .post(weightController.createWeightRecord);

router
  .route('/:id')
  .get(weightController.getUserRecords)
  .put(weightController.updateWeightRecord)
  .patch(weightController.updateWeightRecord)
  .delete(weightController.deleteRecord);

module.exports = router;
