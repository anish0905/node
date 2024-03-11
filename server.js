const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT||5000;

app.get("/api/contacts",(req,resp)=>{
    resp.json({message:"get all contact"})
})

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
});