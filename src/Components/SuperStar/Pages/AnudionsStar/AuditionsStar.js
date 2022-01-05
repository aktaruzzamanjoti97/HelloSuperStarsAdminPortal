import React from 'react'
import './AudtionsStar.css'
import Banner from '../../../../assets/images/Auditions/unsplash_IeTLKtzbLNo.png'

import calendar from '../../../../assets/images/Auditions/flag.png'
import Clock from '../../../../assets/images/Auditions/finish.png'

import Spotlight from '../../../../assets/images/Auditions/spotlight.png'
import Unsplash from '../../../../assets/images/Auditions/unsplash.png'

import { Link } from 'react-router-dom'

const AuditionsStar = () => {
return (
<>
    <div className="card m-3">
        <img src={Banner} alt="" className='Banner-Auditions' />
    </div>

    <div className='row m-3 d-flex Audition-Main'>
        <div className='mt-4 mb-5  col-md-9'>
            <h4 className='text-light fw-bold  mb-4 '>
                Guitar for the beginners
            </h4>
            <p className='text-light '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
                specimen book.
            </p>
            <p className='text-light '>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p> <br />

            <div className=" col-12 BTN-x-P">
                <div className="d-flex  buTon-EMN py-2 p-3">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light">Start</span>
                        <br></br>
                        <span className="text-warning BtnTextNMP fw-bold">21st November </span>
                    </div>
                </div>

                <div className="d-flex buTon-EMN py-2 p-3 ">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light">End</span>
                        <br></br>
                        <span className="text-warning BtnTextNMP fw-bold">21st December </span>
                    </div>
                </div>

            </div>
            <div className="mt-3">
                <Link to='/superstar/dashboard'>
                    <button className='btn MEN-X fw-bold'>Approve </button>
                </Link>
                <button className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>
            </div>
        </div>

        <div className="mt-4 col-md-3  AN-Adx ">
            <div className="d-flex">
                <div className="d-flex  AuditionSR-r p-2 fw-bolder  w-100">
                    <div className=" mx-4 mt-2">
                        <img src={Spotlight} alt="" className='SpotLightI' />
                    </div>
                    <div className=" mt-2 mb-2 text-warning">
                        Judgement panel
                    </div>
                </div>
            </div>
            <div className="d-flex  py-2 AuditionSR-p ">
                <div className=" mx-4 mt-2">
                    <span className="mt-2"> <img src={Unsplash} alt="" className='AuditionsStrImg' /></span>
                </div>
                <div className="mt-2">
                    <span className="text-light Star-text-Au">Superstar Name</span>
                    <br></br>
                    <span className="text-warning music-text">Music</span>
                </div>
            </div>
            <div className="d-flex  py-2 AuditionSR-p ">
                <div className=" mx-4 mt-2">
                    <span className="mt-2"> <img src={Unsplash} alt="" className='AuditionsStrImg' /></span>
                </div>
                <div className="mt-2">
                    <span className="text-light Star-text-Au">Superstar Name</span>
                    <br></br>
                    <span className="text-warning music-text">Music</span>
                </div>
            </div>
        </div>

    </div>

</>
)
}

export default AuditionsStar