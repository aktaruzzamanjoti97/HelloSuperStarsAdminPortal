import React, { useState, useEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import clock from '../../../../../../assets/images/meetupEvent/clock.png'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import axios from "axios";
import "./SuperStarContent.css";
import { Markup } from 'interweave';
import moment from 'moment';
import { textAlign } from '@mui/system';
import { CenterFocusStrong } from '@mui/icons-material';




const PendingProductDetails = () => {

    const {id} = useParams()

    const [product,setPendingProduct] = useState([]);

    useEffect(() => {

        axios.get(`/api/admin/show/auction/product/${id}`).then((res) => {
    
          if (res.status === 200) {
            console.log('from api',res.data.product)
            setPendingProduct(res.data.product);
     
          }
          
        });
    
        console.log();
      }, []);



    return (
        <>
            <div className="AS">
              <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card event-card">
                                <img src={`http://localhost:8000/${product.product_image}`} alt="" className="img-fluid" style={{height:'400px', width:'400px'}}/>
                            </div>
                        </div>
                    </div>

                    <div className="row my-4">
                        <div className="col-md-12">
                            <div className="card event-card2 shadow">
                                <div className="card-body">
                                    <h5 className="text-warning p-2">{product.title}</h5>
                                    <p className='text-light'>
                                        <Markup content={product.details} />
                                    </p>
                                    <p className="text-warning fw-bold">
                                        <h3>Bidding Date & Time</h3>
                                        {moment(product.bid_from).format('LL')}  {moment(product.bid_from, "HH:mm:ss").format("hh:mm A")} - {moment(product.bid_to).format('LL')} {moment(product.bid_to, "HH:mm:ss").format("hh:mm A")}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>




                    <div className="card event-card2">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={clock} className="img-fluid p-3" alt="" />
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <div>
                                    <h2 className='text-warning'>Product Details submitted</h2>
                                    <p className='text-light'>
                                        {product.status === 1 ? (<span className="fw-bold">Already Published</span>) : product.star_approval === 1 ? (<span className="fw-bold">Waiting for &nbsp; Manager Admin Approval</span>) : (<span className="fw-bold">Waiting for &nbsp; Star & Manager Admin Approval</span>)}
                                        &nbsp;
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4" style={{ borderLeft: "1px dashed yellow" }}>

                                <h5 className='text-light text-center my-3'>Status</h5>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <div style={{ width: 150, height: 150 }}>
                                        {product.status === 1 ?
                                            (
                                                <CircularProgressbarWithChildren value={100} styles={buildStyles({ pathColor: `gold` })}>

                                                    {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong className='text-light'>100% complete</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            ) : product.star_approval === 1 ?
                                                (
                                                    <CircularProgressbarWithChildren value={50} styles={buildStyles({ pathColor: `gold` })}>

                                                        {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                                            <strong className='text-light'>50% complete</strong>
                                                        </div>
                                                    </CircularProgressbarWithChildren>
                                                ) :
                                                (
                                                    <CircularProgressbarWithChildren value={0} styles={buildStyles({ pathColor: `gold` })}>

                                                        {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                        <div style={{ fontSize: 12, marginTop: -5 }}>
                                                            <strong className='text-light'>0% complete</strong>
                                                        </div>
                                                    </CircularProgressbarWithChildren>
                                                )
                                        }
                                    </div>

                                </div>



                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </>
    );
};

export default PendingProductDetails;
