import { NewPatientEntry, Gender } from './types';

type Fields = {
  name: unknown;
  dateOfBirth: unknown;
  ssn: unknown;
  gender: unknown;
  occupation: unknown;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

// eslint-disable-next-line @ typescript-eslint/no-explicity-any
const isGender = (param: any): param is Gender => {
  //eslint-disable-next-line #typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(param);
};

const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error('Incorrect or missing gender');
  }
  return gender;
};
const parseString = (data: unknown): string => {
  if (!data || !isString(data)) {
    throw new Error('Incorrect or missing');
  }

  return data;
};

const toNewPatientEntry = (object: Fields): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseString(object.name),
    dateOfBirth: parseString(object.dateOfBirth),
    ssn: parseString(object.ssn),
    gender: parseGender(object.gender),
    occupation: parseString(object.occupation),
  };

  return newEntry;
};

export default toNewPatientEntry;
