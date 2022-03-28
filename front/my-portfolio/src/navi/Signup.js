import React,{useState} from 'react'
import Login from './Login';
import axios from 'axios';


const Signup = () => {
    const [signup, setsignup] = useState({
        fullname:"",
        email:"",
        password:""
   })




   
   const handlechange=(e)=>{
    const newcost={...signup}
   newcost[e.target.id]=e.target.value
   setsignup(newcost)
   console.log(newcost)
}
const handlesummit=(e)=>{

e.preventDefault()

console.log({signup});

const formdata = new FormData();

formdata.set("fullname", signup.fullname)
formdata.set("email", signup.email)
formdata.set("password", signup.password)

axios.post(
"http://localhost:5050/signup",
formdata,
)
.then(res=>{console.warn(res)
console.log(Response)
console.log("i gotten it")
  console.log(Response.data)
console.log(Response.signup)
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
                <input type="text" id="fullname" value={signup.fullname} placeholder="Enter full name" onChange={handlechange}/>
              <br/>
                <input type="text" id="email" value={signup.email} onChange={handlechange} />
                <br/>
                <input type="password" id="password" value={signup.password} onChange={handlechange} />
                <br/>
                <button type="submit">Signup</button>
           
            </form>
            <Login />
        </div>
    )
}

export default Signup
