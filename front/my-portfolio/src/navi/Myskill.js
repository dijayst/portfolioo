import axios  from 'axios';
import React,{useEffect, useState} from 'react'
import Eductaion from './Eductaion';
import nab from './nab.jpg';


const Myskill = () => {
    const [range, setrange] = useState([])
   /* const changerange=(e)=>{
setrange(e.target.value)
console.log(range)
    }*/
    useEffect(()=>{
        axios.get("http://localhost:5050/stack")
        .then((Response)=>{
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
    return (
        <div>
        <div className="stack">
           

<h5> MY STACK</h5>

{range.map((item)=>{
    return(
        <div key={item.id}>
            <p>{item.market}</p>
            <img src={item.productimage} alt={item.productimage}/>
<input type="range" max="100" min="0" step="20" value={item.Range} />{item.Range}
</div>
    )
})}
<p>

MY SKILLS
The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.
</p>



<h4>I AM EVERYWHERE !</h4>
<img src={nab} alt="ghh"height="80px" />

<img src={nab} alt="ghh"height="80px" />

RANGE
        </div>
        <Eductaion/>
        </div>
    )
}

export default Myskill
