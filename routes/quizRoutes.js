const { Router } = require('express');
const { calculateScore, quizQuestions, submitHandler } = require('../controller/quizController.js');

const router = Router();

router.get('/quiz', quizQuestions);
router.post('/submit', submitHandler);
router.get('/score', calculateScore);

module.exports = router;
