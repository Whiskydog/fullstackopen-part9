type Rating = 1 | 2 | 3;

interface Result {
  periodLength: number,
  trainingDays: number,
  success: boolean,
  rating: Rating,
  ratingDescription: string,
  target: number,
  average: number
}

interface TrainingData {
  period: number[],
  target: number
}

const parseArgs = (args: string[]): TrainingData => {
  if (args.length < 2)
    throw new Error('You must provide target and period hours!');

  const period = args.slice(1).map((arg) => Number(arg));
  const target = Number(args[0]);

  if (isNaN(target))
    throw new Error('Target hours must be a number!');
  period.forEach((hours) => {
    if (isNaN(hours))
      throw new Error('Period hours must be exclusively numbers!');
  });

  return { period, target };
};

const getRating = (average: number, target: number): Rating => {
  switch (true) {
    case average >= target:
      return 3;
    case average >= target / 2:
      return 2;
    default:
      return 1;
  }
};

const getRatingDescription = (rating: Rating): string => {
  switch (rating) {
    case 1:
      return `You'll have to put in more hours..`;
    case 2:
      return `You can do better than that...`;
    case 3:
      return `Great job! You've achieved your target!`;
  }
};

const calculateExercises = (period: number[], target: number): Result => {
  const periodLength = period.length;
  const trainingDays = period.filter((value) => value > 0).length;
  const average = period.reduce((acc, value) => acc + value, 0) / periodLength;
  const success = average >= target;
  const rating = getRating(average, target);
  const ratingDescription = getRatingDescription(rating);

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  };
};

const args = process.argv.slice(2);
try {
  const { period, target } = parseArgs(args);
  console.log(calculateExercises(period, target));
} catch (e) {
  let message = 'There was an error.';
  if (e instanceof Error)
    message += ` ${e.message}`;
  console.log(message);
}
