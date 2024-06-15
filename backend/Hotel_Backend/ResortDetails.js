import pool from "./db.js";
export const oceanvilla = async(req,res)=>{
    try {
        const result = await pool.query("SELECT *from oceanvilla_detail WHERE name='Ocean Villa Maladives'");
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

export const MountainVilla = async(req,res)=>{
  try {
    const result = await pool.query("SELECT * FROM oceanvilla_detail WHERE name = 'Mountain Villa Munnar'");
    res.json(result.rows);
  } catch (error) {
    console.log('Error in the MountainVilla select Query');
    res.status(500).send('Mountain Villa error internal error');
  }

}

export const RoomOffer = async(req,res)=>{
  try {
    const result = await pool.query("SELECT * FROM Offer");
    res.json(result.rows);
  } catch (error) {
    console.log('Error in the MountainVilla select Query');
    res.status(500).send('Mountain Villa error internal error');
  }

}

export const OotyResort = async(req,res)=>{
  try {
    const result = await pool.query("SELECT * FROM oceanvilla_detail WHERE name = 'Luxary Resort Coorg'");
    res.json(result.rows);
  } catch (error) {
    console.log('Error in the MountainVilla select Query');
    res.status(500).send('Mountain Villa error internal error');
  }

}