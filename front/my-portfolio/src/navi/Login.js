import React,{useState} from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import { useLocation } from "react-router-dom";



const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

  const { state } = useLocation();
  
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
const handlesummit=(e)=>{

    e.preventDefault()

    login().then(() => {
        navigate(state?.path || "/dashboard");
      });
  console.log({user});
  
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
   console.log("i deny")
 })
};




    return (
        <div>
            <form onSubmit={handlesummit}>
                <input type="text" id="email" value={user.email} onChange={handlechange} />
                <br/>
                <input type="password" id="password" value={user.password} onChange={handlechange} />
                <br/>
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login
