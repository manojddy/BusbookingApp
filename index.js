const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite')
const sqlite3= require('sqlite3')
const {open} = sqlite3;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(cors())
app.use(bodyParser.json())

// sqlite dbconnection
// let db;

// const dbConnection = open({
//     dbPath: __dir.pathname('seatData'),
// })


//mongodb connection
Mongoose.connect(seatData.db);


app.get('/seatData', (req,res)=>{
    res.status(200).json(seatData)
})

//generating seatData
const seatData = seatData(currentSeat => currentSeat.seatNumber === seatNumber);

app.post('/bookSeat', (req,res) => {
    res.status(200).json({msg: 'HURRAY! your ticket booking successfull!!'})
})

app.listen(3001, (req,res) => {
    console.log('server is running at the port 3001');
})