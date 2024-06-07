import PDFDocument from 'pdfkit';
import pool from '../../db.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES6
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const PDFGen = async (req, res) => {
  const { resort } = req.params;

  try {
    const result = await pool.query('SELECT * FROM resortbooking_details WHERE resort = $1', [resort]);
    const data = result.rows[0];

    if (!data) {
      return res.status(404).send('Row not found');
    }

    // Create a PDF document
    const doc = new PDFDocument();
    const filename = `output_${resort}.pdf`;
    const filePath = path.join(__dirname, filename);

    // Pipe the PDF into a writable stream
    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);
    
    doc.fontSize(20).text(`${resort} Booking Bill`, { align: 'center' });
    doc.moveDown();
    doc.fontSize(12);
    
    doc.text(`Resort: ${data.resort}`);
    doc.moveDown();
    doc.text(`Customer Name: ${data.firstname} ${data.lastname}`);
    doc.moveDown();
    doc.text(`Address: ${data.address}, ${data.additional_add}, ${data.city}, ${data.state}, ${data.pincode}`);
    doc.moveDown();
    doc.text(`Phone No: ${data.phone_no}`);
    doc.moveDown();
    doc.text(`Email: ${data.email}`);
    doc.moveDown();
    doc.text(`Check-in Date: ${data.check_in_date}`);
    doc.moveDown();
    doc.text(`Check-in Time: ${data.check_in_time}`);
    doc.moveDown();
    doc.text(`Check-out Date: ${data.check_out_date}`);
    doc.moveDown();
    doc.text(`Check-out Time: ${data.check_out_time}`);
    doc.moveDown();
    doc.text(`Room Type: ${data.room_type}`);
    doc.moveDown();
    doc.text(`Number of Child: ${data.child}`);
    doc.moveDown();
    doc.text(`Number of Adult: ${data.adult}`);
    doc.moveDown();
    doc.text(`Number of Aged People: ${data.aged_people}`);
    doc.moveDown();
    doc.moveDown();
    doc.fontSize(14).text('Billing Summary', { underline: true });
    doc.moveDown();
    doc.fontSize(12);
    doc.text(`Payment Status: Paid`);
    doc.text(`Payment Method: Credit Card`);
    doc.text(`Transaction ID: 1223465723`);
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.moveDown();
    doc.text(`Manager's Signature`);
    doc.moveDown();
    doc.text(`Thank you for choosing our resort. Have a great stay!`);
    doc.end();


    stream.on('finish', () => {
      res.download(filePath, (err) => {
        if (err) {
          console.error('Error sending file:', err);
          res.status(500).send('Error generating PDF');
        } else {
          // Optionally, delete the file after sending it
          fs.unlinkSync(filePath);
        }
      });
    });
  } catch (err) {
    console.error('Database query error:', err);
    res.status(500).send('Error fetching data');
  }
};
