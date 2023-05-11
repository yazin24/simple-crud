import React,{useState, useEffect} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const Home = () => {

  // const [firstName, setFirstname] = useState('');
  // const [lastName, setLastName] = useState('');
  // const [age, setAge] = useState('');
  const [data, setData] = useState([]);
  

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:9000/employee/')
      setData(response.data);
    }catch(err) {
      console.error(err);

    }
  };
  fetchData();

},[]);

const navigate = useNavigate();

const addPage = () => {
  navigate('/add')
}


const deleteEmployee = async (id) => {
    try {
       await axios.delete(`http://localhost:9000/employee/${id}`);
      alert('Employee has been deleted!')
      window.location.reload();
      navigate('/')
    }catch(err) {
      console.error(err)
    }
}

  return (
    <div>
      <button className='addButton' onClick={addPage}>Add</button>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key = {item.id}>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.age}</td>
            <td><button className='actionButtonUpdate'>Update</button><button className='actionButtonDelete' onClick={() => deleteEmployee(item._id)}>Delete</button></td>
          </tr>
          ))}
          
        </tbody>
      </table>
    </div>
  )
}

export default Home