const express =require("express");
const app= express();
const PORT=process.env.PORT|| 5050;
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/Images',express.static('./Images'));

app.get("/",(req,res)=>{
    console.log("here")
    console.log(app.use(express.static(path.join(__dirname,'./Images'))))
    res.send("helphhjg")
})
app.listen( PORT,()=>{
    console.log("server running on port 5050")
})


