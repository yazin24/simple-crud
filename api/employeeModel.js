import mongoose from 'mongoose';


const employeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    }
});

export const employeeModel = mongoose.model('employees', employeeSchema);