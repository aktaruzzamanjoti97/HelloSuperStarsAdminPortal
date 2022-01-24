import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NewSchedule.css'
const NewScheduleForm = () => {
const [inputFieldList, setInputFieldList] = useState([{ name: '', from: '', to: '', target: '' }])

const handleRemoveClick = (index) => {
const fieldList = [...inputFieldList];
fieldList.splice(index, 1);
setInputFieldList(fieldList);
}

return (
<>

    {
    inputFieldList.map((x, i) => {
    return (
    <>


                <div className="row ">

                    <div className="col-md-5">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                    <h5 className="mt-2 text-warning col-md-3 Width-Ms">Title</h5>
                                    <select className='col-md-9 ScheduleCreateBg'>
                                        <option>Live Chat</option>
                                        <option>Learning Session</option>
                                        <option>Meetup Event</option>
                                    </select>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                    <h5 className="mt-2 text-warning col-md-3 Width-Ms">From</h5>
                                    <input className='col-md-9 ScheduleCreateBg' type="time" name='time'/>
                                </div>
                            </div>
                    </div>


                    <div className="col-md-3">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                    <h5 className="mt-2 text-warning col-md-3 Width-Ms">To</h5>
                                    <input className='col-md-9 ScheduleCreateBg ' type="time" name='time'/>
                                </div>
                            </div>
                    </div>

                    <div className="col-md-1">
                            <div className=" mb-2 text-black">
                                <div className="d-flex">
                                <button onClick={()=> handleRemoveClick(i)} className="btn btn-danger px-4 mx-4"><i class="fas fa-trash-alt"></i></button>
                                </div>
                            </div>
                    </div>

                </div>
        
    </>
    )
    })
    }

</>

);
};

export default NewScheduleForm;