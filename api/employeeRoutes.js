import express from 'express';
import mongoose from 'mongoose';
import {employeeModel} from './employeeModel.js';

const router = express.Router();

router.post('/add', async (req, res) => {

    const {firstName, lastName, age} = req.body;

    const employee = await employeeModel.findOne({firstName, lastName, age});

    if(employee) {
        console.log('Employee has already registered!');
    }

    const newEmployee = new employeeModel({firstName, lastName,age});

    await newEmployee.save();

   res.json({message: 'Employee Has been Registered!'});

});

router.get('/', async(req, res) => {

    try {
        const response = await employeeModel.find({});
        res.json(response);
    }catch(err){
        console.error(err);
    }

});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
  
    try {
      const updatedEmployee = await employeeModel.findByIdAndUpdate(
        id,
        { firstName, lastName, age },
        { new: true }
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ error: 'Employee not found.' });
      }
  
      res.json({ message: 'Employee updated successfully.', employee: updatedEmployee });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: 'An error occurred while updating the employee.' });
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
  

export {router as employeeRouter}