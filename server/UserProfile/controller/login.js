const User = require('../../../database/UserProfile/model/users');

module.exports = {
  post: (req, res) => {
    User
    .findOne()
    .where('userName').equals(req.body.userName)
    .where('password').equals(req.body.password)
    .exec((err, data) => {
      if (data === null) {
        res.status(404).send('error');
      } else {
        res.status(200).send(data);
      }
    })
  }
};
