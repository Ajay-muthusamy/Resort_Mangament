import React from "react";
import Home from "./component/Home/Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./component/Home/Bookingform/bookingform";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookResort" element={<BookingForm title="Ocean Villa" />} />
          <Route path="/MountResort" element={<BookingForm title="Mountain Villa Munnar" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
