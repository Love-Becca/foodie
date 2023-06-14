import React, { useState } from 'react';
import './component.css'

const BodyMassIndex = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleProceedClick = () => {
    // Perform the desired action when the proceed button is clicked
    // For example, calculate the BMI or trigger a function
    console.log('Weight:', weight);
    console.log('Height:', height);
  };

  return (
    <div className='Bmi-content'>
      <div className='Bmi_weight'>
        <label htmlFor="weight">Weight (kg):</label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={handleWeightChange}
          placeholder='in kilograms'
        />
      </div>

      <div className='Bmi_height'>
        <label htmlFor="height">Height (m²):</label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={handleHeightChange}
          placeholder='in metre square'
        />
      </div>

      <button onClick={handleProceedClick} className='Bmi_button'>Proceed</button>
    </div>
  );
};

export default BodyMassIndex;
