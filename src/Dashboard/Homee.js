import React,{useEffect,useState} from 'react'
import axios from 'axios'
//import './Dash.css'




const Homee = () => {
 
     const [rangee, setrangee] = useState([])
    useEffect(()=>{
        axios.get("https://stormy-brook-52450.herokuapp.com/api/getcustomer")
        .then((Response)=>{
            setrangee(Response.data)
            //setproductlist(Response.productimage)
               console.log(Response.data)
              // console.log(Response.productimage)
               console.log("i gotten it")
             })
             .catch(error=>{
               console.log(error)
               console.log("i deny")
             })
            
    })
    return (
        <div className="content6">
           
             <div className="row">
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="carousel-itemO0">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$12.34</h3>
                          <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success ">
                          <span className="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Potential growth</h6>
                  </div>
                </div>
              </div>

              
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="carousel-item1">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0"> $17.34 </h3>
                          <p className="text-success ml-2 mb-0 font-weight-medium">+11%</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success">
                          <span className="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">total customer</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="carousel-itemm22">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$12.34</h3>
                          <p className="text-danger ml-2 mb-0 font-weight-medium">-2.4%</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-danger">
                          <span className="mdi mdi-arrow-bottom-left icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">total login</h6>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-9">
                        <div className="d-flex align-items-center align-self-start">
                          <h3 className="mb-0">$31.53</h3>
                          <p className="text-success ml-2 mb-0 font-weight-medium">+3.5%</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success ">
                          <span className="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Expense current</h6>
                  </div>
                </div>
              </div>
            </div>
           

 <div>
        

        </div>
     
  <div className="roww ">
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Order Status</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead className="thead">
                          <tr>
                            <th>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </th>
                            <th> ID </th>
                            <th> Fullname </th>
                            <th> Email </th>
                            <th> Password </th>
                          </tr>
                        </thead>
                        
{rangee.map((item)=>{
    return(

                        <tbody className="tbody">
                          <tr>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </td>
                            <td>
                              <img src="assets/imgas/faces/face1.jpg" alt="imga" />
                              <span className="pl-2">Henry Klein</span>
                            </td>
                            <td> {item.id} </td>
                            <td> {item.fullname} </td>
                            <td> {item.email} </td>
                            <td> {item.Password} </td>
                           </tr>

                          </tbody>
                            
                           
    )
})}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
          

          </div>
        </div>
    )
}

export default Homee
