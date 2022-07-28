const Sleep = require('../models/sleepModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllRecords = async (request, response, next) => {
  const features = new APIFeatures(Sleep.find(), request.query)
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
    Sleep.find({ userId: request.params.id }),
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

exports.createSleepRecord = async (request, response, next) => {
  const newSleepRecord = await Sleep.create(request.body);

  response.status(201).json({
    status: 'success',
    data: {
      sleepRecord: newSleepRecord,
    },
  });
};

exports.deleteRecord = async (request, response, next) => {
  const data = await Sleep.findByIdAndDelete(request.params.id);

  response.status(204).json({
    status: 'success',
    data: null,
  });
};
