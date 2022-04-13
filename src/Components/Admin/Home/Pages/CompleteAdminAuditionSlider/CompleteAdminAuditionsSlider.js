import React from "react";
import Slider from "react-slick";
import guitarCompetition from '../../../../../assets/images/CompleteAuditionDemo/guitarCompetition.png'
import swimmingCompetition from '../../../../../assets/images/CompleteAuditionDemo/swimmingCompetition.png'
import footballCompetition from '../../../../../assets/images/CompleteAuditionDemo/unsplash_hUHzaiAHuUc.png'
import './CompleteAdminAuditionSlider.css'

const CompleteAdminAuditionsSlider = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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
    <div>
      <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>
          <div className="p-3">
            <div className="sliderCardBorder">
              <img
                src={guitarCompetition}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                
                  {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  {/* </Link> */}
                  
          

                <p className="text-secondary">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ullam fugit nemo laudantium odio in.
                </p>

                <button className='btn btn-done w-100 fw-bold'>Done</button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="sliderCardBorder">
              <img
                src={swimmingCompetition}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                
                  {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                  <h5 className="text-white text-center">Swimming Competition</h5>
                  {/* </Link> */}
                  
          

                <p className="text-secondary">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ullam fugit nemo laudantium odio in.
                </p>

                <button className='btn btn-done w-100 fw-bold'>Done</button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="sliderCardBorder">
              <img
                src={footballCompetition}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                
                  {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                  <h5 className="text-white text-center">Football Competition</h5>
                  {/* </Link> */}
                  
          

                <p className="text-secondary">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ullam fugit nemo laudantium odio in.
                </p>

                <button className='btn btn-done w-100 fw-bold'>Done</button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="sliderCardBorder">
              <img
                src={guitarCompetition}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                
                  {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  {/* </Link> */}
                  
          

                <p className="text-secondary">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ullam fugit nemo laudantium odio in.
                </p>

                <button className='btn btn-done w-100 fw-bold'>Done</button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="sliderCardBorder">
              <img
                src={swimmingCompetition}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                
                  {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  {/* </Link> */}
                  
          

                <p className="text-secondary">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ullam fugit nemo laudantium odio in.
                </p>

                <button className='btn btn-done w-100 fw-bold'>Done</button>
              </div>
            </div>
          </div>
          <div className="p-3">
            <div className="sliderCardBorder">
              <img
                src={footballCompetition}
                className="img-fluid"
                alt=""
                style={{ height: "200px" }}
              />
              <div className="p-3">
                
                  {/* <Link to={`/audition-admin/meetup-event-slot/${event.id}`} style={{ textDecoration: 'none' }}> */}
                  <h5 className="text-white text-center">Guitar Competition</h5>
                  {/* </Link> */}
                  
          

                <p className="text-secondary">
                 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ullam fugit nemo laudantium odio in.
                </p>

                <button className='btn btn-done w-100 fw-bold'>Done</button>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default CompleteAdminAuditionsSlider;
