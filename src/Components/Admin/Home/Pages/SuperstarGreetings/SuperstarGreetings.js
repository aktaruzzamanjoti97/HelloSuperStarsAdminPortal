import React from 'react';
import './SuperstarGreetings.css';

const SuperstarGreetings = () => {
    return (
        <div className="">
            <div className="greetingsHeight d-flex justify-content-center align-items-center">
                <div className="text-center">
                    <div className="box-open">
                        <i style={{ color: '#ffc107' }} class="fas fa-box-open"></i>
                    </div>

                    <div className="text-white">
                        <h3>No Data Here</h3>
                        <p><big>Create Default Greeting Profile Now</big></p>
                        <p className="text-muted"><small>A default greetings profile will enable the users <br /> to
                            understand and apply  for greeting videos</small></p>
                    </div>

                    <button className="btn btn-warning mt-2 w-50">Create New</button>
                </div>
            </div>
        </div>
    );
};

export default SuperstarGreetings;