import express, { Request, Response, NextFunction } from 'express';
import asyncHandler from "express-async-handler";
import { createConnection } from './db';
import cors from 'cors';
import { CorsOptions } from 'cors';
import { RowDataPacket } from 'mysql2';

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

  if(id) {
    if(isNaN(+id)) {
      res.status(400).json({ error: 'Bad Request, server expects id has type: "number"' })
    }
    getProduct( Number(id));
  } else {
    getAllProducts();
  }

  async function getProduct(id: number) {
    const DB = await createConnection();
    let product: RowDataPacket[] = [];
    let productCategories: RowDataPacket[] = [];
    let isError = false;

    /**Get product*/
    try {
      const [rows] = await DB.query(`
      SELECT 
        * 
      FROM 
        products
      WHERE 
        idProduct = ${id};
      `);
      product = rows as RowDataPacket[];
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: `Error retrieving product: ${id}` });
      isError = true;
    }

    /**Get product categiries*/
    try {
      const [rows] = await DB.query(`
      SELECT 
        p_c.idProduct,
        c.name
      FROM 
        product_category AS p_c
      JOIN 
        category AS c ON p_c.idCategory = c.idCategory
      WHERE
        p_c.idProduct = ${id};
      `);
      productCategories = rows as RowDataPacket[];
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error retrieving categories' });
      isError = true;
    } finally {
      DB.end();  //close DB after all request
    }

    product[0].categories = []; //I requested only 1 product from DB
    productCategories.forEach(category => {
      product[0].categories.push(category.name);
    });

    if(!isError) {
      res.status(200).json(product);
    }

    return true;
  }


  async function getAllProducts() {
    const DB = await createConnection();
    let products: RowDataPacket[] = [];
    let productCategories: RowDataPacket[] = [];
    let isError = false;

    /**Get All products*/
    try {
      const [rows] = await DB.query(`
        SELECT 
          * 
        FROM 
          products
        ORDER BY
          products.discount DESC;
      `);
      products = rows as RowDataPacket[];
      
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error retrieving products' });
      isError = true;
    }

    /**Get products categiries*/
    try {
      const [rows] = await DB.query(`
      SELECT
        p.idProduct,
        p.discount,
        c.name
      FROM
        products p
      JOIN
        product_category pc ON p.idProduct = pc.idProduct
      JOIN
        category c ON pc.idCategory = c.idCategory;
      `);
      productCategories = rows as RowDataPacket[];
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error retrieving categories' });
      isError = true;
    } finally {
      DB.end();  //close DB after all request
    }

    products.forEach(product => product.categories = []);
    productCategories.forEach(productCategory => {
      const index = products.findIndex(product => product.idProduct === productCategory.idProduct);
      products[index]?.categories.push(productCategory.name);
    });

    if(!isError) {
      res.status(200).json(products);
    }

    return true;
  }
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
