import React from 'react'
import Banner from '../../../../../assets/images/meetupEvent/BannerMeet.png'

import calendar from '../../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../../assets/images/meetupEvent/clock-icon.png'
import { Link } from 'react-router-dom'
import './StarMeetUpE.css'
const StarMeetUpEvent = () => {
return (
<>
    <div className="card m-3">
        <img src={Banner} alt="" className='Banner-SME' />
    </div>

    <div className='m-3 mt-4 mb-5 Mde-Nt'>
        <h4 className='text-light fw-bold  mb-4 '>
            Le Meridian with SAK 75 <small className='text-warning Small-EV '>(offline)</small>
        </h4>
        <p className='text-light '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy
            text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book.
        </p>
        <p className='text-light '>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
    </div>

    <div className="m-3 col-12 BTN-x-P ">
        <div className="d-flex p-2 buTon-EMN">
            <div className=" mx-3 mt-2">
                <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
            </div>
            <div className=" mx-1">
                <span className="text-light">Date</span>
                <br></br>
                <span className="text-warning BtnTextNMP fw-bold">10:00 PM - 11:00 PM</span>
            </div>
        </div>

        <div className="d-flex p-2 buTon-EMN ">
            <div className=" mx-3 mt-2">
                <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
            </div>
            <div className=" mx-1">
                <span className="text-light">Time</span>
                <br></br>
                <span className="text-warning BtnTextNMP fw-bold">10:00 PM - 11:00 PM</span>
            </div>
        </div>
    </div>
    <div className="m-3">
        <Link to='/'>
        <button className='btn MEN-X fw-bold'>Approve </button>
        </Link>
        <button className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>

    </div>

</>
)
}

export default StarMeetUpEvent