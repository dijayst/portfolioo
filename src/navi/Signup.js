import React, { useState } from 'react'
import axios from "axios";
import {Link} from 'react-router-dom'
import {useNavigate} from "react-router-dom";

 /*const initialState={
     Email:"",
     fullname:"",
     Lastname:"",
     Password:"",
     Signup:""
 }*/


const Signup= ({authenticate}) => {

/*
  const [sign, setsign] = useState(false)
   const showshop=()=>{
     setsign(!sign)
   }
*/
    const navigate=useNavigate();

    const change=()=>{
        authenticate();
        navigate("/Login")
    }
  
  const [details, setdetails] = useState({
    email:"",
    fullname:"",
    password:""
  });


  const handledetails=(e)=>{
    const newdetails={...details}
    newdetails[e.target.id]=e.target.value
    setdetails(newdetails)
    console.log(newdetails)
  //  console.log(cost)
    //setcost(e.target.value)
 
 }

  //const [email, setemail] = useState("");
  //const [password, setpassword] = useState("");
 // let [fullnameerror, setfullnameerror] = useState("");
 // let [lastnameerror, setlastnameerror] = useState("");
 // let [emailerror, setemailerror] = useState("");
 // let [passworderror, setpassworderror] = useState("")

  /* { id: "phonenumber",
     label:"phonenumber",
     placeholder:"999-999-9999",
     value:"",
     error:false,
     helperText: "any valid number will do ",
     getHelperText:error=>
       error?"woops.Not a valid phone number"
       :"any valid number will do ",
       isValid : value=>
/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(value)

    
  },
  
  {
    id:"email",
    label:"email",
    placeholder:"john@gmail.com",
    value:"",
    error:false,
    helperText:"any valid address will do",
    getHelperText:error=>error?
    "woops.Not a valid email address":
    "any valid email address will do",
    isValid : value=>/\S+@\S+\.\S+/.test(value)

  }
const validate=()=>{
  //let fullnameerror="";
  //let lastnameerror="";
  //let emailError="";
  //let passworderror="";

  if (password.length < 8){
    setpassworderror="must be 8 digit"

  }
  if(password.includes("0123456789")){
    setpassworderror="should include digit"
  }
  
  if(password.includes("@,$,0,#")){
    setpassworderror="should includesymbols"
  }
  if(!fullname.includes("0123456789")){
    setfullnameerror="invalidname"
  }
  if(!lastname.includes("0123456789")){
    setlastnameerror="invalidlastname"
  }
  if(email.includes("@")){
    emailerror="valid email"
  }
  if(emailerror){
    setemailerror({emailerror});
    return false;
  }
  return true;
}
*/
console.log(details.fullname,details.email,details.password)
const handlesubmit=(e)=>{
e.preventDefault()
//const isValid=validate();
//if(isValid){
  //console.log(fullnameerror,fullname,lastname,lastnameerror,emailerror,email,password,passworderror);}
  console.log(details.fullname,details.email,details.password)
//console.log(cost)
//  console.log(e.target.value)

axios.post("https://stormy-brook-52450.herokuapp.com/signin",{
//phonenumber:customer.phonenumber,
fullname:details.fullname,
email:details.email,
password:details.password
})
.then((Response)=>{
 console.log(Response.data)
console.log("i gotten it")
})
.catch(error=>{
console.log(error)
console.log("i deny")
})
}


  //  const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="div">

          
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
                   <input
                   id="fullname"
                   type="text"
                        placeholder="fullname"
                        value={details.fullname}
                        onChange={(e)=>{handledetails(e)}}
                   />

                    
               <br/>
               <input
               id="email"
               type="email"
                  value={details.email}
                  onChange={(e)=>{handledetails(e)}}
                  placeholder="any valid email address will do"/>
                
                <br/>

                <input
                id="password"
                type="password"
                 value={details.password}
                  placeholder="create your password "
                  onChange={(e)=>{handledetails(e)}}/>
                 
               <br/><br/>
            
            
            <Link to="/Login"> <button>Loginup</button></Link>
       <button type="submit" onClick={change}>Register</button>
        {setdetails==="" ? console.log("enter all details") :  <button type="submit" onClick={()=>{console.log(details.fullname,details.email,details.password)}} >egister</button> }
            
            </form>

        </div>
    )
}

export default Signup



/*import React,{useState} from 'react'
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
"https://eembryo.herokuapp.com/signup",
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
        
        </div>
    )
}

export default Signup
*/