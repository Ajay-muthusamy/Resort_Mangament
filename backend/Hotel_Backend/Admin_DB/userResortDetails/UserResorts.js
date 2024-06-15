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

export const RoomBookerDetail = async(req,res)=>{
    try {
        const result = await pool.query('SELECT *FROM  bookings');
        res.send(result.rows);
    } catch (error) {
        console.log("Booking error");
        res.status(404).send("internal error");
    }
}

export const ResortUpdates = async (req, res) => {
    const { input, dropdown1 } = req.body; 
    try {
      const updateQuery = `
        UPDATE oceanvilla_detail
        SET rent = $1
        WHERE name = $2;`;
      
      const result = await pool.query(updateQuery, [input, dropdown1]);
      res.status(200).send("Rent updated successfully");
    } catch (error) {
      console.error("Error updating rent:", error);
      res.status(500).send("Internal server error");
    }
  };
  