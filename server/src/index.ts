import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from "express-async-handler";
import cors from 'cors';
import corsOptions from './cors/corsOptions';
import routerProducts from './routes/prooductsRoute';
import authenticate from './middleware/authenticate';

const app = express();
const PORT = 3200;

app.use(cors(corsOptions));
app.use(express.json());
app.use('/products', routerProducts);

app.get("/", authenticate, asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
  console.log("root");
  res.send("This is XSRF key");
}));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
