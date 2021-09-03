const foodData = require('../../database/foodData/bestEatsDinners.json');

module.exports = {
  getMeals(req, res) {
    res.status(200).json(foodData);
  },

  getMealById(req, res) {
    const { id } = req.params;
    const meals = foodData.results;
    for (var i = 0; i < meals.length; i++) {
      if (Number(id) === meals[i].id) {
        res.status(200).json(meals[i]);
        return;
      }
    }
    return res.sendStatus(412);
  },

};
