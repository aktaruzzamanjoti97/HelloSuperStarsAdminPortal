import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import axios from "axios";
import './Components/Admin/Adminlogin.css'



// Main Layout
import AdminLayout from './Components/Admin/MasterLayout';
import StarLayout from './Components/SuperStar/MasterLayout';


//Private Route
import AdminPrivateRoute from './Components/PrivateRoute/AdminPrivateRoute';
import SuperStarRoute from "./Components/PrivateRoute/SuperStarRoute";



// Indevidual Route for Admin
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminRegistration from './Components/Admin/AdminRegistratoin';
import AdminOTP from "./Components/Admin/AdminOTP";
import AdminPannel from './Components/Admin/AdminPannel';

// Indevidual Route for Star
import SuperStarQR from './Components/SuperStar/SuperStarQR';
import SuperStarRegistration from './Components/SuperStar/SuperStarRegistration';
import HelloSuperStarShakib from './Components/Admin/Home/Pages/Congratulations/HelloSuperStarShakib';
import SuperStarOTP from './Components/SuperStar/SuperStarOtp';
import SuperStarRegistrationOTP from './Components/SuperStar/SuperStarRegistrationOtp';



// Extra New Route
import RegisterLeftCard from './Components/Admin/Home/Pages/LiveChatSpStar/RegisterUser/component/RegisterLeftCard';
import SuperstarRoute from './Components/SuperStar/SuperstarRoute';
// import SuperstarGreetings from './Components/Admin/Home/Pages/SuperstarGreetings/SuperstarGreetings';
// import SuperstarGreetingsForm from './Components/Admin/Home/Pages/SuperstarGreetings/SuperstarGreetingsForm/SuperstarGreetingsForm';




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

      {/*
      <Route exact path='/superstar-admin/greetings' component={SuperstarGreetings} />
      <Route exact path='/superstar-admin/greetings/greetingsForm' component={SuperstarGreetingsForm} />
      */}

      {/* Indevidual SuperStar Route */}
      <Route exact path='/superstar/registration' component={SuperStarRegistration} />
      <Route exact path='/superstar/qr' component={SuperStarQR} />
      <Route exact path='/superstar/otp' component={SuperStarOTP} />
      <Route exact path='/superstar_registration/otp' component={SuperStarRegistrationOTP} />

      <Route exact path='/superstar/congratulations' component={HelloSuperStarShakib} />
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session/view/:id' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/star-live/leftcard' component={RegisterLeftCard}/>
      





      {/* Private Route with Main Layout */}
      <AdminPrivateRoute path="/superstar-admin" name="Admin" render={(props) => <AdminLayout {...props} />} />
      <SuperStarRoute path="/superstar" name="SuperStar" render={(props) => <StarLayout {...props} />} />



      


      {/* Superstar Route - Star| Sub Route  */}
      {/* <SuperStarRoute  exact path='/superstar/dashboard' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/view' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/registeruser/:live_chat_id' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/add-session' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/pedning-session/view/:id' component={SuperstarRoute}/>
      <SuperStarRoute  exact path='/superstar/Live-chat/star-live/leftcard' component={RegisterLeftCard}/> */}
                    

     
      
    </Switch>
  </Router>

</>
);
}

export default App;