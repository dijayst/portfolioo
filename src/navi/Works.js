import React,{useEffect,useState} from 'react';
import axios from 'axios';

const Works = () => {
    const [projects, setproject] = useState([]);
    useEffect(() => {
       axios.get("https://eembryo.herokuapp.com/project")
       
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
<a href="https://cozy-youtiao-f4d19f.netlify.app/">hhh</a>
<a href="https://sparkly-dasik-27ea8f.netlify.app/">jjjh</a>
https://peaceful-beijinho-03f6ae.netlify.app/
https://cozy-youtiao-f4d19f.netlify.app/
https://velvety-panda-8e06eb.netlify.app/

tr
to
tictak

            </div>
            
            {projects.map((item)=>{
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
