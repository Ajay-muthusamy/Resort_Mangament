import React, { useState } from 'react';
import axios from 'axios';

const ResortUpdate = () => {
  const [inputValue, setInputValue] = useState('');
  const [dropdown1Value, setDropdown1Value] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
        console.log(inputValue,dropdown1Value);
      const response = await axios.post('http://localhost:3000/Resort/Update', {
        input: inputValue,
        dropdown1: dropdown1Value,
      });
  
      console.log(response.data); 
    } catch (error) {
      console.error('Error updating resort:', error);
    }
  };
  

  return (
    <div className="container m-5">
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
            <h5>Resort Updates</h5>
          <label htmlFor="input">Rent</label>
          <input
            type="text"
            className="form-control"
            id="input"
            placeholder="Enter Rent"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dropdown1">Dropdown 1</label>
          <select
            className="form-control"
            id="dropdown1"
            value={dropdown1Value}
            onChange={(e) => setDropdown1Value(e.target.value)}
          >
            <option value="">Select Resort</option>
            <option value="Ocean Villa Maladives">Ocean Villa Maladives</option>
            <option value="Mountain Villa Munnar">Mountain Villa Munnar</option>
            <option value="Luxary Resort Coorg">Luxary Resort Coorg</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary mt-3">Update</button>
      </form>
    </div>
    </div>
  );
};

export default ResortUpdate;
