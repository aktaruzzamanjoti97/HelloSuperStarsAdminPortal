import React from 'react'
import './NotifyGreetings.css'
import ReactPlayer from 'react-player'
import Banner from '../../../../../../assets/images/SakibBanner.PNG'
import Star from '../../../../../../assets/images/profileAvatar/Avater.png'
import PriceTag from '../../../../../../assets/images/tagPrice.PNG'

const NotifyGreetingsRecord = () => {
    
return (
<>
    <>
        <div className="card m-3 ">
            <img src={Banner} alt="" className='BannerAGN' />
        </div>
        <div className="NotifyGreetings d-flex">

            <div className="LeftGNA col-8 m-3 d-flex">
                <div className='NotifyOver w-100'>
                    <table className='w-100 my-3 NotifyTabletdRec '>
                        <tr className='mx-3'>
                            <td className='Notifytdx letfNotRe text-light'> <img src={Star} className='NotifyAimg' alt="" />Shakib All Hasan</td>
                            <td className='Notifytdx datNotify'><span className='text-warning p-1 clockNOte'><i class="fas fa-clock"></i> 21/12/1998  09:00 pm</span></td>
                            <td className='Notifytdx rightNotRe '><button className='btn btnRecNot active'><i class="fas fa-video"></i> Rec</button></td>
                        </tr>
                    </table>
                    <table className='w-100 my-3 NotifyTabletdRec '>
                        <tr className='mx-3'>
                            <td className='Notifytdx letfNotRe  text-light'> <img src={Star} className='NotifyAimg' alt="" />Shakib All Hasan</td>
                            <td className='Notifytdx datNotify'><span className='text-warning p-1 clockNOte'><i class="fas fa-clock"></i> 21/12/1998  09:00 pm</span></td>
                            <td className='Notifytdx rightNotRe '><button className='btn btnRecNot'><i class="fas fa-video"></i> Rec</button></td>
                        </tr>
                    </table>
                    <table className='w-100 my-3 NotifyTabletdRec '>
                        <tr className='mx-3'>
                            <td className='Notifytdx letfNotRe text-light'> <img src={Star} className='NotifyAimg' alt="" />Shakib All Hasan</td>
                            <td className='Notifytdx datNotify'><span className='text-warning p-1 clockNOte'><i class="fas fa-clock"></i> 21/12/1998  09:00 pm</span></td>
                            <td className='Notifytdx rightNotRe '><button className='btn btnRecNot'><i class="fas fa-video"></i> Rec</button></td>
                        </tr>
                    </table>
                    <table className='w-100 my-3 NotifyTabletdRec '>
                        <tr className='mx-3'>
                            <td className='Notifytdx letfNotRe text-light'> <img src={Star} className='NotifyAimg' alt="" />Shakib All Hasan</td>
                            <td className='Notifytdx datNotify'><span className='text-warning p-1 clockNOte'><i class="fas fa-clock"></i> 21/12/1998  09:00 pm</span></td>
                            <td className='Notifytdx rightNotRe '><button className='btn btnRecNot'><i class="fas fa-video"></i> Rec</button></td>
                        </tr>
                    </table>
                
                </div>

            </div>

            <div className="rightGNA col-3 mx-3 mt-4">

                <div className='p-4'>
                <ReactPlayer className='ReactNAv' url="https://www.youtube.com/watch?v=-X4ikwUwxoE" playing width="100%" height="100%"
                    controls={false} />
                <p className='NotifyTp'>Get a wishful message from  Sakib al hasan</p>
                
                <p className='NotifyTpx'>Lorem Ipsum is simply dummy text of the printing and 
                    typesetting industry. Lorem Ipsum has been  the
                    industry's standard.
                </p>

                <div className="d-flex p-2 w-50 buTon-a ">
                    <span>
                        <img src={PriceTag} alt="" className='PriceTage'/>
                    </span>
                    <div className=" mx-2 ">
                        <span className="text-light buTon-ab ">Cost</span>
                        <br></br>
                        <span className="text-light buTon-abc">1200 BDT</span>
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

export default NotifyGreetingsRecord