import mysql from "mysql2/promise";
import { config } from 'dotenv';

export async function createConnection() {
  config();

  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_NAME || !process.env.DB_PORT) {
    console.error("Required environment variables are missing.");
    process.exit(1); // Exit the process with an error code
  }

  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
  });

  return connection;
}
