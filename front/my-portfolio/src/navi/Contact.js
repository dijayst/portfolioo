import React, { useState } from 'react';
import axios from 'axios';

const Contact = () => {
    const [input, setinput] = useState(
{
    Firstname:"",
    Lastname:"",
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
            Firstname:input.Firstname,
            Lastname:input.Lastname,
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
        <div>
            <div>
                <h4><b>Contact me</b></h4>
                <hr/><hr/>
            </div>
            <form onSubmit={handlesubmit}>
                            <label><b>Name</b></label><br/>
            <input className="contact" type="text" placeholder="firstname"id="Firstname" value={input.Firstname} onChange={handlechange}/> <input className="contact" value={input.Lastname} id="Lastname" type="text" onChange={handlechange} placeholder="lastname"/>
<br/>
            <label><b>Email</b></label><br/>
            <input type="email" className="contact" placeholder="enter your email" id="Email" value={input.Email} onChange={handlechange}/>
            <br/>
            <label><b>Comment or message </b></label><br/>
            <textarea rows="5"  cols="29" value={input.Message} id="Message" onChange={handlechange}>leave a message here</textarea><br/><br/>
            <button type="submit">submit</button>
            </form>

        </div>
    )
}

export default Contact
