import React,{useEffect,useState} from 'react';
import axios from 'axios';


 
const Myservice = () => {
   
   useEffect(() => {
   
     axios.get("https://eembryo.herokuapp.com/file")
     .then((Response)=>{   //setproductlist(Response.productimage)
       console.log(Response.data)
      // console.log(Response.productimage)
       console.log("i gotten it")
     })
     .catch(error=>{
       console.log(error)
       console.log("i deny")
     })
    }, [])

    
 const style={
  para:{
textAlign:"center"
    },

 }
    return (
        
            <div id="myservice" className="content"><div></div>
                <p style={style.para}><b>
      MY SERVICES</b>
   </p>
<div className="tile-row">

<br/>
<br/>

</div>

</div>
        
    )
}

export default Myservice
