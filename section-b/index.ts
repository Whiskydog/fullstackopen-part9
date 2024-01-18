import express from 'express';
import morgan from 'morgan';

const app = express();
app.use(morgan('tiny'));

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});