import React from "react";
import {Link} from 'react-router-dom';


const Sidebar = () => {

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/superstar/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            
                            <Link className="nav-link" to="/superstar/live-chat">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Live Chat
                            </Link>
                            <Link className="nav-link" to="/superstar/progressbar">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Progress Bar
                            </Link>
                            <Link className="nav-link" to="/superstar/auditions">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Audition
                            </Link>
                            <Link className="nav-link" to="/superstar/learning-session">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Learning Session
                            </Link>
                            <Link className="nav-link" to="/superstar/live-video">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Live Video
                            </Link>
                            <Link className="nav-link" to="/superstar/meetup-events/approved">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Meetup Events
                            </Link>
                            <Link className="nav-link" to="/superstar/upcoming-event">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Upcoming Events
                            </Link>
                            <Link className="nav-link" to="/superstar/greetings">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Greetings
                            </Link>
                            <Link className="nav-link" to="/superstar/souvenir">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Sovenir
                            </Link>
                            <Link className="nav-link" to="/superstar/wallet">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Wallet
                            </Link>
                            <Link className="nav-link" to="/superstar/settings">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Settings
                            </Link>
                            

                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        <h5 className="text-warning">{localStorage.auth_name}</h5>
                    </div>
                </nav>
    );

}

export default Sidebar;