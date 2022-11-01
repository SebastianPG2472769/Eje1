const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();

const app = express();

const PORT = process.env.PORT;


app.get("/", (req, res)=> {
    res.send("hola mundo");
})

app.get("/jehins", (req, res)=> {
    res.send("hola Jehins");
})
app.listen(PORT, ()=>{
    console.log(`Esta conectado en la URL http://localhost:${PORT}`.blue)
})