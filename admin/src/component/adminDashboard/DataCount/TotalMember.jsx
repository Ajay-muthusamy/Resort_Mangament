import React, { useEffect, useState } from "react";

const  TotalMember= () => {
  const[count,setcount]=useState(0);
  useEffect(()=>{
    const FetchTotalMember = async()=>{
      const result = await fetch("http://localhost:3000/data/count");
      const data = await result.json();
      setcount(data.count);
    }
    FetchTotalMember();
  },[])
  return (
    <div className="">
      <div className="card bg-primary" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title text-white">Total Booking</h5>
          <h1 className="text-white">{count}</h1>
        </div>
      </div>
    </div>
  );
};

export default TotalMember;
