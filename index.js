require("dotenv").config(); 
const express = require("express"); 
//const { mongoose } = require('mongoose');
const cors = require("cors")

const studentRoutes=require("./routes/students.routes");

const db = require("./db/connect");

const app = express();

db();

app.get('/', (req, res) => {
    res.send('Welcome to my MySchool!');
})

//middleware to convert incoming data into jason format
app.use(express.json());

app.use(cors());

//routes
app.use('/api',studentRoutes); 

const PORT = process.env.PORT || 4000;                                             


app.listen(PORT,()=>{                                                              
    console.log(`App is running on port ${PORT}`);
})