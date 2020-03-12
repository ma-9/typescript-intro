import express, { Application, Request, Response } from 'express';

const app: Application = express();

const Add = (a: number, b: number): number => a + b;

app.get('/', (req: Request, res: Response) => {
  console.log(Add(5, 5));
  res.send('Welcome To TypeScript Based Express Application');
});

app.listen(5000, () => console.log('Server is Running on 5000'));
