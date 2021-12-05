import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRoute from './Components/Admin/AdminRoute';
import SuperStarAdminRoute from './Components/SuperStar/SuperStarAdminRoute'
import SuperStarAuthRoute from './Components/SuperStarAuth/SuperStarAuthRoute'
import Header from './Components/Pages/Header/Header';

import AdminHelloSuperStarAdminPannel from "./Components/Admin/AdminHelloSuperStarAdminPannel";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminOTP from "./Components/Admin/AdminOTP";

// import SuperStarLogin from './Components/SuperStarAuth/Content/SuperStarLogin';
// import SuperStarRoute from './Components/SuperStarAuth/SuperStarAuthRoute';
// import SuperStarHome from './Components/SuperStarAuth/SuperStarHome';
function App() {
return (
<>
  <Router>
    <Switch>
      <Route exact path='/AdminHelloSuperStarAdminPannel'component={AdminHelloSuperStarAdminPannel} />
      <Route exact path='/Admin/login'component={AdminLogin} />
      <Route exact path='/Admin/otp'component={AdminOTP} />

      <Route exact path='/'component={Header} />
      <Route exact path='/hello-superstar-admin-panel/admin' component={AdminRoute} />
      <Route exact path='/hello-superstar-star-panel' component={SuperStarAdminRoute} />
      <Route exact path='/superstar-admin' component={SuperStarAuthRoute} />
      
    </Switch>
  </Router>

</>
);
}

export default App;