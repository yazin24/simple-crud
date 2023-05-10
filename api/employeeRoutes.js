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

})

export {router as employeeRouter}