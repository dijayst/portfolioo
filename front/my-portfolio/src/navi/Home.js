import React,{useState,useEffect} from 'react'
import nab from './nab.jpg';
import Typography from '@material-ui/core/Typography';
import{Card,CardContent,CardHeader} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core';


const useStyles=makeStyles({
   btn:{
      height:"40%",
      width:"100%",
      display:"grid",
       gridTemplateColumns:"300px 300px 300px",
       gridTemplateRows:"250px",
       gridGap:"30px 200px"

   },
   card:{
      backgroundColor:"#002c3e",
      textAlign:"center",
      color:"#ffffff"

   }

})
const Home = () => {
   const classes=useStyles()
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
   <h2 className="content">
      MY SERVICE
   </h2>
</div>

<div className={classes.btn}>

{
   whatido.map((item)=>{
return(
   
<Card key={item.id} className={classes.card}>
   
 <img src={item.market} alt="hrk" height="70px" width="70px" className="marketimage"/>
<CardHeader
title={item.productimage}
 />

<CardContent>  <Typography>{item.productdescription}</Typography>
</CardContent>
</Card>


)
   })
}
<br/>
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
<div>
<h5 style={style}> 
Customer's Testimonial
</h5>
{
   whatido.map((item)=>{
return(
   
<Card key={item.id} className={classes.card}>
   
 <img src={item.market} alt="hrk" height="70px" width="70px" className="marketimage"/>
<CardHeader
title={item.productimage}
subheader="customer"
 />

<CardContent>  <Typography>{item.productdescription}</Typography>
</CardContent>
</Card>


)
   })
}

</div>


<div className="gitimag">
<h4>I AM EVERYWHERE !</h4>
<img src={nab} alt="ghh"height="80px" />

<img src={nab} alt="ghh"height="80px" />

</div>

        </div>
        
    )
}

export default Home
