import React from "react";
import { Link } from "react-router-dom";
import azhari from "../../../../../../assets/images/instagram-live 1.png";
const ScheduleView = () => {
  return (
    <>
      <div className="card ad-card Card-sp-ds-xs">
      
            <div className="row">

              <div className="col-md-4 mb-2" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      Live Chat List Schedule
                      <small>5th Dec</small>
                    </h5>
                    
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger mx-2">Reject</button>
                    <Link to='registeruser'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>



              <div className="col-md-4 mb-2" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      Live Chat List Schedule
                      <small>5th Dec</small>
                    </h5>
                    
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger mx-2">Reject</button>
                    <Link to='registeruser'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>


              <div className="col-md-4 mb-2" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      Live Chat List Schedule
                      <small>5th Dec</small>
                    </h5>
                    
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger mx-2">Reject</button>
                    <Link to='registeruser'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>




              <div className="col-md-4 mb-2" >
                <div class="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      class="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title text-center text-light">
                      Live Chat List Schedule
                      <small>5th Dec</small>
                    </h5>
                    
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger mx-2">Reject</button>
                    <Link to='registeruser'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};


export default ScheduleView
