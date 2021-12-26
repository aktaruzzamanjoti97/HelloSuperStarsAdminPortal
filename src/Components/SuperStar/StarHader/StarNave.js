import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from 'sweetalert';

import {BrowserRouter, Link, Route, Switch,useHistory, Redirect } from "react-router-dom";
import './StarNave.css'
import '../../SuperStar/Home/Pages/LiveChatSpStar/SuperStarContent.css'
import Logo from '../../../assets/images/helloSuperStar.png'
import Profile from '../../../assets/images/Profile/Shakibpro.png'

import StarDashboard from '../../Pages/MainDashbord/StarDashboard';
import StarLiveChatContent from '../Pages/StarLiveChat/StarLiveChatContent'
import StarPendingContent from '../Pages/StarLiveChat/StarPendingContent'
import StarAddSessionContent from '../Pages/StarLiveChat/StarAddSessionContent'
import StarPendingView from '../Pages/StarLiveChat/StarPendingView';
import StarScheduleView from '../Pages/StarLiveChat/Content/StarScheduleView';
import StarUpcomingEvent from '../Pages/StarUpcomingEvent/StarUpcomingEvent';
 
const StarNave = () => {
    const history = useHistory();

    const logoutSubmit = (e) => {
      e.preventDefault();
      
      axios.post(`/api/logout`).then(res => {
        if(res.data.status === 200)
        {
          localStorage.removeItem('auth_token');
          localStorage.removeItem('auth_name');
          swal("Success",res.data.message,"success");
          history.push('/superstar-admin/login');
        }
        else
        {
          swal("Warning",res.data.message,"Warning");
          //history.push('/');
        }
      });
    }
  
return (
<>
 <BrowserRouter>
        <div className="wrapper">
 
            <div className="top_navbar">
 
                <Link to='/superstar' className="text-decoration-none">
                <div className="logo">
 
                    <span className="Text-de-adm"><img src={Logo} className="Admin-Logo-h" alt={Logo} />SuperStar - Star
                    </span>
 
                </div>
                </Link>
                <div className="top_menu">
                    <div className="home_link">
 
                    </div>
                    <div className="right_info">
                        {/* <div className="icon_wrap"> 
                            <div className="icon">
                                <i className="fas fa-bell"></i>
                            </div>
                        </div>  */}
                        <div className="">
                            <div className="icon">
                                <img src={Profile} className="Admin-pro-pic" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 
            <div className="main_body">
 
                <div className="sidebar_menu">
                    <div className="inner__sidebar_menu">
 
                        <ul className="Scroll-admin-nave">
                            <Link to='/superstar/dashboard' className="text-decoration-none">
                            <li>
                                <a className="Text-de-adm">
                                    <span className="icon">
                                        <i className="fas fa-border-all"></i></span>
                                    <span className="list">Dashboard</span>
                                </a>
                            </li>
                            </Link>
 
                            {/* <Link to='/superstar/superstars'>
                            <li>
                                <a className="Text-de-adm">
                                    <span className="icon">
                                        <i className="fas fa-border-all"></i></span>
                                    <span className="list">Superstars</span>
                                </a>
                            </li>
                            </Link> */}
 
                            <Link to='/superstar/live-chat' className="text-decoration-none">
                            <li>
                                <a className="Text-de-adm">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Live Chat</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/progressbar'>
                            <li>
                                <a className="Text-de-adm">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Progress bar</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/audition'>
                            <li>
                                <a className="Text-de-adm">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Auditions</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/learning-session'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Learning Session</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/live-video'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Live Video</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/meetup-events'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Meetup Events</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/upcoming-event'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Upcoming Event</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/greetings'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Greetings</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/souvenir'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Souvenir</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/wallet'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Wallet</span>
                                </a>
                            </li>
                            </Link>
 
                            <Link to='/superstar/settings'>
                            <li>
                                <a className="menu-item">
                                    <span className="icon"><i className="fas fa-chart-pie"></i></span>
                                    <span className="list">Settings</span>
                                </a>
                            </li>
                            </Link>

                            <h5>{localStorage.auth_name}</h5>
          <button className="btn btn-sm btn-warning" onClick={logoutSubmit}> Log Out </button>
                        </ul>

 
                        <div className="hamburger">
                            <div className="inner_hamburger">
                                <span className="arrow">
                                    <i className="fas fa-long-arrow-alt-left"></i>
                                    <i className="fas fa-long-arrow-alt-right"></i>
                                </span>
                            </div>
                        </div>
 
                    </div>
                </div>
 
                <div className="cu-container">
 
                    <div className="item_wrap">
 
                        <div className="item"> 
                        
                            <Switch>
 
                                <Route exact path="/superstar">
                                    <Redirect exact path="/superstar/dashboard" />
                                </Route>
                                <Route exact path="/superstar/dashboard" component={StarDashboard}/>
                                <Route exact path="/superstar/live-chat" component={StarLiveChatContent}/>
                                <Route exact path='/superstar/Live-chat/view' component={StarScheduleView}/>
                                <Route exact path="/superstar/live-chat/pending-session" component={StarPendingContent}/>
                                <Route exact path="/superstar/live-chat/pending-session/view/:id" component={StarPendingView}/>
                                <Route exact path="/superstar/live-chat/add-session" component={StarAddSessionContent}/>
                                <Route exact path="/superstar/upcoming-event" component={StarUpcomingEvent}/>
 
                            </Switch>
                        </div>
 
                    </div>
                </div>
            </div>
            </div>

            </BrowserRouter>
</>
)
}
 
export default StarNave
