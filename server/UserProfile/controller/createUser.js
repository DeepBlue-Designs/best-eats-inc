const User = require('../../../database/UserProfile/model/users');

module.exports = {
  post: (req, res) => {
    const { userName, password, email, address, currentMealPlan, moods, goals } = req.body;
    const newUser = new User ({
      userName,
      password,
      email,
      address,
      currentMealPlan,
      moods,
      goals
    });
    newUser.save((err, data) => {
      if (err) {
        res.send(err);
      } else {
        res.send(data);
      }
    });
  }
};
