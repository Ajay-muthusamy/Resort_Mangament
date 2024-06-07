import pool from "../../db.js";
export const oceanvillaDetail = async(req,res)=>{
    try {
        const result = await pool.query('SELECT *FROM resortbooking_details');
        res.send(result.rows)
    } catch (error) {
        console.log("error");
        res.status(404).send("internal error");
    }
}