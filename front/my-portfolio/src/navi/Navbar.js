import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
   
  //const [click, setClick] = useState(false);

 // const handleClick = () => setClick(!click);

  // const closeMobileMenu = () => setClick(false);


    return (
        <div>
            
      <div className="">

         <header className="header_section">
            <div className="nav-container">
               <nav className="navbar navbar-expand-lg custom_nav-container ">
               <Link
              to='/'
              className='nav-links'
            ><b>
              OLUBIYI ESTHER</b> <i className='fas fa-caret-down' />
            </Link>
           
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className=""> helo</span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav">
                        <li className="nav-item active">
                        <Link
              to='/'
              className='nav-links'
              
            >
              Home <i className='fas fa-caret-down' />
            </Link>
           
                        </li>
                       <li className="nav-item dropdown">
                       <Link
              to='/Aboutme'
              className='nav-links'
            >
              Aboutme <i className='fas fa-caret-down' />
            </Link>
           
                        </li>
                        <li className="nav-item">
                        <Link
              to='/Blog'
              className='nav-links'
              
            >
            Blog <i className='fas fa-caret-down' />
            </Link>
           
                        </li>
                        <li className="nav-item">
                        <Link
              to='/Contact'
              className='nav-links'
            >
              Contact <i className='fas fa-caret-down' />
            </Link>
                        </li>
                        
                        <form className="form-inline">
                           <button className="btn  my-2 my-sm-0 nav_search-btn" type="submit">
                           <i className="fa fa-search" aria-hidden="true"></i>
                           </button>
                        </form>
                     </ul>
                     
                  </div>
               </nav>
            </div>
         </header>
        </div>
        </div>
    )
}

export default Navbar
