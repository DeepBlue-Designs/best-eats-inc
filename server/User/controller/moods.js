const User = require('../../../database/model/users');

module.exports = {
  put: (req, res) => {
    User.findByIdAndUpdate(req.params.userID, {$push :{"moods": req.body}}, { new: true }, (err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
