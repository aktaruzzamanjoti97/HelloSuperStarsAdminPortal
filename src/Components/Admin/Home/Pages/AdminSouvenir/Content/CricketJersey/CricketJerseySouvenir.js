import React from 'react'
import Fly from '../../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png'
import calendar from '../../../../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../../../../assets/images/meetupEvent/clock-icon.png'

const CricketJerseySouvenir = () => {
return (
<div>
    <div className="row my-3">
        <div className="col-md-8 mb-4 ">
            <div className="card event-card2 shadow">
                <div className="card-body">
                    <h5 className="text-light mb-3">
                        Cricket jersey
                    </h5>
                    <p className="text-light">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type
                        specimen book.
                    </p>
                    <p className="text-light ">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>

            <div className="mt-5 mb-5">
                <div className="d-flex">
                    <div className="d-flex p-2 buTon-EMN">
                        <div className="mt-2  mx-3 ">
                            <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
                        </div>
                        <div className=" mx-1">
                            <span className="text-light">Date</span>
                            <br></br>
                            <span className="text-warning BtnTextNMP fw-bold">10:00 PM - 11:00 PM</span>
                        </div>
                    </div>

                    <div className=" d-flex p-2 buTon-EMN ">
                        <div className=" mt-2 mx-3">
                            <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                        </div>
                        <div className=" mx-1 ">
                            <span className="text-light">Time</span>
                            <br></br>
                            <span className="text-warning BtnTextNMP fw-bold">10:00 PM - 11:00 PM</span>
                        </div>
                    </div>
                </div>
            </div>

            <button className='btn MEN-X fw-bold'>Approve </button>
            <button className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>

        </div>

        <div className="col-md-4">
            <img src={Fly} alt="Pineapple" className='img-fluid' />
        </div>

    </div>
</div>
)
}

export default CricketJerseySouvenir