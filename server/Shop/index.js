const foodData = require('../../database/foodData/bestEatsDinners.json');

module.exports = {
  getMeals(req, res) {
    res.status(200).json(foodData);
  },

};
