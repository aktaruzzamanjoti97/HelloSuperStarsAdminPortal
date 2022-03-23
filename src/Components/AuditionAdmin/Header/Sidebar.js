import axios from "axios";
import React from "react";
import { Dropdown } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './Sidebar.css';


const Sidebar = () => {
    const history = useHistory();

    const logoutSubmit = (e) => {
        e.preventDefault();
        
        axios.post(`/api/logout`).then(res => {
          if(res.data.status === 200)
          {
            localStorage.removeItem('auth_token');
            localStorage.removeItem('auth_name');
            localStorage.removeItem('auth_otp');
            localStorage.removeItem('auth_id');
            localStorage.removeItem('auth_phone');
            
            swal("Success",res.data.message,"success");
            history.push('/');
            //browserHistory.push("/path-to-link");
            //window.location.href = "/";
          }
          else
          {
            swal("Warning",res.data.message,"Warning");
            //history.push('/');
          }
        });
      }

    return (
        <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Core</div>
                            <Link className="nav-link" to="/superstar-admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>

                            {/* <Link className="nav-link" to="/superstar-admin/post">
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
                            </Link> */}

                            {/* <Link className="nav-link" to="/superstar-admin/jury-board">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Jury Board
                            </Link> */}

                            {/* <Link className="nav-link" to="/superstar-admin/live-chat">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Live Chat
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/progressbar">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Progress BarF
                            </Link> */}

                            <Link className="nav-link" to="/audition-admin/audition">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Audition
                            </Link>
                            
                            {/* <Link className="nav-link" to="/superstar-admin/learning-session">
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
                            <Link className="nav-link" to="/superstar-admin/fan-group">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Fan Group
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
                            <Link className="nav-link" to="/superstar-admin/souvenir">
                                <div className="sb-nav-link-icon "><i className="fas fa-tachometer-alt"></i></div>
                                <div className="dropDownMarketPlaece">
                                <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">
                       <span className="text-muted">Order List</span>
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item className='marktePlaceOrderTxt'><Link to='/superstar-admin/souvenir/marketplace-orderlist'> MarketPlace </Link></Dropdown.Item>
                                    <Link to='superstar-admin/souvenir/auction-orderlist'><Dropdown.Item className="marktePlaceOrderTxt">Auction</Dropdown.Item></Link>
                                    
                                    
                            
                                </Dropdown.Menu>
                                </Dropdown>
                                </div>
                          
                            </Link>
                            <Link className="nav-link" to="/superstar-admin/wallet">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Wallet
                            </Link> */}
                            <Link className="nav-link" to="/superstar-admin/settings">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Settings
                            </Link>
                            

                            
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        <h5 className="text-warning">{localStorage.auth_name}</h5>
                        <button className="btn btn-warning" onClick={logoutSubmit}>Logout</button>
                    </div>
                </nav>
    );

}

export default Sidebar;