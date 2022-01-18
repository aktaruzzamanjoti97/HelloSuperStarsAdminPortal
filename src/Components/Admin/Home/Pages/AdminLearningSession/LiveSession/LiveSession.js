import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import LearningSessionNave from '../LearningSessionNave';
import LiveSessionCarosuel from './LiveSessionCarosuel';

const LiveSession = () => {

    return (
        <>
            <div className="AS">
                <LearningSessionNave/>
                <div className="liveMeetupBorder my-5">
                    <div className="d-flex px-4 pt-3">
                        <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                        <h4 className="mx-3 text-white p-2">Completed Sessions</h4>
                    </div>

                    <div className="pb-3">
                        <LiveSessionCarosuel/>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LiveSession
