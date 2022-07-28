const Step = require('../models/stepModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllRecords = async (request, response, next) => {
  const features = new APIFeatures(Step.find(), request.query)
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
    Step.find({ userId: request.params.id }),
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

exports.createStepRecord = async (request, response, next) => {
  const newStepRecord = await Step.create(request.body);

  response.status(201).json({
    status: 'success',
    data: {
      stepRecord: newStepRecord,
    },
  });
};

exports.updateStepRecord = async (request, response, next) => {
  // request.body.date = new Date();

  const step = await Step.findByIdAndUpdate(request.params.id, request.body, {
    new: true,
  });

  response.status(200).json({
    status: 'success',
    data: {
      step,
    },
  });
};

exports.deleteRecord = async (request, response, next) => {
  const data = await Step.findByIdAndDelete(request.params.id);

  response.status(204).json({
    status: 'success',
    data: null,
  });
};
