import React from "react";
import "./EventSlot.css";
import hotel from "../../../../../../assets/images/meetupEvent/unsplash_MXbM1NrRqtI.png";
import clock from "../../../../../../assets/images/meetupEvent/clock-icon.png";
const EventSlot = () => {
  return (
    <div className="container-fluid">
      <div className="row mb-3">
        <div className="col-md-12">
          <div className="card event-card">
            <img src={hotel} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      <div className="row my-3">
        <div className="col-md-8 mb-2">
          <div className="card event-card2 shadow">
            <div className="card-body">
              <h5 className="text-light p-2">
                Le Meridian with SAK 75{" "}
                <sub className="text-warning">(offline)</sub>
              </h5>
              <p className="text-light">
                {" "}
                labore reiciendis natus repellendus, itaque iste. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Placeat id odit
                aliquam labore repellat eaque error quibusdam similique at in{" "}
              </p>
              <p className="text-light fw-bold">
                21 September 2021 | 10:00 PM-11:00 PM
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card event-card2 shadow">
            <div className="p-3">
              <p className="text-light">
                <img src={clock} alt="Pineapple" />
                Remaining time
                <h6 className="mx-3 text-warning py-4">02 Day 20 hour 20min</h6>
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="row my-3">
          <div className="col-md-12">
              <div className="card bg-dark">
             <div className="card-body">
             <div className="row">
                    <div className="col-2 ">
                       <p className="bg-warning">1</p>
                    </div>
                    <div className="col-2 ">
                    <p className="bg-warning">1</p>
                    </div>
                    <div className="col-2 ">
                    <p className="bg-warning">1</p>
                    </div>
                    <div className="col-2 ">
                    <p className="bg-warning">1</p>
                    </div>
                    <div className="col-2">
                    <p className="bg-warning">1</p>
                    </div>
                    <div className="col-2">
                    <p className="bg-warning">1</p>
                    </div>
                </div>
             </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default EventSlot;
