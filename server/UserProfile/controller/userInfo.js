const User = require('../../../database/UserProfile/model/users');

module.exports = {
  username: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, req.body, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  email: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, req.body, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  address: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, req.body, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  },
  healthMetrics: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, req.body, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
