import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from "express-async-handler";
import { createConnection } from './db';
import cors from 'cors';
import { CorsOptions } from 'cors';

const app = express();

function authenticate (req: Request, res: Response, next: NextFunction) {
  const isAuthenticate = true; // simulate authentication logic
  console.log('authenticate');

  if(!isAuthenticate) {
    res.status(401).send("Unauthorized");
  }
  next();
}

const allowedOrigins: string[] = [
  'http://localhost:4200',
];

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

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
  const { id } = req.query;
  const DB = await createConnection();
  

  /**
   * ВНИМАНИЕ!
   * ВНИМАНИЕ!
   * ВНИМАНИЕ!
   * Примени 
   * преймущество 
   * asyncHandler!
   * ВНИМАНИЕ!
   * ВНИМАНИЕ!
   * ВНИМАНИЕ!
   */

  try {
    const [rows, fields] = await DB.query(`SELECT * FROM products`);
    res.status(200).json(rows);
    console.log(rows);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error retrieving products' });
  } finally {
    DB.end();
  }
  
  // if(id) {
  //   const query_getProduct = `SELECT * FROM products WHERE idProduct = ${id}`;
  //   DB.query(query_getProduct, (error, results) => {
  //     if (error) {
  //         res.status(500).json({ error: 'Error retrieving products' });
  //     } else {
  //         res.status(200).json(results);
  //     }
  //   })
  // } else {
  //   const query_getAllProducts = `SELECT * FROM products`;
  //   DB.query(query_getAllProducts, (error, results) => {

  //     if (error) {
  //       res.status(500).json({ error: 'Error retrieving products' });
  //     } else {
  //       const categories = await getAllProductsCategories();

  //       if(categories instanceof Error) {
  //         res.status(500).json({ error: 'Error retrieving categories' });
  //       }
  //       res.status(200).json(results);
  //     }
  //   })
  // }
}));

// async function getAllProductsCategories() {
//   const query_getAllCategory = `SELECT * FROM category`;
//   DB.query(query_getAllCategory, (error, results) => {
//     if (error) {
//       return error;
//     } else {
//       return results;
//     }
//   })
// }

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
