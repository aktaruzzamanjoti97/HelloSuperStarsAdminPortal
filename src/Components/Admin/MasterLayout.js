import React from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import routes from "./AdminRoute";
import './assets/css/styles.css';
import Navbar from "./Header/Navbar";
import Sidebar from "./Header/Sidebar";




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
                    <main className="p-3 h-100" style={{ background: '#151515' }}>
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
                            <Redirect from="/superstar-admin" to="/superstar-admin/dashboard" />
                        </Switch>
                    </main>
                    
                    {/*<Footer></Footer>*/}
                </div>

            </div>

        </div>
    );

}

export default MasterLayout;