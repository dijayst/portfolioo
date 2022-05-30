import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Addedservice = () => {

    
   const [whatido, setwhatido] = useState([])
   
   useEffect(() => {
   
     axios.get("https://eembryo.herokuapp.com/file")
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

    
 const style={
  para:{
textAlign:"center"
    },

 }

    return (
        
        <div className="content">
          
             <button><Link to="/myserviced">
            back
          </Link></button>
        <p style={style.para}><b>
MY SERVICES</b>
</p>
<div className="tile-row">

{
whatido.map((item)=>{
return(


<div key={item.id} className="tile">
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

</div>    )
}

export default Addedservice
