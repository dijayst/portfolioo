import React,{useEffect,useState} from 'react';
import axios from 'axios';
import Myskill from './Myskill';

 
const Myservice = () => {

   const [whatido, setwhatido] = useState([])
   
   useEffect(() => {
   
     axios.get("http://localhost:5050/file")
     .then((Response)=>{
    setwhatido(Response.data)
    //setproductlist(Response.productimage)
       console.log(Response.data)
      // console.log(Response.productimage)
       console.log("i gotten it")
     })
     .catch(error=>{
       console.log(error)
       console.log("i deny")
     })
    }, [])
 
    return (
        
            <div>
<div className="tile-row">
{
   whatido.map((item)=>{
return(
   

   <div key={item.id} className="tile"><p></p>
 <img src={item.market} alt="hrk" height="70px" width="70px" className="marketimage"/>
 <span>Customer</span>
 <h4>{item.productimage}</h4>
 <p>{item.productdescription}</p>

</div>
)
   })
}
<br/>
<br/>

</div>
<Myskill/>
</div>
        
    )
}

export default Myservice
