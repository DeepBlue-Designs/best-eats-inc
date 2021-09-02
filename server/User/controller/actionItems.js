const User = require('../../../database/model/users');

module.exports = {
  add: (req, res) => {
    const index = req.query.goalIndex;
    User.updateOne({_id: req.params.userID}, {$push: { [`goals.${index}.actionItems`]: req.body }}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  check: (req, res) => {
    const goalIndex = req.query.goalIndex;
    const actionItemIndex = req.query.actionItemIndex;
    User.updateOne({_id: req.params.userID}, {$set: { [`goals.${goalIndex}.actionItems.${actionItemIndex}.completed`]: req.body.completed }}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  remove: (req, res) => {
    const goalIndex = req.query.goalIndex;
    User.findOneAndUpdate({_id: req.params.userID}, {$pull :{[`goals.${goalIndex}.actionItems`]: req.body }}, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
