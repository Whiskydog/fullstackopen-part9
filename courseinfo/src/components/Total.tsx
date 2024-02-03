const Total = ({ totalExercises }: TotalProps) => {
  return <p>Number of exercises {totalExercises}</p>;
};

interface TotalProps {
  totalExercises: number;
}

export default Total;
