import { Router, Request, Response } from 'express';
import patientService from '@/services/patientService';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send(patientService.getPatients());
});

export default router;
