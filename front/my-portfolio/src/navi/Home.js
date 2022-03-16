import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom';
import nab from './nab.jpg';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import{Card,CardContent,CardHeader,CardMedia} from '@material-ui/core';
import axios from 'axios'
const Home = () => {
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

<div className="cardcontent">

{
   whatido.map((item)=>{
return(
   
<Card key={item.id}>
<CardHeader
title={item.productimage}
 subheader="legend"/>
 <img src={item.market} alt="hrk" height="70px" width="70px"/>
< CardMedia image={item.market}/>
<CardContent>  <Typography>{item.productdescription}</Typography>
</CardContent>
</Card>


)
   })
}
<br/>
                             </div>

<div className="gitimage">
<h4>WANTS TO CHECK SOME OWESOME PROJECT I'M wORKING ON? FEEL FREE</h4>
<Button variant="contained" component={Link} to="/https://github.com/dijayst">
SEE ME ON GITHUB
</Button>
</div>
<hr/>
<div>
<h5> MY STACK</h5>
slider_bg_box
</div>
<hr/>
<div>
<h5> 
WHAT MY CLIENT SAY
</h5>

</div>


<div className="gitimage">
<h4>I AM EVERYWHERE !</h4>
<img src={nab} alt="ghh"height="80px" />

<img src={nab} alt="ghh"height="80px" />

</div>
<hr/>

   <br/>
        </div>
        
    )
}

export default Home
