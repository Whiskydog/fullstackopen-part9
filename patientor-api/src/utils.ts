import { Entry, Gender, NewPatient } from '@/types';

export const toNewPatient = (object: unknown): NewPatient => {
  if (!object || typeof object !== 'object') {
    throw new Error('Incorrect or missing data');
  }

  if (
    'name' in object &&
    'dateOfBirth' in object &&
    'ssn' in object &&
    'gender' in object &&
    'occupation' in object &&
    'entries' in object
  ) {
    return {
      name: parseString(object.name, 'name'),
      dateOfBirth: parseDate(object.dateOfBirth, 'date of birth'),
      ssn: parseString(object.ssn, 'ssn'),
      gender: parseGender(object.gender),
      occupation: parseString(object.occupation, 'occupation'),
      entries: parseEntries(object.entries),
    };
  }

  throw new Error('Incorrect data: missing required fields');
};

const parseEntries = (entries: unknown): Entry[] => {
  if (!Array.isArray(entries)) {
    throw new Error('Incorrect or missing entries');
  }

  return entries.map((entry) => {
    if (!isEntry(entry)) {
      throw new Error('Incorrect or missing entry');
    }
    return entry;
  });
};

const isEntry = (entry: unknown): entry is Entry => {
  return entry !== null && typeof entry === 'object' && 'type' in entry;
};

const isGender = (param: string): param is Gender => {
  return Object.values(Gender)
    .map((v) => v.toString())
    .includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!isString(gender) || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const parseString = (string: unknown, propName: string): string => {
  if (!string || !isString(string)) {
    throw new Error(`Incorrect or missing ${propName}`);
  }
  return string;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseDate = (date: unknown, propName: string): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error(`Incorrect or missing ${propName}`);
  }
  return date;
};
