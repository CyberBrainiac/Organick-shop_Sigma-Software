import mysql, { Connection } from "mysql2/promise";
import { config } from 'dotenv';

export interface CustomConnection extends Connection {
  release(): void;
}

export async function createConnection(): Promise<CustomConnection> {
  config();

  if (!process.env.DB_HOST || !process.env.DB_USER || !process.env.DB_PASS || !process.env.DB_NAME || !process.env.DB_PORT) {
    console.error("Required environment variables are missing.");
    process.exit(1);
  }

  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: parseInt(process.env.DB_PORT, 10),
  });

  const connection = await pool.getConnection();

  return connection;
}
