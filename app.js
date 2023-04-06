const express =require("express");
const multer=require('multer')
const path=require('path')
const app= express();
const bodyParser=require('body-parser')
const cors=require("cors");
const PORT=process.env.PORT|| 5050;
const bcrypt =require('bcryptjs')
const session =require("express-session");
const cookieParser = require("cookie-parser")
const saltRounds =10
const mysql=require('mysql');
require("dotenv").config()
//const { request } = require("http");
let db
if (process.env.CLEARDB_DATABASE_URL){db=mysql.createConnection(process.env.CLEARDB_DATABASE_URL);}else{
//const 
db=mysql.createConnection({
  //  host:process.env.DB_Host,
  //  user:process.env.DB_User,
   // password:process.env.DB_Password,
   // database:process.env.DB_Name
  // mysql://b1c063dadad799:225bfd2a@us-cdbr-east-06.cleardb.net/heroku_c2f655acb3c84b5?reconnect=true
  // mysql://b7f612a932afdd:6df9f5df@us-cdbr-east-06.cleardb.net/heroku_7d099baec3b4d3c?reconnect=true
   host:"us-cdbr-east-06.cleardb.net",
    user:"b1c063dadad799",
    password:"225bfd2a",
    database:"heroku_c2f655acb3c84b5"

})}
//mysql://be7aa5fa4ef7f7:c1bbb940@us-cdbr-east-05.cleardb.net/heroku_a457de2669210f3?reconnect=true
//c1bbb940
//mysql://be7aa5fa4ef7f7:c1bbb940@us-cdbr-east-05.cleardb.net/heroku_a457de2669210f3?reconnect=true
app.use(cors({
    origin:["http://localhost:5050/"],
    methods:["GET","POST"],
    credentials:true
}));
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({
    key:"portfoilo",
    secret:"besties",
    resave:false,
    saveUninitialized:false,
    cookie:{
        expires:60*60*24,
    }
}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/Images',express.static('./Images'));

app.get("/",(req,res)=>{
    console.log("here")
   // console.log(app.use(express.static(path.join(__dirname,'./Images'))))
    res.send("hel me")
})

app.get('/api/getcustomer',(req,res)=>{
    const sqlSelect="SELECT * From Admin";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)
    })
})

//post from signin

app.post('/api/signin',async(req,res)=>{
    /*const fullname=req.body.fullname
    const email=req.body.email
    const password=req.body.password
  bcrypt.hash(password,saltRounds,(err,hash)=>{
if(err){
    console.log(err)
}

    const sqlInsert="INSERT INTO Admin(fullname,email,password)VALUES(?,?,?)"
    db.query(sqlInsert,[fullname,email,password],(err,result)=>{
console.log(result)
console.log(err)
    })

  
  });
*/    





try{
    const salt=await bcrypt.genSalt()
    const hashedpassword=await bcrypt.hash(req.body.password,salt)
    console.log(salt)
    console.log(hashedpassword)
   const fullname=req.body.fullname
    const email=req.body.email
    const password=req.body.password
 
    const sqlInsert="INSERT INTO Admin(fullname,email,password)VALUES(?,?,?)"
    db.query(sqlInsert,[fullname,email,password],(err,result)=>{
console.log(result)
console.log(err)
    })
  
}catch{
    res.send({message:"ughgh"})
}

})
/*
app.get("/api/login",(res,req)=>{
    if(req.session.user){
        res.send({loggedIn:true,
        user:req.session.user})
    }else{
        res.send({loggedIn:false})
    }
})*/

//post login

app.post('/api/login',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
  
   // const sqlInsert="INSERT INTO customers(email,password)VALUES(?,?)"
    db.query("SELECT* FROM Admin WHERE email=? AND password = ? ",[email,password],(err,result)=>{
console.log(result)
if(err){
  //  res.send({err:err})
    res.status(500).send(err)
}
else{if (result.lenght>0){
    //res.send(result);
    res.status(200).send(result[0])
    bcrypt.compare(password,result.password,(error,Response)=>{
        if(Response){
            console.log(req.session.user)
            req.session.user=result;
            res.send(result)

        }else{
            // res.send({message:"wrong data"})
            res.status(400).send("wrong data /info")
        }
    })
}else{
    res.send({message:"user doesnt exist"})
    //make the entry data same *
}
}
    })
})



app.get('/stack',(req,res)=>{
    const sqlSelect="SELECT * FROM stack";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
  })
})

app.post('/range',async (req,res)=>{
   
    const Rang=req.body.Rang;
    const name=req.body.name
   
console.log(req.body)
//console.log(req.body.productdescription)
console.log(req.body.data);
const sqlInsert="INSERT INTO stackname (Rang,name)VALUES(?,?)"
db.query(sqlInsert,[Rang,name],(err,result)=>{
console.log(result)
console.log(err)
})

})



app.get('/range',(req,res)=>{
    const sqlSelect="SELECT * FROM stackname";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
  })
})




    
//post from signin

app.listen(process.env.PORT || PORT,()=>{
    console.log("server running on port 5050")
})


