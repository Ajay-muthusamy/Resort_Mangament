import React, { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import luxResortImage from '../../../assets/luxResort.jpg.jpg';
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

const LuxaryResort = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/OotyResort');
        const result = await response.json();
        console.log(result); 
        if (result && result.data) {
          setData(result.data);
        } else {
          console.log('Invalid response structure:', result);
        }
      } catch (error) {
        console.log('error', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="container d-flex justify-content-center pt-5 mt-3 gap-5">
        <img
          src={luxResortImage}
          alt=""
          style={{ width: "30%" }}
          className="rounded img-fluid me-3"
        />
        <div className="content w-50">
          <h5>
            Welcome to Paradise, where luxury meets nature in Coorg. Enjoy our luxury accommodation. Families can relax while kids enjoy our facilities. Plan your event or wedding with us. Book your stay now!
          </h5>
          <p>
            Paradise in Coorg offers unmatched luxury amidst breathtaking natural surroundings. Book your stay now for an unforgettable experience!
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
            <Link to="/LuxBookResort" className="text-decoration-none text-white">Book Now</Link>
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Ocean Villa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          {data && data.length > 0 ? (
            data.map((dat, index) => (
              <div key={index}>
                <p>
                  <IoLocationSharp /> {dat.location}
                </p>
                <p>
                  <FaCity /> {dat.accommodation}
                </p>
                <p>
                  <MdOutlineReduceCapacity /> {dat.capacity}
                </p>
                <p>
                  <MdLunchDining /> {dat.dining}
                </p>
                <p>
                  <MdLocalActivity /> Activities:
                </p>
                <ul>
                  <li>Water sports, excursions, wellness activities.</li>
                  <li>Indoor options like billiards and board games.</li>
                </ul>
                <p>
                  <MdOutlineFamilyRestroom /> {dat.family}
                </p>
                <ul>
                  <li>Kids' clubs, family-friendly amenities, excursions.</li>
                </ul>
                <p>
                  <FcServices /> {dat.service}
                </p>
                <ul>
                  <li>24-hour concierge, personalized services, airport transfers.</li>
                </ul>
                <p>
                  <MdBedroomParent /> Rent:
                </p>
                <ul>
                  <li>
                    Day rates for a standard room can range from approximately{" "}
                    <mark>{dat.rent} INR</mark> or more per person per day.
                  </li>
                  <li>
                    Day rates for overwater bungalows or beach villas can start from
                    approximately 35,000 INR to 105,000 INR or higher per person per
                    day.
                  </li>
                </ul>
                <h3>Note:</h3>
                <h6>
                  <span className="mark">
                    {dat.note}
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
              </div>
            ))
          ) : (
            <p>No data available</p>
          )}
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

export default LuxaryResort;
