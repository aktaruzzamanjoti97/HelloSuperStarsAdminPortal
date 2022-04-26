import React from "react";
import "./AuditionAssignJury.css";
import topvideoBanner from "../../../../assets/images/Rounds/unsplash_IeTLKtzbLNo.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import ReactPlayer from "react-player";
import person1 from "../../../../assets/images/Rounds/person-1.png";
import person2 from "../../../../assets/images/Rounds/person-2.png";
import person3 from "../../../../assets/images/Rounds/person-3.png";
const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  // <img src={LeftArrow} alt="prevArrow" {...props} />
  <FaArrowLeft {...props} />
);
const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <FaArrowRight {...props} />
);
const AuditionAssignJury = (props) => {
  const { data, setData } = props;

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
    <section>
      <div className="my-2">
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
            <h5 className="text-light"> Guiter for the beginners Round-1</h5>
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

      <div className="my-4">
        <div className="card bg-dark">
          <div className="card-body">
            <div className="d-flex">
              <div className="w-75">
                <h5 className="text-light">Assigend Jury</h5>
              </div>
              <div className="mx-2">
                <input type="time" className="form-control" />
              </div>
              <div>
                <input type="date" className="form-control" />
              </div>
            </div>

            <Slider {...settings} className="my-3">
              <div>
                <div
                  className="card "
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <div className="card-body">
                    <div className="text-center d-flex justify-content-center">
                      <img
                        src={person1}
                        alt=""
                        height={150}
                        width={150}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <h5 className="text-muted text-center">Oni Hasan</h5>
                    <h6 className="text-muted text-center">Music</h6>
                    <p className="text-muted text-center">Specialist</p>
                  </div>
                  <div className="text-center mb-2">
                    <button className="btn btn-primary">25 videos</button>
                    <button className="btn btn-warning mx-2">Done</button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card "
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <div className="card-body">
                    <div className="text-center d-flex justify-content-center">
                      <img
                        src={person2}
                        alt=""
                        height={150}
                        width={150}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <h5 className="text-muted text-center">Oni Hasan</h5>
                    <h6 className="text-muted text-center">Music</h6>
                    <p className="text-muted text-center">Specialist</p>
                  </div>
                  <div className="text-center mb-2">
                    <button className="btn btn-primary">25 videos</button>
                    <button className="btn btn-primary mx-2">Done</button>
                  </div>
                </div>
              </div>
              <div>
                <div
                  className="card "
                  style={{
                    backgroundColor: "black",
                    border: "none",
                    outline: "none",
                  }}
                >
                  <div className="card-body">
                    <div className="text-center d-flex justify-content-center">
                      <img
                        src={person1}
                        alt=""
                        height={150}
                        width={150}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <h5 className="text-muted text-center">Oni Hasan</h5>
                    <h6 className="text-muted text-center">Music</h6>
                    <p className="text-muted text-center">Specialist</p>
                  </div>
                  <div className="text-center mb-2">
                    <button className="btn btn-primary">25 videos</button>
                    <button className="btn btn-warning mx-2">Done</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="card " style={{ backgroundColor: "black" }}>
                  <div className="card-body">
                    <div className="text-center d-flex justify-content-center">
                      <img
                        src={person3}
                        alt=""
                        height={150}
                        width={150}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <h5 className="text-muted text-center">Oni Hasan</h5>
                    <h6 className="text-muted text-center">Music</h6>
                    <p className="text-muted text-center">Specialist</p>
                  </div>
                  <div className="text-center mb-2">
                    <button className="btn btn-primary">25 videos</button>
                    <button className="btn btn-primary mx-2">Done</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="card " style={{ backgroundColor: "black" }}>
                  <div className="card-body">
                    <div className="text-center d-flex justify-content-center">
                      <img
                        src={person2}
                        alt=""
                        height={150}
                        width={150}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <h5 className="text-muted text-center">Oni Hasan</h5>
                    <h6 className="text-muted text-center">Music</h6>
                    <p className="text-muted text-center">Specialist</p>
                  </div>
                  <div className="text-center mb-2">
                    <button className="btn btn-secondary">25 videos</button>
                    <button className="btn btn-warning mx-2">Done</button>
                  </div>
                </div>
              </div>
              <div>
                <div className="card " style={{ backgroundColor: "black" }}>
                  <div className="card-body">
                    <div className="text-center d-flex justify-content-center ">
                      <img
                        src={person1}
                        alt=""
                        height={150}
                        width={150}
                        style={{ borderRadius: "50%" }}
                      />
                    </div>
                    <h5 className="text-muted text-center">Oni Hasan</h5>
                    <h6 className="text-muted text-center">Music</h6>
                    <p className="text-muted text-center">Specialist</p>
                  </div>
                  <div className="text-center mb-2">
                    <button className="btn btn-secondary">25 videos</button>
                    <button className="btn btn-warning mx-2">Done</button>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="text-center">
        <button className="btn btn-warning px-5 py-2" onClick={() => setData(3)}>
          Auto Assign
        </button>
        <button className="btn btn-light text-primary px-5 py-2 mx-2">Apply for jury</button>
      </div>
    </section>
  );
};

export default AuditionAssignJury;
