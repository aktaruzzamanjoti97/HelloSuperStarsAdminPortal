import React from 'react';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import MeetUpEventNave from '../MeetUpEventNave';
import PendingEventSliders from './CompletedEventSliders/PendingEventSliders';
import './LiveMeetUp.css';

const PendingMeetupList = () => {

    return (
        <>
            <div className="AS">
                <MeetUpEventNave />

                <div className="liveMeetupBorder my-5">
                    <div className="d-flex px-4 pt-3">
                        <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                        <h4 className="mx-3 text-white p-2">Pending Meetup Events</h4>
                    </div>

                    <div className="pb-3">
                        <PendingEventSliders />
                    </div>

                </div>

            </div>
        </>
    )
}

export default PendingMeetupList

