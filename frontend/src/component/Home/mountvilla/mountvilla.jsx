import React, { useEffect, useState } from "react";
import mountvillaimage from "../../../assets/mountvilla.jpg";

import { Outlet, Link } from "react-router-dom";
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
import { MdOutlineEventAvailable } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";

import  Axios  from "axios";

const Mountvilla = () => {
  const[mountain,setmountain] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(()=>{
    const fetchdata = async()=>{
      try 
      {
        const result = await Axios.get("http://localhost:3000/mountainvilla/detail");
        setmountain(result.data);
      } catch (error)
       {
        console.log('Error in Display the Mountainvalla Details');
      }
    };
    fetchdata();
  },[])

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
          {mountain.map((da, index) => (
            <div key={index}>
              <p>
                {da.available ? (
                  <span className="available">
                    <MdOutlineEventAvailable /> Available
                  </span>
                ) : (
                  <span className="notavailable">
                    <CgUnavailable /> Booked
                  </span>
                )}
              </p>
            </div>
          ))}
          <button
            type="button"
            className="btn btn-outline-primary me-4"
            onClick={handleShow}
          >
            View Details
          </button>
          <button type="button" className="btn btn-success">
            <Link to="/MountResort"   className="text-decoration-none text-white">Book Now</Link>
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
        {mountain.map((data, index) => (
          <div key={index}>
          <p>
            <IoLocationSharp />{data.location}
          </p>
          <bold>
            <p>
              <FaCity /> {data.accommodation}
            </p>
          </bold>
          <p>
            <MdOutlineReduceCapacity />{data.capacity}
          </p>
          <p>
            <MdLunchDining />{data.dining}
          </p>
          <p>
            <MdOutlineFamilyRestroom /> {data.family}
          </p>
          <p>
            <FcServices /> {data.service}
          </p>
          <ul>
            <li>
              Day rates for a standard room can range from approximately{" "}
              <mark><MdBedroomParent /> {data.rent}</mark> or more per person per day.
            </li>
          </ul>
          <h3>Note:</h3>
          <p className="p-5">
            "50% refund available for cancellations made after the 5-day booking
            period."
          </p>
          <p>
            {data.note}
          </p>
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

export default Mountvilla;
