import React from 'react';
import graph from "../../../../assets/images/RightSidebar/canvas 1.png";
const MonthCard = () => {
    return (
        <div className="card card-dashbord bg-dark">
                  <div className="card-body">
                    <h5 className="text-light">Monthly Earning</h5>
                    <div className="text-center">
                      <img src={graph} className="img-fluid" alt="" />
                     <div>
                     <button className="btn btn-warning my-3 fw-bold px-4">
                        Details
                      </button>
                     </div>
                    </div>
                  </div>
                </div>
    );
};

export default MonthCard;