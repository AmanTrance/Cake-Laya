import express from 'express';
import mongoose from 'mongoose';
import SignupRouter from './routes/Signup.js';
import LoginRouter from './routes/Login.js';
import { config } from 'dotenv';
config();
const app = express();
const DB_URI = process.env.MONGO_URI !== undefined ? process.env.MONGO_URI : "amanfreecs";
mongoose.connect(DB_URI).then(() => {
    console.log("Database Connected");
}).catch((err) => {
    console.error(err);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', SignupRouter, LoginRouter);
app.listen(8000, () => {
    console.log("Server up and running");
});
