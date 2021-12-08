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





function App() {
return (
<>
  <Router>
    <Switch>

      <Route exact path='/'component={Header} />

      {/* Superstar Route - Admin | Route  */}
      <Route exact path='/superstar-admin' component={AdminPannel} />
      <Route exact path='/superstar-admin/login' component={AdminLogin} />
      <Route exact path='/superstar-admin/registration' component={AdminRegistration} />
      <Route exact path='/superstar-admin/otp' component={AdminOTP} />
      

      {/* Superstar Route - Star| Route  */}
      <Route exact path='/superstar/registration' component={SuperStarRegistration} />
      <Route exact path='/superstar/qr' component={SuperStarQR} />
      <Route exact path='/superstar/congratulations' component={HelloSuperStarShakib} />



      <Route exact ><AdminRoute/></Route>
     
      
    </Switch>
  </Router>

</>
);
}

export default App;