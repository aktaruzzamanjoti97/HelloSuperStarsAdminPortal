import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import './Home/Pages/LiveChatSpStar/SuperStarContent.css'
import SideMenu from "./Header/NavSuperStar/SideMenu";
// import { menuItems } from "./NavBar/SideMenu";
import './Header/NavSuperStar/NavSuperStar.css'

import AdminRegistration from "./Home/Pages/AdminRegistration/AdminRegistration";
import LiveChatContent from "../Admin/Home/Pages/LiveChatSpStar/LiveChatContent";
import UpcomingEvent from "./Home/Pages/UpcomingEvent/UpcomingEvent";
import SuperStarDashboard from "./Home/SuperStarDashboard";
import AddSessionContent from "./Home/Pages/LiveChatSpStar/AddSessionContent";
import LiveChatProfile from "./Home/Pages/LiveChatSpStar/LiveChatProfile";
import RegistertUser from "./Home/Pages/LiveChatSpStar/RegisterUser/RegistertUser";
import AddSuperStar from "./Home/Pages/AddSuperStar/AddSuperStar";
import WelcomeSuperStarPrint from "./Home/Pages/WelcomSuperStarPrint/WelcomeSuperStarPrint";
import AdminPrivateRoute from "../PrivateRoute/AdminPrivateRoute";
import SCheduleViewAdmin from "./Home/Pages/LiveChatSpStar/Content/SCheduleViewAdmin";
//Private Route


function AdminRoute() {
const [inactive, setInactive] = useState(false);

return (
    
<div className="SuperStarRoute">
    <Router>
        <SideMenu onCollapse={(inactive)=> {
            console.log(inactive);
            setInactive(inactive);
            }}
            />

            <div className={`Admincontainer ${inactive ? "inactive" : "" }`}>

                <Switch>

                    <AdminPrivateRoute exact path='/superstar-admin/dashboard' component={SuperStarDashboard}/>
                    <Route exact path='/superstar-admin/superstar-registration' component={AdminRegistration} />
                    <Route exact path='/superstar-admin/live-chat' component={LiveChatContent} />

                    <Route exact path='/superstar-admin/live-chat/view' component={SCheduleViewAdmin} />
                    <Route exact path='/superstar-admin/live-chat/registeruser/:live_chat_id' component={RegistertUser} />
                    <Route exact path='/superstar-admin/live-chat/add-session' component={AddSessionContent} />
                    <Route exact path='/superstar-admin/live-chat/chat-star-profile' component={LiveChatProfile} />
                    <Route exact path='/superstar-admin/upcoming-event' component={UpcomingEvent} />
                    <Route exact path='/superstar-admin/superstars' component={AddSuperStar} />
                    <Route exact path='/superstar-admin/agreement-paper/:star_id' component={WelcomeSuperStarPrint} />   
                </Switch>
            </div>
    </Router>
</div>
);
}

export default AdminRoute