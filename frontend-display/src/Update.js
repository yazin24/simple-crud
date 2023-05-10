import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const [employeeData, setEmployeeData] = useState({
    firstName: '',
    lastName: '',
    age: ''
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/employee/${id}`);
        setEmployeeData(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchEmployeeData();
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle the form submission logic for updating the employee
  };

  return (
    <div className='form'>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input type='text' value={employeeData.firstName} onChange={(event) => setEmployeeData({ ...employeeData, firstName: event.target.value })} />
        <label>Last Name</label>
        <input type='text' value={employeeData.lastName} onChange={(event) => setEmployeeData({ ...employeeData, lastName: event.target.value })} />
        <label>Age</label>
        <input type='number' className='age' value={employeeData.age} onChange={(event) => setEmployeeData({ ...employeeData, age: event.target.value })} />
        <button type='submit' className='add'>Update</button>
      </form>
    </div>
  );
};

export default Update;