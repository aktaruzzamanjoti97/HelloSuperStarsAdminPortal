import React from 'react';
import { Link } from 'react-router-dom';
import ShakibBanner from '../../../../../../assets/images/SakibBanner.PNG';
import ShakibPlayVideoGreetings from '../../../../../../assets/images/ShakibPlayVideoGreetings.png';
import './GreetingsReadyPage.css';

const GreetingsReadyPage = () => {
    return (
        <div>
            <div className="row">

                <div className="wishfulBannerDiv ms-3">
                    <img className="img-fluid wishfulBanner" src={ShakibBanner} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 greetingMessages">
                    <div className="wishfulMessages text-white my-4 mx-3">
                        <h3>Get a wishful message from Sakib al hasan</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>

                    <div className="row my-4 mx-3">
                        <div className="d-flex justify-content-center costDisplay col-md-3 p-4">
                            <div className="funnelDollar">
                                <i class="fas fa-funnel-dollar"></i>
                            </div>
                            <div className="mx-2 text-white">
                                <span className="costParaTag"><big>Cost</big></span>
                                <h5 style={{ color: '#ffeb7f' }}><span className="mx-1">200</span>BDT</h5>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-md-4">
                    <div className="my-4">
                        <img className="img-fluid" src={ShakibPlayVideoGreetings} alt="" />
                    </div>
                </div>
            </div>

            <div className="mx-3 mb-4">
                <Link to="/superstar-admin/notify">
                    <button type="button" className='greetingsNextButton'>Next</button>
                </Link>
                
                <button type="button" className='greetingsEditButton text-warning mx-2'>Edit</button>
            </div>

        </div>
    );
};

export default GreetingsReadyPage;