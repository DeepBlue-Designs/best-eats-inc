/*eslint-disable*/
const controller = require('./UserProfile/controller');
const router = require('express').Router();

router.post('/signup', controller.createUser.post);

router.get('/login', controller.login.get);

router.put('/:userID/moods', controller.moods.put);

router.put('/:userID/addGoal', controller.goals.add);

router.put('/:userID/:goalID/deleteGoal', controller.goals.delete);

// router.put('/reviews/:review_id/report', controller);


module.exports = router;
