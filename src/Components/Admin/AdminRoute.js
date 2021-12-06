import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import './Home/Pages/LiveChatSpStar/SuperStarContent.css'
import SideMenu from "./Header/NavSuperStar/SideMenu";
// import { menuItems } from "./NavBar/SideMenu";
import './Header/NavSuperStar/NavSuperStar.css'
import LiveChatContent from "./Home/Pages/LiveChatSpStar/LiveChatContent";
import UpcomingEvent from "./Home/Pages/UpcomingEvent/UpcomingEvent";
import SuperStarDashboard from "./Home/SuperStarDashboard";

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
                    <Route exact path='/superstar-admin/live-chat' component={LiveChatContent} />
                    <Route exact path='/superstar-admin/upcoming-event' component={UpcomingEvent} />
                    
                </Switch>
            </div>
    </Router>
</div>
);
}

export default AdminRoute