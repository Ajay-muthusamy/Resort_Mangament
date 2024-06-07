import pool from "../db.js";

export const TotalMemberCount = async (req, res) => {
    try {
        const { rows } = await pool.query("SELECT COUNT(*) FROM ResortBooking_Details");
        res.json({ count: rows[0].count });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
};
