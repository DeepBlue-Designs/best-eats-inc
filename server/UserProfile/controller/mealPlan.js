const User = require('../../../database/UserProfile/model/users');

module.exports = {
  add: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, { currentMealPlan: req.body }, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  remove: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, {$pull :{"goals": {_id: req.params.goalID} }}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
