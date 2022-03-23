import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../.../../../../../assets/images/Fanbase-img/Fanbasebanner.jpg'
import Salman from '../../.../../../../../assets/images/Fanbase-img/4.png'
import '../FanGroupStar.css'
const RejectedDetails = () => {
return (
<>
    <img src={Banner} alt="" className='img-fluid BannerFan' />
    <div className="row">
        <div className="col-md-8 mt-3  text-light">
            <div className="FanAccepted px-3 pb-3">
                <h4 className="fw-bold text-light mt-3">Salman Khan Vs Shah Rukh Khan Fangroup</h4>
                <p className="text-light text-justify">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia esse nostrum praesentium deleniti
                    accusamus ad molestias ratione quisquam quos pariatur, veniam autem sapiente consequuntur cumque.
                    Quibusdam nisi rerum minima tempore!
                </p>

                <button className="btn border-success text-warning mb-3" disabled>Start Time : 4th Apr 2022, 10:00
                    am</button>

                <button className="btn  text-warning mb-3" disabled> to</button>

                <button className="btn border-success text-warning mb-3" disabled>End Time : 8th Apr 2022, 11:30
                    am</button>

                <div>
                    <button className="btn bg-warning text-dark mt-3 me-3" disabled>Enrolled : <span
                            className="fw-bold">20</span> </button>
                    <button className="btn mt-3 text-light" disabled>Status : <span
                            className='text-danger fw-bold'>Rejected</span></button>
                </div>

            </div>

        </div>

        <div className="col-md-4  mt-3 pb-3 text-light">
            <div className="FanAccepted px-3 py-3">

                <div className="Star!">
                    <button className="btn FanSlaText"><img src={Salman} alt="" className='SlamanFanImg me-2' disabled /></button>
                    <button className="btn " disabled> <h6 className='text-light StarAdmin2'>Salman Khan &nbsp;| me</h6></button>
                </div>

                <div className="Star! my-3">
                    <button className="btn FanSlaText"><img src={Salman} alt="" className='SlamanFanImg me-2' disabled /></button>
                    <button className="btn " disabled> <h6 className='text-light StarAdmin2'>Shah Rukh  Khan &nbsp;| Invited Star</h6></button>
                </div>

                <div className="Star!">
                    <button className="btn FanSlaText"><img src={Salman} alt="" className='SlamanFanImg me-2' disabled /></button>
                    <button className="btn " disabled> <h6 className='text-light StarAdmin2'>Apurbo Roy &nbsp;| Admin</h6></button>
                </div>

            </div>
        </div>
    </div>

    <div className="row mt-3">
        <div>
            <Link to='/superstar/fan-group'><button className="btn BtnFanAccepted px-4 fw-bold">Back</button></Link>
        </div>
    </div>
</>
)
}

export default RejectedDetails
