import React from 'react'
import ster from './ster.jpeg';
import Aboutus from './Aboutus';

import Myservice from './Myservice';

import Myskill from './Myskill';

import Blog from './Blog';

import Works from './Works';

import Contact from './Contact';

import Eductaion from './Eductaion';
import Navbar from './Navbar';


/*
   btn:{
      height:"40%",
      width:"100%",
      display:"grid",
        gridTemplateColumns:"300px 300px 300px",
       gridTemplateRows:"250px",
       gridGap:"30px 200px"
       

   },
   card:{
      
    textAlign:"center",
    color:#ffffff

   }

})
*/

const Home = () => {
   
   

    return (
        <div id="#"className="content" >
            <Navbar/>
            <div className="container">
<section >

<div className="gitimage">
   
 <img src={ster}  className="imge" alt="hrk" height="70px" width="70px"/>
<h4>Hi! I'm Esther.I am a frontend developer</h4>
<button>
<a  href="https://github.com/dijayst" >SEE ME ON GITHUB</a></button>
</div>
</section>
<section className="content1"><Aboutus/></section>
<section className="content1"><Myservice/></section>
<section className="content1"><Myskill/></section>
<section className="content1"><Eductaion/></section>
<section className="content1"><Works/></section>
<section className="content1"><Blog/></section>
<section className="content1"><Contact/></section>
</div>
        </div>
        
    )
}

export default Home
