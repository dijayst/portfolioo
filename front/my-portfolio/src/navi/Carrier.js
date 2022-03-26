import React,{useState} from 'react';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import Aboutus from './Aboutus';
import Navbar from './Navbar';
import {BrowserRouter, Route ,Routes } from 'react-router-dom';
//import Footer from './Footer';
import Contactme from '../Dashboard/Contactme';
import Homee from '../Dashboard/Homee';
import Sidenav from '../Dashboard/Sidenav'
import Myservice from './Myservice'
import Customersreview from '../Dashboard/Customersreview';
import Projectdone from '../Dashboard/Projectdone';
import Works from './Works';
import Myskill from './Myskill';
import Myserviced from '../Dashboard/Myserviced';
import Mystack from '../Dashboard/Mystack';
import Eductaion from './Eductaion';
import Addedservice from '../Dashboard/Addedservice';
import Error from './Error';
import Protectedroute from './Protectedroute';
import Login from './Login';
import Signup from './Signup';

const Carrier = () => {

    const [user, setUser] = useState(null);

    const handleLogin = () => setUser({ id: '1', name: 'robin', permissions: ['analyze'],
    roles: ['admin'] });
    const handleLogout = () => setUser(null);
  
    return (
        <div >
        
             <BrowserRouter>
            <Navbar/>
            {user ? (
        <button onClick={handleLogout}>Sign Out</button>
      ) : (
        <button onClick={handleLogin}>Sign In</button>
      )}

                <Routes>  
                    
                <Route path='*' element={<Error/>}/>
                   
                
                    <Route path='/' element={<Home/>}/>
                  
                    
                    <Route path='/stack' element={<Mystack/>}/>
                     <Route path="/Signup" element={<Signup/>}/>
                     <Route path="/Login" element={<Login/>}/>
                    <Route path='/education' element={<Eductaion/>}/>

                    <Route path='/sidenav' element={<Sidenav/>}/>
                    <Route path='/dashboard' element={
                    <Protectedroute  redirectPath="/Signup" isAllowed={!!user && user.roles.includes('dashboard')}>
                    <Homee />
                  </Protectedroute>
                    }/>
                    <Route path='/myserviced' element={<Myserviced/>}/>
                    <Route path='/addedservice' element={<Addedservice/>}/>
                    
                    <Route path='/myservice' element={<Myservice/>}/>

                    <Route path='/contactme' element={<Contactme/>}/>
                    <Route path='/customers review' element={<Customersreview/>}/> 
<Route path="/sidenav" element={<Sidenav/>}/>
<Route path="/project" element={<Projectdone/>}/>
<Route path='/skill' element={<Myskill/>}/>
<Route path='/work' element={<Works/>}/>
                    <Route path='/contact' element={<Contact/>}/>

                    <Route path='/Blog'exact element={<Blog/>}/>
                    
                    <Route path='/aboutme'exact element={<Aboutus/>}/>
          </Routes>
          
    
          </BrowserRouter>
        </div>
    )
}

export default Carrier
