import React from 'react'
import { Link } from 'react-router-dom'
import EventImg from '../../../assets/images/SakibBanner2.png'
const AdminDashEvent = () => {
return (
<>
    <div className="col-md-12 ">

        <div className="d-flex  pt-3">
            <div className="faTrophy"><i className="fas fa-trophy"></i></div>
            <h4 className="mx-3 text-light p-2">January , 2022</h4>
        </div>

        <div className="row mx-1 ">
            
            <div className="containerASD col-3 my-3  mx-2 PendingAS">
                <div className="text">
                    <p> Sunday, 1st Jan</p>
                    <p>Pending</p>
                </div>
                <div className="overlay">
                    <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                    <div className="card bg-dark border-warning CardAdShe">

                        <div className="card-body mb-2 text-black">

                            <div className='text-center'>
                                <h6 className="fw-bold text-light pb-3">1st Jan</h6>
                            </div>

                            <div className="containerADS">
                                <img src={EventImg} alt="Snow" className='ImgSMeet' />
                                <div className="top-left-AD_S">
                                    <h5 className="mt-2 text-warning Tex_tileAS">Raddussond Blue</h5>
                                    <p className="text-white Tex_tileASS ">Lorem Ipsum is simply dummy text of the
                                        printing
                                        and</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>

            <div className="containerASD col-3 my-3 mx-2  PendingASp">
                <div className="text">
                    <p> Sunday, 1st Jan</p>
                    <p>Approved</p>
                </div>
                <div className="overlay">
                    <Link to='/superstar-admin/dashboard/event-list' className='LinkEventSchedule'>
                    <div className="card bg-dark border-warning CardAdShe">

                        <div className="card-body mb-2 text-black">

                            <div className='text-center'>
                                <h6 className="fw-bold text-light pb-3">1st Jan</h6>
                            </div>

                            <div className="containerADS">
                                <img src={EventImg} alt="Snow" className='ImgSMeet' />
                                <div className="top-left-AD_S">
                                    <h5 className="mt-2 text-warning Tex_tileAS">Raddussond Blue</h5>
                                    <p className="text-white Tex_tileASS ">Lorem Ipsum is simply dummy text of the
                                        printing
                                        and</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
            

            <div className="col-md-3  d-flex CardAdShe_S">
                <div className="card bg-dark  bg-dark border-warning  my-3">

                    <div className="card-body mb-2 text-black">

                        <div className='text-center'>
                            <h6 className="fw-bold text-light pb-3">Demo</h6>
                        </div>

                        <div className="containerADS">
                            <img src={EventImg} alt="Snow" className='ImgSMeet' />
                            <div className="top-left-AD_S">
                                <h5 className="mt-2 text-warning Tex_tileAS">Raddussond Blue</h5>
                                <p className="text-white Tex_tileASS ">Lorem Ipsum is simply dummy text of the printing
                                    and</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            

        </div>
    </div>
</>
)
}

export default AdminDashEvent