import express from 'express';
import { calculateBmi } from './bmicalculator';
import { calculateExercises } from './exerciseCalculator';
import { calculator, Operation } from './calculator';

const app = express();
app.use(express.json());
app.get('/ping', (_req, res) => {
  res.send('pong');
});
app.get('/hello', (_req, res) => {
  res.send('Hello full stack!');
});


app.post('/calculate', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { value1, value2, op } = req.body;
  if (!value1 || isNaN(Number(value1)) || !value2 || isNaN(Number(value2))) {
    return res.status(400).send({ error: '...' });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculator(Number(value1), Number(value2), op as Operation);
  return res.send({ result });
});



app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { daily_exercises, target } = req.body;
  if (!daily_exercises || !target) {
    return res.status(400).send({ error: 'missing paramaters' });
  }
  if (isNaN(Number(target)) || !Array.isArray(daily_exercises)) {
    return res.status(400).send({ error: 'malformatted paramaters' });
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const result = calculateExercises(target, daily_exercises);
  return res.send({ result });
});

app.get('/bmi', (req, res) => {
  const { weight, height } = req.query;

  if (!weight || isNaN(Number(weight)) || !height || isNaN(Number(height))) {
    return res.status(400).send({ error: 'malformed paramaters' });
  }
  const response: string = calculateBmi(Number(height), Number(weight));
  return res.json({
    weight, height, response
  });
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.listen(3002, () => {
  console.log('server running on port 3002');
});