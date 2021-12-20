import React from 'react';
import './WelcomeSueprstar.css';
import backgroundBanner from '../../../../../assets/images/backGroundBanner.png'
import helloSuperStarLogo from '../../../../../assets/images/helloSuperStar.png';
import footerPhoto from '../../../../../assets/images/24783.jpg';

import qrCode from '../../../../../assets/images/qrCode.png'

const WelcomeSuperStar = () => {
    return (
        <div className="my-3 superStarBackground">
            <div className="superStar-container">
                <div className="d-flex justify-content-end">

                    <div>
                        <div className="d-flex justify-content-end">
                            <img className="img-fluid" src={backgroundBanner} width="200" height="250" alt="" />
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="superStarLogo2">
                        <img className="img-fluid" width="100" height="100" src={helloSuperStarLogo} alt="" />
                    </div>
                </div>
                <div>
                    <div className="my-5 superStarHeadingStyle">
                        <h5 className="my-2 text-center">Dear,</h5>
                        <h1 className="my-2 text-center">Shakib Al Hasan</h1>
                    </div>

                    <h4 className="my-5 text-center">Welcome to Hello Superstar</h4>

                    <p className="my-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui natus explicabo cum repudiandae animi fuga omnis placeat sapiente quam sit dicta reiciendis, consequuntur deleniti dolorem excepturi delectus inventore vitae labore. Impedit nemo nisi tempore, labore facere, earum exercitationem consequatur nihil necessitatibus, repellendus laudantium reiciendis eveniet iure et quam? Eos incidunt, nemo doloribus sed nihil temporibus, quasi asperiores, deleniti sapiente nisi quidem! Sed, suscipit a explicabo expedita veniam ipsam blanditiis officiis.</p>

                    <ol className="my-2 text-center">
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, reprehenderit!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, reprehenderit!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, reprehenderit!</li>
                        <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, reprehenderit!</li>
                    </ol>
                </div>

                <div className="my-5 text-center">
                    <img width="140" src={qrCode} alt="" />
                   
                </div>

                <div>
                    <img className="img-fluid footerImage w-100" src={footerPhoto} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WelcomeSuperStar;