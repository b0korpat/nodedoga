import express from 'express';
const Expressrouter = express.Router();

Expressrouter.use("/express",(req,res) =>{
    res.send('Az Express egy minimalista webes keretrendszer, amely a Node.js-hez készült.')});

export default Expressrouter;