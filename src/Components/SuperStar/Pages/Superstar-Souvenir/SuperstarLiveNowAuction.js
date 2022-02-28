import React from 'react'
import Man from '../../../../assets/images/Souvenir/3201.png'
import Men from '../../../../assets/images/Souvenir/bid.png'
import LiveIcon from '../../../../assets/images/Souvenir/live.png'
import LiveI from '../../../../assets/images/Souvenir/LivwNow.png'
import SuperstarSouvenirNav from './SupestarSouvenirNav/SuperstarSouvenirNav'
// import SuperstarSouvenirNav from '../SupestarSouvenirNav/SuperstarSouvenirNav'

const SuperstarLiveNowAuction = () => {
return (
<>
    <div className="AS m-3">
        {/* <SouvenirNav /> */}
        <SuperstarSouvenirNav />
        <div className="d-flex mb-4 mt-5">

            <div className=" d-flex">
                <img src={LiveIcon} className=' SouvenirIcon' alt="" />
            </div>

            <div className=" d-flex text-light fw-bold mt-1 mx-3 ">
                Live Now
            </div>
        </div>

        <div className="d-flex  Souvenir-Live col-5">

            <div className="SouvenirI d-flex">
                <img src={LiveI} className='img-fluid VX-S' alt="" />
            </div>

            <div className="SouvenirI mx-4 mt-3">

                <div className="mb-4">
                    <div className="text-light fw-bold mt-1 mx-2">
                        <h3>Cricket ball</h3>
                    </div>
                    <div className="text-light  mt-1 mx-2 ">
                        <small>Started 16th June, 2021</small>
                    </div>
                </div>

                <div className="d-flex  p-2 mb-2">
                    <img src={Man} className=' SouvenirIcon' alt="" />

                    <div className=" d-flex text-light  mt-1 mx-3 fw-bold ">
                        108
                    </div>
                </div>

                <div className="d-flex p-2">
                    <img src={Men} className=' SouvenirIcon' alt="" />

                    <div className=" d-flex text-light mt-1 mx-3 fw-bold ">
                        145000
                    </div>
                </div>

            </div>

        </div>

    </div>
</>
)
}

export default SuperstarLiveNowAuction