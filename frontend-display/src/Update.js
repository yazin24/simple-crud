import React from 'react'

const Update = () => {
  return (
    <div className='form'>
    <form >
    <label>Fist Name</label>
    <input type='text'/>
    <label>Last Name</label>
    <input type='text'/>
    <label>Age</label>
    <input type='number' className='age'/>
    <button type='submit' className='add'>Add</button>
    </form>
  </div>
  )
}

export default Update