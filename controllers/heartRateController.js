const HeartRate = require('../models/heartRateModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllRecords = async (request, response, next) => {
  const features = new APIFeatures(HeartRate.find(), request.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const data = await features.query;

  response.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
};

exports.getUserRecords = async (request, response, next) => {
  const features = new APIFeatures(
    HeartRate.find({ userId: request.params.id }),
    request.query
  )
    .filter()
    .sort()
    .limitFields()
    .paginate();

  const data = await features.query;

  response.status(200).json({
    status: 'success',
    results: data.length,
    data,
  });
};

exports.createHeartRateRecord = async (request, response, next) => {
  const newHRRecord = await HeartRate.create(request.body);

  response.status(201).json({
    status: 'success',
    data: {
      heartRateRecord: newHRRecord,
    },
  });
};

exports.deleteRecord = async (request, response, next) => {
  const data = await HeartRate.findByIdAndDelete(request.params.id);

  response.status(204).json({
    status: 'success',
    data: null,
  });
};
