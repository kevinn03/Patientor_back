import express from 'express';
import patientServices from '../services/patientServices';
import toNewPatientEntry from '../utils';
const router = express.Router();

router.get('/', (_req, res) => {
  res.json(patientServices.getNonSensitiveEntries());
});
router.get('/:id', (req, res) => {
  const id = req.params.id;
  const patient = patientServices.getPatientById(id);
  if (!patient) res.status(400).send('ID does not exist');
  res.json(patient);
});

router.post('/', (req, res) => {
  const newPatientEntry = toNewPatientEntry(req.body);
  const addedEntry = patientServices.addPatient(newPatientEntry);
  res.json(addedEntry);
});

export default router;
