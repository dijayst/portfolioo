import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import Aboutus from './Aboutus';
import Navbar from './Navbar';
import {BrowserRouter, Route ,Routes } from 'react-router-dom';
import Footer from './Footer';

import Contactme from '../Dashboard/Contactme';
import Homee from '../Dashboard/Homee';
import Sidenav from '../Dashboard/Sidenav'
import Myservice from '../Dashboard/Myservice'
import Customersreview from '../Dashboard/Customersreview';
import Projectdone from '../Dashboard/Projectdone';
//import Redirect from './Redirect'
const Carrier = () => {
    return (
        <div>
        
             <BrowserRouter>
                <Navbar/>
            
                <Routes>  
                    <Route path='/' element={<Home/>}/>
                    <Route path='/dashboard' element={<Homee/>}/>
                    <Route path='/myservice' element={<Myservice/>}/>
                    <Route path='/contactme' element={<Contactme/>}/>
                    <Route path='/customers review' element={<Customersreview/>}/> 
<Route path="/dashe" element={<Sidenav/>}/>
<Route path="/project" element={<Projectdone/>}/>

                    

                    <Route path='/Contact' element={<Contact/>}/>

                    <Route path='/Blog'exact element={<Blog/>}/>
                    
                    <Route path='/Aboutme'exact element={<Aboutus/>}/>
          </Routes>
          
          <Footer/>
          </BrowserRouter>
        </div>
    )
}

export default Carrier
