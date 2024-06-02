import React, { useState } from "react";
import mountvillaimage from "../../../assets/mountvilla.jpg";
import {
  MdEventAvailable,
  MdLunchDining,
  MdLocalActivity,
  MdOutlineFamilyRestroom,
  MdBedroomParent,
} from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaCity } from "react-icons/fa";
import { MdOutlineReduceCapacity } from "react-icons/md";
import { FcServices,FcCancel  } from "react-icons/fc";
import { Button, Modal } from "react-bootstrap";

const Mountvilla = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container d-flex justify-content-center align-items-center pt-5 mt-5 gap-5">
        
        <div className="contant w-50">
          <h3>
          "Indulge in Serenity: Embrace the Splendor of Mountain Villas in Munnar"
          </h3>
          <p>
          "Experience bliss in our mountain villas nestled amidst Munnar's beauty, featuring a serene swimming pool. Ideal for romantic escapes or family retreats surrounded by lush greenery and cascading waterfalls."
          </p>
          <h6 className="cancel">
            <FcCancel /> Booked upto 5-may-2024
          </h6>
          <button
            type="button"
            className="btn btn-outline-primary me-4"
            onClick={handleShow}
          >
            View Details
          </button>
          <button type="button" className="btn btn-success">
            Book Now
          </button>
          
        </div>
        <img
          src={mountvillaimage}
          alt=""
          style={{ width: "30%" }}
          className="rounded img-fluid me-3"
        />
      </div>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Ocean Villa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <p>
            <IoLocationSharp /> Maldives, Indian Ocean.
          </p>
          <bold>
            <p>
              <FaCity /> Accommodation:
            </p>
          </bold>
          <ul>
            <li>Luxurious overwater bungalows or beach villas.</li>
            <li>
              Modern amenities, some with unique features like glass floors.
            </li>
          </ul>
          <p>
            <MdOutlineReduceCapacity /> Capacity:
          </p>
          <ul>
            <li>The resort can accommodate up to 10 guests at a time.</li>
          </ul>
          <p>
            <MdLunchDining /> Dining:
          </p>
          <ul>
            <li>Multiple restaurants offering diverse cuisines.</li>
            <li>Romantic beach dinners, bars with ocean views.</li>
          </ul>
          <p>
            <MdLocalActivity /> Activities:
          </p>
          <ul>
            <li>Water sports, excursions, wellness activities.</li>
            <li>Indoor options like billiards and board games.</li>
          </ul>
          <p>
            <MdOutlineFamilyRestroom /> Family:
          </p>
          <ul>
            <li>Kids' clubs, family-friendly amenities, excursions.</li>
          </ul>
          <p>
            <FcServices /> Services:
          </p>
          <ul>
            <li>
              24-hour concierge, personalized services, airport transfers.
            </li>
          </ul>
          <p>
            <MdBedroomParent /> Rent:
          </p>
          <ul>
            <li>
              Day rates for a standard room can range from approximately{" "}
              <mark>14,000 INR to 56,000 INR </mark> or more per person per day.
            </li>
            <li>
              Day rates for overwater bungalows or beach villas can start from
              approximately 35,000 INR to 105,000 INR or higher per person per
              day.
            </li>
          </ul>
          <h3>Note:</h3>
          <h6>
            Certainly! Here's a condensed version:{" "}
            <span className="mark">
              "Free cancellation is available within 5 days of booking
            </span>
            . After this period, a cancellation fee may apply."
          </h6>
          <p className="p-5">
            "50% refund available for cancellations made after the 5-day booking
            period."
          </p>
          <p>
            You're welcome! If you have any more questions or need further
            assistance, feel free to reach out. I'm here to help!
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Mountvilla;
