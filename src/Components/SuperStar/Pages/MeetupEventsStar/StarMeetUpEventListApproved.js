import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MeetUpEventNave from './MeetUpEventNave';
import ApprovedEventSliders from './ApprovedEventSliders';
import './LiveMeetUp.css';

const StarMeetUpEventListApproved = () => {

    return (
        <>
            <div className="AS">
                <MeetUpEventNave />

                <div className="liveMeetupBorder my-5">
                    <div className="d-flex px-4 pt-3">
                        <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                        <h4 className="mx-3 text-white p-2">Approved Meetup Events</h4>
                    </div>

                    <div className="pb-3">
                        <ApprovedEventSliders />
                    </div>

                </div>

            </div>
        </>
    )
}

export default StarMeetUpEventListApproved

