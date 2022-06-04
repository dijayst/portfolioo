import axios  from 'axios';
import React,{useEffect, useState} from 'react'
import nab from './nab.jpg';
import Slide from './Slide';
//import AliceCarousel from 'react-alice-carousel';
//import "react-alice-carousel/lib/alice-carousel.css";


const Myskill = () => {
    const [range, setrange] = useState([])
    
    const [slideindex, setslideindex] = useState(1)
    const nextslide=()=>{

    }
    const prevslide=()=>{
setslideindex(slideindex)
    }
      
    /* const changerange=(e)=>{
setrange(e.target.value)
console.log(range)
    }*/
//const [index, setIndex] = useState(0)
  //   const slide=()=>{ setIndex((prevIndex)=>prevIndex + 1) }
    
    useEffect(()=>{
        axios.get("https://eembryo.herokuapp.com/stack")
        .then(Response=>{
            setrange(Response.data)
            
            //setproductlist(Response.productimage)
               console.log(Response.data)
              // console.log(Response.productimage)
               console.log("i gotten it")
             })
             .catch(error=>{
               console.log(error)
               console.log("i deny")
             })
            
    })














    
    const [rangee, setrangee] = useState([])
   /* const changerange=(e)=>{
setrange(e.target.value)
console.log(range)
    }*/
    useEffect(()=>{
        axios.get("https://eembryo.herokuapp.com/range")
        .then(Response=>{
            setrangee(Response.data)
            //setproductlist(Response.productimage)
               console.log(Response.data)
              // console.log(Response.productimage)
              //mysql://be7aa5fa4ef7f7:c1bbb940@us-cdbr-east-05.cleardb.net/heroku_a457de2669210f3?reconnect=true
               console.log("i gotten it")
             })
             .catch(error=>{
               console.log(error)
               console.log("i deny")
             })
            
    })
    return (
        <div id="skill" className="content">
        <div className="stack1">
           

<h3> MY STACK</h3>

{range.map((item)=>{
    return(
        <div key={item.id} className={slideindex===item+1 ? "slide  active-anim":"slide"}>
            
            <img src={item.productimage} alt="img"  className="slideimg"  />
            

</div>
    )
})}
<Slide moveslide={nextslide} direction={"next"}/>

<Slide moveslide={prevslide} direction={"prev"}/>
<p>

MY SKILLS
The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
</p>



<h4>I AM EVERYWHERE !</h4>
<img src={nab} alt="ghh"height="80px" />
yea ha
<img src={nab} alt="ghh"height="80px" />

RANGE
        </div>
        <div>
            
{rangee.map((item)=>{
    return(
        <div key={item.id}>
            
<input type="range" max="100" min="0" step="20"id="Rang" value={item.Rang}/>{item.Rang}
            <p>{item.name}</p>
</div>
    )
})}

        </div>
        </div>
        
    )
}

export default Myskill
