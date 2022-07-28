const router = require('express').Router();
const hydrationController = require('../controllers/hydrationController');

router
  .route('/')
  .get(hydrationController.getAllRecords)
  .post(hydrationController.createHydrationRecord);

router
  .route('/:id')
  .get(hydrationController.getUserRecords)
  .put(hydrationController.updateHydrationRecord)
  .patch(hydrationController.updateHydrationRecord)
  .delete(hydrationController.deleteRecord);

module.exports = router;
