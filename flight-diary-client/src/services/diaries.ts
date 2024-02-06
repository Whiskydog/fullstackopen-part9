import axios from 'axios';
import { DiaryEntry } from '../types.ts';

const baseUrl = 'http://localhost:3000/api/diaries';

const getAll = async (): Promise<DiaryEntry[]> => {
  const res = await axios.get<DiaryEntry[]>(baseUrl);
  return res.data;
};

export default { getAll };
