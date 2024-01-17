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

const getRating = (average: number, target: number): Rating => {
  switch (true) {
    case average >= target: return 3;
    case average >= target / 2: return 2;
    default: return 1;
  }
}

const getRatingDescription = (rating: Rating): string => {
  switch (rating) {
    case 1: return `You'll have to put in more hours..`
    case 2: return `You can do better than that...`
    case 3: return `Great job! You've achieved your target!`
  }
}

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
}

const trainingPeriod = [3, 0, 2, 4.5, 0, 3, 1];
const targetHours = 2;

console.log(calculateExercises(trainingPeriod, targetHours));

