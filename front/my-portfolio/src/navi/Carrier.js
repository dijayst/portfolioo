import React,{useState} from 'react';
import Home from './Home';
import {BrowserRouter, Route ,Routes,Navigate } from 'react-router-dom';
//import Footer from './Footer';
import Contactme from '../Dashboard/Contactme';
import Homee from '../Dashboard/Homee';
import Sidenav from '../Dashboard/Sidenav'
import Customersreview from '../Dashboard/Customersreview';
import Projectdone from '../Dashboard/Projectdone';
import Myserviced from '../Dashboard/Myserviced';
import Mystack from '../Dashboard/Mystack';
import Addedservice from '../Dashboard/Addedservice';
import Error from './Error';
import Login from './Login';
import Signup from './Signup';
import Auth from './Auth';



const Carrier = () => {
const [user, setuser] = useState(null)
    return (
        <div >
        
             <BrowserRouter>
            

                <Routes>  
                    {!user && (
                <Route path='/auth' element={<Auth authenticate={()=>{setuser(true)}}/>}/>)}
                <Route path='/:pageName' element={<Error/>}/>

                    <Route path='/stack' element={<Mystack/>}/>
                     <Route path="/Signup" element={<Signup/>}/>
                     {user &&(
                         <>
                     <Route path="/Login" element={<Login xignup={()=>{setuser(false)}}/>}/>
                   <Route path='/dashboard' element={<Homee/> }/>
                   
                   <Route path='/sidenav' element={<Sidenav/>}/>
                   <Route path='/myserviced' element={<Myserviced/>}/>
                    <Route path='/addedservice' element={<Addedservice/>}/>
                    <Route path='/contactme' element={<Contactme/>}/>
                    <Route path='/customers review' element={<Customersreview/>}/> 
                    <Route path="/sidenav" element={<Sidenav/>}/>
                    <Route path="/project" element={<Projectdone/>}/>

                   </>
                   )}
                    <Route path='*' element={<Navigate to={user ? "/Login" : "/auth"}/>}/>
                
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