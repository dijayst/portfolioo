/*import React from 'react'


const Aboutus = () => {
    return (
        <div id="Aboutme"className="content">
<br/><br/>
           <h4>ABOUT ME</h4>
           <p>

Hi I'm Olubiyi Esther schooled at NIIT.My jounery into programming started few months back during a boothcamp at <a href="/">Brinace</a></p>
<h4>start of a jounery 'Hng'</h4>
<br/>
<br/>



          </div>
    )
}

export default Aboutus */

import React from 'react'

import ster from './ster.jpeg';

const Aboutus = () => {
    return (
        <div id="Aboutme"className="content">
            
<br/><br/>

<div className="gitimage">
   
 <img src={ster}  className="imge" alt="hrk" height="70px" width="70px"/>
</div>
<div className="textdiv">
           <h3 style={{color:"#dc2626"}}>ABOUT ME<hr/></h3>
           <p>
I am a frontend developer forcused on both MERN stack with expertise in React,Node.js,Express.js and MongoDB. i also build static website using HTML5,(S)CSS3,and javascript(ES6).
 and mobile development using React Native.i priotize continious learning and stying up-to date with emerging technologise.Besides my basic skills i also have a diploma in Infomation Technology</p>
<hr/>
<br/>
<h4 style={{color:"#dc2626"}}>Frontend</h4>
<p>HTML5|(S)CSS3|Javascript(ES6)|React.js|React Native|</p>
<br/>
<h4 style={{color:"#dc2626"}}>Backend</h4>
<p>Node.js|Express.js|MongoDB</p>
<br/>
<h4 style={{color:"#dc2626"}}>Tools</h4>
<p>VS code|GITHUB|MongoDB atlas|Chrome Dev Tools</p>
<br/>
<br/>


</div>
          </div>
    )
}

export default Aboutus

