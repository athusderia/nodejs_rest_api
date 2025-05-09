//Pool conjunto de conexiones que se pueden usar 
import {createPool} from 'mysql2/promise'
import 'dotenv/config';

export const pool = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    port: parseInt(process.env.DB_PORT || '3306'), // Valor por defecto 3306
    database: process.env.DB_NAME
});