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
import "./PendingFanGroup.css";
import { Markup } from "interweave";
import swal from 'sweetalert';
import moment from 'moment';

const PendingGroup = () => {
  let history = useHistory();
  const {slug} = useParams();

  // const handleClick = () => {
  //   history.push("/superstar-admin/pending-fan-group-competition");
  // };


  const [fanDetails, setFanDetails] = useState([]);
  console.log('fanDetails ', fanDetails);
  console.log('slug', slug);

  useEffect(() => {
    axios.get(`/api/admin/fan/group/show/${slug}`).then((res) => {
      if (res.status === 200) {
        setFanDetails(res.data.fanDetails);
      }
    });
  }, [slug]);

  
  const deleteFanGroup = async (e) => {
    e.preventDefault();

    axios.delete(`/api/admin/fan/group/delete/${slug}`).then((res) => {
      if (res.status === 200) {
        console.log('Done');

        swal("Welcome", res.data.message, "success");
        history.push('/superstar-admin/fan-group');
      }
    });


    // axios.delete(`/api/admin/fan/group/delete/${slug}`).then(res => {
    //   if (res.data.status === 200) {
    //     console.log('Done');
    //     // setTitle('')
    //     // setUnitprice('')
    //     // setItems('')
    //     // setKeywords('')

    //     swal("Welcome", res.data.message, "success");
    //     history.push('/superstar/fan-group-invitation');
    //   }
    // });
  }

  return (
    <div className="container">
      <div className="d-flex my-2">
        <img className="img-fluid" width="35px" src={FanGroupIcon} alt="" />
        <h3 className="text-white mx-2">Pending Fan Group</h3>
      </div>

      <div className="pendingGroupFan my-3">
        <div className="fanGroupBgImage w-100 fanGroupText d-flex justify-content-center align-items-center">
          <div>
            <h4 className="pendingTxt">PENDING</h4>
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
                    
                    {
                      fanDetails.my_star_status === '1' ?
                      <i className="text-warning">Accepted</i>
                      :
                      <i className="text-muted">Pending</i>
                    }
                    
                  </small>
                </p>
                <button className="btn btn-secondary w-100">
                  Render Group
                </button>
              </div>
            </div>
          </div>

          <div className="mx-3">
            <div className="bgStar ">
              <img className="img-fluid" src={`http://localhost:8000/${fanDetails.another_superstar?.image}`} alt="" />
              <div className="m-2">
                <p>
                  {" "}
                  <big className="text-light fw-bolder">
                  {fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name}
                  </big>
                </p>
                <p>
                  <small>
                    <span className="text-secondary">Status</span>:{" "}
                    {
                      fanDetails.another_star_status === '1' ?
                      <i className="text-warning">Accepted</i>
                      :
                      <i className="text-muted">Pending</i>
                    }
                  </small>
                </p>
                <button className="btn btn-secondary w-100">
                  Render Group
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="" style={{ borderLeft: "1px dashed yellow" }}>
            <h5 className="text-light text-center my-3">Status</h5>
            <div className="d-flex justify-content-center align-items-center ">
              
              {
                fanDetails.my_star_status === '0' && fanDetails.another_star_status === '0' ?
                <div style={{ width: 200, height: 200 }}>
                <CircularProgressbarWithChildren
                  value={0}
                  styles={buildStyles({
                    pathColor: `gold`,
                  })}
                >
                  <div style={{ fontSize: 12, marginTop: -5 }}>
                    <strong className="text-light">0% complete</strong>
                  </div>
                </CircularProgressbarWithChildren>
                {/* <p className="text-warning text-center my-2">
                  Approve by Sakib Al Hasan
                </p> */}
              </div>
              :
              ''
                 
              }
              
              {
                fanDetails.my_star_status === '1' && fanDetails.another_star_status === '0' ?
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbarWithChildren
                    value={50}
                    styles={buildStyles({
                      pathColor: `gold`,
                    })}
                  >
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                      <strong className="text-light">50% complete</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                  <p className="text-warning text-center my-2">
                    Approve by {fanDetails.my_superstar?.first_name} {fanDetails.my_superstar?.last_name}
                  </p>
                </div>
              :
              ''
              }

              {
                fanDetails.another_star_status === '1' && fanDetails.my_star_status === '0' ?
                <div style={{ width: 200, height: 200 }}>
                  <CircularProgressbarWithChildren
                    value={50}
                    styles={buildStyles({
                      pathColor: `gold`,
                    })}
                  >
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                      <strong className="text-light">50% complete</strong>
                    </div>
                  </CircularProgressbarWithChildren>
                  <p className="text-warning text-center my-2">
                    Approve by {fanDetails.another_superstar?.first_name} {fanDetails.another_superstar?.last_name}
                  </p>
                </div>
              :
              ''
              }
              
              {/* {
                fanDetails.another_star_status === '1' && fanDetails.my_star_status === '1' ?
              <div className="bg-dark bgBorderManagerAuth py-2 px-5 d-flex">
                <div className="spinnerBootstrap">
                  <div class="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>

                <div className="ps-4">
                  <p className="text-light">Manager Authentication</p>
                  <h3 className="text-warning">Waiting</h3>
                </div>
              </div>
              :
              ''
              } */}

            </div>
          </div>
        </div>
      </div>

      <div className="d-flex my-3">
        <button className="btn btnDlt text-warning fw-bold" onClick={deleteFanGroup}>Delete</button>
        <Link to={`/superstar-admin/pending-fan-group-Edit/${fanDetails.slug}`}>
          <button className="btn btnDlt text-warning fw-bold">Edit</button>
        </Link>

        <Link to={`/superstar-admin/pending-fan-group-competition/${fanDetails.slug}`}> 
        {
          fanDetails.another_star_status === '1' && fanDetails.my_star_status === '1' ?
            <button className="btn btnDlt btn-warning fw-bold">Done</button>
          :
          ''
          }
        </Link>
      </div>
    </div>
  );
};

export default PendingGroup;