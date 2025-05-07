//Pool conjunto de conexiones que se pueden usar 
import {createPool} from 'mysql2/promise'

export const pool =createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: 3306,
    database: 'companydb'
})
