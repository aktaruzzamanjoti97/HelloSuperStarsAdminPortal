import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Components/Admin/Adminlogin.css'
import AdminRoute from './Components/Admin/AdminRoute';
import Header from './Components/Pages/Header/Header';

import AdminLogin from "./Components/Admin/AdminLogin";
import AdminRegistration from './Components/Admin/AdminRegistratoin';
import AdminOTP from "./Components/Admin/AdminOTP";
import AdminPannel from './Components/Admin/AdminPannel';


import SuperStarQR from './Components/SuperStar/SuperStarQR';
import SuperStarRegistration from './Components/SuperStar/SuperStarRegistration';
import HelloSuperStarShakib from './Components/Admin/Home/Pages/Congratulations/HelloSuperStarShakib';
import SuperStarOTP from './Components/SuperStar/SuperStarOtp';

//Private Route
// import AdminPrivateRoute from "./Components/PrivateRoute/AdminPrivateRoute";


import axios from "axios";
import SuperstarRoute from './Components/SuperStar/SuperstarRoute';


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
      
      {/* Superstar Route - Admin | Sub Route  */}
      <Route exact path='/superstar-admin/dashboard' component={AdminRoute}/>
      <Route exact path='/superstar-admin/superstar-registration' component={AdminRoute} />
      <Route exact path='/superstar-admin/live-chat' component={AdminRoute} />
      <Route exact path='/superstar-admin/live-chat/registeruser' component={AdminRoute} />
      <Route exact path='/superstar-admin/live-chat/add-session' component={AdminRoute} />
      <Route exact path='/superstar-admin/live-chat/chat-star-profile' component={AdminRoute} />
      <Route exact path='/superstar-admin/upcoming-event' component={AdminRoute} />
      <Route exact path='/superstar-admin/superstars' component={AdminRoute} />
      <Route exact path='/superstar-admin/superstars/details' component={AdminRoute} />

      {/* Superstar Route - Star| Route  */}
      <Route exact path='/superstar/registration' component={SuperStarRegistration} />
      <Route exact path='/superstar/qr' component={SuperStarQR} />
      <Route exact path='/superstar/otp' component={SuperStarOTP} />
      <Route exact path='/superstar/congratulations' component={HelloSuperStarShakib} />
      

      {/* Superstar Route - Star| Sub Route  */}
      <Route exact path='/superstar/dashboard' component={SuperstarRoute}/>
      <Route exact path='/superstar/Live-chat' component={SuperstarRoute}/>
      <Route exact path='/superstar/Live-chat/registeruser' component={SuperstarRoute}/>
      <Route exact path='/superstar/Live-chat/add-session' component={SuperstarRoute}/>
      <Route exact path='/superstar/Live-chat/pedning-session' component={SuperstarRoute}/>
      <Route exact path='/superstar/Live-chat/pedning-session/view' component={SuperstarRoute}/>
                    


      {/* Superstar Route - Star Home | Route  */}
      <Route exact path='/superstar' component={Header} />
     
      
    </Switch>
  </Router>

</>
);
}

export default App;