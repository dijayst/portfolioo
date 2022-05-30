import React, { useState } from 'react';
import axios from 'axios';
import twitter from './twitter.jpg';
import linkedin from './linkedin.jpg';
const Contact = () => {
    const [input, setinput] = useState(
{
    Name:"",
    Email:"",
    Message:""
}
    )
 const handlechange=(e)=>{
    const newcost={...input}
       newcost[e.target.id]=e.target.value
       setinput(newcost)
       console.log(newcost)
 }
 
 
    const handlesubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:5050/contactme",{
            Name:input.Name,
            Email:input.Email,
            Message:input.Message,
           })
           
  .then((Response)=>{
    // console.log(Response.data)
     console.log(Response)
     console.log("i gotten it")
   })
   .catch(error=>{
     console.log(error)
     console.log("i deny")
   })
    }
    return (
        <div className="content" id="Contact">
            <div >
                <h4><b>Contact me</b></h4> 
                <br/>
                <br/>
        <a className="linkedin" href="/"><img  alt="linkedin" height="100px" width="100px" src={linkedin}/></a>
             <br/>
              <a className="linkedin" href="/"> <img alt="twitter" height="100px" width="100px" src={twitter}/></a>




            <form onSubmit={handlesubmit}>
                            <br/>
            <input className="contact" value={input.Name} id="Name" type="text" onChange={handlechange} placeholder="Name"/>
<br/>
            <label><b>Email</b></label><br/>
            <input type="email"
             className="contact" 
             placeholder="enter your email"
              id="Email" value={input.Email} onChange={handlechange}/>
            <br/>
            <label><b>Comment or message </b></label><br/>
            <textarea rows="5"  cols="29" value={input.Message} id="Message" onChange={handlechange}>leave a message here</textarea><br/><br/>
            <button type="submit">send message</button>
            </form>
            </div>
        </div>
    )
}

export default Contact
