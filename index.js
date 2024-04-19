const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware
const app = express();
const port = 3000;
const quizData = require('./questions.json');
const quizRoutes = require('./routes/quizRoutes.js');

app.use(bodyParser.json());
app.use(cors(
  {origin: '*'}
)); // Use the cors middleware

app.use("/api",quizRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
