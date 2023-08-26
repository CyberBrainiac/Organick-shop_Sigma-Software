import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from "express-async-handler";
import connection from './db';

const app = express();
const PORT = 3000;

function authenticate (req: Request, res: Response, next: NextFunction) {
  const isAuthenticate = true; // simulate authentication logic
  console.log('authenticate');

  if(!isAuthenticate) {
    res.status(401).send("Unauthorized");
  }
  next();
}

app.use(express.json());

// app.use((req: Request, res: Response) => {
//   console.log(`Received request: ${req.method} ${req.url}`);
//   res.status(404).send('Not Found');
// });

// /**Error handling*/
// app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
//   console.error(err.stack);
//   res.status(500).send("Server error!");
// });

// app.get('/', (req: Request, res: Response) => {
//   res.send('Hello, Express server is up and running!');
// });

app.get("/", authenticate, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  console.log("root");
  res.send("This is XSRF key");
}));

app.get("/products", asyncHandler(async (req: Request, res: Response) => {
  const query = 'SELECT * FROM products WHERE idProduct = 1';

  connection.query(query, (error, results) => {
    if (error) {
        res.status(500).json({ error: 'Error retrieving products.' });
    } else {
        res.status(200).json(results);
    }
  })
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
