import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
// import LiveNow from './Content/StarLiveNow'
// import Live from '../../../../assets/images/instagram-live 1.png'
// import Pending from '../../../../assets/images/pending 2.png'
// import Add from '../../../../assets/images/UpcomingEvent/add 1.png'
import Slider from "react-slick";
import moment from "moment";
import axios from "axios";
import LearnSessionNaveStar from '../LearnSessionNaveStar';
import LiveSessionCarosuel from '../../../../Admin/Home/Pages/AdminLearningSession/LiveSession/LiveSessionCarosuel';
import LearnRequestList from './LearnRequestList';
import { Button } from 'react-bootstrap';

const PendingLearningStar = () => {
const [loading, setLoading] = useState(true);
const [pendingLiveChatNumber, setPendingLiveChatNumber] = useState([]);

const [events, setEvents] = useState([]);

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
dots: true,
},
},
{
breakpoint: 600,
settings: {
slidesToShow: 2,
slidesToScroll: 2,
initialSlide: 2,
},
},
{
breakpoint: 480,
settings: {
slidesToShow: 1,
slidesToScroll: 1,
},
},
],
};

// Fetch Approved LiveChat
useEffect(() => {

axios.get(`/api/star/approvedLiveChat`).then(res => {
if(res.data.status === 200)
{
setEvents(res.data.approveLiveChats)
setPendingLiveChatNumber(res.data.pendingLiveChatNumber)
console.log(res.data.pendingLiveChats);
}
});

console.log();
}, []);

return (
<>
    <div className="AS">
        <LearnSessionNaveStar />

        <div className="liveMeetupBorder my-5">
            <div className="d-flex px-4 pt-3">
                <div className="faTrophy"><i class="fas fa-trophy"></i></div>
                <h4 className="mx-3 text-white p-2">Requested Learning Session ( Schedule )</h4>
            </div>
            <div className="pb-3">
                <LearnRequestList />
            </div>
            <center><Link to='/superstar/learning-session/request-all'><Button type="" className='btn bg-warning text-right text-black mt-3 fw-bold mb-3'>View All</Button></Link></center>
        </div>

    </div>
</>
)
}

export default PendingLearningStar