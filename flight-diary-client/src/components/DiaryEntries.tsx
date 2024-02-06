import Entry from './Entry.tsx';
import { DiaryEntry } from '../types.ts';

const DiaryEntries = ({ entries }: DiaryEntriesProps) => {
  return (
    <div>
      <h2>Diary entries</h2>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

interface DiaryEntriesProps {
  entries: DiaryEntry[];
}

export default DiaryEntries;
