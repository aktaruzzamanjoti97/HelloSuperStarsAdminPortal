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
                            <Link className="nav-link" to="/audition-admin/dashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </Link>

                         

                            <Link className="nav-link" to="/audition-admin/audition">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Audition
                            </Link>

                           
                            
                        
                            <Link className="nav-link" to="/audition-admin/audition">
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