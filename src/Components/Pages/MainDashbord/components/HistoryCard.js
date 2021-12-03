import React from 'react';

const HistoryCard = () => {
    return (
        <div className="card card-dashbord bg-dark">
        <div className="card-body">
          <h5 className="text-light">History</h5>
          <div className="loopCard mx-auto">
            <div className="card money-card">
              <div className="container d-flex justify-content-between">
                <small className="text-light my-1 pending">
                  Pending
                </small>
                <p className="text-light my-1 ">2:20 pm</p>
              </div>
              <div className="container d-flex justify-content-between">
                <h4 className="text-warning">$14,500</h4>
                <p className="text-light">21-10-2021</p>
              </div>
            </div>

            <div className="card money-card my-3">
              <div className="container d-flex justify-content-between">
                <small className="text-light my-1 transferred">
                  Transferred
                </small>
                <p className="text-light my-1 ">2:20 pm</p>
              </div>
              <div className="container d-flex justify-content-between">
                <h4 className="text-warning">$14,500</h4>
                <p className="text-light">21-10-2021</p>
              </div>
            </div>

            <div className="card money-card my-3">
              <div className="container d-flex justify-content-between">
                <small className="text-light my-1 transferred">
                  Transferred
                </small>
                <p className="text-light my-1 ">2:20 pm</p>
              </div>
              <div className="container d-flex justify-content-between">
                <h4 className="text-warning">$14,500</h4>
                <p className="text-light">21-10-2021</p>
              </div>
            </div>

            <div className="card money-card my-3">
              <div className="container d-flex justify-content-between">
                <small className="text-light my-1 transferred">
                  Transferred
                </small>
                <p className="text-light my-1 ">2:20 pm</p>
              </div>
              <div className="container d-flex justify-content-between">
                <h4 className="text-warning">$14,500</h4>
                <p className="text-light">21-10-2021</p>
              </div>
            </div>

            <div className="card money-card my-3">
              <div className="container d-flex justify-content-between">
                <small className="text-light my-1 transferred">
                  Transferred
                </small>
                <p className="text-light my-1 ">2:20 pm</p>
              </div>
              <div className="container d-flex justify-content-between">
                <h4 className="text-warning">$14,500</h4>
                <p className="text-light">21-10-2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default HistoryCard;