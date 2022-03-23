import React,{ useState,useEffect } from 'react'
import './NotifyGreetings.css'
import ReactPlayer from 'react-player'
import Star from '../../../../../../assets/images/profileAvatar/Avater.png'
import PriceTag from '../../../../../../assets/images/tagPrice.PNG'
import NotifyModalAdmin from './NotifyModalAdmin'
import { Markup } from 'interweave';
import axios from "axios";
import swal from "sweetalert";
import moment from 'moment';


const NotifyGreetingsContent = ({ greeting }) => {
    let base_url = "http://localhost:8000/"
    const [modalShowl, setModalShowl] = React.useState(false);
    const [greetingList, setGreetingList] = useState([]);
    const [Checked, setChecked] = useState([]);
    const [regGreId, setregGreId] = useState([]);
  

    useEffect(() => {
        getAllGreetingReg()
    }, [])
    
    const getAllGreetingReg = () => {
        axios.get("/sanctum/csrf-cookie").then((response) => {
            axios.get('/api/admin/greetings_register_list/'+greeting.data?.id).then((res) => {
                if (res.data.status === 200) {
                    console.log(res.data.list);
                    setGreetingList(res.data.list)

              } else {
                swal("error", "Data base Error", "error");
      
              }
            });
          }); 
    }

    const handelCheckBox = (user_id, greetings_id) => {
        const currentIndex = Checked.indexOf(user_id);

        const newChecked = [...Checked];
        const newRegGreId = [...regGreId];
    
        if (currentIndex === -1) {
            newChecked.push(user_id)
            newRegGreId.push(greetings_id)

        } else {
            newChecked.splice(currentIndex, 1)
            newRegGreId.splice(currentIndex, 1)
        }
    
        setChecked(newChecked)
        setregGreId(newRegGreId)
    }
    
    // console.log(Checked);
    // console.log(regGreId);
return (
<>
    <>
        <div className="card m-3 ">
            <img src={base_url+greeting.data?.banner} alt="" className='BannerAGN' />
        </div>
        <div className="NotifyGreetings d-flex">

            <div className="LeftGNA col-8 m-3 d-flex">
                    <div className='NotifyOver w-100'>
                   
                        {greetingList.map(data =>
                        
                        <table className='w-100 my-3 NotifyTabletd '>
                                <tr className='NotifyTable mx-3'>
                                   
                                    <td className='Notifytd'>
                                        {data.notification_at ?
                                            "":
                                            <input type="checkbox" value={data.user?.id} onChange={() => handelCheckBox(data.user?.id, data.id)} />
                                    }
                                    </td>
                                    
                                    <td className='Notifytdx lNTS'> <img src={base_url+data.user.image} className='NotifyAimg' alt="profile" />{data.user.first_name } {data.user.last_name }</td>
                                <td className='Notifytdx'>{moment(data.request_time).format('LL')}</td>
                                <td className='Notifytdx rNTS'>{moment(data.request_time).format('LT')}</td>
                            </tr>
                        </table>
                        )}           
                           


                        <div className="button mx-5">
                            {Checked.length > 0 ?
                   
                   <button className='btn btn-warning bg-warning mt-3  NotiBtnts'variant="primary" onClick={()=>
                               setModalShowl(true)}><i className="fas fa-bell"></i> Notify</button>
                        :
                        ""
                    }   
                            
                            <NotifyModalAdmin show={modalShowl} onHide={() => setModalShowl(false)} users_id={Checked} setModal={setModalShowl} setGreetingList={setGreetingList} greeting_id={greeting.data?.id} greetings_reg_id={regGreId} setChecked={setChecked}/>
                </div>
                
                </div>

            </div>

            <div className="rightGNA col-3 mx-3 mt-4">

                <div className='p-4'>
                <ReactPlayer className='ReactNAv' url="https://www.youtube.com/watch?v=-X4ikwUwxoE" playing width="100%" height="100%"
                    controls={false} />
                        <p className='NotifyTp'>{greeting.data?.title}</p>
                
                        <p className='NotifyTpx'>
                        <Markup content={greeting.data?.description}/>   
                        </p>

                <div className="d-flex p-2 w-50 buTon-a ">
                    <span>
                        <img src={PriceTag} alt="" className='PriceTage'/>
                    </span>
                    <div className=" mx-2 ">
                        <span className="text-light buTon-ab ">Cost</span>
                        <br></br>
                        <span className="text-light buTon-abc">{greeting.data?.cost} BDT</span>
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