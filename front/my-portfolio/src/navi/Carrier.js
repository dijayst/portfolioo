import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import Aboutus from './Aboutus';
import Navbar from './Navbar';
import {BrowserRouter, Navigate, Route ,Routes } from 'react-router-dom';
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
//import Redirect from './Redirect'
const Carrier = () => {
    return (
        <div>
        
             <BrowserRouter>
                
            
                <Routes>  
                    <Route path='/hu' element={<Home/>}/>
                    <Route path='/' element={<Navbar/>}/>
                    
                    <Route path='/stack' element={<Mystack/>}/>

                    <Route path='/education' element={<Eductaion/>}/>

                    <Route path='/dashboard' element={<Navigate replace to="sidenav"/>}/>
                    <Route path='/dashboard' element={<Homee/>}/>
                    <Route path='/myserviced' element={<Myserviced/>}/>
                    
                    <Route path='/myservice' element={<Myservice/>}/>

                    <Route path='/contactme' element={<Contactme/>}/>
                    <Route path='/customers review' element={<Customersreview/>}/> 
<Route path="/sidenav" element={<Sidenav/>}/>
<Route path="/project" element={<Projectdone/>}/>

                    

<Route path='/skill' element={<Myskill/>}/>

<Route path='/work' element={<Works/>}/>

                    <Route path='/contact' element={<Contact/>}/>

                    <Route path='/Blog'exact element={<Blog/>}/>
                    
                    <Route path='/Aboutme'exact element={<Aboutus/>}/>
          </Routes>
          
    
          </BrowserRouter>
        </div>
    )
}

export default Carrier
