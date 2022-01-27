import React, { useState } from "react";
import bank1 from "../../../assets/images/RightSidebar/1.png";
import bank2 from "../../../assets/images/RightSidebar/2.jpg";
import bank3 from "../../../assets/images/RightSidebar/gpay.jpg";
import bank4 from "../../../assets/images/RightSidebar/ebl.jpg";
import bank5 from "../../../assets/images/RightSidebar/Islami.jpg";
// import graph from "../../../assets/images/RightSidebar/canvas 1.png";
import OwlCarousel from "react-owl-carousel";
import MonthCard from "../../Pages/MainDashbord/components/MonthCard";
import HistoryCard from "../../Pages/MainDashbord/components/HistoryCard";
import FormContent from "../../Pages/MainDashbord/components/FormContent";

//css import
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import '../../Pages/MainDashbord/MainDashbord.css';
import './AdSchedule.css'
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import AdminDashSchedule from "./AdminDashSchedule";

const AdminMainDashboard = () => {
const [showContent, setShowContent] = useState(false);
const [bankName,setBankName]=useState('');

return (
<div className="custom-body">
  <div className="container-fluid">
    <div className="row">

      <div className="col-md-12 ">
        {/* Balancea and transfer card start here */}
        <div className="row">
          <div className="col-md-12 col-lg-4">
            <div className="card bg-dark my-3 card-dashbord">
              <div className="card-body mb-2">
                <h5 className="text-light">Balance</h5>
                <h2 className="text-warning">$ 14,500</h2>
                <span className="card-link text-light">
                  <span>
                    <i className="fas fa-arrow-up mx-2 p-1 bg-secondary"></i>
                  </span>
                  +3200.0
                </span>
                <span className="card-link text-light">
                  <span>
                    <i className="fas fa-arrow-down mx-2 p-1 bg-secondary"></i>
                  </span>
                  -0.000
                </span>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-8">
            <div className="card bg-dark my-3 card-dashbord">
              <div className="card-body">
                <h5 className="text-light">Transfer to </h5>
                <OwlCarousel className="owl-theme" margin={0} items={5} nav onClick={()=> setShowContent(true)}
                  >
                  <div className="item">
                    <div className="imgItem">
                      <img onClick={()=>setBankName('Dhaka Bank')}
                      src={bank1}
                      className="img-fluid carousel-img"
                      alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="imgItem">
                      <img onClick={()=>setBankName('City Bank')}
                      src={bank2}
                      className="img-fluid carousel-img "
                      alt=""
                      />
                    </div>
                  </div>

                  <div className="item">
                    <div className="imgItem">
                      <img onClick={()=>setBankName('Google pay')}
                      src={bank3}
                      className="img-fluid carousel-img "
                      alt=""
                      />
                    </div>
                  </div>

                  <div className="item">
                    <div className="imgItem">
                      <img onClick={()=>setBankName('Estern Bank')}
                      src={bank4}
                      className="img-fluid carousel-img "
                      alt=""
                      />
                    </div>
                  </div>
                  <div className="item">
                    <div className="imgItem">
                      <img onClick={()=>setBankName('Islami Bank')}
                      src={bank5}
                      className="img-fluid carousel-img "
                      alt=""
                      />
                    </div>
                  </div>

                </OwlCarousel>
              </div>
            </div>
          </div>
        </div>
        {/* Balancea and transfer card start here */}

        {/* Schedule */}
        <div className="liveMeetupBorder my-5">
          <div className="d-flex px-4 pt-3">
            <div className="faTrophy"><i class="far fa-calendar-alt"></i></div>
            <h4 className="mx-3 text-white p-2">Schedule</h4>
            <span className="mx-3 text-white py-2 mt-1"><i class="fas fa-square squareAScheApp"></i> &nbsp; Approved</span>
            <span className="mx-3 text-white py-2 mt-1"><i class="fas fa-square squareASchePen"></i> &nbsp; Pending</span>
          </div>

          <div className="pb-3">
            <AdminDashSchedule/>
          </div>
          {/* <center>
            <Link to='/superstar-admin/dashboard'><Button
              className='btn bg-warning mt-3 mb-3 fw-bold text-dark '> View All</Button></Link>
          </center> */}

        </div>
        {/* Schedule End*/}

        {showContent ? (
        <div className="row">
          <FormContent BankName={bankName} />
        </div>
        ) : (
        <div className="row my-4">
          <div className="col-md-12 col-lg-8 mb-3 ">
            <MonthCard />
          </div>

          <div className="col-md-12 col-lg-4 ">
            <HistoryCard />
          </div>
        </div>
        )}

      </div>
    </div>
  </div>
</div>
);
};

export default AdminMainDashboard