import React from 'react'
import nab from './nab.jpg';

//import Aboutus from './Aboutus';


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
        <div className="content" >
            
<div className="container">

<div className="gitimage">
   
 <img src={nab}  className="imge" alt="hrk" height="70px" width="70px"/>
<h4>WANTS TO CHECK SOME AWESOME PROJECT I'M wORKING ON? FEEL FREE</h4>
<button>
<a rel="noopener noreferrer" href="https://github.com/dijayst" target="_blank">SEE ME ON GITHUB</a></button>
</div>
<br/><br/>

</div>
        </div>
        
    )
}

export default Home
