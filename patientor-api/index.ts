import express, { Request, Response } from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));
app.use(express.json());

app.get('/ping', (_req: Request, res: Response) => {
  res.send('pong');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
