import './App.css';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import './Components/Admin/Adminlogin.css'
import VideoCall from './VideoCall'


// Main Layout
import AdminLayout from './Components/Admin/MasterLayout';
import StarLayout from './Components/SuperStar/MasterLayout';
import AuditionAdminLayout from './Components/AuditionAdmin/MasterLayout';


//Private Route
import AdminPrivateRoute from './Components/PrivateRoute/AdminPrivateRoute';
import AuditionAdminPrivateRoute from './Components/PrivateRoute/AuditionAdminPrivateRoute';
import SuperStarRoute from "./Components/PrivateRoute/SuperStarRoute";



// Indevidual Route for Admin
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminRegistration from './Components/Admin/AdminRegistratoin';
import AdminOTP from "./Components/Admin/AdminOTP";
import AdminPannel from './Components/Admin/AdminPannel';


// Indevidual Route for Audion Admin
import AuditionAdminOTP from './Components/AuditionAdmin/AdminOTP'

// Indevidual Route for Star
import SuperStarQR from './Components/SuperStar/SuperStarQR';
import SuperStarRegistration from './Components/SuperStar/SuperStarRegistration';
import HelloSuperStarShakib from './Components/Admin/Home/Pages/Congratulations/HelloSuperStarShakib';
import SuperStarOTP from './Components/SuperStar/SuperStarOtp';
import SuperStarRegistrationOTP from './Components/SuperStar/SuperStarRegistrationOtp';

// Extra New Route
import RegisterLeftCard from './Components/Admin/Home/Pages/LiveChatSpStar/RegisterUser/component/RegisterLeftCard';
import SuperstarRoute from './Components/SuperStar/SuperstarRoute';


import NotFound from './Components/Pages/Errors/Error';


// Connect with Backend with Laravel Sanctum Authentication //
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
// -------------------------------------------------------- //




function App() {
return (
<>
  <Router>
    <Switch>

      {/* Indevidual Admin Route */}
      <Route exact path='/' component={AdminPannel} />
      <Route exact path='/superstar-admin/login' component={AdminLogin} />
      <Route exact path='/superstar-admin/registration' component={AdminRegistration} />
      <Route exact path='/superstar-admin/otp' component={AdminOTP} />

      {/* Indevidual SuperStar Route */}
      <Route exact path='/superstar/registration' component={SuperStarRegistration} />

      <Route exact path='/jury-board/registration' component={SuperStarRegistration} />

      <Route exact path='/superstar/qr' component={SuperStarQR} />
      <Route exact path='/superstar/otp' component={SuperStarOTP} />
      <Route exact path='/superstar_registration/otp' component={SuperStarRegistrationOTP} />

      {/* Indevidual Admin Route */}
      <Route exact path='/audition-admin/otp' component={AuditionAdminOTP} />


      <Route exact path='/superstar/congratulations' component={HelloSuperStarShakib} />
      <Route exact path='/videoCall' component={VideoCall} />
      
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session/view/:id' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/star-live/leftcard' component={RegisterLeftCard}/>
      
      {/* Private Route with Main Layout */}
      <AdminPrivateRoute path="/superstar-admin" name="Admin" render={(props) => <AdminLayout {...props} />} />
      <SuperStarRoute path="/superstar" name="SuperStar" render={(props) => <StarLayout {...props} />} />
      <AuditionAdminPrivateRoute path="/audition-admin" name="audition-admin-private-route" render={(props) => <AuditionAdminLayout {...props} />} />

      <Route exact path='/learning-session/live-stream' component={VideoCall} />




      {/* Error Route */}
      <Route path='/404' component={NotFound} />

      <Route component={NotFound} />

    </Switch>
  </Router>

</>
);
}

export default App;