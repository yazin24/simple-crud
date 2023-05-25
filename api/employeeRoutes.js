import express from 'express';
import mongoose from 'mongoose';
import {employeeModel} from './employeeModel.js';


const router = express.Router();

export const employeeRoutes = (db) => {

  router.post('/add', async (req, res) => {

    const {firstName, lastName, age} = req.body;

    db.query('INSERT INTO employees_details (first_name, last_name, age) VALUE (?, ?, ?)', [firstName, lastName, age], (err, result) =>{
      if(err) {
        console.log(err)
      }else{
        res.send('Values inserted!')
      }

    });

});

router.get('/', async(req, res) => {

    db.query('SELECT * FROM employees_details', (err, result) => {
      if(err) {
        console.error(err);
      }else {
        res.json(result)
      }
    })

});

router.put('/:id', async (req, res) => {
  try {
    const employee = await employeeModel.findByIdAndUpdate(
      req.params.id,
      {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age
      },
      { new: true }
    );

    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }

    res.json(employee);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      await employeeModel.findByIdAndDelete(id);
      res.json({ message: 'Employee deleted successfully.' });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while deleting the employee.' });
    }
  });
  
  return router;

}
