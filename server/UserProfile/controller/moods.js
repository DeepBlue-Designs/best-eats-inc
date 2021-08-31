const User = require('../../../database/UserProfile/model/users');

module.exports = {
  put: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, {$push :{"moods": req.body}}, (err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
