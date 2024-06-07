import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [userdata, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/ResortUser/Details"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async (resort) => {
    try {
      const response = await fetch(`http://localhost:3000/generate-pdf/${resort}`);
      if (!response.ok) {
        throw new Error('Failed to generate PDF');
      }
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `output_${resort}.pdf`);
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error downloading PDF:', error);
    }
  };

  return (
    <div className="container">
      <h3 className="text-center pt-5">Resort Booking Details</h3>
      <div className="table-responsive pt-5">
        <table className="table">
          <thead>
            <tr className="text-center">
              <th scope="col">Resort</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Address</th>
              <th scope="col">Add_address</th>
              <th scope="col">City</th>
              <th scope="col">State</th>
              <th scope="col">Pincode</th>
              <th scope="col">Phone No</th>
              <th scope="col">Email</th>
              <th scope="col">Check-in Date</th>
              <th scope="col">Check-in Time</th>
              <th scope="col">Check-out Date</th>
              <th scope="col">Check-out Time</th>
              <th scope="col">Room Type</th>
              <th scope="col">Child</th>
              <th scope="col">Adult</th>
              <th scope="col">Aged People</th>
              <th scope="col">Pdf</th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((user, index) => (
              <tr key={index}>
                <td>{user.resort}</td>
                <td>{user.firstname}</td>
                <td>{user.lastname}</td>
                <td>{user.address}</td>
                <td>{user.add_address}</td>
                <td>{user.city}</td>
                <td>{user.state}</td>
                <td>{user.pincode}</td>
                <td>{user.phone_no}</td>
                <td>{user.email}</td>
                <td>{user.check_in_date}</td>
                <td>{user.check_in_time}</td>
                <td>{user.check_out_date}</td>
                <td>{user.check_out_time}</td>
                <td>{user.room_type}</td>
                <td>{user.child}</td>
                <td>{user.adult}</td>
                <td>{user.aged_people}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleDownload(user.resort)}
                  >
                    PDF
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetails;
