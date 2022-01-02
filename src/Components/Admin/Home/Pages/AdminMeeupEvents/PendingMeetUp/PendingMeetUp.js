import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom'
// import Live from '../../../../../assets/images/instagram-live 1.png'
// import Pending from '../../../../../assets/images/pending 2.png'
// import Add from '../../../../../assets/images/UpcomingEvent/add 1.png'
import EventDetails from '../EventDetails/EventDetails'
import MeetUpEventNave from '../MeetUpEventNave';

const PendingMeetUp = () => {

    return (
        <>
            <div className="AS">
                <MeetUpEventNave />

                <EventDetails />

            </div>
        </>
    )
}

export default PendingMeetUp
