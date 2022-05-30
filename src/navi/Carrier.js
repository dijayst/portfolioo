import React,{useState} from 'react';
import Home from './Home';
import {BrowserRouter, Route ,Routes,Navigate } from 'react-router-dom';
//import Footer from './Footer';
import Error from './Error';
import Login from './Login';
import Signup from './Signup';
import Admin from '../Dashboard/Admin';

//import Projectdone from '../Dashboard/Projectdone'




const Carrier = () => {
const [user, setuser] = useState(null)

    return (
        <div >
          
        
             <BrowserRouter>
            

                <Routes>  
                    {!user && (
                <Route path='/Signup' element={<Signup authenticate={()=>{setuser(true)}}/>}/>)}
                <Route path='/:pageName' element={<Error/>}/>
  
                     {user &&(
                         <>
                     <Route path="/Login" element={<Login xignup={()=>{setuser(false)}}/>}/>
          
                     <Route path='/Admin/*' element={<Admin/>}/>
                   
                   </>
                   )}
                    <Route path='*' element={<Navigate to={user ? "/Login" : "/Signup"}/>}/>
                
                   <Route path='/' element={<Home/>}/>
          </Routes>
    
          </BrowserRouter>
        </div>
    )
}

export default Carrier




/*

useEffect(() => {
  
  const u=localStorage.getItem("user")
  u && JSON.parse(u) ? setuser(true):setuser(false)
  }, [])
  
useEffect(() => {
  localStorage.setItem("user",user)
}, [user])
*/