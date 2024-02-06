import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import diariesService from '../services/diaries';
import { DiaryEntry } from '../types.ts';

const NewEntryForm = ({ setEntries }: NewEntryFormProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    diariesService
      .addEntry({
        date,
        visibility,
        weather,
        comment,
      })
      .then((newEntry) => {
        setEntries((prevEntries) => [...prevEntries, newEntry]);
        setDate('');
        setVisibility('');
        setWeather('');
        setComment('');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Add new entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <div>
          <label htmlFor="visibilty">Visibility</label>
          <input
            type="text"
            id="visibilty"
            value={visibility}
            onChange={({ target }) => setVisibility(target.value)}
          />
        </div>
        <div>
          <label htmlFor="weather">Weather</label>
          <input
            type="text"
            id="weather"
            value={weather}
            onChange={({ target }) => setWeather(target.value)}
          />
        </div>
        <div>
          <label htmlFor="comment">Comment</label>
          <input
            type="text"
            id="comment"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

interface NewEntryFormProps {
  setEntries: Dispatch<SetStateAction<DiaryEntry[]>>;
}

export default NewEntryForm;
