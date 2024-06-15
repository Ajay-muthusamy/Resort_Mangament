import React from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./component/Home/Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./component/Home/Bookingform/bookingform";
import Footer from "./component/Footer/footer";
import RoomPage from "./component/Home/Pages/HomePage/RoomPage";
import Login from "./component/Login/Login";
import RoomOffer from "./component/RoomOffer/RoomOffer";

const App = () => {
  return (
    
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/BookResort" element={<BookingForm title="Ocean Villa Maladives" />} />
          <Route path="/MountResort" element={<BookingForm title="Mountain Villa Munnar" />} />
          <Route path="/LuxBookResort" element={<BookingForm title="Luxary Resort Coorg" />} />
          <Route path="/room" element={<RoomPage />} />
          <Route path="/RoomOffer" element={<RoomOffer />} />
        </Routes>
        <Footer />
        </div>
        <ToastContainer />
      </BrowserRouter>
    
  );
};

export default App;
