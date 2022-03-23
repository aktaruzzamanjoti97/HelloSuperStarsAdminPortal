import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const NotifyScheduleForm = () => {
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
                        <div className="card bg-dark my-3">
                            <div className="card-body container-fluid">
                                <h6 className='text-light'>Create Schedule</h6>

                                <div className="my-3 row">
                                    <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">Date</label>
                                    <div className="col-sm-8 ">
                                        <input name="date" type="date" className="form-control w-50  form-style" />
                                    </div>
                                </div>

                                <div className="my-3 row">
                                    <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">From</label>
                                    <div className="col-sm-8 ">
                                        <input name="from" type="time" className="form-control w-50 form-style" />
                                    </div>
                                </div>


                                <div className="my-3 row">
                                    <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">To</label>
                                    <div className="col-sm-8 ">
                                        <input name="to" type="time" className="form-control w-50 form-style" />
                                    </div>
                                </div>


                                <div className="my-3 row">
                                    <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">Target</label>
                                    <div className="col-sm-8 ">
                                        <input name="target" type="text" className="form-control w-50 form-style" />
                                    </div>
                                </div>

                                <div className="my-3 row">
                                    <div for="inputPassword" className="col-sm-1 col-form-label "></div>
                                    <div className="col-sm-8 d-flex">

                                        <Link to='/superstar-admin/notify-schedule/view'><button className="btn btn-warning px-4 ">Save</button></Link>

                                        <button onClick={() => handleRemoveClick(i)} className="btn btn-danger px-4 mx-4">Remove Schedule</button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    )
                })
            }

        </>

    );
};

export default NotifyScheduleForm;
