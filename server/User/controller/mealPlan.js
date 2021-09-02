const User = require('../../../database/model/users');

module.exports = {
  add: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, { currentMealPlan: req.body }, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  remove: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, { currentMealPlan: {} }, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
