import axios from 'axios';
import { DiaryEntry, NewDiaryEntry } from '../types.ts';

const baseUrl = 'http://localhost:3000/api/diaries';

const getAll = async (): Promise<DiaryEntry[]> => {
  const res = await axios.get<DiaryEntry[]>(baseUrl);
  return res.data;
};

const addEntry = async (newDiary: NewDiaryEntry): Promise<DiaryEntry> => {
  const res = await axios.post<DiaryEntry>(baseUrl, newDiary);
  return res.data;
};

export default { getAll, addEntry };
