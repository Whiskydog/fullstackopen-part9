import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.get('/api/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
