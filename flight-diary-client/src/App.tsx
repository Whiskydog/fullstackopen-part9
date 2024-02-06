import { DiaryEntry } from './types.ts';
import { useEffect, useState } from 'react';
import diariesService from './services/diaries';
import Entry from './components/Entry.tsx';

const App = () => {
  const [entries, setEntries] = useState<DiaryEntry[]>([]);
  useEffect(() => {
    diariesService
      .getAll()
      .then((entries) => {
        setEntries(entries);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h2>Diary entries</h2>
      {entries.map((entry) => (
        <Entry key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default App;
