import express from 'express';
const Greetingrouter = express.Router();

Greetingrouter.use("/greeting",(req,res) =>{
    res.send('Hello,  Kordás Patrik')});


export default Greetingrouter;