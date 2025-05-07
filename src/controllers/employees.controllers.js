import {pool} from '../db.js'


export const getEmployee =(req,res)=>{
    res.send('Obteniendo empleados ')
}

export const createEmployee = async (req,res)=>{
    const {name, salary} =req.body

    const [rows] =  await pool.query('INSERT INTO employees (name, salary) VALUES (?,?)', [name, salary])
    // console.log(req.body)
    res.send({rows})
}

export const updateEmployee = (req,res)=>{
    res.send('Actualizando empleados ')
}

export const deleteEmployee = (req,res)=>{
    res.send('Eliminando empleados ')
}