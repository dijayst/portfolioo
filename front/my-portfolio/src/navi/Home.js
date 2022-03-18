import React,{useState,useEffect} from 'react'
import nab from './nab.jpg';
import axios from 'axios';
import Aboutus from './Aboutus';


/*
   btn:{
      height:"40%",
      width:"100%",
      display:"grid",
        gridTemplateColumns:"300px 300px 300px",
       gridTemplateRows:"250px",
       gridGap:"30px 200px"
       

   },
   card:{
      
    textAlign:"center",
    color:#ffffff

   }

})
*/

const Home = () => {
   
   const style={
      textAlign:"center",
      lineheight: 6.5,
   }
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
        <div className="container">
            
<div>
</div>
<div className="gitimage">
   
 <img src={nab} alt="hrk" height="70px" width="70px"/>
<h4>WANTS TO CHECK SOME AWESOME PROJECT I'M wORKING ON? FEEL FREE</h4>
<button>
<a rel="noopener noreferrer" href="https://github.com/dijayst" target="_blank">SEE ME ON GITHUB</a></button>
</div>
<br/><br/>



<div>
<h5> MY STACK</h5>
slider_bg_box
<img src={nab} alt="hrk" height="70px" width="70px"/>
</div>
<br/>
<br/>

<div className="tile-row">
<h5 style={style}> 
Customer's Testimonial
</h5>
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

</div>


<div className="gitimag">
<h4>I AM EVERYWHERE !</h4>
<img src={nab} alt="ghh"height="80px" />

<img src={nab} alt="ghh"height="80px" />

</div>
<Aboutus/>
        </div>
        
    )
}

export default Home
