export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}
export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other',
}

export interface Entry {
  description: string;
  date: string;
  specialist: string;
  code: string;
}
export interface Patient {
  id: string;
  name: string;
  ssn: string;
  occupation: string;
  gender: string;
  dateOfBirth: string;
  entries: Entry[];
}

export type PublicPatient = Omit<Patient, 'ssn' | 'entries'>;
export type NewPatientEntry = Omit<Patient, 'entries' | 'id'>;
