import express, { Request, Response, NextFunction } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use((req: Request, res: Response) => {
  console.log(`Received request: ${req.method} ${req.url}`);
  res.status(404).send('Not Found');
});

/**Error handling*/
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  console.error(err.stack);
  res.status(500).send("Server error!");
});

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Express server is up and running!');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});