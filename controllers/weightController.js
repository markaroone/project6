const Weight = require('../models/weightModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllRecords = async (request, response, next) => {
  const features = new APIFeatures(Weight.find(), request.query)
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
    Weight.find({ userId: request.params.id }),
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

exports.createWeightRecord = async (request, response, next) => {
  const newWeightRecord = await Weight.create(request.body);

  response.status(201).json({
    status: 'success',
    data: {
      weightRecord: newWeightRecord,
    },
  });
};

exports.updateWeightRecord = async (request, response, next) => {
  //   request.body.date = new Date();

  const weight = await Weight.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  );

  response.status(200).json({
    status: 'success',
    data: {
      weight,
    },
  });
};

exports.deleteRecord = async (request, response, next) => {
  const data = await Weight.findByIdAndDelete(request.params.id);

  response.status(204).json({
    status: 'success',
    data: null,
  });
};
