import React, { useState } from 'react';
import LiveChatScheduleFormCom from './LiveChatScheduleFormCom';

const LiveChatSchedule = () => {
    const [data, setData] = useState([
        <LiveChatScheduleFormCom />
    ])


    const singleInput = (
        <LiveChatScheduleFormCom />
    );
    return (
        <div className='container-fluid my-2'>
            <div className="d-flex justify-content-between">
                <h5 className='text-light'>Schedules</h5>
                <button onClick={() => {
                    setData([...data, singleInput]);
                }} className="btn btn-warning px-4 py-1"><span className='fw-bold'>+</span> New Schedule</button>
            </div>
            {data.map((single,index) => {
                return <div key={index}>{single}</div>;
            })}
        </div>
    );
};

export default LiveChatSchedule;