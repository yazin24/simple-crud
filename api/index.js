import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import {employeeRoutes} from './employeeRoutes.js';

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

app.listen(process.env.PORT, () => {
    console.log(`Listening on PORT ${process.env.PORT}`);
});

//MYSQL CONNECTION

const db = mysql.createConnection({
  user: 'root',
  host: 'localhost',
  password: 'root',
  database: 'employees',
  
});

db.connect((err) => {
  if (err) {
      console.error('Error connecting to the database', err);
      return;
  }
  console.log('Connected to the database!')
})


mongoose.connect(process.env.DBCONNECT)
  .then(() => {
    console.log('Connection to the Database has been done successfully!')
  })
  .catch((err) => {
    console.error(err);
  });

  const employeeRouter = employeeRoutes(db);
  app.use('/employee',employeeRouter);