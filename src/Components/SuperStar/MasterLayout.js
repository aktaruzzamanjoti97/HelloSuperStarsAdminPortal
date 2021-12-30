import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from "./SuperstarRoute";


import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import Sidebar from "./Layouts/Sidebar";


import './assets/css/styles.css'
//import './assets/js/scripts.js'



const MasterLayout = () => {

    


    return (
        <div className="sb-nav-fixed">
            <Navbar></Navbar>

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar></Sidebar>
                </div>

                <div id="layoutSidenav_content">
                    <main className="p-3" style={{ background: '#151515' }}>
                        <Switch>
                            {
                                routes.map( (route, idx) => {
                                    return (
                                        route.component && (
                                            <Route 
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={ (props) => (
                                                    <route.component {...props} />
                                                )}
                                            />
                                        )
                                    )
                                })
                            }
                            <Redirect from="/superstar" to="/superstar/dashboard" />
                        </Switch>
                    </main>
                    
                    {/*<Footer></Footer>*/}
                </div>

            </div>

        </div>
    );

}

export default MasterLayout;