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
        <div>


 <div className="col-lg-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Basic Table</h4>
                    <p className="card-description"> Add className <code>.table</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Profile</th>
                            <th>VatNo.</th>
                            <th>Created</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          {contactmelist.map((item)=>{
                            return(
                              <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.Firstname}</td>
                            <td>{item.Lastname}</td>
                            <td>{item.Email}</td>
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
