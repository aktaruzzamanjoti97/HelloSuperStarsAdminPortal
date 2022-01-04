import React from 'react';
import { Button, Card } from 'react-bootstrap';
import Slider from 'react-slick';
import GrandImg from '../../../../../../../assets/images/Auditions/military-rank.png'
import ProPic from '../../../../../../../assets/images/Auditions/unsplash22.png'

// import './CompletedEventSliders.css';

import { Link } from 'react-router-dom';

const GrandFinalCarosuel = () => {

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
dots: true
}

},

{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
initialSlide: 2
}
},

{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1
}
}

]
};

return (
<div>

    <div className="slick-parent d-flex justify-content-center">
        <Slider className="slider-width" {...settings}>

            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>
            
            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>

            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>
            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>
            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>
            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>
            <div className="p-3 ">
                <div className="p-2 Grand-btn-p d-flex justify-content-center align-items-center ">
                    <div className="Grand-Img-F">
                        <img src={GrandImg} alt="" className='Grand-p-Img ' />
                    </div>
                    <div className="Grand-Fi-btn text-black fw-bolder">Winner</div>
                </div>

                <div className="d-flex p-2 Grand-btn-e pb-4 pt-4">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={ProPic} alt="" className='Grand-Img-x' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light BT-NAme">The name</span>
                        <br></br>
                        <span className="text-light Grand-Span ">Age: 24</span> <br />
                        <span className="text-light Grand-Span ">Some description goes here</span>
                    </div>
                </div>
            </div>


        </Slider>
    </div>

</div>
);
};

export default GrandFinalCarosuel;