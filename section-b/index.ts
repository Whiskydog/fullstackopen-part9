import express from 'express';
import morgan from 'morgan';
import { calculateBmi, parseArgs } from './bmiHelper';

const app = express();
app.use(morgan('tiny'));

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
  try {
    const args = [String(req.query.height), String(req.query.weight)];
    const { height, weight } = parseArgs(args);
    const bmi = calculateBmi(height, weight);
    res.send({ weight, height, bmi });
  } catch {
    res.status(400).send({ error: 'Malformed parameters' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
