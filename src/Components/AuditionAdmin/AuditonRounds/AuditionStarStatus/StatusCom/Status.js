import React from "react";
import Slider from "react-slick";
import momotaz from "../../../../../assets/images/Rounds/momotaz.png";
import james from "../../../../../assets/images/Rounds/james.png";
import singer from "../../../../../assets/images/Rounds/singer.png";
import star from "../../../../../assets/images/Rounds/Star.png";
import topBanner from "../../../../../assets/images/Rounds/statusTopBanner.png";
import topvideoBanner from "../../../../../assets/images/Rounds/unsplash_IeTLKtzbLNo.png";
import icon1 from '../../../../../assets/images/Rounds/icons/Group 975.png'
import icon2 from '../../../../../assets/images/Rounds/icons/finish 1.png'
import icon3 from '../../../../../assets/images/Rounds/icons/flag 1.png'

const Status = () => {
  const [checkData,setCheckData]=React.useState('Momotaz')
  var settings = {
    
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 0,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap">
        <div
          className=""
          style={{ height: "200px", width: "230px", borderRadius: "20px", }}
        >
          <img src={star} alt="" className="h-100 w-100" />
        </div>

        <div
          className={checkData=='Momotaz'?"card bg-warning":"card star-cardColor"}
          style={{ height: "200px", width: "230px", borderRadius: "20px" }}
        >
          <div className="card-body" style={{ cursor:'pointer' }} onClick={()=>setCheckData('Momotaz')}>
            <div className="d-flex justify-content-end">
              <small className="text-bold">Submitted</small>
            </div>
            <div className="text-center d-flex justify-content-center">
              <img
                src={momotaz}
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={checkData=='Protik'?"card bg-warning":"card star-cardColor"}
          style={{ height: "200px", width: "230px", borderRadius: "20px" }}
        >
          <div className="card-body" style={{ cursor:'pointer' }} onClick={()=>setCheckData('Protik')}>
            <div className="d-flex justify-content-end">
              <small className="text-bold star-pendingColor">Pending*</small>
            </div>
            <div className="text-center d-flex justify-content-center">
              <img
                src={singer}
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                alt=""
              />
            </div>
          </div>
        </div>
        <div
          className={checkData=='James'?"card bg-warning":"card star-cardColor"}
          style={{ height: "200px", width: "230px", borderRadius: "20px" }}
        >
          <div className="card-body" style={{ cursor:'pointer' }} onClick={()=>setCheckData('James')}>
            <div className="d-flex justify-content-end">
              <small className="text-bold star-pendingColor">Pending*</small>
            </div>
            <div className="text-center d-flex justify-content-center">
              <img
                src={james}
                style={{ height: "100px", width: "100px", borderRadius: "50%" }}
                alt=""
              />
            </div>
          </div>
        </div>
     
   
      </div>

      <div className="container my-3">
        <div style={{ border: "2px solid gold", borderRadius: "10px" }}>
          <div className="p-4">
            <h5 className="text-warning">Guiter Audition Discription</h5>
            <div className="card star-cardColor2">
              <div className="card-body ">
                <p className="text-light">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Officia unde est quis porro quod, dicta quasi commodi labore
                  provident cum repudiandae nemo asperiores sunt quae
                  consequatur enim expedita ea libero?
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-warning">
                Guiter Audition Instruction for 1st round
              </h5>
              <div
                className="star-cardColor2 my-2"
                style={{ borderRadius: "3px" }}
              >
                <p className="text-light p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quibusdam?
                </p>
              </div>
              <div
                className="star-cardColor2 my-2"
                style={{ borderRadius: "3px" }}
              >
                <p className="text-light p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quibusdam?
                </p>
              </div>
              <div
                className="star-cardColor2 my-2"
                style={{ borderRadius: "3px" }}
              >
                <p className="text-light p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quibusdam?
                </p>
              </div>
              <div
                className="star-cardColor2 my-2"
                style={{ borderRadius: "3px" }}
              >
                <p className="text-light p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugit, quibusdam?
                </p>
              </div>
            </div>

            <div className="container topBannerVideoRound">
              <img src={topBanner} alt="" className="img-fluid w-100" />
            </div>

            <div className="container topBannerVideoRound my-4">
              <img src={topvideoBanner} alt="" className="img-fluid w-100" />
            </div>



            <div className="container d-sm-block d-md-flex justify-content-between">
                <div className="status-start d-flex mb-2">
                    <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                        <div>
                        <img src={icon3} className='statusImg' alt="" />
                        </div>
                    </div>
                    <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                        <div>
                       <small className="text-light">Starts</small>
                       <h5 className="text-light fontSizeStatus">2 April 2022</h5>
                        </div>
                    </div>
                </div>

                <div className="status-start2 d-flex mb-2">
                    <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                        <div>
                        <img src={icon2} className='statusImg' alt="" />
                        </div>
                    </div>
                    <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                        <div>
                       <small className="text-light">Ends</small>
                       <h5 className="text-light fontSizeStatus">2 April 2022</h5>
                        </div>
                    </div>
                </div>


                <div className="status-start d-flex mb-2">
                    <div className="img-icon-status  d-flex justify-content-center align-items-center ms-3">
                        <div>
                        <img src={icon1} className='statusImg' alt="" />
                        </div>
                    </div>
                    <div className="img-icon-status  d-flex justify-content-center align-items-center mx-3">
                        <div>
                       <small className="text-light">Uploaded Slot</small>
                       <h5 className="text-light fontSizeStatus">2 April 2022</h5>
                        </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
