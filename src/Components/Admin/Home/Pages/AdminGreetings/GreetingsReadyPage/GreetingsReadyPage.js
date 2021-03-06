import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import ShakibBanner from '../../../../../../assets/images/SakibBanner.PNG';
import ShakibPlayVideoGreetings from '../../../../../../assets/images/ShakibPlayVideoGreetings.png';
import './GreetingsReadyPage.css';
import axios from "axios";
import { Markup } from 'interweave';

const GreetingsReadyPage = (props) => {

    const history = useHistory();
    const [greeting, setGreeting] = useState('');


    useEffect(() => {

        const greeting_id = props.match.params.greeting_id;

        axios.get(`/api/admin/greeting/${greeting_id}`).then(res =>{
        
            if(res.data.status === 200)
            {
                setGreeting(res.data.greeting);
            }
                
        });

        

    }, [props.match.params.greeting_id, history]);



    return (
        <div>
            <div className="row">

                <div className="wishfulBannerDiv ms-3">
                    <img className="img-fluid wishfulBanner" src={`http://localhost:8000/${greeting.banner}`} alt={greeting.banner} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-8 greetingMessages">
                    <div className="wishfulMessages text-white my-4 mx-3">
                        <h3>{greeting.title}</h3>
                        
                        <Markup content= {greeting.description}/>
                    </div>

                    <div className="row my-4 mx-3">
                        <div className="d-flex justify-content-center costDisplay col-md-3 p-4">
                            <div className="funnelDollar">
                                <i class="fas fa-funnel-dollar"></i>
                            </div>
                            <div className="mx-2 text-white">
                                <span className="costParaTag"><big>Cost</big></span>
                                <h5 style={{ color: '#ffeb7f' }}><span className="mx-1">{greeting.cost}</span>BDT</h5>
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
                <Link to="/superstar-admin/notify">
                    <button type="button" className='greetingsNextButton'>Next</button>
                </Link>
                
                <Link to={`/superstar-admin/greetings/greetingsForm/edit/${greeting.id}`}>
                    <button type="button" className='greetingsEditButton text-warning mx-2'>Edit</button>
                </Link>
            </div>

        </div>
    );
};

export default GreetingsReadyPage;