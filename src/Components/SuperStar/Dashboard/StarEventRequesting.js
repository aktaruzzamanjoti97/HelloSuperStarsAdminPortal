import React from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import star from '../../../../src/assets/images/helloSuperStar.png'
// const percentage = 66;
const StarEventRequesting = () => {

return (
<div className='container-fluid my-2'>
  <div className="d-flex justify-content-between">
    <h5 className='text-light'>Schedules</h5>
    <Link to='/superstar-admin/notify-schedule'>
    <div className="btn btn-warning px-4 py-1"><span className='fw-bold'>+</span> New Schedule</div>
    </Link>
  </div>
  <div className="card bg-dark my-3">
    <div className="card-body container-fluid">

      <div className="row">
        <div className="col-md-8">
          <h5 className="text-light">January-15 days to go</h5>
          <div className="row mt-4">
            <div className="col-2">
              <p className='text-muted fw-bold'>Date</p>
            </div>
            <div className="col-10">
              <p className="text-light">5th January 2021</p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-2">
              <p className='text-muted fw-bold'>From</p>
            </div>
            <div className="col-10">
              <p className="text-light">6:50PM</p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-2">
              <p className='text-muted fw-bold'>To</p>
            </div>
            <div className="col-10">
              <p className="text-light">6:00</p>
            </div>
          </div>
          <div className="row mb-2">
            <div className="col-2">
              <p className='text-muted fw-bold'>Target</p>
            </div>
            <div className="col-10">
              <p className="text-light">6 call</p>
            </div>
          </div>

          <div className="row mb-2">
            <div className="col-2">
              <p className='text-muted fw-bold'>Assurance</p>
            </div>
            <div className="col-10">
              <p className="text-light">I am "Mr stack" Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam,
                pariatur?</p>
            </div>
          </div>
          <button className="btn btn-warning px-4 py-1">Edit</button>
          <button className="btn btn-outline-warning px-4 py-1 ms-5">Delete</button>
        </div>

        <div className="col-md-4 ">

          <div>
            <h5 className='text-light  my-3'>Status</h5>
            <p className='text-light  my-3'><i className="far fa-check-circle text-warning"></i> Superstar confirmation
            </p>
            <br />
            <Link to='/superstar'>
            <button className="btn bg-warning fw-bold">Approved</button>
            </Link>

          </div>
          <div>

          </div>
        </div>
      </div>

    </div>
  </div>
</div>
);
};

export default StarEventRequesting;