import React from 'react';
import Home from './Home';

import {BrowserRouter, Route ,Routes } from 'react-router-dom';
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

const Carrier = () => {

    return (
        <div >
        
             <BrowserRouter>
            

                <Routes>  
                    
                <Route path='*' element={<Error/>}/>
                   
                
                    <Route path='/' element={<Home/>}/>
                  
                    
                    <Route path='/stack' element={<Mystack/>}/>
                     <Route path="/Signup" element={<Signup/>}/>
                     <Route path="/Login" element={<Login/>}/>
                    

                    <Route path='/sidenav' element={<Sidenav/>}/>
                    <Route path='/dashboard' element={<Homee/>}/>
                    <Route path='/myserviced' element={<Myserviced/>}/>
                    <Route path='/addedservice' element={<Addedservice/>}/>
                    
                

                    <Route path='/contactme' element={<Contactme/>}/>
                    <Route path='/customers review' element={<Customersreview/>}/> 
<Route path="/sidenav" element={<Sidenav/>}/>
<Route path="/project" element={<Projectdone/>}/>

          </Routes>
          
    
          </BrowserRouter>
        </div>
    )
}

export default Carrier
