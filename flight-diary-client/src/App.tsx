import { DiaryEntry } from './types.ts';
import { useEffect, useState } from 'react';
import diariesService from './services/diaries';
import NewEntryForm from './components/NewEntryForm.tsx';
import DiaryEntries from './components/DiaryEntries.tsx';

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
      <NewEntryForm setEntries={setEntries} />
      <DiaryEntries entries={entries} />
    </div>
  );
};

export default App;
