const express =require("express");
const multer=require('multer')
const path=require('path')
const app= express();
const bodyParser=require('body-parser')
const cors=require("cors");
const PORT=process.env.PORT|| 5050;


const mysql=require('mysql');
//const { request } = require("http");
const db=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'',
    database:'portfolio'
})


app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/Images',express.static('./Images'));



//app.get("/Image/:id",routes.Image)
app.get("/",(req,res)=>{
    console.log("here")
    console.log(app.use(express.static(path.join(__dirname,'./Images'))))
    res.send("hell")
})




//get from seller table111
app.get('/api/get',(req,res)=>{
    const sqlSelect="SELECT * FROM productsinfo";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
  })
})
///byId/

app.get('/api/get/:id',(req,res)=>{
    var id=req.params.id;
    const sqlSelect="SELECT * FROM productsinfo where id="+id+"";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
      

  })
    
})


//post to seller table
/*
app.post('/api/insert',upload.single('avatar'),async (req,res)=>{
    
 try{
      
    const price=req.body.price;
    const domesticshipping=req.body.domesticshipping;
    const internationalshipping=req.body.internationalshipping;
    const shipin=req.body.shipin;
    const  category=req.body.category;
    const  subcategory=req.body.subcategory;
    const  productname=req.body.productname;
    const  avaliability=req.body.avaliability;
    const  size=req.body.size;
    const  productdescription=req.body.productdescription;
    const market=req.body.market;
    const productimage=req.file.path;
  
   const sqlInsert="INSERT INTO productsinfo(productimage,price,domesticshipping,internationalshipping,shipin,category,subcategory,productname,avaliability,size,productdescription,market )VALUES(?,?,?,?,?,?,?,?,?,?,?,?)"
   db.query(sqlInsert,[productimage,price,domesticshipping,internationalshipping,shipin,category,subcategory,productname,avaliability,size,productdescription,market],(err,result)=>{
console.log(result)
console.log(err)

   })
}catch(err){
        console.log(err)
    }


})
*/

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'Images')
    },
    filename: (req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  

  const upload=multer({
    storage:storage
}) 


//const multipleupload =upload.fields([{name:'avatar',maxCount:1},{name:'file',maxCount:3}])

app.post('/file',upload.single('file'), function(req, res) {
      console.log(req.body.text);
    //  console.log(req.file);
      console.log(req.files);
      const text=req.body.text;
      const file=req.file.path;
      const textarea=req.body.textarea;
    const sqlInsert="INSERT INTO ervice (text,file,textare)VALUES(?,?,?)"
    db.query(sqlInsert,[text,file,textarea],(err,result)=>{
 console.log(result)
 console.log(err)
    })
    });


app.get('/file',(req,res)=>{
    const sqlSelect="SELECT * FROM service";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
  })
})


app.put('/updateprofile',upload.single('file'),(req,res)=>{
    console.log(req.body.text);
      console.log(req.files);
    const text=req.body.text;
      const file=req.file.path;
    const sqlUpdate="UPDATE Set made file=? WHERE file=?";
    db.query(sqlUpdate,[text,file],(err,result)=>{
        console.log(result)
        console.log(err)
        res.send(result)      
  })
})


app.post('/api/insert',upload.single('avatar'),async (req,res)=>{
   
    const  productdescription=req.body.productdescription;
    const market=req.body.market;
    const productimage=req.file.path;

 
console.log(req.body)
//console.log(req.body.productdescription)
console.log(req.body.data);
const sqlInsert="INSERT INTO service (productimage,productdescription,market)VALUES(?,?,?)"
db.query(sqlInsert,[productdescription,market,productimage],(err,result)=>{
console.log(result)
console.log(err)
})
console.log(req.body.productdescription)
console.log(req.body.market)
console.log(req.files)
console.log(req.avatar)


})

   


app.delete('/api/deleteimg',(res,req)=>{
    const productimage=req.body.productimage;
   const sqlDELETE="DELETE FROM seller WHERE productimage=?"

    db.query(sqlDELETE,productimage,(err,result)=>{
console.log(result)
  
})
})

//for contactme table
app.post('/contactme',(req,res)=>{
    const Firstname=req.body.Firstname;
    const Lastname=req.body.Lastname;
    const Email=req.body.Email;
    const Message=req.body.Message;
   const sqlInsert="INSERT INTO Contactme (Firstname,Lastname,Email,Message)VALUES(?,?,?,?)"
    db.query(sqlInsert,[Firstname,Lastname,Email,Message],(err,result)=>{
console.log(result)
console.log(err)
   })
  console.log(err)
  //  console.log(req)
})

app.get('/contactme',(req,res)=>{
    const sqlSelect="SELECT * From Contactme";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)
    })
})

//post from signin

app.post('/api/signin',(req,res)=>{
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const email=req.body.email
    const password=req.body.password
  
    const sqlInsert="INSERT INTO customers(firstname,lastname,email,password)VALUES(?,?,?,?)"
    db.query(sqlInsert,[firstname,lastname,email,password],(err,result)=>{
console.log(result)

    })
})
//post login

app.post('/api/login',(req,res)=>{
    const email=req.body.email
    const password=req.body.password
  
   // const sqlInsert="INSERT INTO customers(email,password)VALUES(?,?)"
    db.query("SELECT* FROM customers WHERE email=? AND password=?",[email,password],(err,result)=>{
console.log(result)
if(err){
    res.send({err:err})
}
if(result.lenght>0){
    res.send(result);
}else{
    res.send({message:"wrong data"})
    //make the entry data same *
}
    })
})

// post from accountsetting

app.post('/api/acctsetting',(req,res)=>{
    const firstname=req.body.firstname
    const lastname=req.body.lastname
    const instagramhandle=req.body.instagramhandle
    const bio=req.body.bio
    const image=req.body.image
  
    const sqlInsert="INSERT INTO accountsetting(firstname,lastname,instagramhandle,bio,image)VALUES(?,?,?,?,?)"
    db.query(sqlInsert,[firstname,lastname,instagramhandle,bio,image],(err,result)=>{
console.log(result)

    })
})


//get from acctsetting

app.get('/api/getacctsetting',(req,res)=>{
    const sqlSelect="SELECT * From accountsetting";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)
    })
})






app.listen(process.env.PORT || PORT,()=>{
    console.log("server running on port 5050")
})


