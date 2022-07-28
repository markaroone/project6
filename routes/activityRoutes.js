const express = require('express');
const activityController = require('../controllers/activityController');

const router = express.Router();

router.route('/all-records').get(activityController.getAllActivityRecords);

router.route('/all-records/:id').get(activityController.getAllActivityRecords);

router
  .route('/all-activities-list')
  .get(activityController.getAllUserSportsActivities);

router
  .route('/running-records')
  .get(activityController.getAllActivities)
  .post();

router
  .route('/running-records/:id')
  .get(activityController.getActivity)
  .patch(activityController.updateActivity)
  .delete();

router
  .route('/cycling-records')
  .get(activityController.getAllActivities)
  .post();

router
  .route('/cycling-records/:id')
  .get(activityController.getActivity)
  .patch(activityController.updateActivity)
  .delete();

module.exports = router;
