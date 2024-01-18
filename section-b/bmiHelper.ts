interface HealthStats {
  height: number,
  weight: number
}

export const calculateBmi = (height: number, weight: number): string => {
  const bmi = weight / (height / 100) ** 2;

  switch (true) {
    case bmi < 18.5:
      return 'Underweight';
    case bmi < 25:
      return 'Normal (healthy weight)';
    case bmi < 30:
      return 'Overweight';
    default:
      return 'Obese';
  }
};

export const parseArgs = (args: string[]): HealthStats => {
  if (args.length < 2)
    throw new Error('Not enough arguments!');

  const height = Number(args[0]);
  const weight = Number(args[1]);

  if (isNaN(height) || isNaN(weight))
    throw new Error('You must provide numbers as arguments!');

  return { height, weight };
};