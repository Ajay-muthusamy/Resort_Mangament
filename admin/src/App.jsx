import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/adminDashboard/sidebar';
import CountDashboard from './component/Routes/CountDashboard';
import Userdetails from './component/adminDashboard/ResortBookingDetail.jsx/userdetails';
import RoomBookers from './component/adminDashboard/RoomDetail/RoomBookers';
import ResortUpdate from './component/updates/ResortUpdate';

function App() {
  return (
    <div className='d-flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/Count" element={<CountDashboard />} />
          <Route path="/ResortBookingDetails" element={<Userdetails />} />
          <Route path="/RoomBooker" element={<RoomBookers />} />
          <Route path="/ResortUpdate" element={<ResortUpdate/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
