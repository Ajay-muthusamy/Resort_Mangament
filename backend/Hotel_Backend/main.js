import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pool from './db.js';
import { oceanvilla } from './ResortDetails.js';
import { MountainVilla } from './ResortDetails.js';
import { isBooked } from './ResortDetails.js';
import { TotalMemberCount } from './Admin_DB/DataCount.js';
import { oceanvillaDetail } from './Admin_DB/userResortDetails/UserResorts.js';
import { PDFGen } from './Admin_DB/PDF/gPdf.js';
import { RoomBookerDetail } from './Admin_DB/userResortDetails/UserResorts.js';
import { RoomOffer } from './ResortDetails.js';
import { ResortUpdates } from './Admin_DB/userResortDetails/UserResorts.js';
import { OotyResort } from './ResortDetails.js';

const app = express();
const port = 1212;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())

pool.connect((err) => {
  if (err) {
    console.log("Error connecting to PostgreSQL:", err);
  } else {
    pool.query(
      `CREATE TABLE IF NOT EXISTS ResortBooking_Details(
        Resort VARCHAR(225),
        FirstName VARCHAR(225),
        LastName VARCHAR(225),
        Address VARCHAR(225),
        Additional_Add VARCHAR(225),
        City VARCHAR(225),
        State VARCHAR(225),
        PinCode INT,
        Phone_No VARCHAR(20), 
        Email VARCHAR(225),
        Check_in_Date VARCHAR(225),
        Check_in_Time VARCHAR(225),
        Check_out_Date VARCHAR(225),
        Check_out_Time VARCHAR(225),
        Room_Type VARCHAR(225),
        Child INT,
        Adult INT,
        Aged_People INT,
        booked BOOLEAN DEFAULT FALSE
      )`,
      (err, result) => {
        if (err) {
          console.log("Error creating table:", err);
        } else {
          console.log("Table created successfully");
        }
      }
    );
  }
});

app.post("/User/BookingDetails", async (req, res) => {
  const {
    Resort,
   firstname ,
   lastname ,
   address1 ,
   address2 ,
   city ,
   state ,
   pincode ,
   phonenumber ,
   email ,
   checkindate ,
   checkintime ,
   checkoutdate ,
   checkouttime ,
   roomtype ,
   child ,
   adult ,aged } = req.body;

  try {
    await pool.query(
      "INSERT INTO ResortBooking_Details(Resort,FirstName, LastName, Address, Additional_Add, City, State, PinCode, Phone_No, Email, Check_in_Date, Check_in_Time, Check_out_Date, Check_out_Time, Room_Type, Child, Adult, Aged_People,booked) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17,$18,$19)",
      [Resort,firstname, lastname, address1, address2, city, state, pincode, phonenumber, email, checkindate, checkintime, checkoutdate, checkouttime, roomtype, child, adult, aged,'False']
    );
    res.send("Successfully Inserted!!");
  } catch (error) {
    console.error("Error:", error);
    res.send("Error in Inserting Data!!");
  }
});

// app.post("/Room",(req,res)=>{
//   const 
// })
app.post('/api/book-room', async (req, res) => {
  const { personName, phone, RoomName, Rent } = req.body;

  try {
    const query = `
      INSERT INTO bookings (personName, phone, roomName, rent)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const values = [personName, phone, RoomName, Rent];

    const result = await pool.query(query, values);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting booking:', error);
    res.status(500).json({ error: 'Internal server error' }); 
  }
});
app.post('/api/login', async (req, res) => {
  const { name,email } = req.body;
  try {
    const query = `
      INSERT INTO Login (name, email)
      VALUES ($1, $2)
      RETURNING *;
    `;
    const values = [name,email];
    const result = await pool.query(query, values);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Error inserting booking:', error);
    res.status(500).json({ error: 'Internal server error' }); 
  }
});
// fetch data and display in Frontend
app.get('/oceanvilla/detail',oceanvilla)
app.get('/Resort/isBooked',isBooked)
app.get('/data/count',TotalMemberCount);
app.get('/ResortUser/Details',oceanvillaDetail);
app.get('/generate-pdf/:resort', PDFGen);
app.get('/mountainvilla/detail', MountainVilla);
app.get('/RoomBooker/Detail', RoomBookerDetail);
app.get('/Room/Offer',RoomOffer);
app.post('/Resort/Update',ResortUpdates);
app.get('/OotyResort',OotyResort);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
