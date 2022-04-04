import React,{useEffect, useState} from 'react'
import './AudtionsStar.css'
import Banner from '../../../../assets/images/Auditions/unsplash_IeTLKtzbLNo.png'

import calendar from '../../../../assets/images/Auditions/flag.png'
import Clock from '../../../../assets/images/Auditions/finish.png'

import Spotlight from '../../../../assets/images/Auditions/spotlight.png'
import Unsplash from '../../../../assets/images/Auditions/unsplash.png'

import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { Markup } from 'interweave'
import moment from 'moment'

const AuditionsStar = () => {
    const history = useHistory();

  const {id}=   useParams();


    const [pending_audition,setPendingAudition] = useState([]);

    useEffect(() => {
        axios.get(`/api/star/audition/${id}`).then((res) => { 
          if (res.data.status === 200) {

            setPendingAudition(res.data.pending_audition);
    
             console.log('star single pending audition',res.data.pending_audition);
          }
        });
    
    }, []);

    const approved = () => {

        axios.put(`/api/star/approved/audition/${id}`).then((res) => {
    
            if (res.status === 200) {
                history.push(`/superstar/audition`)
            }
            
          });
    }
    const decline = () => {

        axios.put(`/api/star/decline/audition/${id}`).then((res) => {
    
            if (res.status === 200) {
                history.push(`/superstar/audition`)
            }
            
          });
    }

return (
    
<>
{pending_audition.map((audition)=>(
<>
<div className="card m-3">
        <img src={`http://localhost:8000/${audition.banner}`} alt="" className='Banner-Auditions' />
    </div>

    <div className='row m-3 d-flex Audition-Main'>
        <div className='mt-4 mb-5  col-md-9'>
            <h4 className='text-light fw-bold  mb-4 '>
                {audition.title}
            </h4>
            <p className='text-light '>

                <Markup content={audition.description}/>
            </p>
             <br />

            <div className=" col-12 BTN-x-P">
                <div className="d-flex  buTon-EMN py-2 p-3">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={calendar} alt="" className='PriceTage' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light">Start</span>
                        <br></br>
                        <span className="text-warning BtnTextNMP fw-bold">{moment(audition.start_time).format('LL')}</span>
                    </div>
                </div>

                <div className="d-flex buTon-EMN py-2 p-3 ">
                    <div className=" mx-3 mt-2">
                        <span className="text-light"> <img src={Clock} alt="" className='PriceTage' /></span>
                    </div>
                    <div className=" mx-1">
                        <span className="text-light">End</span>
                        <br></br>
                        <span className="text-warning BtnTextNMP fw-bold">{moment(audition.end_time).format('LL')} </span>
                    </div>
                </div>

            </div>
            <div className="mt-3">
                <button onClick={approved} className='btn MEN-X fw-bold'>Approve </button>
                
                <button onClick={decline} className='btn MEN-Y text-warning fw-bold mx-3'>Decline</button>
            </div>
        </div>

        <div className="mt-4 col-md-3  AN-Adx ">
            <div className="d-flex">
                <div className="d-flex  AuditionSR-r p-2 fw-bolder  w-100">
                    <div className=" mx-4 mt-2">
                        <img src={Spotlight} alt="" className='SpotLightI' />
                    </div>
                    <div className=" mt-2 mb-2 text-warning">
                        Judgement panel
                    </div>
                </div>
            </div>
            {audition.judge.map((judge)=>(
                <div className="d-flex  py-2 AuditionSR-p ">
                <div className=" mx-4 mt-2">
                    <span className="mt-2"> <img src={`http://localhost:8000/${judge.user?.image}`} alt="" className='AuditionsStrImg' /></span>
                </div>
                <div className="mt-2">
                    <span className="text-light Star-text-Au">{judge.user?.first_name} {judge.user?.last_name}</span>
                    <br></br>
                    <span className="text-warning music-text">Music</span>
                </div>
            </div>
            ))}
        </div>

    </div>
</>
))}
  

</>
)
}

export default AuditionsStar