import React,{useState} from 'react'
import axios from 'axios';

const Mystack = () => {


  const [description, setdescription] = useState({
    name:"",
    Rangeinper:""
    })
    
  console.log({description})
  
  const handleChange=(e)=>{
    const newdescription={...description}
    newdescription[e.target.id]=e.target.value
    setdescription(newdescription)
    console.log(newdescription)

  console.log(description)
    
  }



    const handledescripe =(e) => {
      e.preventDefault()

    console.log({description});
    //console.log(e.target.value);
    //console.log(e.target.files);
   // console.log({description});
        axios.post("http://localhost:5050/range",{
          Rangeinper:description.Rangeinper,
    name:description.name,
    
        }
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

<form onSubmit={handledescripe}>


  
<label>PRICE (USD)</label> <input type="text" id="name"onChange={(e)=>{handleChange(e)}} value={description.name} placeholder="ENTER AMOUNT"/>
<br/>

 <input type="range" max="100" min="0" step="20"id="Rangeinper" value={description.Rangeinper} onChange={handleChange}/>

 <button type="submit">ADD range</button>
</form>
        </div>
    )
}

export default Mystack
