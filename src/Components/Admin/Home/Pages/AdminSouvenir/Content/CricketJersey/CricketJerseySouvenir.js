import React from 'react'
import Fly from '../../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png'
import calendar from '../../../../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../../../../assets/images/meetupEvent/clock-icon.png'
import './CricketJer.css'
import { useHistory } from 'react-router-dom'
const CricketJerseySouvenir = () => {

    let history = useHistory();

return (
<div>
    <div className="row my-3">
        <div className="col-md-8 mb-5 ">
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

            <div className=" d-flex mt-5 mb-5 cricket-jersey">
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
                        <span className="text-warning  BtnTextNMP fw-bold">10:00 PM - 11:00 PM</span>
                    </div>
                </div>
            </div>

            <button onClick={() => history.push('/superstar-admin/souvenir/sold')} className='btn Cri-btn-x border-warning fw-bold px-5'>Confirm </button>
            <button className='btn border-warning fw-bold mx-3  px-5 Cri-btn'>Edit</button>

        </div>

        <div className="col-md-4 ">
            <img src={Fly} alt="Pineapple" className='img-fluid Cricket-Img' />
        </div>

    </div>
</div>
)
}

export default CricketJerseySouvenir