import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './component/adminDashboard/sidebar';
import CountDashboard from './component/Routes/CountDashboard';
import Userdetails from './component/adminDashboard/ResortBookingDetail.jsx/userdetails';

function App() {
  return (
    <div className='d-flex'>
      <Router>
        <Sidebar />
        <Routes>
          <Route path="/Count" element={<CountDashboard />} />
          <Route path="/ResortBookingDetails" element={<Userdetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
