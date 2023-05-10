import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {employeeRouter} from './employeeRoutes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
});


mongoose.connect(process.env.DBCONNECT)
  .then(() => {
    console.log('Connection to the Database has been done successfully!')
  })
  .catch((err) => {
    console.error(err);
  });

  app.use('/employee',employeeRouter);