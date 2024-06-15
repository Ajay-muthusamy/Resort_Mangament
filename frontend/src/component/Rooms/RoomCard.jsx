import React, { useState } from 'react';
import BookingModal from './BookingModal';

import '../Rooms/room.css';

const RoomCard = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <div className="container">
        <div className="m-3 p-3">
          <div className="card" style={{ width: "20rem" }}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              {/* <a href="" className="text-decoration-none">View Details</a> */}
              <br />
              <button className='mt-3' id='btn' onClick={handleShow}>
                Book Now {props.rent}
              </button>
            </div>
          </div>
        </div>
      </div>

      <BookingModal
        show={showModal}
        handleClose={handleClose}
        name={props.name}
        rent={props.rent}
      />
    </div>
  );
};

export default RoomCard;
