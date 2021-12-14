import React from "react";
import { Link } from "react-router-dom";
import azhari from "../../../../../../assets/images/starProfile/profile-azhari.png";
const PendingSessions = () => {
  return (
    <>
      <div className="card ad-card Card-sp-ds-xs">
      
            <div className="row">
              <div className="col-md-4" >
                <div className="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      className="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-light">
                      Mizanur Rahman Azhari
                    </h5>
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger">Reject</button>
                    <button className=" btn-success mx-2 ">Approve</button>
                    <Link to='pedning-session/view'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>



              <div className="col-md-4" >
                <div className="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      className="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-light">
                      Mizanur Rahman Azhari
                    </h5>
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger">Reject</button>
                    <button className=" btn-success mx-2 ">Approve</button>
                    <Link to='pedning-session/view'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>




              <div className="col-md-4" >
                <div className="card p-3 bg-dark shadow" style={{ border:'1px solid yellow' }}>
                  <div className="text-center">
                    <img
                      src={azhari}
                      className="card-img-top img-fluid rounded-circle"
                      style={{ height: "100px", width: "100px" }}
                      alt="..."
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center text-light">
                      Mizanur Rahman Azhari
                    </h5>
                  </div>
             
                  <div className="text-center">
                    <button className=" btn-danger">Reject</button>
                    <button className=" btn-success mx-2 ">Approve</button>
                    <Link to='pedning-session/view'><button className=" btn-primary">View</button></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default PendingSessions;
