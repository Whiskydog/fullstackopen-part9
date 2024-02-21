import axios from "axios";
import { apiBaseUrl } from "../constants.ts";
import { Diagnosis } from "../types.ts";

const getAll = async (): Promise<Diagnosis[]> => {
  const { data } = await axios.get<Diagnosis[]>(`${apiBaseUrl}/diagnoses`);

  return data;
};

export default {
  getAll,
};
