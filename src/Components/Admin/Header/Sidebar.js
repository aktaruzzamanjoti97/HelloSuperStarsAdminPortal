import React from "react";
import {Link} from 'react-router-dom';


const Sidebar = () => {

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/superstar-admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/post">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Post
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/schedule-create">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Schedule Create
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/superstars">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Super Stars
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/live-chat">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Live Chat
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/progressbar">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Progress Bar
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/audition">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Audition
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/learning-session">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Learning Session
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/live-video">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Live Video
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/meetup-events/approved">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Meetup Events
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/upcoming-event">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Upcoming Events
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/greetings">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Greetings
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/souvenir">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Souvenir
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/wallet">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Wallet
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/settings">
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