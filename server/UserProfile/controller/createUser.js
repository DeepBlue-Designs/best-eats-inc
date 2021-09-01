const User = require('../../../database/UserProfile/model/users');

module.exports = {
  post: (req, res) => {
    const { userName, password, email, address, currentMealPlan, moods, goals, healthMetrics } = req.body;
    const newUser = new User ({
      userName,
      password,
      email,
      address,
      currentMealPlan,
      moods,
      goals,
      healthMetrics
    });
    newUser.save((err, data) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(data);
      }
    });
  }
};
