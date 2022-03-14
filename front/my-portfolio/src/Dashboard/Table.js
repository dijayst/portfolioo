import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Table = () => {
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
                          <tr>
                            <td>Jacob</td>
                            <td>53275531</td>
                            <td>12 May 2017</td>
                            <td><label className="badge badge-danger">Pending</label></td>
                          </tr>
                          <tr>
                            <td>Messsy</td>
                            <td>53275532</td>
                            <td>15 May 2017</td>
                            <td><label className="badge badge-warning">In progress</label></td>
                          </tr>
                          <tr>
                            <td>John</td>
                            <td>53275533</td>
                            <td>14 May 2017</td>
                            <td><label className="badge badge-info">Fixed</label></td>
                          </tr>
                          <tr>
                            <td>Peter</td>
                            <td>53275534</td>
                            <td>16 May 2017</td>
                            <td><label className="badge badge-success">Completed</label></td>
                          </tr>
                          <tr>
                            <td>Dave</td>
                            <td>53275535</td>
                            <td>20 May 2017</td>
                            <td><label className="badge badge-warning">In progress</label></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>




             <div className="col-lg-12 grid-margin stretch-card">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Striped Table</h4>
                    <p className="card-description"> Add className <code>.table-striped</code>
                    </p>
                    <div className="table-responsive">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th> User </th>
                            <th> First name </th>
                            <th> Progress </th>
                            <th> Amount </th>
                            <th> Deadline </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-1.png" alt="imggh" />
                            </td>
                            <td> Herman Beck </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-success" role="progressbar" ></div>
                              </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2015 </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-2.png" alt="imggh" />
                            </td>
                            <td> Messsy Adam </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar"></div>
                              </div>
                            </td>
                            <td> $245.30 </td>
                            <td> July 1, 2015 </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-3.png" alt="imggh" />
                            </td>
                            <td> John Richards </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar" ></div>
                              </div>
                            </td>
                            <td> $138.00 </td>
                            <td> Apr 12, 2015 </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-4.png" alt="imggh" />
                            </td>
                            <td> Peter Meggik </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-primary" role="progressbar" ></div>
                              </div>
                            </td>
                            <td> $ 77.99 </td>
                            <td> May 15, 2015 </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-1.png" alt="imggh" />
                            </td>
                            <td> Edward </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-danger" role="progressbar" ></div>
                              </div>
                            </td>
                            <td> $ 160.25 </td>
                            <td> May 03, 2015 </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-2.png" alt="imggh" />
                            </td>
                            <td> John Doe </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-info" role="progressbar" ></div>
                              </div>
                            </td>
                            <td> $ 123.21 </td>
                            <td> April 05, 2015 </td>
                          </tr>
                          <tr>
                            <td className="py-1">
                              <img src="../../assets/imgghs/faces-clipart/pic-3.png" alt="imggh" />
                            </td>
                            <td> Henry Tom </td>
                            <td>
                              <div className="progress">
                                <div className="progress-bar bg-warning" role="progressbar"></div>
                              </div>
                            </td>
                            <td> $ 150.00 </td>
                            <td> June 16, 2015 </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
        </div>
    )
}

export default Table
