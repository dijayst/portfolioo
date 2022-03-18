import React from 'react'

import { Link } from 'react-router-dom';
import Myservice from './Myservice';

const Aboutus = () => {
    return (
        <div className="aboutme">
              
<br/>
         
<br/>

               <div className="carousel-itemm">
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <h1>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div class="btn-box">
                                 <Link
              to='/Home'
              className='nav-links'
              
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
                                 </div>
                              </div>



                              <div className="carousel-items">
                                    <span>
                                    Sale 20% Off
                                    </span>
                                    <h1>
                                    On Everything
                                 </h1>
                                 <p>
                                    Explicabo esse amet tempora quibusdam laudantium, laborum eaque magnam fugiat hic? Esse dicta aliquid error repudiandae earum suscipit fugiat molestias, veniam, vel architecto veritatis delectus repellat modi impedit sequi.
                                 </p>
                                 <div class="btn-box">
                                 <Link
              to='/Home'
              className='nav-links'
              
            >
              Pages <i className='fas fa-caret-down' />
            </Link>
                                 </div>
                              </div>

<Myservice/>


          </div>
    )
}

export default Aboutus
