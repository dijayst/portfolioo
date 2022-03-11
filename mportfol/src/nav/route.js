import React from 'react'
import {
    BrowserRouter,
     Routes,
    Route
  } from "react-router-dom";

  
const route = () => {
    return (
        <div>
             <BrowserRouter>
                <Navbar/>
                <Routes>  
                    <Route path='/th' element={<Drawerd/>}/>
                    
                    <Route path='/thf' element={<SCROLLBAR/>}/>

                    <Route path='*'exact element={<pagenotfund/>}/>
                    </Routes>
                    </BrowserRouter>
        </div>
    )
}

export default route






/*

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown1 from './Dropdown1';
import Dropdown2 from './Dropdown2';
import Dropdown3 from './Dropdown3';
import Dropdown4 from './Dropdown4';
import Search from './Search';
import Shops from './Shops';
import { AiOutlineBars } from "react-icons/ai";
import { AiFillHeart, AiOutlineShoppingCart} from "react-icons/ai";
import { GrRestroomMen } from "react-icons/gr";
import {IoIosWoman,} from "react-icons/io";


function Navbar() {



  const [click, setClick] = useState(false);
  

  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);


  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);



  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };



  const onMouseEnter2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(true);
    }
  };

  const onMouseLeave2 = () => {
    if (window.innerWidth < 960) {
      setDropdown2(false);
    } else {
      setDropdown2(false);
    }
  };


  

  const onMouseEnter3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(true);
    }
  };

  const onMouseLeave3 = () => {
    if (window.innerWidth < 960) {
      setDropdown3(false);
    } else {
      setDropdown3(false);
    }
  };



  

  const onMouseEnter4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(true);
    }
  };

  const onMouseLeave4 = () => {
    if (window.innerWidth < 960) {
      setDropdown4(false);
    } else {
      setDropdown4(false);
    }
  };


  const [shop, setshop] = useState(false)



  return (
    
    <>
      <div className="news">20%cashback for new users</div>
      
      <nav className='navbar'>
        <div className="logo"> <h1 >Embryo</h1> </div>
        <div className='menu-icon' >
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          <AiOutlineBars onClick={handleClick} color="yellow"/>
        </div>
        <div className="name">
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'
           onMouseEnter={onMouseEnter}
           onMouseLeave={onMouseLeave}
        >
            <Link
             to='/Womens'
             className='nav-links'
              onClick={closeMobileMenu}
              ><span><IoIosWoman /></span>Women</Link>
            {dropdown && <Dropdown1 />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter2}
            onMouseLeave={onMouseLeave2}
          >
            <Link
              to='/Neutral'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Neutral <i className='fas fa-caret-down' />
            </Link>
            {dropdown2 && <Dropdown2 />}
          </li>

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter3}
            onMouseLeave={onMouseLeave3}
          >
            <Link
              to='/Mens'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             <GrRestroomMen />  
               Mens 
               <i className='fas fa-caret-down' />
            </Link>
            {dropdown3 && <Dropdown3 />}
          </li>
         

          <li
            className='nav-item'
            onMouseEnter={onMouseEnter4}
            onMouseLeave={onMouseLeave4}
          >
            <Link
              to='/Arts'
              className='nav-links'
              onClick={closeMobileMenu}
            >
             < AiFillHeart /> 
            Arts
               <i className='fas fa-caret-down' />
            </Link>
            {dropdown4 && <Dropdown4 />}
          </li>

          <Link to="/Shop">
            
          <li className='nav-item' onClick={()=>{return(setshop(!shop))}}>  <AiOutlineShoppingCart />  Shop
         
         </li></Link>  
          
           
          <li  className='nav-item'>
            <Link
              to='/About'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>

          <li   className='nav-item'>
            <Link
              to='/Sign'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Sign Up/Login
          </Link>
          </li>
            
          <li   className='nav-item'>
            <Link
              to='/Sell'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Sell
          </Link>
            </li>
            
        </ul>
        
        </div>
       
   
    <Search/>
      </nav>
      <div className="mynav" >
        <nav >
          <ul className="nav-menu">
            <li > <div><h4>EMBRYO</h4></div></li>
            <li className="search"><div><input/><button>SEARCH</button></div></li>
            <li   className='nav-item'>
            <Link
              to='/Sign'
              className='nav-links'
              onClick={closeMobileMenu}
            >
            Sign Up/Login
          </Link>
          </li>
         
            <li><button>My Cart</button></li>
          </ul>
         
        </nav>
      </div>
      {shop ? <Shops />:undefined}
      </>
  );
}

export default Navbar;
*/
