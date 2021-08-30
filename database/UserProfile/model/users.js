const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
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
    mealsPerWeek: Number,
    mealIDs: [Number]
  },
  moods: [
    {
      date: Number,
      feeling: String
    }
  ],
  goals: [
    {
      name: String,
      completed: Boolean,
      actionItems: [
        {
          name: String,
          completed: Boolean
        }
      ]
    }
  ]
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
