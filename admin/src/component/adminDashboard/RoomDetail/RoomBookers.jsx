import React from "react";
import { useEffect, useState } from "react";

const RoomBookers = () => {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:3000/RoomBooker/Detail");
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchdata();
  }, []);

  return (
    <div className="d-flex justify-content-center align-item-center pe-5">
      <div className="container">
        <h3 className="text-center pt-5">Room Booking Details</h3>
        <div className="table-responsive pt-5">
          <table className="table">
            <thead>
              <tr className="text-center">
                <th scope="col">PersonName</th>
                <th scope="col">Phone</th>
                <th scope="col">Room Name</th>
                <th scope="col">Rent</th>
                <th scope="col">Booking date</th>
              </tr>
            </thead>
            <tbody>
              {userdata.map((dat, index) => (
                <tr key={index}>
                  <td>{dat.personname}</td>
                  <td>{dat.phone}</td>
                  <td>{dat.roomname}</td>
                  <td>{dat.rent}</td>
                  <td>{dat.bookingdate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RoomBookers;
