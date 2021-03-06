import React,{useState} from 'react'
//import { Link } from 'react-router-dom'
import{HashLink as Link} from 'react-router-hash-link';
import ster from './ster.jpeg';
import { GrClose } from 'react-icons/gr'
import{GiHamburgerMenu} from 'react-icons/gi'



const Navbar = () => {
   
const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  // const closeMobileMenu = () => setClick(false);

console.log({click})
    return (
        <div className="di">
            <div className="navbar-toggler">

            <button className="menu-bars" onClick={handleClick}>
                    <GiHamburgerMenu className={click ?'fas fa-times' : 'fas fa-bars'} /> 
                  </button>
           
            </div>
      <div className="sidebar">

         <header className="header_section">
            <div className="nav-container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
               <GrClose className="close" onClick={()=>{handleClick()}}/>
             <div  className={click ? 'nav-menu active' : 'nav-menu'}>
              <div className="divimg">
           <img src={ster}  className="imgea1" alt="hrk" height="170px" width="170px"/>
          <br/>
           <b>
              OLUBIYI ESTHER</b> <i className='fas fa-caret-down' />
            
               
          <p>frontend developer in Nigeria  <GrClose onClick={click}/></p>
              </div>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <br/><br/>
                     <ul>
                        <li className="nav-item active">
                        <Link smooth to="#"
              className='nav-links'
              
            >
              Home <i className='fas fa-caret-down' />
            </Link>
           
                        </li>
                        <br/>
                       <li className="nav-item dropdown">
                       <Link smooth
              to='#Aboutme'
              className='nav-links'
            >
              Aboutme <i className='fas fa-caret-down' />
            </Link>
           
                        </li>
                        <br/>
                        <li className="nav-item dropdown">
                        <Link smooth
              to='#myservice'
              className='nav-links'
              
            >
              myservice 
              </Link>
                        </li>
                        <br/>
                        <li className="nav-item dropdown">
                        <Link smooth
              to='#skill'
              className='nav-links'
              
            >
                       myskill </Link>
                                 </li>
                                 <br/>
                                 
                                 <li className="nav-item dropdown">
                                 <Link smooth
              to='#education'
              className='nav-links'
              
            >
       education</Link>
                                 </li>
                                 <br/>
                                 <li className="nav-item dropdown">
                                 <Link smooth
              to='#work'
              className='nav-links'
              
            >
                       works </Link>
                                 </li>
                                 <br/>
                        <li className="nav-item">
                        <Link smooth
              to='#Blog'
              className='nav-links'
              
            >
            Blog <i className='fas fa-caret-down' />
            </Link>
           
                        </li>
                        <br/>
                        <li className="nav-item">
                        <Link smooth
              to='#Contact'
              className='nav-links'
            >
              Contact <i className='fas fa-caret-down' />
            </Link>
                        </li><br/>
                        <li className="nav-item">
                        <Link smooth
              to='/dashboard'
              className='nav-links'
            >
              Dashboard <i className='fas fa-caret-down' />
            </Link>
                        </li>
                       
                     </ul>
                     
                  </div>
                 
          </div>
               </nav>

            </div>
         </header>
        </div>
        
        </div>
    )
}

export default Navbar
