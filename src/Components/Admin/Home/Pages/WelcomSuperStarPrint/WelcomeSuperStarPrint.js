import React, { useState, useEffect, useRef  } from 'react';
import { Link, useHistory} from 'react-router-dom';
import './WelcomeSuperStarPrint.css'
import axios from "axios";

import ReactToPrint from 'react-to-print';

import '../WelcomeSuperstar//WelcomeSueprstar.css';
import backgroundBanner from '../../../../../assets/images/backGroundBanner.png'
import helloSuperStarLogo from '../../../../../assets/images/helloSuperStar.png';
import footerPhoto from '../../../../../assets/images/24783.jpg';
import qrCode from '../../../../../assets/images/qrCode.png'
import { Markup } from 'interweave';


const WelcomeSuperStarPrint = (props) => {

    const history = useHistory();


    const [loading, setLoading] = useState(true);
    const [star, setStar] = useState([]);
    

    useEffect(() => {
        let isMounted = true;

        const star_id = props.match.params.star_id;

        axios.get(`/api/admin/agreement_paper/${star_id}`).then(res =>{
        
            if(isMounted)
            {
                if(res.data.status === 200)
                {
                    setStar(res.data.star);
                    setLoading(false);
                }

                //setLoading(false);
            }
                
        });

    }, [props.match.params.star_id, history]);

    if(loading)
    {
        return <h5>Loading...</h5>
    }
    else{

    }



    return (
        <div className="superStarPrint">
            <div className="d-flex">
                <div className="col-md-11 overFlowHidden">
                <div className="my-3 superStarBackground">
                <div className="superStar-container">
                    <div className="d-flex justify-content-end">
    
                        <div>
                            <div className="d-flex justify-content-end">
                                <img className="img-fluid" src={backgroundBanner} width="200" height="250" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <div className="superStarLogo2">
                            <img className="img-fluid" width="100" height="100" src={helloSuperStarLogo} alt="" />
                        </div>
                    </div>
                    <div>
                        <div className="my-5 superStarHeadingStyle">
                            <h5 className="my-2 text-center">Dear,</h5>
                            <h1 className="my-2 text-center">{star.super_star.first_name} {star.super_star.last_name}</h1>
                        </div>
    
                        <h4 className="my-5 text-center">Welcome to Hello Superstar</h4>
    
                        <p className="my-4 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui natus explicabo cum repudiandae animi fuga omnis placeat sapiente quam sit dicta reiciendis, consequuntur deleniti dolorem excepturi delectus inventore vitae labore. Impedit nemo nisi tempore, labore facere, earum exercitationem consequatur nihil necessitatibus, repellendus laudantium reiciendis eveniet iure et quam? Eos incidunt, nemo doloribus sed nihil temporibus, quasi asperiores, deleniti sapiente nisi quidem! Sed, suscipit a explicabo expedita veniam ipsam blanditiis officiis.</p>
    
                        <div className="my-2 text-center">
                            <Markup content= {star.terms_and_condition} />
                        </div>
                    </div>
    
                    <div className="my-5 text-center">
                        <img width="140" src={qrCode} alt="" />
                       <h4>{star.qr_code}</h4>
                    </div>
    
                    <div>
                        <img className="img-fluid footerImage w-100" src={footerPhoto} alt="" />
                    </div>
                </div>
            </div>
                </div>
                <div className="col-md-1">
                    <div className="bottom-cross d-flex justify-content-end">
                        <Link to="/superstar-admin/superstars">
                            <button className="btn btn-danger m-3">X</button>
                        </Link>
                    </div>

                    <div className="me-3">
                        <button className="btn btn-warning mb-4 w-100">
                            <i className="fas fa-print mx-1"></i>
                            Print
                        </button> <br />

                        <button className="btn btn-success w-100 mb-3">
                            <a href="/images/myw3schoolsimage.jpg" download></a>
                        {/* <i className="fas fa-download"></i> */}
                            Download
                        </button>
                    </div>

                  


                </div>
            </div>
        </div>
    );
};

export default WelcomeSuperStarPrint;