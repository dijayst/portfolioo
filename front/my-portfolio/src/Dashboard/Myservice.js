import React,{useState} from 'react';
            import axios from 'axios'
const Myservice = () => {


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




       const [description, setdescription] = useState({
        market:"",
        productdescription:""
    
        })
        
      console.log({description})
      
      const handleChange=(e)=>{
        const newdescription={...description}
        newdescription[e.target.id]=e.target.value
        setdescription(newdescription)
        console.log(newdescription)
    
      console.log(description)
        
      }
    
    
    
        const handledescrip =(e) => {
          e.preventDefault()
    
    
          console.log({userinfo});
        console.log({description});
        //console.log(e.target.value);
      
        const formdata = new FormData();
        formdata.append('avatar',userinfo.file);
        formdata.set("market", description.market)
        formdata.set("productdescription", description.productdescription)
    
        //console.log(e.target.files);
       // console.log({description});
            axios.post("http://localhost:5050/api/insert",formdata,
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
        <div>
<form onSubmit={handledescrip}>
<label >PRUDUCT NAME :</label><input value={description.productdescription} onChange={(e)=>{handleChange(e)}} id="productdescription" type="text" placeholder="ENTER YOUR PRODUCT NAME" />
<br/>
   <label>PRICE (USD)</label> <input type="text" id="market"onChange={(e)=>{handleChange(e)}} value={description.market} placeholder="ENTER AMOUNT"/>
<br/>

<div>
<input type="file" name="upload_file" onChange={(e)=>{saveFile(e)}} />
              
              
                 {userinfo.filepreview !==null ?<img src={userinfo.filepreview} height="100px" width="100px" alt="uploadimage"/> :null}
       
                 </div>    
<br/>

<button type="submit">ADD</button>
            </form>
        </div>
    )
}

export default Myservice
