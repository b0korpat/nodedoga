import express from 'express';
import path from 'path';
const Indexrouter = express.Router();

Indexrouter.use("/nodejs",(req,res) =>{
    res.send('Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.')});

export default Indexrouter;