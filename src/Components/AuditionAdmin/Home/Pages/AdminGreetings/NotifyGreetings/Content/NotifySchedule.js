import React, { useState } from 'react';
import NotifyScheduleForm from './NotifyScheduleForm';

const StarNotifySchedule = () => {
    const [data, setData] = useState([
        <NotifyScheduleForm />
    ])


    const singleInput = (
        <NotifyScheduleForm />
    );

    const handleAddClick = () => {
        setData([...data, singleInput]);
    }


    return (
        <div className='container-fluid my-2'>
            <div className="d-flex justify-content-between">
                <h5 className='text-light'>Schedules</h5>

                <div className="d-flex flex-column">
                    <button onClick={handleAddClick} type="button" className="btn btn-warning px-4 py-1"><span className='fw-bold'>+</span> New Schedule</button>
                </div>

            </div>
            {data.map((single, i) => {
                return (
                    <div>
                        <div key={i}>{single}</div>
                        <div>{console.log(single)}</div>
                    </div>
                );
            })}
        </div>
    );
};

export default StarNotifySchedule;
