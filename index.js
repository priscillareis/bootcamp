/*Imports*/
import express from 'express';
import mongoose from 'mongoose';

import { studentRouter } from './routes/studentsRouter.js';

const app = express();

const connection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://dbUser:dbUserPassword@cluster0.drx3n.mongodb.net/grades?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (error) {
    console.log('Error to connect');
  }
};

connection();

app.use(express.json());

app.use(studentRouter);

app.listen(3001, () => {
  console.log('API Iniciada');
});
