import React from 'react'
import Navbar from '../../Navbar/navbar'
import Header from '../../Header/header'
import Oceanvilla from '../../villa1/oceanvilla'
import Mountvilla from '../../mountvilla/mountvilla'
import Bookingform from '../../Bookingform/bookingform'
const Home = () => {
  return (
    <div>
      <Navbar />,
      <Header />,
      <Oceanvilla />,
      <Mountvilla />,
      <Bookingform />
    </div>
  )
}

export default Home