import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import './Home/Pages/LiveChatSpStar/SuperStarContent.css'
import SideMenu from "./Header/NavSuperStar/SideMenu";
// import { menuItems } from "./NavBar/SideMenu";
import './Header/NavSuperStar/NavSuperStar.css'
import LiveChatContent from "./Home/Pages/LiveChatSpStar/LiveChatContent";
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

                {/* {menuItems.map((menu, index) => (
                <>
                    <Route key={menu.name} exact={menu.exact} path={menu.to}>
                        <h1>{menu.name}</h1>
                    </Route>
                    {menu.subMenus && menu.subMenus.length > 0
                    ? menu.subMenus.map((subMenu, i) => (
                    <Route key={subMenu.name} path={subMenu.to}>
                        <h1>{subMenu.name}</h1>
                    </Route>
                    ))
                    : null}
                </>
                ))} */}
                <Switch>

                    <Route exact path='/admin' component={SuperStarDashboard}/>
                    <Route exact path='/admin/live-chat' component={LiveChatContent} />

                </Switch>

            </div>
    </Router>
</div>
);
}

export default AdminRoute