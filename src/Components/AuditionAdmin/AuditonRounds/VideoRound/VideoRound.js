import React from "react";
import "./VideoRound.css";
import topvideoBanner from "../../../../assets/images/Rounds/unsplash_IeTLKtzbLNo.png";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import tik from "../../../../../src/assets/images/Rounds/sign.png";
import cross from "../../../../../src/assets/images/Rounds/declined.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { ButtonGroup, Button } from "react-bootstrap";
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  // <img src={LeftArrow} alt="prevArrow" {...props} />
  <FaArrowLeft {...props} />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <FaArrowRight {...props} />
);
// page-no-448
function VideoRound(props) {
const {data,setData}=props;
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
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
    <div className="container my-2">
      <div className="container">
        <h5 className="text-muted">Submitted content</h5>
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            borderColor: "white",
          }}
        />
      </div>
      <div className="container topBannerVideoRound my-4">
        <img src={topvideoBanner} alt="" className="img-fluid w-100" />
      </div>
      <div className="container my-2">
        <div className="card bg-dark">
          <div className="card-body d-flex justify-content-between">
            <h5 className="text-light"> Round-1</h5>
            <span className="text-light">
              <i class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
        </div>
      </div>

      <div className="container">
        <h5 className="text-muted mt-3 mb-2">Total videos-75</h5>
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            borderColor: "white",
          }}
        />
      </div>

      <div className="container bg-dark ">
        <div className="videoRound">
          <Slider {...settings}>
            <div className="d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=qoq8B8ThgEM"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=zWEOx7TSM6I"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=x_elT6zkqN0"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=x_elT6zkqN0"
              />
            </div>
            <div className="d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=qoq8B8ThgEM"
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="container my-4 d-flex justify-content-evenly">
        <div className="roundBtnCursor">
          <img src={tik} alt="" height={"40px"} />
        </div>
        <div className="roundBtnCursor">
          <img src={cross} alt="" height={"40px"} />
        </div>

        <div className="w-75">
          <input
            type="text"
            className="form-control "
            placeholder="comment here"
          />
        </div>

        <div>
          <button className="btn roundBtn px-4 py-2">Done</button>
        </div>
      </div>

      <div className="container my-2">
        <h5 className="text-muted">Total videos-260</h5>
        <hr
          style={{
            color: "white",
            backgroundColor: "white",
            height: 2,
            borderColor: "white",
          }}
        />
      </div>

      <div className="container bg-dark my-2">
        <div className="videoRound">
          <Slider {...settings}>
            <div className="d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=qoq8B8ThgEM"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=zWEOx7TSM6I"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=x_elT6zkqN0"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              />
            </div>
            <div className=" d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=x_elT6zkqN0"
              />
            </div>
            <div className="d-flex justify-content-center">
              <ReactPlayer
                height={200}
                width={220}
                url="https://www.youtube.com/watch?v=qoq8B8ThgEM"
              />
            </div>
          </Slider>
        </div>
      </div>

      <div className="container my-2">
        <div className="row">
          <div className="col-md-8">
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" className="me-1 px-2">
                Check 85
              </Button>
              <Button variant="secondary" className="mx-1 px-2">
                {" "}
                Uncheck 20
              </Button>
              <Button variant="secondary" className="mx-1 px-2">
                Approved 68
              </Button>
              <Button variant="secondary" className="mx-1 px-2">
                Rejected 08
              </Button>
            </ButtonGroup>
          </div>
          <div className="col-md-4">
            <div>
              <button className="btn roundBtn px-4 py-2">Filter</button>
              <button className="btn bg-light text-primary px-4 py-2 mx-4"onClick={()=>setData(2)}>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoRound;
