import express from 'express';
import userRoute from './router/user.route.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()


const app = express();

//middleware

app.use(cors())
app.use(express.json())
//Routes
app.use("/",userRoute)


export default app;