import pool from "./db.js";
export const oceanvilla = async(req,res)=>{
    try {
        const result = await pool.query("SELECT *from oceanvilla_detail");
        res.json(result.rows);
      } catch (error) {
        console.log('error in fetch data form oceanvilla table');
        res.status(500).send('oceanvilla server error');
      }
}

export const isBooked =async(req,res)=>{
  try {
    const response = await pool.query('SELECT *from ')
  } catch (error) {
    
  }
}