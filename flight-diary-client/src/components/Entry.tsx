import { DiaryEntry } from '../types.ts';

const Entry = ({ entry }: EntryProps) => {
  return (
    <div>
      <h3>{entry.date}</h3>
      <p>
        Visibility: {entry.visibility}
        <br />
        Weather: {entry.weather}
      </p>
    </div>
  );
};

interface EntryProps {
  entry: DiaryEntry;
}

export default Entry;
