import React,{useState} from 'react'
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
