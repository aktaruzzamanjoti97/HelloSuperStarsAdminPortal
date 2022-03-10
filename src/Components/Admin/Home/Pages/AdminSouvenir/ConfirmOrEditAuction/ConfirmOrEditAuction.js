import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileUser from '../../../../../../assets/images/liveBiddersWinner.jpg';
import calendar from '../../../../../../assets/images/meetupEvent/calendar.png';
import Clock from '../../../../../../assets/images/meetupEvent/clock-icon.png';
import Fly from '../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png';
import SouvenirAuctionBanner from '../../../../../../assets/images/SouvenirJoti.png';
import './ConfirmOrEditAuction.css';
import axios from 'axios';
import moment from 'moment';


const ConfirmOrEditAuction = () => {

    let history = useHistory();

    function handleClick() {
        // history.push('/superstar-admin/souvenir/live-biddings');
        history.push('/superstar-admin/souvenir/live-biddings');
    }

    function editProduct(){
        history.push(`/superstar-admin/souvenir/edit-auction/${auctionConfirm.id}`)
    }

    const[auctionConfirm, setConfirmation]=useState([]);


    useEffect(() => {

        axios.get(`/api/admin/editOrConfirm/auction/editOrConfirm`).then((res) => {
    
          if (res.status === 200) {
            setConfirmation(res.data.product);
          }
          
        });
    
        console.log();
      }, []);
    
     


    return (
        <div>
            <div>
                <img className='w-100' src={`http://localhost:8000/${auctionConfirm.banner}`} alt="" style={{height:'700px', width:'1080px' }}/>
            </div>
            <div className="row my-3">



                <div className="col-md-8 mb-5">
                    <div className="card event-card2 shadow">
                        <div className="card-body">
                            <h5 className="text-light mb-3">
                                {auctionConfirm.name}
                            </h5>
                            <p className="text-light">
                                {auctionConfirm.details}
                            </p>
                            <p className="text-light ">
                            {auctionConfirm.title}
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
                                <span className="text-warning  BtnTextNMP Usd fw-bold">{moment(auctionConfirm.bid_to).format('LL')}</span>
                            </div>
                        </div>

                        <div className=" d-flex p-4 buTon-EMN ">
                            <div className=" mt-2 mx-3">
                                <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1 ">
                                <span className="text-light">Time</span>
                                <br></br>
                                <span className="text-warning  BtnTextNMP Usd fw-bold">{moment(auctionConfirm.bid_to).format('LT')}</span>
                            </div>
                        </div>
                    </div>

                        <div className='d-flex'>
                            <button onClick={handleClick} className="btn btn-warning confirmButton">Confirm</button>
                            <button onClick={editProduct} className="btn btn-secondary mx-2 deleteButton">Edit</button>
                        </div>

                </div>


                <div className="col-md-4 ">
                    <img src={`http://localhost:8000/${auctionConfirm.product_image}`} alt="Pineapple" className='img-fluid Cricket-Img' />
                </div>

            </div>

        </div>
    );
};

export default ConfirmOrEditAuction;