const express = require("express");
require('dotenv').config();
const connectDB = require('./confing/connectDB')


const app = express() 
//connet DB
connectDB()



//create route
app.use(express.json());
app.use('/users',require('./routes/Users'));



const PORT = process.env.PORT;
app.listen(PORT,(err)=> err? console.error(err):console.log('server is runing'))