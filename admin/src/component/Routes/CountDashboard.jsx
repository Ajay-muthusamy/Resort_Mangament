import React from 'react'
import TotalMember from '../adminDashboard/DataCount/TotalMember'
import Register from '../adminDashboard/DataCount/Register'
import DailyVisitor from '../adminDashboard/DataCount/DailyVisitor'
const CountDashboard = () => {
  return (
    <div className='container d-flex justify-content-center mt-5 gap-4'>
      <TotalMember />,
      <Register />
      <DailyVisitor />
    </div>
  )
}

export default CountDashboard
