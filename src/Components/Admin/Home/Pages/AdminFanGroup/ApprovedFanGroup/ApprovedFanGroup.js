import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { Link, useHistory, useParams } from "react-router-dom";
import Ayushman from "../../../../../../assets/images/AyshmanKhurana.webp";
import FanGroupIcon from "../../../../../../assets/images/iconFan/expired-1.png";
import Salman from "../../../../../../assets/images/SalmanKhan.jpg";
import { Markup } from "interweave";
import swal from 'sweetalert';
import moment from 'moment';

const ApprovedFanGroup = () => {
  let history = useHistory();
  let {slug} = useParams();

  const handleClick = () => {
      history.push("/superstar-admin/fangroup/view");
  };

  const [fanDetails, setFanDetails] = useState([]);
  const [fanId, setFanId] = useState('');
  const [myAdmin, setMyAdmin] = useState([]);

  console.log('fanDetails approved', fanDetails);
  console.log('fanId', fanId);
  console.log('my_admin', myAdmin);

  useEffect(() => {
    axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        setFanDetails(res.data.fanDetails);
        setMyAdmin(res.data.fanDetails.my_admin);
        setFanId(res.data.fanId);
      }
    });
  }, [slug]);

  

  return (
    <div className="container">
      <div className="d-flex my-2">
        <img className="img-fluid" width="35px" src={FanGroupIcon} alt="" />
        <h3 className="text-white mx-2">Approved Fan Group</h3>
      </div>

      <div className="pendingGroupFan my-3">
        <div className="fanGroupBgImage w-100 fanGroupText d-flex justify-content-center align-items-center">
          <div>
            <h4 className="pendingTxt">Approved</h4>
            <h2 className="fanGroupTxt">FAN GROUP</h2>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-8 text-light">
          <h2>{ fanDetails.group_name }</h2>
          <p>
          <Markup content={fanDetails.description} />
          </p>
        </div>
        <div className="col-md-4">
          <div className="d-flex estimateSection justify-content-between m-3 p-4">
            <div>
              <p className="text-muted">Estimate Start</p>
              <big className="text-warning fw-bold">{moment(fanDetails.start_date).format('LL')}</big>
            </div>
            <div>
              <p className="text-muted">Estimate End</p>
              <big className="text-warning fw-bold">{moment(fanDetails.end_date).format('LL')}</big>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap my-4">
        <div className="col-md-8 d-flex">
          <div className="mx-2">
            <div className="bgStar">
              <img className="img-fluid" src={`http://localhost:8000/${fanDetails.my_superstar?.image}`} alt="" />
              <div className="m-2">
                <p>
                  {" "}
                  <big className="text-light fw-bolder">{fanDetails.my_superstar?.first_name} {fanDetails.my_superstar?.last_name}</big>
                </p>
                <p>
                  <small>
                    <span className="text-muted">Status</span>:{" "}
                    <i className="text-muted">Accepted</i>
                  </small>
                </p>
                {/* <button className="btn btn-secondary w-100">
                  Render Group
                </button> */}
                 {
                  (fanId === fanDetails.my_admin?.id)?
                  <Link to={`/superstar-admin/fangroup/view/${fanDetails.slug}`}>
                  <button className="btn btn-warning w-100">Render Group</button>
                </Link>
                :
                  <button className="btn btn-danger w-100">Render Group</button>
                }
              </div>
            </div>
          </div>

          <div className="mx-3">
            <div className="bgStar ">
              <img className="img-fluid" src={`http://localhost:8000/${fanDetails.another_superstar?.image}`} alt="" />
              <div className="m-2">
                <p>
                  {" "}
                  <big className="text-light fw-bolder">{fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name}</big>
                </p>
                <p>
                  <small>
                    <span className="text-secondary">Status</span>:{" "}
                    <i className="text-warning">Accepted</i>
                  </small>
                </p>
                {
                  (fanId === fanDetails.another_star_admin_id?.id)?
                  <Link to={`/superstar-admin/fangroup/view/${fanDetails.slug}`}>
                  <button className="btn btn-warning w-100">Render Group</button>
                </Link>
                :
                  <button className="btn btn-danger w-100">Render Group</button>
                }
                
                
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-md-4">
          <div className="" style={{ borderLeft: "1px dashed yellow" }}>
            <h5 className="text-light text-center my-3">Status</h5>
            <div className="d-flex justify-content-center align-items-center ">
              <div style={{ width: 200, height: 200 }}>
                <CircularProgressbarWithChildren
                  value={100}
                  styles={buildStyles({
                    pathColor: `gold`,
                  })}
                >
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong className="text-light">100% complete</strong>
                  </div>
                </CircularProgressbarWithChildren>
                <p className="text-warning text-center my-2">
                  Approved by {fanDetails.my_superstar?.first_name} {fanDetails.my_superstar?.last_name} and {fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-md-8">
          <div className="" style={{ marginTop: "20px" }}>
          
          <Link to={`/superstar-admin/fangroup/view/${fanDetails.slug}`}>
          <button className="btn btn-warning w-100">Render Group</button>
          </Link>
                
                
          </div>
        </div> */}

        
      </div>

      
    </div>
  );
};

export default ApprovedFanGroup;
