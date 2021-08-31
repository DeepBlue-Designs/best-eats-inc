const User = require('../../../database/UserProfile/model/users');

module.exports = {
  add: (req, res) => {
    const index = req.query.index;
    User.updateOne({_id: req.params.userID}, {$push: { [`goals.${index}.actionItems`]: req.body }}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  check: (req, res) => {
    const index = req.query.index;
    User.updateOne({_id: req.params.userID}, {$push: { [`goals.${index}.actionItems`]: req.body }}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  remove: (req, res) => {
    User.findOneAndUpdate({_id: req.params.userID}, {$pull :{"goals": {_id: req.params.goalID} }}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
