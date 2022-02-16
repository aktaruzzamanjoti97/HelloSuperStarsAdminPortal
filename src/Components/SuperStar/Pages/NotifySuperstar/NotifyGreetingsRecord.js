import React, { useState, useEffect } from "react";
import axios from "axios";
// import './NotifyGreetings.css'
import ReactPlayer from 'react-player'
import { Link , useHistory} from 'react-router-dom'
import Star from '../../../../assets/images/profileAvatar/Avater.png'
import Banner from '../../../../assets/images/SakibBanner.PNG'
import PriceTag from '../../../../assets/images/tagPrice.PNG'
import { Markup } from 'interweave';
import moment from 'moment';

const NotifyGreetingsRecord = () => {
    const history = useHistory();
    const [greetingDetail, setGreetingDetail] = useState([]);
    const [greetingList, setGreetingList] = useState([]);


    useEffect(() => {
    let geetings_id = ""
    axios.get("/sanctum/csrf-cookie").then((response) => {
        axios.get('/api/star/greetings').then((res) => {
        if (res.status === 200) {
            setGreetingDetail(res.data.greeting);
            axios.get("/api/star/greetings_reg_list/"+res.data.greeting.id).then((res) => {
                if (res.status === 200) {
                    // setGreeting(res.data.greeting);
                    setGreetingList(res.data.list);
               
                }
                });
        }
        });
    });
        

 

    }, []);
    
return (
<>
    <>
        <div className="card m-3 ">
            <img src={`http://localhost:8000/${greetingDetail.banner}`} alt="" className='BannerAGN' />
        </div>
        <div className="NotifyGreetings d-flex">

            <div className="LeftGNA col-8 m-3 d-flex">
                    <div className='NotifyOver w-100'>
                        {greetingList ? greetingList.map(data => 
                            <>
                            
                                
                                {data.status === '2' ? (
                                    <table className='w-100 my-3 NotifyTabletdRec '>
                                    <tr className='mx-3'>
                                        <td className='Notifytdx letfNotRe text-light'> <img src={Star} className='NotifyAimg' alt="" />{data.user.first_name} {data.user.last_name}</td>
                                        <td className='Notifytdx datNotify'><span className='text-warning p-1 clockNOte'><i class="fas fa-clock"></i> {moment(data.request_time).format('MMMM Do YYYY, h:mm:ss a')}</span></td>
                                        <td className='Notifytdx rightNotRe '>
                                            <Link to="/superstar/greetings/video-record"><button className='btn btnRecNot active'><i class="fas fa-video"></i> Rec</button></Link>
                                        </td>
                                
                                    </tr>
                                        </table>
                                ) : (<></>) }
                        
                        
                        
                                

                            </>
                        
                       
                          
                       
                        
                       )
                            
                            
                    : ""}     
                   
                   
                
                </div>

            </div>

            <div className="rightGNA col-3 mx-3 mt-4">

                <div className='p-4'>
                <ReactPlayer className='ReactNAv' url="https://www.youtube.com/watch?v=-X4ikwUwxoE" playing width="100%" height="100%" controls={false} />
                    <h3 className='NotifyTp'>{greetingDetail.title}</h3>
                    <p className='NotifyTpx'>
                        <Markup content={greetingDetail.description}/>
                    </p>

                <div className="d-flex p-2 w-50 buTon-a ">
                    <span>
                        <img src={PriceTag} alt="" className='PriceTage'/>
                    </span>
                    <div className=" mx-2 ">
                        <span className="text-light buTon-ab ">Cost</span>
                        <br></br>
                                <span className="text-light buTon-abc">{ greetingDetail.cost} BDT</span>
                    </div>
                </div>

                <div className="d-flex">
                        <div className="button">
                            <button className='btn bg-success fw-bold text-light mt-3 NotifyBtn'>Edit</button>
                        </div>
                        <div className="button">
                            <Link to='/superstar/notify-schedule/view'><button
                                className='btn bg-warning fw-bold mt-3 mx-2 NotifyBtn'>Schedule</button></Link>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    </>
</>
)
}

export default NotifyGreetingsRecord