import { calculateExercises, parseArgs } from './exerciseHelper';

const args = process.argv.slice(2);
try {
  const { period, target } = parseArgs(args);
  console.log(calculateExercises(period, target));
} catch (e) {
  let message = 'There was an error.';
  if (e instanceof Error) message += ` ${e.message}`;
  console.log(message);
}
