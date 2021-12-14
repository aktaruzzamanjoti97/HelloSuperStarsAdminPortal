import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import './Home/Pages/LiveChatSpStar/SuperStarContent.css'
import SideMenu from "./Header/NavSuperStar/SideMenu";
import './Header/NavSuperStar/NavSuperStar.css'
import SuperStarDashboard from "../SuperStar/Home/SuperStarDashboard";
import LiveChatContent from "../SuperStar/Home/Pages/LiveChatSpStar/LiveChatContent";
import AddSessionContent from "../SuperStar/Home/Pages/LiveChatSpStar/AddSessionContent";
import PendingContent from "../SuperStar/Home/Pages/LiveChatSpStar/PendingContent";
import LiveChatProfile from "../SuperStar/Home/Pages/LiveChatSpStar/LiveChatProfile";
import PendingView from "../SuperStar/Home/Pages/LiveChatSpStar/PendingView";
import RegisterUser from "../SuperStar/Home/Pages/LiveChatSpStar/RegisterUser/RegistertUser";
import ScheduleView from "./Home/Pages/LiveChatSpStar/Content/ScheduleView";


function SuperstarRoute() {
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

                    <Route exact path='/superstar/dashboard' component={SuperStarDashboard}/>
                    <Route exact path='/superstar/Live-chat' component={LiveChatContent}/>
                    <Route exact path='/superstar/Live-chat/view' component={ScheduleView}/>
                    <Route exact path='/superstar/Live-chat/registeruser' component={RegisterUser}/>
                    <Route exact path='/superstar/Live-chat/add-session' component={AddSessionContent}/>
                    <Route exact path='/superstar/live-chat/chat-star-profile' component={LiveChatProfile}/>
                    <Route exact path='/superstar/Live-chat/pedning-session' component={PendingContent}/>
                    <Route exact path='/superstar/Live-chat/pedning-session/view' component={PendingView}/>
                    
                </Switch>
                
            </div>
    </Router>
</div>
);
}

export default SuperstarRoute
