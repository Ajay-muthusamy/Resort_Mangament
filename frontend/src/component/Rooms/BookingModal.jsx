import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Axios from "axios"; 

const BookingModal = ({ show, handleClose, name, rent }) => {
  const [personName, setPersonName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await Axios.post("http://localhost:3000/api/book-room", {
        personName,
        phone,
        RoomName: name,
        Rent: rent
      });
      console.log(result.data);
      handleClose();
    } 
    catch (error) {
      console.error("There was an error booking the room!", error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Book Room</Modal.Title>
      </Modal.Header>
      <form onSubmit={handleSubmit}>
        <Modal.Body>
          <h5>{name}</h5>
          <p>Rent: {rent}</p>
          <label htmlFor="roomType" className="mb-2">
            Room Type
          </label>
          <input type="text" className="form-control mb-2" value={name} readOnly />
          <label htmlFor="personName">Name</label>
          <input
            type="text"
            className="form-control"
            id="personName"
            value={personName}
            onChange={(e) => setPersonName(e.target.value)}
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary">
            Confirm Booking
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default BookingModal;
