const express =require("express");
const app= express();
const PORT=process.env.PORT|| 5050;
app.get('/',(req,res)=>res.send("hellop"))
app.listen(process.env.PORT || PORT,()=>{
    console.log("server running on port 5050")
})

//app.listen( PORT,()=>{ console.log("server running on port 5050")})


