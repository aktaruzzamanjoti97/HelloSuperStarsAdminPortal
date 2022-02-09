import React from 'react';
import SouvenirNav from '../../../../SouvenirNav';
import LiveIcon from '../../../../../../../../../assets/images/Souvenir/live.png'
import LiveI from '../../../../../../../../../assets/images/Souvenir/LivwNow.png'
import Man from '../../../../../../../../../assets/images/Souvenir/3201.png'
import Men from '../../../../../../../../../assets/images/Souvenir/bid.png'
import MarketPlaceNav from '../../../../MarketPlaceNav';
import FootballJersey from '../../../../../../../../../assets/images/footBallJersey.jpg'
import Unsold from '../../../../../../../../../assets/images/Souvenir/packages.png';
import tagPrice from '../../../../../../../../../assets/images/tagPrice.PNG';
import dollarSold from '../../../../../../../../../assets/images/dollarSign-removebg-preview.png'
import './MarketPlaceSouvenir.css'

const MarketPlaceSouvenir = () => {
    return (
        <div>
            <div className="AS m-3">
                <MarketPlaceNav />
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
                        <img src={FootballJersey} className='footBallJerseyImage img-fluid VX-S' alt="" />
                    </div>

                    <div className="SouvenirI mx-4 mt-3">

                        <div className="mb-4">
                            <div className="text-light fw-bold mt-1 mx-2">
                                <h3>Jersey</h3>
                            </div>
                            <div className="text-light  mt-1 mx-2 ">
                                <small>Started 16th June, 2021</small>
                            </div>
                        </div>

                        <div className="d-flex  p-2 mb-2">
                            <img src={tagPrice} className=' SouvenirIcon' alt="" />

                            <div className=" d-flex text-light  mt-1 mx-3 fw-bold ">
                                20  <span className="ms-3">/</span> <span className="unitFontText ms-3 mt-2">unit</span>
                            </div>
                        </div>

                        {/* <div className="d-flex p-2">
                            <img src={Men} className=' SouvenirIcon' alt="" />

                            <div className=" d-flex text-light mt-1 mx-3 fw-bold ">
                                145000
                            </div>
                        </div> */}

                        <div>
                            <div className="d-flex">
                                <div className="bg-dark px-4 py-3 rounded">
                                    <small className="text-white">Total</small>
                                    <div className="d-flex mt-2">
                                        <img src={Unsold} className='img-fluid' width="30px" alt="" />
                                        <h4 className="ms-3 text-white fw-bold">40</h4>
                                    </div>
                                </div>
                                <div className="bg-dark ms-3 px-4 py-3 rounded">
                                    <small className="text-white">Sold</small>
                                    <div className="d-flex mt-2">
                                        <img src={dollarSold} className='img-fluid' width="40px" alt="" />
                                        <h4 className="ms-3 text-white fw-bold">30</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default MarketPlaceSouvenir;