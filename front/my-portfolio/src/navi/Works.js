import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Works = () => {
    const [project, setproject] = useState([]);
    useEffect(() => {
       axios.get("http://localhost:5050/project")
       
        .then((Response)=>{
            setproject(Response.data)
            //setproductlist(Response.productimage)
               console.log(Response.data)
              // console.log(Response.productimage)
               console.log("i gotten it")
             })
             .catch(error=>{
               console.log(error)
               console.log("i deny")
             })
    }, [])
    return (
        <div id="work" className="content">
            <div>
<a href="https://grand-cocada-4fec4a.netlify.app/"><img src="https://grand-cocada-4fec4a.netlify.app/" alt="helo"/></a>
<a href="https://cozy-youtiao-f4d19f.netlify.app/">hhh</a>
<a href="https://sparkly-dasik-27ea8f.netlify.app/">jjjh</a>

            </div>
            
            {project.map((item)=>{
             return(
                 <div key={item}>
                 <h4>{item.projecttitle}:</h4>
                 <p>{item.about}</p>
                 <a href={item.link}><img src={item.productimage} alt="helo"/></a>
                 <hr/>
                 </div>
             )
            })}
        </div>
    )
}

export default Works
