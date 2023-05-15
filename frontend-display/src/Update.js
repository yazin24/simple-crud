import React, { useState } from 'react';
import axios from 'axios';

const Update = ({ employee }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const updatedEmployee = {
      firstName,
      lastName,
      age
    };

    try {
      await axios.put(`http://localhost:9000/employee/${employee._id}`, updatedEmployee);
      alert('Employee has been updated successfully!');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('Failed to update employee.');
    }
  };

  return (
    <div className='form'>
      <form onSubmit={handleFormSubmit}>
        <input type='text' placeholder='First Name' value={firstName} onChange={handleFirstNameChange} required/>
        <br/>
        <input type='text' placeholder='Last Name' value={lastName} onChange={handleLastNameChange} required/>
        <br/>
        <input type='number' placeholder='Age' className='age' value={age} onChange={handleAgeChange} required/>
        
        <button type='submit' className='add'>
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;