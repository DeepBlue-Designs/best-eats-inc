const User = require('../../../database/UserProfile/model/users');

module.exports = {
  add: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, {$push :{"goals": req.body}}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }
};
