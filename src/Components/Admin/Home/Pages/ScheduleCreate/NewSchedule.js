import React, { useState } from 'react';
import NewScheduleForm from './NewScheduleForm';

const NewSchedule = (props) => {
  
    const {schedule}=props;
const [data, setData] = useState([
<NewScheduleForm />
])

const singleInput = (
<NewScheduleForm />
);

const handleAddClick = () => {
setData([...data, singleInput]);
}

return (
<div className='container-fluid my-2 bg-dark SN-ce'>
    <div className="d-flex justify-content-between">
        <h5 className='text-light mt-4 mx-4'>{schedule.day} {schedule.month.name} {schedule.year}</h5>
        <hr/>
    </div>
    {data.map((single, i) => {
    return (
    <>
        <div className="mt-3">

            <div className="col-md-11 mx-4">
                <div key={i}>{single}</div>
                <div>{console.log(single)}</div>

            </div>
        </div>
    </>
    );
    }

    )}
        <div className="d-flex mt-4 mb-5 pb-4 justify-content-center">
            <button type="button" className="btn btn-primary  bntTSC"
            onClick={() => props.onClick(false,schedule.day)}
          
            >Save</button>
            <button onClick={handleAddClick} type="button" className="btn btn-success mx-3 bntTSC "
            ><i class="fas fa-plus"></i> &nbsp;New Schedule</button>
        </div>

</div>
);
};

export default NewSchedule;