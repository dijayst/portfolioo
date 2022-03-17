import React,{useState} from 'react';
            import axios from 'axios'
const Projectdone = () => {


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
        about:"",
        Projecttitle:"",
        
    
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
        formdata.set("about", description.about)
        
    
        //console.log(e.target.files);
       // console.log({description});
            axios.post("http://localhost:5050/project",formdata,
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
<label >Projecttitle :</label><input value={description.Projecttitle} onChange={(e)=>{handleChange(e)}} id="Projecttitle" type="text" placeholder="ENTER YOUR PROJECT DESCRIPTION" />
<br/>
   <label>Aboutproject</label>  <textarea rows="5"  cols="29" value={description.about} id="about" onChange={(e)=>{handleChange(e)}} >ABOUT</textarea><br/><br/>
           
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

export default Projectdone
