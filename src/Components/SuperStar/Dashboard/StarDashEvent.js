import React from 'react'
import { Link } from 'react-router-dom'
import EventImg from '../../../assets/images/SakibBanner2.png'
const StarDashEvent = () => {
return (
<>
<div className="col-md-12 ">

<div className="d-flex  pt-3 mb-3">
    <div className="faTrophy"><i class="far fa-calendar-alt"></i></div>
    <h4 className="mx-3 text-light p-2">January , 2022</h4>
</div>

<div className="row">

    <div className="containerSa col-md-3 mb-3">
    <Link to='/superstar/event-category'>
        <div className="ClassHeadApp">
            <div class="container">
                <div class="ClassHeadC">
                    <h6 className='fw-bold'>Sunday , 20 Jan</h6>
                    <small className='Approved-C fw-bold'>Approved</small>
                </div>
            </div>
        </div>
        <div className="overlayASchedule bg-dark ApprovedS">
            <div className='text-center'>
                <h6 className="fw-bold text-light pb-3 mt-3">Sunday , 20 Jan</h6>
            </div>
            <div className="containerADS">
                <img src={EventImg} alt="Snow" className='Img-Sch-Event ' />

                {/* Background color */}
                <div className="LeftTopScA"> </div>
                {/* Background color */}

                <div className="LeftTopSc">
                    <h5 className="mt-2 text-warning ">Raddussond Blue</h5>
                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing</p>
                </div>
            </div>
        </div>
        
    </Link>
    </div>

    <div className="containerSa col-md-3 mb-3">
    <Link to='/superstar/event-requesting'>
        <div className="ClassHeadPen">
            <div class="container">
                <div class="ClassHeadC">
                    <h6 className='fw-bold'>Sunday , 20 Jan</h6>
                    <small className='Pending-C fw-bold '>Requested</small>
                </div>
            </div>
        </div>
        <div className="overlayASchedule bg-dark PendingS">
            <div className='text-center'>
                <h6 className="fw-bold text-light pb-3 mt-3">Sunday , 20 Jan</h6>
            </div>
            <div className="containerADS">
                <img src={EventImg} alt="Snow" className='Img-Sch-Event ' />
                
                {/* Background color */}
                <div className="LeftTopScA"> </div>
                {/* Background color */}

                <div className="LeftTopSc ">
                    <h5 className="mt-2 text-warning ">Raddussond Blue</h5>
                    <p className="text-white">Lorem Ipsum is simply dummy text of the printing</p>
                </div>
            </div>
        </div>
        </Link>
    </div>

</div>
</div>
</>
)
}

export default StarDashEvent