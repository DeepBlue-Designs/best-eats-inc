/*eslint-disable*/
const controller = require('./UserProfile/controller');
const router = require('express').Router();

router.post('/signup', controller.createUser.post);

router.post('/login', controller.login.post);

router.put('/:userID/username/edit', controller.userInfo.username);

router.put('/:userID/email/edit', controller.userInfo.email);

router.put('/:userID/address/edit', controller.userInfo.address);

router.put('/:userID/healthMetrics/edit', controller.userInfo.healthMetrics);

router.put('/:userID/moods', controller.moods.put);

router.put('/:userID/goal/add', controller.goals.add);

router.put('/:userID/goal/remove', controller.goals.remove);

router.put('/:userID/mealplan/add', controller.mealPlan.add);

router.put('/:userID/mealplan/remove', controller.mealPlan.remove);

router.put('/:userID/actionItems/add', controller.actionItems.add);

router.put('/:userID/actionItems/check', controller.actionItems.check);

router.put('/:userID/actionItems/remove', controller.actionItems.remove);


module.exports = router;
