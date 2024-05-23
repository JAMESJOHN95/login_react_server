require('dotenv').config() // load env file to process.env
const express = require('express') // import express
const cors = require('cors') // import cors 
const router = require('./Routes/router') // import router file
require('./Routes/Controller/DB/Connection') // import the connection with mongo DB


const server = express() // create server

server.use(cors()) // use cors i express server
server.use(express.json()) // Middleware to convert json to js
server.use (router)

const PORT = 3000 || process.env.PORT // setup port where we need to use

server.listen (PORT,()=>{
    console.log(`Server Started at Port ${PORT}`); // listen the server
})  
server.get('/',(req,res)=>{
    res.status(200).send(`<h4> Server started and waiting for client request <h4/>`)
})

