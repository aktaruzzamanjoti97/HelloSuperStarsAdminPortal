import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import './Home/Pages/LiveChatSpStar/SuperStarContent.css'
import SideMenu from "./Header/NavSuperStar/SideMenu";
// import { menuItems } from "./NavBar/SideMenu";
import './Header/NavSuperStar/NavSuperStar.css'

import AdminRegistration from "./Home/Pages/AdminRegistration/AdminRegistration";
import LiveChatContent from "./Home/Pages/LiveChatSpStar/LiveChatContent";
import UpcomingEvent from "./Home/Pages/UpcomingEvent/UpcomingEvent";
import SuperStarDashboard from "./Home/SuperStarDashboard";
import AddSessionContent from "./Home/Pages/LiveChatSpStar/AddSessionContent";

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

                    <Route exact path='/superstar-admin/dashboard' component={SuperStarDashboard}/>
                    <Route exact path='/superstar-admin/superstar-registration' component={AdminRegistration} />
                    <Route exact path='/superstar-admin/live-chat' component={LiveChatContent} />
                    <Route exact path='/superstar-admin/live-chat/add-session' component={AddSessionContent} />
                    <Route exact path='/superstar-admin/upcoming-event' component={UpcomingEvent} />
                    <Route exact path='/superstar-admin/superstars' component={UpcomingEvent} />
                    
                </Switch>
                
            </div>
    </Router>
</div>
);
}

export default AdminRoute