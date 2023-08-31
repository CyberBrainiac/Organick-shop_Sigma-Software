import asyncHandler from "express-async-handler";
import { createConnection } from '../dataBase/dbConfig';
import { RowDataPacket } from 'mysql2';
import { Request, Response} from 'express';

const getProducts = asyncHandler(async (req: Request, res: Response) => {
  const { id } = req.query;

  /**
   * This controller process 2 types of GET /products request
   * If request contain ID, controller execute getProduct()
   * If request parametrs are empty, controller execute getAllProduct()
   */

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
      console.log(product);
      
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
});

const productsControllers = {
  getProducts,
}

export default productsControllers;