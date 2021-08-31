/*eslint-disable*/
const controller = require('./UserProfile/controller');
const router = require('express').Router();

router.post('/signup', controller.createUser.post);

router.get('/login', controller.login.get);

router.put('/:userID/moods', controller.moods.put);

router.put('/:userID/goal/add', controller.goals.add);

router.put('/:userID/goal/remove', controller.goals.remove);

router.put('/:userID/mealplan/add', controller.mealPlan.add);

router.put('/:userID/mealplan/remove', controller.mealPlan.remove);

router.put('/:userID/actionItems/add', controller.actionItems.add);

router.put('/:userID/actionItems/check', controller.actionItems.check);

router.put('/:userID/actionItems/remove', controller.actionItems.remove);


module.exports = router;
