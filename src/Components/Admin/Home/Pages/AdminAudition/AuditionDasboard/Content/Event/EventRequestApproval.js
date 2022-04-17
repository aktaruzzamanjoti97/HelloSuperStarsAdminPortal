import React, {useState} from 'react'

import cup from '../../../../../../../../assets/images/pending 3.png'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import EnterImage from '../../../../../../../../assets/images/unsplash_hUHzaiAHuUc.png'
import EventsNav from './EventsNav';
const EventRequestApproval = () => {
const [meetupEvents, setMeetupEvents] = useState([]);

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
<>
    <div className="AS">

        <EventsNav />

        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"> <img src={cup} alt="" /></div>
                <h4 className="mx-3 text-white p-2">Pending Event</h4>
            </div>

            <div className="pb-3">
                <div className="slick-parent d-flex justify-content-center">
                    <Slider className="slider-width" {...settings}>

                        <div className="p-3">
                            <div className="card bg-dark completedMeetupBlack GoldBorder">
                                <img src={EnterImage} className="img-fluid p-2 ImgBlue" alt=""
                                    style={{ height: '200px' }} />
                                <div className="p-3">
                                    <center>
                                        <h5 className="text-white text-center">Guitar Competition</h5>
                                        <p className="text-secondary">Lorem Ipsum is simply dummy text of the printing
                                            and typesetting industry. Lorem Ipsum has been. </p>
                                        <button className='btn PTBDn w-100'>Action</button>
                                    </center>
                                </div>

                            </div>
                        </div>

                    </Slider>
                </div>
            </div>

        </div>

    </div>
</>
)
}

export default EventRequestApproval