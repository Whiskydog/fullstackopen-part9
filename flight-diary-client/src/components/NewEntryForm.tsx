import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import diariesService from '../services/diaries';
import { DiaryEntry } from '../types.ts';
import { isAxiosError } from 'axios';

const NewEntryForm = ({ setEntries }: NewEntryFormProps) => {
  const [date, setDate] = useState('');
  const [visibility, setVisibility] = useState('');
  const [weather, setWeather] = useState('');
  const [comment, setComment] = useState('');
  const [error, setError] = useState<string | null>(null);

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
        setError(null);
      })
      .catch((error) => {
        if (isAxiosError(error)) {
          const msg = String(error.response?.data).match(/Error:.*/)?.[0];
          setError(msg || 'An unknown error occurred');
        } else {
          console.error(error);
        }
      });
  };

  return (
    <div>
      <h2>Add new entry</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={({ target }) => setDate(target.value)}
          />
        </div>
        <div>
          <span>Visibility: </span>
          <input
            type="radio"
            name="visibility"
            id="great"
            checked={visibility === 'great'}
            onChange={() => setVisibility('great')}
          />
          <label htmlFor="great">Great</label>
          <input
            type="radio"
            name="visibility"
            id="good"
            checked={visibility === 'good'}
            onChange={() => setVisibility('good')}
          />
          <label htmlFor="good">Good</label>
          <input
            type="radio"
            name="visibility"
            id="ok"
            checked={visibility === 'ok'}
            onChange={() => setVisibility('ok')}
          />
          <label htmlFor="ok">Ok</label>
          <input
            type="radio"
            name="visibility"
            id="poor"
            checked={visibility === 'poor'}
            onChange={() => setVisibility('poor')}
          />
          <label htmlFor="poor">Poor</label>
        </div>
        <div>
          <span>Weather: </span>
          <input
            type="radio"
            name="weather"
            id="sunny"
            checked={weather === 'sunny'}
            onChange={() => setWeather('sunny')}
          />
          <label htmlFor="sunny">Sunny</label>
          <input
            type="radio"
            name="weather"
            id="cloudy"
            checked={weather === 'cloudy'}
            onChange={() => setWeather('cloudy')}
          />
          <label htmlFor="cloudy">Cloudy</label>
          <input
            type="radio"
            name="weather"
            id="rainy"
            checked={weather === 'rainy'}
            onChange={() => setWeather('rainy')}
          />
          <label htmlFor="rainy">Rainy</label>
          <input
            type="radio"
            name="weather"
            id="stormy"
            checked={weather === 'stormy'}
            onChange={() => setWeather('stormy')}
          />
          <label htmlFor="stormy">Stormy</label>
          <input
            type="radio"
            name="weather"
            id="windy"
            checked={weather === 'windy'}
            onChange={() => setWeather('windy')}
          />
          <label htmlFor="windy">Windy</label>
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
