import React from 'react'
//import './Dash.css'




const Homee = ({user}) => {
  if (!user) {
    return <Navigate to="/" replace />;
  }

    return (
        <div className="servicecontainer">
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
                          <h3 className="mb-0">$17.34</h3>
                          <p className="text-success ml-2 mb-0 font-weight-medium">+11%</p>
                        </div>
                      </div>
                      <div className="col-3">
                        <div className="icon icon-box-success">
                          <span className="mdi mdi-arrow-top-right icon-item"></span>
                        </div>
                      </div>
                    </div>
                    <h6 className="text-muted font-weight-normal">Revenue current</h6>
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
                    <h6 className="text-muted font-weight-normal">Daily Income</h6>
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
           



  <div className="roww ">
              <div className="col-12 grid-margin">
                <div className="card">
                  <div className="card-body">
                    <h4 className="card-title">Order Status</h4>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </th>
                            <th> Client Name </th>
                            <th> Order No </th>
                            <th> Product Cost </th>
                            <th> Project </th>
                            <th> Payment Mode </th>
                            <th> Start Date </th>
                            <th> Payment Status </th>
                          </tr>
                        </thead>
                        <tbody>
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
                            <td> 02312 </td>
                            <td> $14,500 </td>
                            <td> Dashboard </td>
                            <td> Credit card </td>
                            <td> 04 Dec 2019 </td>
                            <td>
                              <div className="badge badge-outline-success">Approved</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </td>
                            <td>
                              <img src="assets/imgas/faces/face2.jpg" alt="imae" />
                              <span className="pl-2">Estella Bryan</span>
                            </td>
                            <td> 02312 </td>
                            <td> $14,500 </td>
                            <td> Website </td>
                            <td> Cash on delivered </td>
                            <td> 04 Dec 2019 </td>
                            <td>
                              <div className="badge badge-outline-warning">Pending</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </td>
                            <td>
                              <img src="assets/imgas/faces/face5.jpg" alt="imga" />
                              <span className="pl-2">Lucy Abbott</span>
                            </td>
                            <td> 02312 </td>
                            <td> $14,500 </td>
                            <td> App design </td>
                            <td> Credit card </td>
                            <td> 04 Dec 2019 </td>
                            <td>
                              <div className="badge badge-outline-danger">Rejected</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </td>
                            <td>
                              <img src="assets/imgas/faces/face3.jpg" alt="imga" />
                              <span className="pl-2">Peter Gill</span>
                            </td>
                            <td> 02312 </td>
                            <td> $14,500 </td>
                            <td> Development </td>
                            <td> Online Payment </td>
                            <td> 04 Dec 2019 </td>
                            <td>
                              <div className="badge badge-outline-success">Approved</div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="form-check form-check-muted m-0">
                                <label className="form-check-label">
                                  <input type="checkbox" className="form-check-input"/>
                                </label>
                              </div>
                            </td>
                            <td>
                              <img src="assets/imgas/faces/face4.jpg" alt="imga" />
                              <span className="pl-2">Sallie Reyes</span>
                            </td>
                            <td> 02312 </td>
                            <td> $14,500 </td>
                            <td> Website </td>
                            <td> Credit card </td>
                            <td> 04 Dec 2019 </td>
                            <td>
                              <div className="badge badge-outline-success">Approved</div>
                            </td>
                          </tr>
                        </tbody>
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
