import React, { useEffect, useState } from "react";
import "./CricketJerseryAdmin.css";
import vector from "../../../../../../../src/assets/images/Souvenir/Vector.png";
import clock from "../../../../../../../src/assets/images/Souvenir/clock.png";
import calender from "../../../../../../../src/assets/images/Souvenir/calendar.png";
import Jersey from "../../../../../../../src/assets/images/Souvenir/jersey-1.png";
import nework from "../../../../../../../src/assets/images/Souvenir/live.png";
import person from "../../../../../../../src/assets/images/Souvenir/person.png";
import CricketJerseyModal from "./CricketJerseyModal";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Markup } from "interweave";
import moment from "moment";
const CricketJerserAdmin = () => {

const [modalShow, setModalShow] = React.useState(false);
const [modalData,setModalData] = useState('');
const [topBidders,setTopBidders] = useState([]);

const openModal = (data) => {
    setModalShow(true)
    setModalData(data)

    axios.get(`/api/admin/topBidder/auction/${data}`).then((res) => {
      if (res.status === 200) {
       setTopBidders(res.data.bidding)
      }
    });
  }


  const {id} = useParams()

  const [product,setPendingProduct] = useState([]);
  const [bidding,setPendingBidding] = useState([]);

  useEffect(() => {

      axios.get(`/api/admin/show/auction/product/${id}`).then((res) => {
  
        if (res.status === 200) {
          //console.log('from api data',res.data.product)
          setPendingProduct(res.data.product);
   
        }
        
      });

      axios.get(`/api/admin/liveBidding/auction/${id}`).then((res) => {
  
        if (res.status === 200) {
          console.log('from api data',res.data.bidding)
          setPendingBidding(res.data.bidding);
   
        }
        
      });


      
  
    }, []);



  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 mb-3">
          <h4 className="text-light">
            {product.name}
            <img src={vector} className="img-fluid mx-2" alt="" />
          </h4>
          <p className="text-light">
        <Markup content={product.details}/>
          </p>
          <p className="my-3 text-light">
          <Markup content={product.title}/>
          </p>

          <div className="d-inline-block jersey-div">
            <div className="d-flex px-3 py-1">
              <img src={calender} className="img-fluid" alt="" />
              <div className="mx-2">
                <p className="m-0 p-0 text-light">Last Date</p>
                <h6 className="m-0 p-0 text-warning"> {moment(product.bid_to).format('LL')}</h6>
              </div>
            </div>
          </div>
          <div className=" mx-2 d-inline-block jersey-div">
            <div className="d-flex px-3 py-1">
              <img src={clock} className="img-fluid" alt="" />
              <div className="mx-2">
                <p className="m-0 p-0 text-light">Time</p>
                <h6 className="m-0 p-0 text-warning">{moment(product.bid_to, "HH:mm:ss").format("hh:mm A")}</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4 left-slick">
          <Slider {...settings} className="text-warning">
            <div>
              <img src={`http://localhost:8000/${product.product_image}`} alt="" className="img-fluid" style={{height:'400px', width:'400px'}}/>
            </div>
            <div>
              <img src={Jersey} alt="" className="img-fluid" />
            </div>
            <div>
              <img src={Jersey} alt="" className="img-fluid" />
            </div>
          </Slider>
        </div>
      </div>

      <div className="row my-5">
        <div className="container-fluid">
          <div className="card card-admin-souviner">
            <div className="card-body">
              <h5 className="text-light">
                <img src={nework} alt="" className="img-fluid mx-2" />
                Live biddings
              </h5>

              <div className="conatiner">
                <div className="row my-4">
                  {bidding.map((bidder)=>(
                    
                  <div className="col-md-6 col-lg-4 col-xl-3">
                    <div className="card bg-dark my-2">
                      <div className="card-body">
                        <div className="d-flex px-3 py-1">
                          <img
                            src={`http://localhost:8000/${bidder.user[0].image}`}
                            className="img-fluid souviner-person rounded-circle"
                            alt=""
                            style={{height:'70px', width:'70px'}}
                          />
                          <div className="mx-3">
                            <h5 className="mx-0 p-0 text-warning fw-bold">
                              {bidder.amount}
                            </h5>
                            <h6 className="mx-0 p-0  text-light fw-bold">
                              {bidder.user[0].first_name} {bidder.user[0].last_name}
                              
                             
                            </h6>
                            <small className="m-0 p-0  text-light">
                              {moment(bidder.created_at).format('YYYY MM DD')} | {moment(bidder.created_at).format('HH:mm a')} 
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  ))}

                  <div className="text-center my-4">
                       <button className="btn button-souviner px-5 py-2"  onClick={() => openModal(product.id)}>Upfront payment</button>
                       {/* <CricketJerseyModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                      /> */}
                     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CricketJerseyModal show={modalShow} onHide={()=> setModalShow(false)} data={topBidders} />
      </div>
    </div>
  );
};

export default CricketJerserAdmin;
