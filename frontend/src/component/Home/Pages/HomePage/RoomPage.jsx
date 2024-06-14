import React from 'react'
import Room from '../../../Rooms/room'
import RoomCard from '../../../Rooms/RoomCard'

const RoomPage = () => {
  return (
    <div>
      <Room />
      <div className='container d-flex flex-wrap justify-content-center align-item-center'>
      <RoomCard image="https://www.hilton.com/im/en/MAAHIHI/3192126/maahihi-king-room-510.tif?impolicy=crop&cw=5616&ch=3192&gravity=NorthWest&xposition=0&yposition=268&rw=760&rh=432" rent="$35000" name="King Executive Suite" />

      <RoomCard image="https://www.hilton.com/im/en/MAAHIHI/3192086/maahihi-twin-room-514.tif?impolicy=crop&cw=5616&ch=3192&gravity=NorthWest&xposition=0&yposition=268&rw=760&rh=432" 
      rent="$45000" name="King Junior Suite" />

      <RoomCard image = "https://www.hilton.com/im/en/MAAHIHI/4795870/maahihi-king-room-510.jpg?impolicy=crop&cw=2273&ch=1292&gravity=NorthWest&xposition=0&yposition=108&rw=760&rh=432" 
      rent = "$65000" name="King Hilton Guestroom" />  

      <RoomCard image="https://www.hilton.com/im/en/MAAHIHI/4797144/hilton-king-deluxe-room.jpg?impolicy=crop&cw=3000&ch=1705&gravity=NorthWest&xposition=0&yposition=147&rw=760&rh=432"
      rent="$55000" name="2 Twin Hilton Guestroom" />

      <RoomCard image="https://www.hilton.com/im/en/MAAHIHI/3213338/hilton-chennai-guindy-king-junior-suite-708413.jpg?impolicy=crop&cw=4517&ch=2567&gravity=NorthWest&xposition=0&yposition=216&rw=760&rh=432"
      rent="$32000" name="King Hilton Executive Lounge" />

      <RoomCard image="https://www.hilton.com/im/en/MAAHIHI/4798127/hilton-chennai-juinior-suite-living-room-low-res.jpg?impolicy=crop&cw=4000&ch=2273&gravity=NorthWest&xposition=0&yposition=198&rw=760&rh=432" 
      rent = "$46000" name="King Hilton Deluxe Room" />
      </div>  
    </div>
  )
}

export default RoomPage
