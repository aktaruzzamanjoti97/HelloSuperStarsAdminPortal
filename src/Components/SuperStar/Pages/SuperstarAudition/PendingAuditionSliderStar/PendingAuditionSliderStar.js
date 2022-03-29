import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Slider from 'react-slick';
import MeetupImage1 from '../../../../../assets/images/MeetupImages/unsplash_MXbM1NrRqtI.png';
import RadisonBlue from '../../../../../assets/images/MeetupImages/unsplash_QdAAasrZhdk.png';
import LeMerridian from '../../../../../assets/images/MeetupImages/unsplash_xEaAoizNFV8.png';
import Session from '../../../../../assets/images/MeetupImages/unsplash_YC8qqp50BdA.png'
import EnterImage from '../../../../../assets/images/enter 1.png'
import axios from 'axios';
import { Markup } from 'interweave';


const PendingAuditionSliderStar = () => {


    let history = useHistory()

    const [pendingAuditions, setPendingAudition] = useState([]);

    useEffect(()=>{
axios.get(`/api/superstar/audition/pendings`).then((res)=>{
    if(res.status === 200){

        console.log("pending audition", res.data.pending_auditions)
        setPendingAudition(res.data.pending_auditions)
    }
})
    },[]);

    const handlePending = () => {
        // history.push('/superstar-admin/audition/create-event')
    }

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div>
                <div>

                    <div className="slick-parent d-flex justify-content-center">
                        <Slider className="slider-width" {...settings}>



                          {pendingAuditions?.map((audition)=>
                          

                              <div className="p-3">
                                <div className="completedMeetupBlack">
                                    <img src={`http://localhost:8000/${audition.banner}`} className="img-fluid w-100" alt="" style={{ height: '200px' }} />
                                    <div onClick={handlePending} className="p-3">
                                        <div className="d-flex justify-content-between">
                                            <Link to={`/superstar/auditions/pending/${audition.id}`} style={{ textDecoration: 'none' }}>
                                                <h5 className="text-white">{audition.title}</h5>
                                            </Link>
                                            <img className="img-fluid" src={EnterImage} alt="" />
                                        </div>

                                        <p className="text-secondary">
                                        <Markup content={audition.description}/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                         
                         )}
                                
                             
                         

                        </Slider>
                    </div>


                </div>
            </div>
        </>
    );
};

export default PendingAuditionSliderStar;