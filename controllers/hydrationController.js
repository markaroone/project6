const Hydration = require('../models/hydrationModel');
const APIFeatures = require('../utils/apiFeatures');

exports.getAllRecords = async (request, response, next) => {
  const features = new APIFeatures(Hydration.find(), request.query)
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
    Hydration.find({ userId: request.params.id }),
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

exports.createHydrationRecord = async (request, response, next) => {
  const newHydrationRecord = await Hydration.create(request.body);

  response.status(201).json({
    status: 'success',
    data: {
      hydrationRecord: newHydrationRecord,
    },
  });
};

exports.updateHydrationRecord = async (request, response, next) => {
  // request.body.date = new Date();

  const hydration = await Hydration.findByIdAndUpdate(
    request.params.id,
    request.body,
    {
      new: true,
    }
  );

  response.status(200).json({
    status: 'success',
    data: {
      hydration,
    },
  });
};

exports.deleteRecord = async (request, response, next) => {
  const data = await Hydration.findByIdAndDelete(request.params.id);

  response.status(204).json({
    status: 'success',
    data: null,
  });
};
