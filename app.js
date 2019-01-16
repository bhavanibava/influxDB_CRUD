const express = require('express');
const cors = require("cors");
const app = express();
const task = require('./routes/task');
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use('/task',task);
app.get('/',(req,res)=>{
    console.log('welcome');
    res.send('welcome');
});
module.exports = app;