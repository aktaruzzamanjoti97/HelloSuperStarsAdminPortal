import axios from "axios";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import "./Sidebar.css";

const Sidebar = () => {
  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();

    axios.post(`/api/logout`).then((res) => {
      if (res.data.status === 200) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_name");
        localStorage.removeItem("auth_otp");
        localStorage.removeItem("auth_id");
        localStorage.removeItem("auth_phone");

        swal("Success", res.data.message, "success");
        history.push("/");
        //browserHistory.push("/path-to-link");
        //window.location.href = "/";
      } else {
        swal("Warning", res.data.message, "Warning");
        //history.push('/');
      }
    });
  };

  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
        <div className="nav">
          <div className="sb-sidenav-menu-heading">Core</div>
          <Link className="nav-link" to="/superstar/dashboard">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </Link>

          <Link className="nav-link" to="/superstar/post">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Post
          </Link>

          <Link className="nav-link" to="/superstar/live-chat">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Live Chat
          </Link>
          <Link className="nav-link" to="/superstar/progressbar">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Progress Bar
          </Link>
          <Link className="nav-link">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            <div className="myButton">
              <div class="dropdown">
                <button
                  class="btn btn-secondary dropdown-toggle"
                  type="button"
                  id="dropdownMenuButton2"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Audition
                </button>
                <ul
                  class="dropdown-menu dropdown-menu-dark"
                  aria-labelledby="dropdownMenuButton2"
                >
                  <li>
                    <Link class="dropdown-item" to="/superstar/audition">
                      Audititon dashboard
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/superstar/audition/live">
                      Live audition
                    </Link>
                  </li>
                  <li>
                    <Link
                      class="dropdown-item"
                      to="/superstar/pending-audition"
                    >
                      Pending audition
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="">
                      Result
                    </Link>
                  </li>
                </ul>
              </div>
              {/* <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <span className="auditionSideText">Order List</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item className="styleNone">
                    <Link to="/superstar-admin/souvenir/marketplace-orderlist">
                      {" "}
                      MarketPlace{" "}
                    </Link>
                  </Dropdown.Item>
                  <Link to="superstar-admin/souvenir/auction-orderlist">
                    <Dropdown.Item className="styleNone">
                      Auction
                    </Dropdown.Item>
                  </Link>
                </Dropdown.Menu>
              </Dropdown> */}
            </div>
          </Link>
          <Link className="nav-link" to="/superstar/learning-session">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Learning Session
          </Link>
          <Link className="nav-link" to="/superstar/live-video">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Live Video
          </Link>
          <Link className="nav-link" to="/superstar/meetup-events/approved">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Meetup Events
          </Link>
          <Link className="nav-link" to="/superstar/upcoming-event">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Upcoming Events
          </Link>
          <Link className="nav-link" to="/superstar/fan-group">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Fan Group
          </Link>
          <Link className="nav-link" to="/superstar/greetings">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Greetings
          </Link>
          <Link className="nav-link" to="/superstar/souvenir">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Sovenir
          </Link>
          <Link className="nav-link" to="/superstar/wallet">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Wallet
          </Link>
          <Link className="nav-link" to="/superstar/settings">
            <div className="sb-nav-link-icon">
              <i className="fas fa-tachometer-alt"></i>
            </div>
            Settings
          </Link>
        </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        <h5 className="text-warning">{localStorage.auth_name}</h5>
        <button className="btn btn-warning" onClick={logoutSubmit}>
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;
