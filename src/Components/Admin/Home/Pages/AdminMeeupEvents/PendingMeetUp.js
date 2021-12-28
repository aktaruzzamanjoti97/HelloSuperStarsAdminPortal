import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Live from '../../../../../assets/images/instagram-live 1.png'
import Pending from '../../../../../assets/images/pending 2.png'
import Add from '../../../../../assets/images/UpcomingEvent/add 1.png'
import MeetUpEventNave from './MeetUpEventNave';

const PendingMeetUp = () => {

return (
<>
    <div className="AS">
        <MeetUpEventNave/>

        <h1 style={{ color:'white' }}>Pending Meet Up</h1>

    </div>
</>
)
}

export default PendingMeetUp
