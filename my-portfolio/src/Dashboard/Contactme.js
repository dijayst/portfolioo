import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Contactme = () => {
const [contactmelist, setcontactmelist] = useState([])
  useEffect(() => {
  
    axios.get("http://localhost:5050/contactme")
    .then((Response)=>{
   setcontactmelist(Response.data)
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
        <div className="servicecontainer">


 <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title"> <b>Contactme Table </b></h4>
                    
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>customers name</th>
                            <th>email</th>
                            <th>message</th>
                        
                          </tr>
                        </thead>
                        <tbody>
                          {contactmelist.map((item)=>{
                            return(
                              <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.Name}</td>
                            <td>{item.Email}</td>
                            <td>{item.Message}</td>
                          </tr>
                          
                            )
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>



                    </div>
              
    )
}

export default Contactme
