import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const navigate = useNavigate();

  const onSubmit = async (event) => {

    event.preventDefault();

    try{
      await axios.post('http://localhost:9000/employee/add', {firstName, lastName, age});
      alert('Employee Has Been Added Successfully!')
      navigate('/');
    }catch(err) {
      console.error(err)
    };
  
  };

  return (
    <div className='form'>
      <form onSubmit={onSubmit}>
      <label>Fist Name</label>
      <input type='text'onChange={(event) => setFirstName(event.target.value)}/>
      <label>Last Name</label>
      <input type='text' onChange={(event) => setLastName(event.target.value)}/>
      <label>Age</label>
      <input type='number' className='age' onChange={(event) => setAge(event.target.value)}/>
      <button type='submit' className='add'>Add</button>
      </form>
    </div>
  )
}

export default Add