import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from "express-async-handler";
import cors from 'cors';
import corsOptions from './cors/corsOptions';
import routerProducts from './routes/prooductsRoute';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use('/products', routerProducts);

app.get("/", authenticate, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  console.log("root");
  res.send("This is XSRF key");
}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});


function authenticate (req: Request, res: Response, next: NextFunction) {
  const isAuthenticate = true; // simulate authentication logic
  console.log('authenticate');

  if(!isAuthenticate) {
    res.status(401).send("Unauthorized");
  }
  next();
}