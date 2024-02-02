import { Router, Request, Response } from 'express';
import diagnosisService from '@/services/diagnosisService';

const router = Router();

router.get('/', (_req: Request, res: Response) => {
  res.send(diagnosisService.getDiagnoses());
});

export default router;
