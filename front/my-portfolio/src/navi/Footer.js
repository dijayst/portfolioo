import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            
      <footer>
         <div className="footercontainer">
            <div className="row">
               <div className="col-md-4">
                   <div className="full">
                      <div className="logo_footer">
                      <Link
              to='/Contact'
              className='nav-links'
              
            >
              <b>CONTACT ME</b> <i className='fas fa-caret-down' />
            </Link>
           
                      </div>
                  j    <div className="information_f">
                        <p><strong>ADDRESS:</strong> lagos,Nig</p>
                        <p><strong>TELEPHONE:</strong> +2348154466302</p>
                        <p><strong>EMAIL:</strong> olubiyisther@gmail.com</p>
                      </div>
                j   </div>
               </div>
               <div className="col-md-8">
                  <div className="row">
                  <div className="col-md-7">
                     <div className="row">
                        <div className="col-md-6">
                     <div className="widget_menu">
                        <h3><b>Recent Post</b></h3>
                        <ul>
                           <li><Link
              to='/Home'
              className='nav-links'
              
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
           </li>
                           <li><Link
              to='/Home'
              className='nav-links'
    
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
           </li>
                           <li><Link
              to='/Home'
              className='nav-links'
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
           </li>
                           <li><Link
              to='/Home'
              className='nav-links'
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
           </li>
                           <li><Link
              to='/Home'
              className='nav-links'
              
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
           </li>
                           <li><Link
              to='/Home'
              className='nav-links'
        
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
           </li>
                        </ul>
                     </div>
                  </div>
                 
                     </div>
                  </div>     
                  <div className="col-md-5">
                     <div className="widget_men">
                        <h3><b>Find Something</b></h3>
                        <div className="form_sub">
                           <form>
                              <fieldset>
                                 <div className="field">
                                    <input type="email" placeholder="find something" className="subb"/>
                                    <input type="submit" value="search"className="sub" />
                                 </div>
                              </fieldset>
                           </form>
                        </div>
                     </div>
                  </div>
                  </div>
               </div>
            </div>
         </div>

         
      <div className="cpy_">
         <p>© 2021 All Rights Reserved By <a href="https://html.design/">Free Html Templates</a></p>
      </div>
      
      </footer>
        </div>

        
    )
}

export default Footer
