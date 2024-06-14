import React from "react";
import Home from "./component/Home/Pages/HomePage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BookingForm from "./component/Home/Bookingform/bookingform";
import Footer from "./component/Footer/footer";
import RoomPage from "./component/Home/Pages/HomePage/RoomPage";

const App = () => {
  return (
      <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/BookResort" element={<BookingForm title="Ocean Villa Maladives" />} />
          <Route path="/MountResort" element={<BookingForm title="Mountain Villa Munnar" />} />
          <Route path="/LuxBookResort" element={<BookingForm title="Luxary Resort Coorg" />} />
          <Route path="/room" element={<RoomPage />} />
        </Routes>
        <Footer />
        </div>
      </BrowserRouter>
    
  );
};

export default App;
