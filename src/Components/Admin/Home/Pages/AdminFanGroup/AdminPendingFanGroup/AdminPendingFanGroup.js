import React from 'react';
import './AdminPendingFanGroup.css'
import pendingFan from "../../../../../../assets/images/iconFan/expired-1.png";
import Session from "../../../../../../assets/images/email.png";
import EnterImage from "../../../../../../assets/images/enter 1.png";
import bannerVs from "../../../../../../assets/images/bannerVs.png";
import PendingFanSlider from '../PendingFanSlider/PendingFanSlider';


const AdminPendingFanGroup = () => {
    return (
        <div className="ms-4">
        <div className="liveMeetupBorder my-5">
          <div className="d-flex mt-4 mx-3">
            <img
              width="38px"
              className="img-fluid text-white"
              src={pendingFan}
              alt=""
            />
            <h3 className="text-light mx-2">Pending Fan Group</h3>
          </div>
  
          <div className="pb-3">
              <PendingFanSlider />
            {/* <ApprovedFanSlider /> */}
            {/* <LiveFanGroupSlider /> */}
          </div>
        </div>
  
        {/* <div className="mt-5 mb-3">
            <div className="d-flex mt-4">
              <img
                width="38px"
                className="img-fluid text-white"
                src={LivePng}
                alt=""
              />
              <h3 className="text-light mx-2">Live Fan Group</h3>
            </div>
    
            <div className="row my-3">
              <div className="col-md-9">
                <div className="bgBlurDiv d-flex justify-content-end align-items-end">
                  <Link to="">
                    {" "}
                    <button className="btn btn-warning enterBtn fw-bold py-2 px-4 m-5">
                      Enter
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
      </div>
    );
};

export default AdminPendingFanGroup;