import axios from "axios";
import { apiBaseUrl } from "../constants.ts";
import { Diagnosis } from "../types.ts";

const getAll = async (): Promise<Diagnosis[]> => {
  const { data } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);

  return data;
};

const getAllByCodes = async (codes: string[]): Promise<Diagnosis[]> => {
  const { data } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);

  return data.filter((diagnosis) => codes.includes(diagnosis.code));
};

export default {
  getAll,
  getAllByCodes,
};
