import React from 'react'
import './NotifyGreetings.css'
import ReactPlayer from 'react-player'
import Banner from '../../../../../../assets/images/SakibBanner.PNG'
import Star from '../../../../../../assets/images/profileAvatar/Avater.png'
import PriceTag from '../../../../../../assets/images/tagPrice.PNG'
import NotifyModalAdmin from './NotifyModalAdmin'
import { Link } from 'react-router-dom'

const NotifyGreetingsContent = () => {
const [modalShowl, setModalShowl] = React.useState(false);

return (
<>
    <>
        <div className="card m-3 ">
            <img src={Banner} alt="" className='BannerAGN' />
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
                        <button className='btn btn-warning bg-warning mt-3  NotifyBtn' variant="primary" onClick={()=>
                            setModalShowl(true)}><i className="fas fa-bell"></i> Notify</button>
                        <NotifyModalAdmin show={modalShowl} onHide={()=> setModalShowl(false)} />
                    </div>

                </div>

            </div>

            <div className="rightGNA col-3 mx-3 mt-4">

                <div className='p-4'>
                    <ReactPlayer className='ReactNAv' url="https://www.youtube.com/watch?v=-X4ikwUwxoE" playing
                        width="100%" height="100%" controls={false} />
                    <p className='NotifyTp'>Get a wishful message from Sakib al hasan</p>

                    <p className='NotifyTpx'>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard.
                    </p>

                    <div className="d-flex p-2 w-50 buTon-a ">
                        <span>
                            <img src={PriceTag} alt="" className='PriceTage' />
                        </span>
                        <div className=" mx-2 ">
                            <span className="text-light buTon-ab ">Cost</span>
                            <br></br>
                            <span className="text-light buTon-abc">1200 BDT</span>
                        </div>
                    </div>

                    <div className="d-flex">
                        <div className="button">
                            <button className='btn bg-success fw-bold text-light mt-3 NotifyBtn'>Edit</button>
                        </div>
                        <div className="button">
                            <Link to='/superstar-admin/notify-schedule'><button
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

export default NotifyGreetingsContent