import React, { useState } from "react";

import { Outlet, Link } from "react-router-dom";

import oceanvillaimage from "../../../assets/ocean-villa.jpg";
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
import { FcServices } from "react-icons/fc";
import { Button, Modal } from "react-bootstrap";

const OceanVilla = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container d-flex justify-content-center pt-5 mt-3 gap-5">
        <img
          src={oceanvillaimage}
          alt=""
          style={{ width: "30%" }}
          className="rounded img-fluid me-3"
        />
        <div className="contant w-50">
          <h5>
            Immerse yourself in the crystal-clear waters and <br /> marine life
            of the Maldives at <br />
            our exclusive resort.
          </h5>
          <p>
            "OceanVilla: Luxurious Maldives resort, perched over crystal-clear
            waters. Private infinity pools, personalized service. Perfect for
            romance or family. Discover paradise."
          </p>
          <h6 className="avail">
            <MdEventAvailable /> Available
          </h6>
          <button
            type="button"
            className="btn btn-outline-primary me-4"
            onClick={handleShow}
          >
            View Details
          </button>
          <button type="button" className="btn btn-success">
            <Link to="/BookResort" className="text-decoration-none text-white">Book Now</Link>
          </button>
        </div>
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
      <Outlet />
    </div>
  );
};

export default OceanVilla;
