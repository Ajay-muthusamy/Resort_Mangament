import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../villa1/oceanvilla.css";
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
import { MdOutlineEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";

const OceanVilla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://localhost:3000/oceanvilla/detail"
        );
        setData(response.data);
      } catch (error) {
        console.log("Error in displaying data from oceanvilla table");
      }
    };

    fetchData();
  }, []);
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
          {data.map((dat1, index) => (
            <p key={index}>
              {dat1.available ? (
                <span className="available">
                  <MdOutlineEventAvailable /> Available
                </span>
              ) : (
                <span className="notavailable">
                  <CgUnavailable /> Booked
                </span>
              )}
            </p>
          ))}

          <button
            type="button"
            className="btn btn-outline-primary me-4"
            onClick={handleShow}
          >
            View Details
          </button>
          <button type="button" className="btn btn-success " >
            <Link to="/BookResort" className="text-decoration-none text-white">
              Book Now
            </Link>
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Ocean Villa</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          {data.map((response, index) => (
            <div key={index}>
              <p>
                <IoLocationSharp /> {response.location}
              </p>
              <p>
                <FaCity /> <strong>Accommodation:</strong>
              </p>
              <ul>
                <li>{response.accommodation}</li>
              </ul>
              <p>
                <MdOutlineReduceCapacity /> <strong>Capacity:</strong>
              </p>
              <ul>
                <li>{response.capacity}</li>
              </ul>
              <p>
                <MdLunchDining /> <strong>Dining:</strong>
              </p>
              <ul>
                <li>{response.dining}</li>
              </ul>
              <p>
                <MdOutlineFamilyRestroom /> <strong>Family:</strong>
              </p>
              <ul>
                <li>{response.family}</li>
                {/* <li>{response.}</li> */}
              </ul>
              <p>
                <FcServices /> <strong>Services:</strong>
              </p>
              <ul>
                <li>{response.service}</li>
              </ul>
              <p>
                <MdBedroomParent /> <strong>Rent:</strong>
              </p>
              <ul>
                <li>
                  Day rates for a standard room can range from approximately{" "}
                  <mark style={{ backgroundColor: "red", color: "white" }}>
                    {response.rent} INR
                  </mark>
                </li>
              </ul>
              <h3>Note:</h3>
              <h6>
                Certainly! Here's a condensed version:{" "}
                <span className="">
                  "Free cancellation is available within 5 days of booking.
                  After this period, a cancellation fee may apply."
                </span>
              </h6>
              <p className="p-5">{response.note}</p>
              <p>
                You're welcome! If you have any more questions or need further
                assistance, feel free to reach out. I'm here to help!
              </p>
            </div>
          ))}
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
