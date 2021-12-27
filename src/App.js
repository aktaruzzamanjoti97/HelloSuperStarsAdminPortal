import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import './Components/Admin/Adminlogin.css'
import AdminRoute from './Components/Admin/AdminRoute';
import Header from './Components/Pages/Header/Header';

import AdminLogin from "./Components/Admin/AdminLogin";
import AdminRegistration from './Components/Admin/AdminRegistratoin';
import AdminOTP from "./Components/Admin/AdminOTP";
import AdminPannel from './Components/Admin/AdminPannel';

// ----------> Starting of the Added for Admin Routing <---------------
import LiveChatContent from "./Components/Admin/Home/Pages/LiveChatSpStar/LiveChatContent";
import UpcomingEvent from "./Components/Admin/Home/Pages/UpcomingEvent/UpcomingEvent";
import SuperStarDashboard from "./Components/Admin/Home/SuperStarDashboard";
import AddSessionContent from "./Components/Admin/Home/Pages/LiveChatSpStar/AddSessionContent";
import LiveChatProfile from "./Components/Admin/Home/Pages/LiveChatSpStar/LiveChatProfile";
import RegistertUser from "./Components/Admin/Home/Pages/LiveChatSpStar/RegisterUser/RegistertUser";
import AddSuperStar from "./Components/Admin/Home/Pages/AddSuperStar/AddSuperStar";
import WelcomeSuperStarPrint from "./Components/Admin/Home/Pages/WelcomSuperStarPrint/WelcomeSuperStarPrint";
import SCheduleViewAdmin from "./Components/Admin/Home/Pages/LiveChatSpStar/Content/SCheduleViewAdmin";
// ----------> End of the Added for Admin  Routing <---------------


import SuperStarQR from './Components/SuperStar/SuperStarQR';
import SuperStarRegistration from './Components/SuperStar/SuperStarRegistration';
import HelloSuperStarShakib from './Components/Admin/Home/Pages/Congratulations/HelloSuperStarShakib';
import SuperStarOTP from './Components/SuperStar/SuperStarOtp';
import SuperStarRegistrationOTP from './Components/SuperStar/SuperStarRegistrationOtp';

import DashboardStar from './Components/SuperStar/StarHader/DashboardStar'

// ----------> Newly Added for SuperStar Routing <---------------
import StarLiveChatContent from './Components/SuperStar/Pages/StarLiveChat/StarLiveChatContent'
import StarPendingContent from './Components/SuperStar/Pages/StarLiveChat/StarPendingContent'
import StarAddSessionContent from './Components/SuperStar/Pages/StarLiveChat/StarAddSessionContent'
// import StarPendingView from '../Pages/StarLiveChat/StarPendingView';
import StarScheduleView from './Components/SuperStar/Pages/StarLiveChat/Content/StarScheduleView';
import StarUpcomingEvent from './Components/SuperStar/Pages/StarUpcomingEvent/StarUpcomingEvent';

// import StarLiveChatContent from './Components/SuperStar/StarHader/StarNave'
// import StarPendingContent from './Components/SuperStar/StarHader/StarNave'
// import StarAddSessionContent from './Components/SuperStar/StarHader/StarNave'
// import StarScheduleView from './Components/SuperStar/StarHader/StarNave'
// import StarUpcomingEvent from './Components/SuperStar/StarHader/StarNave'


//Private Route

import SuperStarRoute from "./Components/PrivateRoute/SuperStarRoute";

import RegisterLeftCard from './Components/Admin/Home/Pages/LiveChatSpStar/RegisterUser/component/RegisterLeftCard';


import axios from "axios";
import SuperstarRoute from './Components/SuperStar/SuperstarRoute';
import SuperstarGreetings from './Components/Admin/Home/Pages/SuperstarGreetings/SuperstarGreetings';
import SuperstarGreetingsForm from './Components/Admin/Home/Pages/SuperstarGreetings/SuperstarGreetingsForm/SuperstarGreetingsForm';

// add By Sonet
import AdminLayout from './Components/Admin/MasterLayout';
import AdminPrivateRoute from './Components/PrivateRoute/AdminPrivateRoute';


axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.baseURL = "http://localhost:8000/";

axios.interceptors.request.use(function (config)
{
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '' ;
  return config;
});




function App() {
return (
<>
  <Router>
    <Switch>

      

      {/* Superstar Route - Admin | Route  */}
      <Route exact path='/' component={AdminPannel} />
      <Route exact path='/superstar-admin/login' component={AdminLogin} />
      <Route exact path='/superstar-admin/registration' component={AdminRegistration} />
      <Route exact path='/superstar-admin/otp' component={AdminOTP} />
      
      {/* Superstar Route - Admin | Sub Route  
      <AdminPrivateRoute exact path='/superstar-admin/dashboard' component={AdminRoute}/>
      <AdminPrivateRoute exact path='/superstar-admin/superstar-registration' component={AdminRegistration} />
      <AdminPrivateRoute exact path='/superstar-admin/live-chat' component={LiveChatContent} />
      <Route exact path='/superstar-admin/live-chat/view' component={SCheduleViewAdmin} />
      <AdminPrivateRoute exact path='/superstar-admin/live-chat/registeruser/:live_chat_id' component={RegistertUser} />
      <AdminPrivateRoute exact path='/superstar-admin/live-chat/add-session' component={AddSessionContent} />
      <AdminPrivateRoute exact path='/superstar-admin/live-chat/chat-star-profile' component={LiveChatProfile} />
      <AdminPrivateRoute exact path='/superstar-admin/upcoming-event' component={UpcomingEvent} />
      <AdminPrivateRoute exact path='/superstar-admin/superstars' component={AddSuperStar} />
      <AdminPrivateRoute exact path='/superstar-admin/agreement-paper/:star_id' component={WelcomeSuperStarPrint} />
      */}

      {/* Add By Sonet */}
      <AdminPrivateRoute path="/superstar-admin" name="Admin" render={(props) => <AdminLayout {...props} />} />

      <AdminPrivateRoute exact path='/superstar-admin/greetings' component={SuperstarGreetings} />
      <AdminPrivateRoute exact path='/superstar-admin/greetings/greetingsForm' component={SuperstarGreetingsForm} />



      {/* Superstar Route - Star| Route  */}
      <Route exact path='/superstar/registration' component={SuperStarRegistration} />
      <Route exact path='/superstar/qr' component={SuperStarQR} />
      <Route exact path='/superstar/otp' component={SuperStarOTP} />
      <Route exact path='/superstar_registration/otp' component={SuperStarRegistrationOTP} />

      <SuperStarRoute exact path='/superstar/congratulations' component={HelloSuperStarShakib} />


      {/* Superstar Route - Star New | Sub Route  */}
      <Route exact path="/superstar">
        <Redirect exact path="/superstar/dashboard"/>
      </Route>
      <Route exact path="/superstar/dashboard" component={DashboardStar}/>
      <Route exact path="/superstar/live-chat" component={StarLiveChatContent}/>
      <Route exact path='/superstar/Live-chat/view' component={StarScheduleView}/>
      <Route exact path="/superstar/live-chat/pending-session" component={StarPendingContent}/>
      <Route exact path="/superstar/live-chat/pending-session/view/:id" component={StarAddSessionContent}/>
      <Route exact path="/superstar/live-chat/add-session" component={StarAddSessionContent}/>
      <Route exact path="/superstar/upcoming-event" component={StarUpcomingEvent}/>
    
      

      {/* Superstar Route - Star| Sub Route  */}
      {/* <SuperStarRoute  exact path='/superstar/dashboard' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/view' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/registeruser/:live_chat_id' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/add-session' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session/view/:id' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/star-live/leftcard' component={RegisterLeftCard}/> */}
                    


      {/* Superstar Route - Star Home | Route  */}
      <Route exact path='/superstar' component={Header} />

     
      
    </Switch>
  </Router>

</>
);
}

export default App;