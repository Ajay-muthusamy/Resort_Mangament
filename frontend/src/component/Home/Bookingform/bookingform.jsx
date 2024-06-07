import React, { useState } from "react";
import Axios from 'axios';
import "./booking.css";
import { Outlet, Link } from "react-router-dom";


const BookingForm = ({title}) => {
  const [Resort, setResort] = useState(title);
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [address1, setaddress1] = useState("");
  const [address2, setaddress2] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [pincode, setpincode] = useState("");
  const [phonenumber, setphonenumber] = useState("");
  const [email, setemail] = useState("");
  const [checkindate, setcheckindate] = useState("");
  const [checkintime, setcheckintime] = useState("");
  const [checkoutdate, setcheckoutdate] = useState("");
  const [checkouttime, setcheckouttime] = useState("");
  const [roomtype, setroomtype] = useState("");
  const [child, setchild] = useState("");
  const [adult, setadult] = useState("");
  const [aged, setaged] = useState("");

  const handleResortNameChange = (e) => {
    setResort(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setfirstname(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setlastname(e.target.value);
  };

  const handleAddress1NameChange = (e) => {
    setaddress1(e.target.value);
  };
  const handleAddress2NameChange = (e) => {
    setaddress2(e.target.value);
  };
  const handleCity = (e) => {
    setcity(e.target.value);
  };
  const handleState = (e) => {
    setstate(e.target.value);
  };
  const handlepincode = (e) => {
    setpincode(e.target.value);
  };
  const handlephone = (e) => {
    setphonenumber(e.target.value);
  };
  const handlemail = (e) => {
    setemail(e.target.value);
  };
  const handlecheckindata = (e) => {
    setcheckindate(e.target.value);
  };
  const handlecheckintime = (e) => {
    setcheckintime(e.target.value);
  };
  const handlecheckoutdata = (e) => {
    setcheckoutdate(e.target.value);
  };
  const handlecheckouttime = (e) => {
    setcheckouttime(e.target.value);
  };
  const handleroomtype = (e) => {
    setroomtype(e.target.value);
  };
  const handlechild = (e) => {
    setchild(e.target.value);
  };
  const handleadult = (e) => {
    setadult(e.target.value);
  };
  const handleaged = (e) => {
    setaged(e.target.value);
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await Axios.post('http://localhost:3000/User/BookingDetails',{
        Resort,
        firstname,
        lastname,
        address1,
        address2,
        city,
        state,
        pincode,
        phonenumber,
        email,
        checkindate,
        checkintime,
        checkoutdate,
        checkouttime,
        roomtype,
        child,
        adult,
        aged
      })
      setfirstname("");
      setlastname("");
      setaddress1("");
      setaddress2("");
      setcity("");
      setstate("");
      setpincode("");
      setphonenumber("");
      setemail("");
      setcheckindate("");
      setcheckintime("");
      setcheckoutdate("");
      setcheckouttime("");
      setroomtype("");
      setchild("");
      setadult("");
      setadult("");
      setaged("");

    } catch (error) {
      
    }
    console.log(Resort);
    console.log(firstname);
    console.log(lastname);
    console.log(address1);
    console.log(address2);
    console.log(city);
    console.log(state);
    console.log(pincode);
    console.log(phonenumber);
    console.log(email);
    console.log(checkindate);
    console.log(checkintime);
    console.log(checkoutdate);
    console.log(checkintime);
    console.log(roomtype);
    console.log(child);
    console.log(adult);
    console.log(aged);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center m-4">
      {title}
      </h3>
      <form onSubmit={handleSubmit} className="p-5">
        <div className="d-flex justify-content-center flex-wrap gap-3 forms">
        <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              Resort
            </label>
            <input
              type="text"
              className="form-control"
              id="cutsom-width"
              aria-describedby="firstNameHelp"
              value={Resort}
              onChange={handleResortNameChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName" className="form-label">
              First Name<span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="cutsom-width"
              aria-describedby="firstNameHelp"
              value={firstname}
              onChange={handleFirstNameChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="lastName" className="form-label">
              Last Name<span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="cutsom-width"
              value={lastname}
              onChange={handleLastNameChange}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <div className="form-group mb-3">
            <label htmlFor="address1" className="form-label">
              Address 1 <span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-width"
              id="cutsom-address"
              value={address1}
              onChange={handleAddress1NameChange}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="address2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control custom-width"
              id="cutsom-address"
              value={address2}
              onChange={handleAddress2NameChange}
            />
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <div className="form-group mb-3">
            <label htmlFor="city" className="form-label">
              City <span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-city"
              id="custom-city"
              value={city}
              onChange={handleCity}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="state" className="form-label">
              State<span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-city"
              id="custom-city"
              value={state}
              onChange={handleState}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="pincode" className="form-label">
              Pincode<span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-city"
              id="custom-city"
              value={pincode}
              onChange={handlepincode}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <div className="form-group mb-3">
            <label htmlFor="phone" className="form-label">
              Phone <span className="important">*</span>
            </label>
            <input
              type="text"
              className="form-control custom-phone"
              id="custom-phone"
              value={phonenumber}
              onChange={handlephone}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="email" className="form-label">
              Email Address<span className="important">*</span>
            </label>
            <input
              type="email"
              className="form-control custom-phone"
              id="custom-phone"
              value={email}
              onChange={handlemail}
              required
            />
          </div>
        </div>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <div className="form-group mb-3">
            <label htmlFor="checkinDate" className="form-label">
              Check-in Date<span className="important">*</span>
            </label>
            <input
              type="date"
              className="form-control custom-check"
              id="custom-check"
              value={checkindate}
              onChange={handlecheckindata}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="checkinTime" className="form-label">
              Check-in Time<span className="important">*</span>
            </label>
            <input
              type="time"
              className="form-control custom-check"
              id="custom-check"
              value={checkintime}
              onChange={handlecheckintime}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="checkoutDate" className="form-label">
              Check-out Date<span className="important">*</span>
            </label>
            <input
              type="date"
              className="form-control custom-check"
              id="custom-check"
              value={checkoutdate}
              onChange={handlecheckoutdata}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="checkoutTime" className="form-label">
              Check-out Time<span className="important">*</span>
            </label>
            <input
              type="time"
              className="form-control custom-check"
              id="custom-check"
              value={checkouttime}
              onChange={handlecheckouttime}
              required
            />
          </div>
        </div>
        <div className="d-flex justify-content-center flex-wrap gap-3 mb-3">
          <div className="form-group d-flex gap-3 m-4 type">
            <label className="form-label">
              Type<span className="important">*</span>
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="roomType"
                id="singleRoom"
                value="family"
                checked={roomtype === "family"}
                onChange={handleroomtype}
                required
              />
              <label className="form-check-label" htmlFor="singleRoom">
                Family
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="roomType"
                id="doubleRoom"
                value="couple"
                checked={roomtype === "couple"}
                onChange={handleroomtype}
              />
              <label className="form-check-label" htmlFor="doubleRoom">
                Couples
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="roomType"
                id="suiteRoom"
                value="friendgang"
                checked={roomtype === "friendgang"}
                onChange={handleroomtype}
              />
              <label className="form-check-label" htmlFor="suiteRoom">
                Friend Gang
              </label>
            </div>
          </div>
        </div>
        <div className="container d-flex justify-content-center flex-wrap gap-3 ">
          <div className="form-input ">
            <label for="formFile" class="form-label">
              Submit your id (Aadhar or Driving Lisence)
            </label>
            <input className="form-control" type="file" id="files" />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="checkoutTime" className="form-label">
              Child<span className="important">*</span>
            </label>
            <input
              type="Number"
              className="form-control custom-check"
              id="people"
              value={child}
              onChange={handlechild}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="checkoutTime" className="form-label">
              Adult<span className="important">*</span>
            </label>
            <input
              type="Number"
              className="form-control custom-check"
              id="people"
              value={adult}
              onChange={handleadult}
              required
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="checkoutTime" className="form-label">
              Aged People<span className="important">*</span>
            </label>
            <input
              type="Number"
              className="form-control custom-check"
              id="people"
              required
              value={aged}
              onChange={handleaged}
            />
          </div>
        </div>

        <div className="container d-flex justify-content-center gap-5">
          <button type="submit" className="btn btn-primary ">
            Book
          </button>
          <button type="submit" className="btn btn-dark">
            <Link to="/" className="text-white text-decoration-none">Back</Link>
          </button>
        </div>
      </form>
      <Outlet />
    </div>
  );
};

export default BookingForm;
