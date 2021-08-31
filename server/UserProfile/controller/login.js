const User = require('../../../database/UserProfile/model/users');

module.exports = {
  get: (req, res) => {
    User.findOne(req.body, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
