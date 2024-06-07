import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import pool from './db.js';
import { oceanvilla } from './ResortDetails.js';
import { isBooked } from './ResortDetails.js';
import { TotalMemberCount } from './Admin_DB/DataCount.js';
import { oceanvillaDetail } from './Admin_DB/userResortDetails/UserResorts.js';

const app = express();
const port = 3000;

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
// fetch data and display in Frontend
app.get('/oceanvilla/detail',oceanvilla)
app.get('/Resort/isBooked',isBooked)
app.get('/data/count',TotalMemberCount);
app.get('/ResortUser/Details',oceanvillaDetail);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});