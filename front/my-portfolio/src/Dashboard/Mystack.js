import React,{useState} from 'react'
import axios from 'axios';

const Mystack = () => {


  const [Rangeinper, setRangeinper] = useState({
    Rang:"",
    name:"",

})

const handlecost=(e)=>{
   const newcost={...Rangeinper}
   newcost[e.target.id]=e.target.value
   setRangeinper(newcost)
   console.log(newcost)
 //  console.log(cost)
   //setcost(e.target.value)

}
const handlesubmit=(e)=>{
e.preventDefault()
//console.log(cost)
//  console.log(e.target.value)

axios.post("http://localhost:5050/range",{
Rang:Rangeinper.Rang,
name:Rangeinper.name,
})
.then((Response)=>{
// console.log(Response.data)
console.log(Response.cost)
console.log("i gotten it")
})
.catch(error=>{
console.log(error)
console.log("i deny")
})
}






    
  const [userinfo, setuserinfo] = useState({
    file:[],
   filepreview:null
  });
  
 // const [Text, setText] =useState("");

  const saveFile = (e) => {
   

    setuserinfo({...userinfo,file:e.target.files[0],
    filepreview:URL.createObjectURL(e.target.files[0]),
    });
    console.log(userinfo)
       };



       
        const handledescrip =(e) => {
          e.preventDefault()
    
    
          console.log({userinfo});
      
        //console.log(e.target.value);
      
        const formdata = new FormData();
        formdata.append('avatar',userinfo.file);
    
        //console.log(e.target.files);
       // console.log({description});
            axios.post("http://localhost:5050/stack",formdata,
             /* {headers:{"content-Type":"multipart/form-data"},
            
             productimage:userinfo.file,
              market:description.market,
               price:description.price,
               domesticshipping:description.DOMESTIC,
               internationalshipping:description.INTERNATIONAL,
               shipin:description.SHIPSIN,
             category:description.category,
              subcategory:description.subcategory,
               productname:description.productname,
              avaliability:description.avaliability,
               size:description.size,
               productdescription:description.productdescription
           }*/
              
     
            )
            .then(res=>{console.warn(res)
         //   history("/product");
           console.log(Response)
           console.log("i gotten it")
              console.log(Response.data)
          console.log(Response.description)
          console.log("i gotten it")
      
            })
             .catch(error=>{
           console.log(error)
           console.log("i deny")
         })
        };
    
    return (
        <div className="servicecontainer">
            

<form onSubmit={handledescrip}>

<input type="file" name="upload_file" onChange={(e)=>{saveFile(e)}} />
              <br/>
              <br/>
                 {userinfo.filepreview !==null ?<img src={userinfo.filepreview} height="100px" width="100px" alt="uploadimage"/> :null}
       
                   
<br/>

<button type="submit">ADD</button>
            </form>



            <form onSubmit={handlesubmit}>

<input id="name"  onChange={(e)=>{handlecost(e)}} value={Rangeinper.name} />
<br/>
 
<input type="range" max="100" min="0" step="20"id="Rang" value={Rangeinper.Rang} onChange={handlecost}/>
{Rangeinper.Rang}
<button type="submit">ADD</button>


            </form>

        </div>
    )
}

export default Mystack
