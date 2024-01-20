import express from 'express';
import morgan from 'morgan';
import { calculateBmi, parseArgs } from './bmiHelper';
import { calculateExercises } from './exerciseHelper';

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

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

app.post('/exercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const period: any = req.body.daily_exercises;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
  const target: any = req.body.target;

  if (typeof period === 'undefined' || typeof target === 'undefined') {
    return res.status(400).send({ error: 'Parameters missing' });
  }

  if (
    Array.isArray(period) &&
    period.every((value) => typeof value === 'number') &&
    typeof target === 'number'
  ) {
    return res.send(calculateExercises(period as number[], target));
  }

  return res.status(400).send({ error: 'Malformed parameters' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
