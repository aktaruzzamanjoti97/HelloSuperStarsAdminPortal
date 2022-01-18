import React from 'react';

const LiveChatScheduleFormCom = () => {
    return (
        <div className="card bg-dark my-3">
        <div className="card-body container-fluid">
            <h6 className='text-light'>Create Schedule</h6>
    
            <div className="my-3 row">
                <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">Date</label>
                <div className="col-sm-8 ">
                    <input type="date" className="form-control w-50  form-style" />
                </div>
            </div>
    
            <div className="my-3 row">
                <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">From</label>
                <div className="col-sm-8 ">
                    <input type="time" className="form-control w-50 form-style" />
                </div>
            </div>
    
    
            <div className="my-3 row">
                <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">To</label>
                <div className="col-sm-8 ">
                    <input type="time" className="form-control w-50 form-style" />
                </div>
            </div>
    
    
            <div className="my-3 row">
                <label for="inputPassword" className="col-sm-1 col-form-label  text-light ">Target</label>
                <div className="col-sm-8 ">
                    <input type="text" className="form-control w-50 form-style" />
                </div>
            </div>
    
            <div className="my-3 row">
                <div for="inputPassword" className="col-sm-1 col-form-label "></div>
                <div className="col-sm-8 ">
                <button className="btn btn-warning px-4 ">Save</button>
                </div>
            </div>
    
        </div>
    </div>
    );
};

export default LiveChatScheduleFormCom;