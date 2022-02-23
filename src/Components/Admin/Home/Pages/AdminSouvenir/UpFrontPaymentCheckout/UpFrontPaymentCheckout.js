import React from 'react';

const UpFrontPaymentCheckout = () => {
    return (
        <>
            <div className="row my-3">



                <div className="col-md-8 mb-5">
                    <div className="card event-card2 shadow">
                        <div className="card-body">
                            <h5 className="text-light mb-3">
                                Cricket jersey
                            </h5>
                            <p className="text-light">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type
                                specimen book.
                            </p>
                            <p className="text-light ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p>
                        </div>
                    </div>

                    <div className=" d-flex mt-5 mb-5 cricket-jersey">
                        <div className="d-flex p-4 buTon-EMN">
                            <div className="mt-2  mx-3 ">
                                <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1">
                                <span className="text-light">Last Date</span>
                                <br></br>
                                <span className="text-warning  BtnTextNMP Usd fw-bold">21th November</span>
                            </div>
                        </div>

                        <div className=" d-flex p-4 buTon-EMN ">
                            <div className=" mt-2 mx-3">
                                <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1 ">
                                <span className="text-light">Time</span>
                                <br></br>
                                <span className="text-warning  BtnTextNMP Usd fw-bold">11:00 PM</span>
                            </div>
                        </div>
                    </div>

                    <button onClick={handleClick} className='btn Cri-btn-x border-warning fw-bold px-5'>Confirm </button>
                    <button className='btn border-warning fw-bold mx-3  px-5 Cri-btn'>Edit</button>

                </div>


                <div className="col-md-4 ">
                    <img src={Fly} alt="Pineapple" className='img-fluid Cricket-Img' />
                </div>

            </div>
        </>
    );
};

export default UpFrontPaymentCheckout;