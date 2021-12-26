import React from 'react';
import ShakibBanner from '../../../../../../assets/images/SakibBanner.PNG';
import './GreetingsReadyPage.css';

const GreetingsReadyPage = () => {
    return (
        <div>
            <div className="row">
                <div className="col-12">
                    <img src={ShakibBanner} alt="" />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8">
                    <div className="wishfullMessages">

                    </div>
                    <div className="cost">

                    </div>
                    
                </div>
                <div className="col-md-4">

                </div>
            </div>

        </div>
    );
};

export default GreetingsReadyPage;