import React from 'react';
import Contact from './Contact';
import Home from './Home';
import Blog from './Blog';
import Aboutus from './Aboutus';
import Navbar from './Navbar';
import {BrowserRouter, Route ,Routes } from 'react-router-dom';
import Footer from './Footer';

import Table from '../Dashboard/Table';
import Homee from '../Dashboard/Homee';
import Sidenav from '../Dashboard/Sidenav'
import Whatido from '../Dashboard/Whatido'

const Carrier = () => {
    return (
        <div>
             <BrowserRouter>
                <Navbar/>
                <hr/>
                <Routes>  
                    <Route path='/' element={<Home/>}/>

                    <Route path='/dashboard' element={<Homee/>}/>

                    <Route path='/dashboa' element={<Whatido/>}/>

                    <Route path='/dash' element={<Table/>}/>
                    
<Route path="/dashe" element={<Sidenav/>}/>

                    

                    <Route path='/Contact' element={<Contact/>}/>

                    <Route path='/Blog'exact element={<Blog/>}/>
                    
                    <Route path='/Aboutme'exact element={<Aboutus/>}/>
          </Routes>
          <hr/>
          <Footer/>
          </BrowserRouter>
        </div>
    )
}

export default Carrier
