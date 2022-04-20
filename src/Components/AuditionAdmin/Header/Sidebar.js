import axios from "axios";
import React, {useState} from "react";
import { Dropdown,Collapse } from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';
import swal from 'sweetalert';
import './Sidebar.css';

const Sidebar = () => {
const [open, setOpen] = useState(false);
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
            <div className="nav-link" onClick={()=> setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
                >
                <div className="sb-nav-link-icon">
                    <i className="fas fa-tachometer-alt"></i>
                </div>
                Audition
            </div>

            <Collapse in={open}>
                <div id="example-collapse-text">
                    <Link className="nav-link" to="/audition-admin/audition/dashboard">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Dashboard
                    </Link>
                    <Link className="nav-link" to="/audition-admin/audition/event">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Events
                    </Link>
                    <Link className="nav-link" to="/audition-admin/audition/event/create-event">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Create events
                    </Link>
                    <Link className="nav-link" to="/audition-admin/audition/event/request-approve-view">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Request For Approval
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Round
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Live Admins
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Jurys
                    </Link>

                    
                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Result
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    SuperStar
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    SuperStar Admins
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/register-user">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Register User List
                    </Link>
                    <Link className="nav-link" to="/audition-admin/audition/round">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Selected User List
                    </Link>

                   <Link className="nav-link" to="/audition-admin/audition/register-user">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Rejected User List
                    </Link>

                    <Link className="nav-link" to="/audition-admin/audition/certificate-create">
                    <div className="sb-nav-link-icon">
                        <i class="fa-solid fa-circle"></i>
                    </div>
                    Certificate
                    </Link>
                    
                </div>
            </Collapse>

            <Link className="nav-link" to="/audition-admin/audition/participantList">
            <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
            Participant List
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