import { CoursePart } from '../types.ts';

const Part = ({ coursePart }: PartProps) => {
  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  const parseCoursePart = () => {
    switch (coursePart.kind) {
      case 'basic':
        return (
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
            <br />
            <em>{coursePart.description}</em>
          </p>
        );
      case 'group':
        return (
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
            <br />
            project exercises {coursePart.groupProjectCount}
          </p>
        );
      case 'background':
        return (
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
            <br />
            <em>{coursePart.description}</em>
            <br />
            <a href={coursePart.backgroundMaterial}>background material</a>
          </p>
        );
      case 'special':
        return (
          <p>
            <strong>
              {coursePart.name} {coursePart.exerciseCount}
            </strong>
            <br />
            <em>{coursePart.description}</em>
            <br />
            required skills: {coursePart.requirements.join(', ')}
          </p>
        );
      default:
        return assertNever(coursePart);
    }
  };

  return <>{parseCoursePart()}</>;
};

interface PartProps {
  coursePart: CoursePart;
}

export default Part;
