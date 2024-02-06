import Part from './Part.tsx';
import { CoursePart } from '../types.ts';

const Content = ({ courseParts }: ContentProps) => {
  return (
    <div>
      {courseParts.map((part) => (
        <Part key={part.name} coursePart={part} />
      ))}
    </div>
  );
};

interface ContentProps {
  courseParts: CoursePart[];
}

export default Content;
