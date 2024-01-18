import { calculateBmi, parseArgs } from './bmiHelper';

const args = process.argv.slice(2);
try {
  const { height, weight } = parseArgs(args);
  console.log(calculateBmi(height, weight));
} catch (e) {
  let message = 'There was an error.';
  if (e instanceof Error)
    message += ` ${e.message}`;
  console.log(message);
}
