const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
  },
  currentMealPlan: {
    plan: {
        type: 'string',
        enum: ['solo', 'duo', 'family']
    },
    mealsPerWeek: {
      type: Number
    },
    mealIDs: [Number]
  },
  moods: [
    {
      date: {
        type: Number
      },
      feeling: {
        type: String
      }
    }
  ],
  goals: [
    {
      name: {
        type: String
      },
      completed: {
        type: Boolean
      },
      actionItems: [
        {
          name: String,
          completed: Boolean
        }
      ]
    }
  ],
  healthMetrics: {
    height: String,
    weight: Number
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
