const express =require("express");
const multer=require('multer')
const path=require('path')
const app= express();
const bodyParser=require('body-parser')
const cors=require("cors");
const PORT=process.env.PORT|| 5050;
const connection=mongoose.connection;
connection.once("open",()=>{
    console.log("it connected successfully");
})
app.listen(process.env.PORT || PORT,()=>{
    console.log("server running on port 5050")
})

//app.listen( PORT,()=>{ console.log("server running on port 5050")})


