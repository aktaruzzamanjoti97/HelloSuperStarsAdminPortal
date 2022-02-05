import React from 'react'
import './NotifyGreetings.css'
import ReactPlayer from 'react-player'

import Star from '../../../../../../assets/images/profileAvatar/Avater.png'
import PriceTag from '../../../../../../assets/images/tagPrice.PNG'
import NotifyModalAdmin from './NotifyModalAdmin'
import { Markup } from 'interweave';
import { useEffect } from 'react'
import axios from "axios";
import swal from "sweetalert";

const NotifyGreetingsContent = ({ greeting }) => {
    let base_url = "http://localhost:8000/"
    const [modalShowl, setModalShowl] = React.useState(false);

    useEffect(() => {
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.get('/api/user/greetings_star_status').then((res) => {
                if (res.data.status === 200) {


              } else {
                swal("error", "Data base Error", "error");
      
              }
            });
          }); 
    },[])
    
return (
<>
    <>
        <div className="card m-3 ">
            <img src={base_url+greeting.data.banner} alt="" className='BannerAGN' />
        </div>
        <div className="NotifyGreetings d-flex">

            <div className="LeftGNA col-8 m-3 d-flex">
                <div className='NotifyOver w-100'>
                    <table className='w-100 my-3 NotifyTabletd '>
                        <tr className='NotifyTable mx-3'>
                            <td className='Notifytd '><input type="checkbox" /></td>
                            <td className='Notifytdx  lNTS'> <img src={Star} className='NotifyAimg' alt="" /> Shakib All
                                Hasan</td>
                            <td className='Notifytdx'>21/12/1998</td>
                            <td className='Notifytdx rNTS'>Birthday</td>
                        </tr>
                    </table>
                    <table className='w-100 my-3 NotifyTabletd '>
                        <tr className='NotifyTable mx-3'>
                            <td className='Notifytd '><input type="checkbox" /></td>
                            <td className='Notifytdx  lNTS'> <img src={Star} className='NotifyAimg' alt="" /> Shakib All
                                Hasan</td>
                            <td className='Notifytdx'>21/12/1998</td>
                            <td className='Notifytdx rNTS'>Birthday</td>
                        </tr>
                    </table>
                    <table className='w-100 my-3 NotifyTabletd '>
                        <tr className='NotifyTable mx-3'>
                            <td className='Notifytd '><input type="checkbox" /></td>
                            <td className='Notifytdx  lNTS'> <img src={Star} className='NotifyAimg' alt="" /> Shakib All
                                Hasan</td>
                            <td className='Notifytdx'>21/12/1998</td>
                            <td className='Notifytdx rNTS'>Birthday</td>
                        </tr>
                    </table>
                    <table className='w-100 my-3 NotifyTabletd '>
                        <tr className='NotifyTable mx-3'>
                            <td className='Notifytd '><input type="checkbox" /></td>
                            <td className='Notifytdx  lNTS'> <img src={Star} className='NotifyAimg' alt="" /> Shakib All
                                Hasan</td>
                            <td className='Notifytdx'>21/12/1998</td>
                            <td className='Notifytdx rNTS'>Birthday</td>
                        </tr>
                    </table>

                    <div className="button mx-5">
                    <button className='btn btn-warning bg-warning mt-3  NotiBtnts'variant="primary" onClick={()=>
                            setModalShowl(true)}><i className="fas fa-bell"></i> Notify</button>
                    <NotifyModalAdmin show={modalShowl} onHide={()=> setModalShowl(false)} />
                </div>
                
                </div>

            </div>

            <div className="rightGNA col-3 mx-3 mt-4">

                <div className='p-4'>
                <ReactPlayer className='ReactNAv' url="https://www.youtube.com/watch?v=-X4ikwUwxoE" playing width="100%" height="100%"
                    controls={false} />
                        <p className='NotifyTp'>{greeting.data.title}</p>
                
                        <p className='NotifyTpx'>
                        <Markup content={greeting.data.description}/>   
                        </p>

                <div className="d-flex p-2 w-50 buTon-a ">
                    <span>
                        <img src={PriceTag} alt="" className='PriceTage'/>
                    </span>
                    <div className=" mx-2 ">
                        <span className="text-light buTon-ab ">Cost</span>
                        <br></br>
                        <span className="text-light buTon-abc">{greeting.data.cost} BDT</span>
                    </div>
                </div>

                <div className="button">
                    <button className='btn  w-25 mt-3  NotiBtnts'>Edit</button>
                </div>

                </div>

            </div>

        </div>

    </>
</>
)
}

export default NotifyGreetingsContent