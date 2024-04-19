const quizData = require('../questions.json');

const submitHandler = (req, res) => {
    try {
        const userAnswers = req.body.answers;
        const { score, feedback } = calculateScore(userAnswers);
        res.json({ score, feedback });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const calculateScore = (userAnswers) => {
    let score = 0;
    const feedback = [];

    for (let i = 0; i < quizData.questions.length; i++) {
        const question = quizData.questions[i];
        const userAnswerIndex = parseInt(userAnswers[i]); // Convert user answer to integer
        const correctAnswerIndex = question.correctOption; // Assuming correctOption is the index of the correct answer
        const userAnswer = question.options[userAnswerIndex];
        const correctAnswer = question.options[correctAnswerIndex];

        if (userAnswer === correctAnswer) {
            score++;
            feedback.push({ question: question.question, userAnswer, result: 'correct' });
        } else {
            feedback.push({ question: question.question, userAnswer, result: 'incorrect', correctAnswer });
        }
    }

    return { score, feedback };
};

const quizQuestions = async (req, res) => {
    res.json(quizData);
};

module.exports = {
    quizQuestions,
    submitHandler,
    calculateScore
};
