import axios from 'axios';
import { Markup } from 'interweave';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import profileUser from '../../../../../../assets/images/liveBiddersWinner.jpg';
import calendar from '../../../../../../assets/images/meetupEvent/calendar.png';
import Clock from '../../../../../../assets/images/meetupEvent/clock-icon.png';
import Fly from '../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png';
import SouvenirAuctionBanner from '../../../../../../assets/images/SouvenirJoti.png';
import CricketJerseyModal2 from '../../Souviner-admin/CricketJersey/CricketJerseyModal2';

const LiveBiddingsCheckout = () => {

    const params  = useParams();

    //alert(auction_id)

    const [product, setProduct] = useState();

    const [modalShow, setModalShow] = React.useState(false);

    let history = useHistory();

    useEffect(()=>{

        axios.get(`/api/admin/show/auction/product/${params.id}`).then((res)=>{
        if(res.status === 200){
            setProduct(res.data.product)
        }
    })
    },[params.id])


    return (
        <div>
            <div>
                <img className='w-100' src={`http://localhost:8000/${product?.banner}`} alt="" />
            </div>
            <div className="row mt-3">



                <div className="col-md-8 mb-5">
                    <div className="card event-card2 shadow">
                        <div className="card-body">
                            <h5 className="text-light mb-3">
                                {product?.title}
                            </h5>
                            <p className="text-light">
                                <Markup content={product?.details}/>
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
                                <span className="text-warning  BtnTextNMP Usd fw-bold">{moment(product?.bid_to).format('LL')}</span>
                            </div>
                        </div>

                        <div className=" d-flex p-4 buTon-EMN ">
                            <div className=" mt-2 mx-3">
                                <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1 ">
                                <span className="text-light">Time</span>
                                <br></br>
                                <span className="text-warning  BtnTextNMP Usd fw-bold">{moment(product?.bid_to).format('HH:mm a')}</span>
                            </div>
                        </div>
                    </div>



                </div>


                <div className="col-md-4 ">
                    <img src={`http://localhost:8000/${product?.product_image}`} alt="Pineapple" className='img-fluid Cricket-Img' />
                </div>

            </div>

            <div className='bg-dark table-style p-3'>
                <h6 className=""><i className="fa-solid fa-box-archive text-warning"></i> <span className="text-light mx-3">Upfront Payment</span></h6>

                <table className="table table-borderless table-dark">
                    <thead className="thead-dark">
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
                            <th scope="row"><img className="img-fluid profile-user-biddings" src={profileUser} alt="" /></th>
                            <td>Akij Hossain</td>
                            <td>$ 200</td>
                            <td><i className="fa-solid fa-clock text-white"></i> 22:15:40</td>
                            <td>Applied</td>
                            <td><button onClick={() => setModalShow(true)} className='btn btn-warning m-0 py-0 px-1'><small>Checkout</small></button></td>
                            <CricketJerseyModal2
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </tr>
                        <tr>
                            <th scope="row"><img className="img-fluid profile-user-biddings" src={profileUser} alt="" /></th>
                            <td>Akij Hossain</td>
                            <td>$ 200</td>
                            <td> <i className="fa-solid fa-clock text-white"></i> 22:15:40</td>
                            <td>Invited</td>
                            <td><button className='btn btn-secondary m-0 py-0 px-1'><small>Checkout</small></button></td>
                        </tr>
                        <tr>
                            <th scope="row"><img className="img-fluid profile-user-biddings" src={profileUser} alt="" /></th>
                            <td>Akij Hossain</td>
                            <td>$ 200</td>
                            <td><i className="fa-solid fa-clock text-white"></i> 22:15:40</td>
                            <td>Invited</td>
                            <td><button className='btn btn-secondary m-0 py-0 px-1'><small>Checkout</small></button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LiveBiddingsCheckout;