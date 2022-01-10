import React, { useState, useEffect } from "react";
import { Link, useHistory } from 'react-router-dom';
import ShakibBanner from '../../../../assets/images/SakibBanner.PNG';
import ShakibPlayVideoGreetings from '../../../../assets/images/ShakibPlayVideoGreetings.png';
import './SuperstarPageGreetings.css';
import axios from "axios";
import { Markup } from 'interweave';

const SuperstarPageGreetings = () => {
    const history = useHistory();
    const [greetingDetail, setGreeting] = useState([]);


    useEffect(() => {

    axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.get('/api/star/greetings').then((res) => {
        if (res.status === 200) {
            setGreeting(res.data.greeting);
            console.log(res.data.greeting);
        }
        });
    });

    }, []);




    return (
        <div>
        <div className="row">

            <div className="wishfulBannerDiv ms-3">
                <img className="img-fluid wishfulBanner" src={`http://localhost:8000/${greetingDetail.banner}`}  alt="" />
            </div>
        </div>



        <div className="row">
            <div className="col-md-8 greetingMessages">
                <div className="wishfulMessages text-white my-4 mx-3">
                    <h3>{greetingDetail.title}</h3>
                    <p>
                        <Markup content={greetingDetail.description}/>
                    </p>
                </div>

                <div className="row my-4 mx-3">
                    <div className="d-flex justify-content-center costDisplay col-md-3 p-4">
                        <div className="funnelDollar">
                            <i class="fas fa-funnel-dollar"></i>
                        </div>
                        <div className="mx-2 text-white">
                            <span className="costParaTag"><big>Cost</big></span>
                            <h5 style={{ color: '#ffeb7f' }}><span className="mx-1">{greetingDetail.cost}</span>BDT</h5>
                        </div>
                    </div>
                </div>

            </div>
            <div className="col-md-4">
                <div className="my-4">
                    <img className="img-fluid" src={ShakibPlayVideoGreetings} alt="" />
                </div>
            </div>
        </div>

        <div className="mx-3 mb-4">
            <Link to="/superstar/notify/record"><button type="button" className='greetingsApproveButton'>Approve</button></Link>
            
            <button type="button" className='greetingsEditButton text-warning mx-2'>Decline</button>
        </div>

    </div>
    );
};

export default SuperstarPageGreetings;