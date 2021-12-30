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
            localStorage.removeItem('auth_otp');
            localStorage.removeItem('auth_id');
            
            swal("Success",res.data.message,"success");
            history.push('/');
            //browserHistory.push("/path-to-link");
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


 
            
 
            <div className="main_body">
 
                
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
        

 
</>
)
}
 
export default StarNave
