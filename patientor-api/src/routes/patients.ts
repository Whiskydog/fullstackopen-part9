import { Router, Request, Response } from 'express';
import patientService from '@/services/patientService';
import { toNewPatient } from '@/utils';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send(patientService.getPatients());
});

router.post('/', (req: Request, res: Response) => {
  try {
    const newPatient = toNewPatient(req.body);
    const addedPatient = patientService.addPatient(newPatient);
    res.json(addedPatient);
  } catch (error: unknown) {
    let errorMessage = 'An error occurred.';
    if (error instanceof Error) {
      errorMessage += ` ${error.message}`;
    }
    res.status(400).send(errorMessage);
  }
});

export default router;
