import { request } from 'express'
import {pool} from '../db.js'


export const getEmployees = async (req,res)=>{
   const [rows] = await pool.query('SELECT * FROM employees')
   res.json(rows)
}

export const getEmployee = async(req,res)=>{
    console.log(req.params.id)
    const [rows] = await pool.query(`SELECT * FROM employees WHERE  id = ? `, [req.params.id])
    
    if(rows.length <=0) return res.status(404).json(
        {
            "message": 'Employee not found'
        }
    )
    
    res.json(rows[0])
}

export const createEmployee = async (req,res)=>{
    const {name, salary} =req.body

    const [rows] =  await pool.query('INSERT INTO employees (name, salary) VALUES (?,?)', [name, salary])
    // console.log(req.body)
    res.send({  
        id: rows.insertId,
        name,
        salary
    })
}

export const deleteEmployee = async (req,res)=>{
   const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id])

   if(result.affectedRows <= 0){
    res.status(404).json({
        message: 'Employee not found'
    })
   }
    res.sendStatus(204)
}

export const updateEmployee = async (req,res)=>{
   const {id} =  req.params
   const {name,salary} =req.body

    //IFNULL -> Si es nulo o undefined, lo va actualizar con el valor que tenía 
   const [result] =await pool.query('UPDATE employees SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id=?', [name, salary, id])

   if(result.affectedRows==0){
    return res.status(404).json({
        message: "Empleado no encontrado"
    })
   }
   const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
   res.json(rows[0])
}

