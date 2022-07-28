const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const runningSchema = new Schema({
  userId: String,
  activityId: String,
  activityType: String,
  name: String,
  notes: String,
  favorite: Boolean,
  date: {
    start: String,
    end: String,
  },
  gear: {
    shoes: String,
    bike: String,
    device: String,
  },
  weather: {
    temperature: Number,
    heatIndex: Number,
    wind: {
      direction: String,
      speed: Number,
    },
    humidity: Number,
    condition: String,
  },
  stats: {
    distance: Number,
    timing: {
      time: String,
      movingTime: String,
      elapsedTime: String,
      pace: {
        avgPace: String,
        avgMovingPace: String,
        bestPace: String,
      },
      speed: {
        avgSpeed: Number,
        avgMovingSpeed: Number,
        maxSpeed: Number,
      },
    },
    calories: Number,
    elevation: {
      totalAscent: Number,
      totalDescent: Number,
      minElevation: Number,
      maxElevation: Number,
    },
    runningDynamics: {
      avgRunCadence: Number,
      maxRunCadence: Number,
      avgStrideLength: Number,
    },
    heartRate: {
      avg: Number,
      max: Number,
    },
  },
  laps: {
    TotalTimeSeconds: String,
    DistanceMeters: String,
    MaximumSpeed: String,
    Calories: String,
    AverageHeartRateBpm: {
      Value: String,
    },
    MaximumHeartRateBpm: {
      Value: String,
    },
    Intensity: String,
    TriggerMethod: String,
    Track: {
      Trackpoint: [
        {
          Time: String,
          Position: {
            LatitudeDegrees: String,
            LongitudeDegrees: String,
          },
          AltitudeMeters: String,
          DistanceMeters: String,
          HeartRateBpm: {
            Value: String,
          },
          Extensions: {
            TPX: {
              Speed: {
                __prefix: String,
                __text: String,
              },
              RunCadence: {
                __prefix: String,
                __text: String,
              },
              __prefix: String,
            },
          },
        },
      ],
    },
    Extensions: {
      LX: {
        AvgSpeed: {
          __prefix: String,
          __text: String,
        },
        AvgRunCadence: {
          __prefix: String,
          __text: String,
        },
        MaxRunCadence: {
          __prefix: String,
          __text: String,
        },
        __prefix: String,
      },
    },
    _StartTime: String,
  },
});

const RunningActivity = mongoose.model('Running-record', runningSchema);

module.exports = RunningActivity;
