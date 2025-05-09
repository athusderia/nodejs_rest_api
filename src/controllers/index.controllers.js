import {pool} from '../db.js'

export const getIndex= async (req,res)=>{

    try {
        const [result] = await pool.query('SELECT "pong" AS RESULT')
        res.json(result[0])
        
    } catch (error) {
        return res.status(500).json({
            message: "Something goes wrong",
          });
        
    }

 }