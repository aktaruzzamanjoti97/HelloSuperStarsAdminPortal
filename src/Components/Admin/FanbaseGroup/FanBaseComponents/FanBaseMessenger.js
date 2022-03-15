import React from 'react';
import PicMa from "../../../../assets/images/Fanbase-img/meme2.png";
import './FanBaseMessenger.css'
const FanBaseMessenger = () => {
return (
<>
    <div className=" MessengerBody py-3 ps-2 text-light">
        <h6 className="fw-bold mx-2">Group inbox</h6>

        <div className="top-right-messenger">

            <span><img src={PicMa} alt="" className="PicMessenger" /></span>
            <span><img src={PicMa} alt="" className="PicMessenger" /></span>
            <span><img src={PicMa} alt="" className="PicMessenger" /></span>
            <span className="messengerUser"> & 20 more</span>
        </div>
    </div>

    <div className="container MessengerText py-2 ps-2 text-light ">

        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
        </div>

        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
        </div>
        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
        </div>

        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
        </div>
        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
        </div>

        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
        </div>
        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Sometryrt yrtyrt yrtyrt yrr6u6utyu ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
        </div>

        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
            <div className="col-ms-9 textColMaR mx-2  p-2">Some ipsum dolor yer t </div>
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
        </div>

        <div className="d-flex LeftMessage d-flex mt-3 justify-content-between">
            <div className="col-sm-1 "><img src={PicMa} alt="" className="PicLeftMessage" /></div>
            <div className="col-ms-9 textColMa mx-2  p-2">Sometryrt yrtyrt yrtyrt yrr6u6utyu ipsum dolor yer t </div>
            <div className="col-ms-1  timeTextMa"><small className="TexMessage">Today | 5:10 PM</small></div>
        </div>

    </div>

    <div className="d-flex MessengerFooter  py-2 ps-2 text-light">

        <div className="IconMessage col-md-3 me-3 d-flex">
            <i className="text-light IconMessageT m-2 fa-solid fa-circle-plus"></i>
            <i className="text-light IconMessageT m-2 fa-solid fa-image"></i>
            <i className="text-light IconMessageT m-2 fa-solid fa-face-smile-beam"></i>
        </div>

        <div className="IconMessage col-md-7 d-flex">
            <input type="text" className="MessageWidth ps-3" placeholder="type text..." />
        </div>

        <div className="IconMessage col-md-1 d-flex ms-2">
            <i class="m-2 me-3 text-light IconMessageT SendT text-left fa-brands fa-telegram"></i>
        </div>

    </div>
</>
);
};

export default FanBaseMessenger;