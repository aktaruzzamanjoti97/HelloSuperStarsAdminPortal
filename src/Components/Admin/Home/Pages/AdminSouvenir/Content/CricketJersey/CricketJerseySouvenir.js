import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams, Link } from 'react-router-dom'
import calendar from '../../../../../../../assets/images/meetupEvent/calendar.png'
import Clock from '../../../../../../../assets/images/meetupEvent/clock-icon.png'
import Fly from '../../../../../../../assets/images/Souvenir/unsplash_Z4RYz52ljts.png'
import './CricketJerseySouvenir.css'
import { Markup } from "interweave";
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
// import clock from '../../../../../assets/images/meetupEvent/clock.png'

const CricketJerseySouvenir = () => {

    const { id } = useParams();

    console.log("ID is ", id);
    

    const [title, setTitle] = useState("")
    const [unit_price, setUnitPrice] = useState("")
    const [total_items, setTotalItems] = useState("")
    const [keywords, setKeywords] = useState("")
    const [sellingItems, setSellingItems] = useState("")
    const [image, setImage] = useState()
    const [description, setDescription] = useState("")

    const [post_status, setPostStatus] = useState("")
    const [status, setStatus] = useState("")

    console.log("Status ", status);
    console.log("Post Status ", post_status);

    let history = useHistory();

    function handleClick() {
        // history.push('/superstar-admin/souvenir/live-biddings');
        history.push('/superstar-admin/souvenir');
    }


    useEffect(() => {
        axios.get(`/api/admin/marketplace/product-edit/${id}`).then(res => {
        // console.log('res ', res.data.approved);
            if(res.data.status === 200)
            {
                setTitle(res.data.editData.title);
                setUnitPrice(res.data.editData.unit_price);
                setTotalItems(res.data.editData.total_items);
                setImage(res.data.editData.image);
                setKeywords(res.data.editData.keywords);
                setSellingItems(res.data.editData.total_selling);
                setDescription(res.data.editData.description);
                setPostStatus(res.data.editData.post_status);
                setStatus(res.data.editData.status);
            }
        });
    
    }, []);

    return (
        <div>
            <div className="row my-3">
                <div className="col-md-4 ">
                    <img src={`http://localhost:8000/${image}`} alt="Pineapple" className='img-fluid Cricket-Img' />
                </div>
                <div className="col-md-8 mb-5 ">
                    <div className="card event-card2 shadow">
                        <div className="card-body">
                            <h5 className="text-light mb-3">
                            {title}
                            </h5>
                            <p className="text-light">
                            <Markup content= {description}/>
                            </p>
                            {/* <p className="text-light ">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            </p> */}
                        </div>
                    </div>

                    <div className=" d-flex mt-5 mb-5 cricket-jersey">
                        <div className="d-flex p-4 buTon-EMN">
                            <div className="mt-2  mx-3 ">
                                <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
                            </div>
                            <div className=" mx-1">
                                <span className="text-light">Units</span>
                                <br></br>
                                <span className="text-warning BtnTextNMP Usd fw-bold">{total_items} Pieces</span>
                            </div>
                        </div>

                        <div className=" d-flex p-4 buTon-EMN ">
                            <div className=" mt-2 mx-3">
                                {/* <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span> */}
                            </div>
                            <div className=" mx-1 ">
                                <span className="text-light">Unit Price</span>
                                <br></br>
                                <span className="text-warning  BtnTextNMP Usd fw-bold">{unit_price} USD</span>
                            </div>
                        </div>
                    </div>



                </div>

                <div className="col-md-6">
                    <button onClick={handleClick} className='btn Cri-btn-x border-warning fw-bold px-5'>Back </button>
                    {/* <button className='btn border-warning fw-bold mx-3  px-5 Cri-btn'>Edit</button> */}
                </div>


            </div>

            <div className="card event-card2">
                        <div className="row">
                            <div className="col-md-4 d-flex justify-content-center align-items-center">
                                <img src={Clock} className="img-fluid p-3" alt="" />
                            </div>
                            <div className="col-md-4 d-flex align-items-center">
                                <div>
                                    <h2 className='text-warning'>Marketplace submitted</h2>
                                    <p className='text-light'>

                                        {(status === '1') ? (<span className="fw-bold">Already Published</span>) : (post_status === '1') ? (<span className="fw-bold">Waiting for &nbsp; Manager Admin Approval</span>) : (<span className="fw-bold">Waiting for &nbsp; Star & Manager Admin Approval</span>)}
                                        &nbsp;
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4" style={{ borderLeft: "1px dashed yellow" }}>

                                <h5 className='text-light text-center my-3'>Status</h5>
                                <div className='d-flex justify-content-center align-items-center '>
                                    <div style={{ width: 150, height: 150 }}>
                                        {status === '1' ?
                                            (
                                                <CircularProgressbarWithChildren value={100} styles={buildStyles({ pathColor: `gold` })}>

                                                    {/* <img style={{ width: 40, marginTop: -4 }} className='my-2' src={star} alt="doge" /> */}
                                                    <div style={{ fontSize: 12, marginTop: -5 }}>
                                                        <strong className='text-light'>100% complete</strong>
                                                    </div>
                                                </CircularProgressbarWithChildren>
                                            ) : post_status === '1' ?
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
    )
}

export default CricketJerseySouvenir