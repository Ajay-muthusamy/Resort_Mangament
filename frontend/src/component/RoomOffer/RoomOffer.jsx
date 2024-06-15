import React, { useEffect, useState } from 'react';
import '../RoomOffer/RoomOffer.css';

const RoomOffer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/Room/Offer");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  return (
    <div className='body p-5 d-flex flex-wrap justify-content-center align-item-center gap-5'>
      {data.map((room, index) => (
        <div key={index} className="col-md-3 mb-4">
          <div className="card text-center">
            <div className="card-body">
              <div className="container ratebox">
                <h1 className="card-title fw-bold">{room.rent}</h1>
                <p className="card-text">per day</p>
              </div>
              <h1 className="card-text mt-3">{room.type}</h1>
              <p className="card-text">Offer: {room.offer}</p>
              <h4>Note: {room.note}</h4>
            </div>
            <button className='btn btn-primary m-4'>Get Started</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomOffer;
