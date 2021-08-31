const User = require('../../../database/UserProfile/model/users');

module.exports = {
  add: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, { currentMealPlan: req.body }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  remove: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, { currentMealPlan: {} }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
