import React from 'react'
import FanGroupNav from './FanGroupNav'
import { Link } from "react-router-dom";
import LivePng from "../../../../assets/images/iconFan/Group850.png";
import HomeFanLive from './Content/HomeFanLive';

const FanGroupHome = () => {
return (
<>
    <FanGroupNav />
    <div className="mt-2 liveMeetupBorder py-3 ps-3  ">
      <div className="d-flex">
        <img width="38px" className="img-fluid text-white" src={LivePng} alt="" />
        <h3 className="text-light mx-2">Live Fan Group</h3>
      </div>
      <HomeFanLive />
    </div>
</>
)
}

export default FanGroupHome