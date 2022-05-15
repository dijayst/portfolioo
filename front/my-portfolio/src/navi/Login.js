

import React, { useState} from 'react'
import {Link} from 'react-router-dom';
import axios from "axios";


const Login = () => {
    
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
   const [loginstatus, setloginstatus] = useState("")
  /* const [formerrors, setformerrors] = useState(
     email="",
     password="",
     emailvalid=false,
     passwordvalid=false,
     formvalid=false,
   )*/

axios.defaults.withCredentials=true
  
console.log(email,password)
const handlesubmit=(e)=>{
e.preventDefault()
//const isValid=validate();
//if(isValid){
  //console.log(firstnameerror,firstname,lastname,lastnameerror,emailerror,email,password,passworderror);}
  console.log(email,password)
//console.log(cost)
//  console.log(e.target.value)

axios.post("http://localhost:5050/api/login",{

email:email,
password:password,
})
.then((Response)=>{
 console.log(Response)
//console.log(Response)
//console.log("i gotten it")
if(Response.data.message){
  setloginstatus(Response.data.message)
}else{
  setloginstatus(Response.data[0].email)
}

})
.catch(error=>{
console.log(error)
console.log("i deny")
})
}
/*
useEffect(() => {
  axios.get("http://localhost:5050/api/login").then((response)=>{
    console.log((response))
  })
})*/
    return (
        <div  className="di">    
        
<p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>

 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>

 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>

 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>

 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>
 <p>hhhhhhhhhhhhhhhhhhbbbbbbb</p>


              <form  autoComplete="off"  onSubmit={handlesubmit}>
                   <br/>
                 
               <br/>
               <input
              type="text"
              value={email} onChange={(e)=>{setemail(e.target.value)}} placeholder="any valid email address will do"/>

                <br/>

                <input
                type="text"
                 placeholder="password"
                  value={password}
                  onChange={(e)=>{setpassword(e.target.value)}}/>
                 
               <br/><br/>
               <Link to="/Admin"> <button>Sign up</button></Link>
     
            <button type="submit" onClick={()=>{console.log(email,password)}} >Login</button>
            <br/>
            {loginstatus}
              
            
            </form>

        </div>
    )
}

export default Login




















/*import React,{useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Login = ({xignup}) => {

    
 const [user, setuser] = useState({
        email:"",
        password:""
    })
    

    const handlechange=(e)=>{
        const newcost={...user}
       newcost[e.target.id]=e.target.value
       setuser(newcost)
       console.log(newcost)
    }
      console.log({user});
  
  const handlesummit=()=>{

  const formdata = new FormData();
  formdata.set("email", user.email)
  formdata.set("password", user.password)
 
  axios.post(
    "http://localhost:5050/login",
    formdata,
    )
    .then(res=>{console.warn(res)
   console.log(Response)
   console.log("i gotten it")
      console.log(Response.data)
  console.log(Response.user)
  console.log("i gotten it")

    })
     .catch(error=>{
   console.log(error)
   console.log("i deny")}
 
 )
};
  

    return (
        <div>
             <form onSubmit={handlesummit}>
                <input type="text" id="email" value={user.email} onChange={handlechange} />
                <br/>
                <input type="password" id="password" value={user.password} onChange={handlechange} />
                <br/>
                 <button type="submit" onClick={xignup}>Login</button> 
               </form>
            <Link to="/dashboard"> dash</Link>
        </div>
    )
}

export default Login
*/