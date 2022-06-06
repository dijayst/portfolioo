const express =require("express");
const multer=require('multer')
const path=require('path')
const app= express();
const bodyParser=require('body-parser')
const cors=require("cors");
const PORT=process.env.PORT|| 5050;
const bcrypt =require('bcrypt')
const session =require("express-session");
const cookieParser = require("cookie-parser")
const saltRounds =10
const mysql=require('mysql');
//const { request } = require("http");
const db=mysql.createPool({
    host:'us-cdbr-east-05.cleardb.net',
    user:'be7aa5fa4ef7f7',
    password:'c1bbb940',
    database:'heroku_a457de2669210f3'
})
//mysql://be7aa5fa4ef7f7:c1bbb940@us-cdbr-east-05.cleardb.net/heroku_a457de2669210f3?reconnect=true

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



//app.get("/Image/:id",routes.Image)
app.get("/",(req,res)=>{
    console.log("here")
    console.log(app.use(express.static(path.join(__dirname,'./Images'))))
    res.send("help")
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
    
app.get('/file',(req,res)=>{
    const sqlSelect="SELECT * FROM service";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
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
















































app.post('/stack',upload.single('avatar'),async (req,res)=>{
   
    const productimage=req.file.path;

 
console.log(req.body)
//console.log(req.body.productdescription)
console.log(req.body.data);
const sqlInsert="INSERT INTO stack (productimage)VALUES(?)"
db.query(sqlInsert,[productimage],(err,result)=>{
console.log(result)
console.log(err)
})
console.log(req.files)
console.log(req.avatar)


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




    
app.get('/project',(req,res)=>{
    const sqlSelect="SELECT * FROM project";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)      
  })
})



app.post('/project',upload.single('avatar'),async (req,res)=>{
   
    const  projecttitle=req.body.projecttitle;
    const about=req.body.about;
    const productimage=req.file.path;
    const link=req.body.link;

 
console.log(req.body)
//console.log(req.body.productdescription)
console.log(req.body.data);

const sqlInsert="INSERT INTO project (projecttitle,about,productimage,link)VALUES(?,?,?,?)"
db.query(sqlInsert,[projecttitle,about,productimage,link],(err,result)=>{
console.log(result)
console.log(err)
})
console.log(req.body.link)
console.log(req.body.projecttitle)
console.log(req.body.about)
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
    const Name=req.body.Name;
    const Email=req.body.Email;
    const Message=req.body.Message;
   const sqlInsert="INSERT INTO Contactme (Name,Email,Message)VALUES(?,?,?)"
    db.query(sqlInsert,[Name,Email,Message],(err,result)=>{
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





app.get('/rangee',(req,res)=>{
    const sqlSelect="SELECT * From cost";
    db.query(sqlSelect,(err,result)=>{
        console.log(result)
        res.send(result)
    })
})

//post from signin

app.post('/rangee',(req,res)=>{
    const price=req.body.price
    const domestic=req.body.DOMESTIC;
  
    const sqlInsert="INSERT INTO cost(price,domestic)VALUES(?,?)"
    db.query(sqlInsert,[price,domestic],(err,result)=>{
console.log(result)

    })
})







//post from signin

app.listen(process.env.PORT || PORT,()=>{
    console.log("server running on port 5050")
})


