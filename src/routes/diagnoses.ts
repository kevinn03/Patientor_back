import express from 'express';
import diagnoseServices from '../services/diagnoseServices';

const router = express.Router();

router.get('/', (_req_, res) => {
  res.json(diagnoseServices.getEntries());
});
router.post('/', (_req_, res) => {
  res.send('Saving a diagnoses');
});

export default router;
