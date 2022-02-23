import React from 'react';
import { useHistory } from 'react-router-dom';
import calendar from '../../../../../../assets/images/meetupEvent/calendar.png';
import Clock from '../../../../../../assets/images/meetupEvent/clock-icon.png';
import Fly from '../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png';
import SouvenirAuctionBanner from '../../../../../../assets/images/SouvenirJoti.png';



const ConfirmOrEditAuction = () => {

    let history = useHistory();

    function handleClick() {
        // history.push('/superstar-admin/souvenir/live-biddings');
        history.push('/superstar-admin/souvenir/live-biddings');
    }


    return (
        <div>
            <div>
                <img className='w-100' src={SouvenirAuctionBanner} alt="" />
            </div>
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



                </div>


                <div className="col-md-4 ">
                    <img src={Fly} alt="Pineapple" className='img-fluid Cricket-Img' />
                </div>

            </div>

            <div className=''>
                <table class="table table-borderless table-dark">
                    <thead className="">
                        <tr>
                            <th scope="col">User</th>
                            <th scope="col">Name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Remaining Time</th>
                            <th scope="col">Status</th>
                            <th scope="col">Auction</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Akij</td>
                            <td>$ 200</td>
                            <td>22:15:40</td>
                            <td>Applied</td>
                            <td><button className='btn btn-warning m-0 py-0 px-1'><small>Checkout</small></button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Akij</td>
                            <td>$ 200</td>
                            <td><FontAwesomeIcon icon="fa-solid fa-clock" /> 22:15:40</td>
                            <td>Invited</td>
                            <td><button className='btn btn-secondary m-0 py-0 px-1'><small>Checkout</small></button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Akij</td>
                            <td>$ 200</td>
                            <td>22:15:40</td>
                            <td>Invited</td>
                            <td><button className='btn btn-secondary m-0 py-0 px-1'><small>Checkout</small></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ConfirmOrEditAuction;