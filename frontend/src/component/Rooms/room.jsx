import React from "react";
import { FaBuilding } from "react-icons/fa6";
import "../Rooms/room.css";
const room = () => {
  return (
    <div>
      <img
        src="https://www.paradisefoodcourt.in/images/logos/Paradise-Logo3.png"
        className="p-3"
        alt=""
        style={{ width: "200px" }}
      />
      <h5 className="bg-warning text-center p-3 mt-1">Goods and Service Tax</h5>
      <h6 className="text-center mt-3">
        <span style={{ fontSize: "10px" }}>Your Stay </span>
        <FaBuilding /> Paradise,Chennai
      </h6>
      <hr />
      <div className="container">
        <div className="room-header">
          <div className="text-header d-flex flex-wrap">
            <div>
              <h3>Select a Room</h3>
              <p>Your stay with Hilton Hotels & Resorts includes</p>
              <hr />
            </div>
            <div className="image-container d-flex flex-wrap">
              <img
                src="https://www.hilton.com/im/en/MAAHIHI/3205849/hilton-chennai-vintage-cabanas-low-res.jpg?impolicy=crop&cw=4000&ch=2109&gravity=NorthWest&xposition=0&yposition=590&rw=1100&rh=580"
                alt=""
                className="rounded"
                style={{ width: "300px" }}
              />
            </div>
          </div>
          <div>
            <ul className="list-unstyled d-flex flex-wrap gap-3">
              <li>✓ Free parking</li>
              <li> ✓ On-site restaurant</li>
              <li>✓ Outdoor pool</li>
              <li>✓ Fitness center</li>
              <li> ✓ Business center</li>
            </ul>
            <hr />
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default room;
