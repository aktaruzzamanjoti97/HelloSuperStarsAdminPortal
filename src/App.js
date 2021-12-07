import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './Components/Admin/Adminlogin.css'
import AdminRoute from './Components/Admin/AdminRoute';
import Header from './Components/Pages/Header/Header';

import AdminLogin from "./Components/Admin/AdminLogin";
import AdminOTP from "./Components/Admin/AdminOTP";
import AdminPannel from './Components/Admin/AdminPannel';
import AdminRegistration from './Components/Admin/AdminRegistratoin';

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
      
      <Route><AdminRoute/></Route>

      
    </Switch>
  </Router>

</>
);
}

export default App;