import asyncHandler from "express-async-handler";
import { Request, Response} from 'express';
import { createConnection } from '../dataBase/dbConfig';
import { ResultSetHeader } from "mysql2";

const getOrders = asyncHandler(async (req: Request, res: Response) => {
  res.status(200).json("This will be API for get all orders");
});

const postOrders = asyncHandler(async (req: Request, res: Response) => {
  try {
    const DB = await createConnection();
    const {userInfo, orderProducts} = req.body;
    const {name, email, address, phoneNumber, message} = userInfo;
    
    let newUserId;
    let newOrderId;

    /**Set New User*/
    try {
      DB.beginTransaction();
      const query =
        'INSERT INTO user (name, email, address, phone) VALUES (?, ?, ?, ?)';
      const values = [name, email, address, phoneNumber];
      const [result] = await DB.query<ResultSetHeader>(query, values);
      newUserId = result.insertId;

      await DB.commit();

    } catch (error) {
      await DB.rollback();
      console.log("Transaction Rollback")
      throw error;

    } finally {
      DB.release();
    }

    /**Set New Order*/
    try {
      DB.beginTransaction();
      const query =
        'INSERT INTO orders (idUser, message) VALUES (?, ?)';
      const values = [newUserId, message];
      const [result] = await DB.query<ResultSetHeader>(query, values);
      newOrderId = result.insertId;
      
      await DB.commit();

    } catch (error) {
      await DB.rollback();
      console.log("Transaction Rollback")
      throw error;

    } finally {
      DB.release();
    }

    /**Set Order and Product*/
    try {
      DB.beginTransaction();

      for(const product of orderProducts) {
        const query = 'INSERT INTO order_product (idOrder, idProduct, productCount) VALUES (?, ?, ?)';
        const {idProduct, quantity} = product;

        const values = [newOrderId, idProduct, quantity];
        const [result] = await DB.query<ResultSetHeader>(query, values);
      }
      
      await DB.commit();

    } catch (error) {
      await DB.rollback();
      console.log("Transaction Rollback")
      throw error;

    } finally {
      DB.release();
    }

    res.status(200).json('Data added succesfully');
  } catch (error: any) {
    console.error('Error adding order:', error);
    res.status(500).json(error.sqlMessage);
  }
});

const ordersControllers = {
  getOrders,
  postOrders,
}

export default ordersControllers;