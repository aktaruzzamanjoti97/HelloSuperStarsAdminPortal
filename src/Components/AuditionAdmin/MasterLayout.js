import React from "react";
import {Switch, Route, Redirect} from 'react-router-dom';
import routes from "./AuditionAdminRoute";
import Navbar from "./Header/Navbar";
import Sidebar from "./Header/Sidebar";
import './assets/css/styles.css'



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
                            <Redirect from="/audition-admin" to="/audition-admin/dashboard" />
                        </Switch>
                    </main>
                    
                    {/*<Footer></Footer>*/}
                </div>

            </div>

        </div>
    );

}

export default MasterLayout;