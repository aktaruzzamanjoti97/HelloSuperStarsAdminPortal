import React from "react";
import navicon from "../../../assets/images/Navbar/Ellipse 1.png";
import menubar from "../../../assets/images/Navbar/Ellipse 140.png";
import profile from '../../../assets/images/Navbar/unsplash_iFgRcqHznqg.png'
import MainDashbord from "../MainDashbord/MainDashbord";

import "./Header.css";

const Header = () => {
  return (
    <>
      <nav class="navbar sticky-top navbar-expand-lg navbar-light NavigationHead">
        <div class="container-fluid container-custom">
          <a class="navbar-brand" href="/">
            <img src={navicon} alt="" height="32px" width="32px" />
            <span className="text-warning mx-1">Hello Superstar - Star</span>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  <img src={menubar} alt="" height="32px" width="32px" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={menubar} alt="" height="32px" width="32px" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={menubar} alt="" height="32px" width="32px" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={menubar} alt="" height="32px" width="32px" />
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={menubar} alt="" height="32px" width="32px" />
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link p-1" href="/">
                  <button className="btn btn-style">
                 
                    <span>
                      <i class="fas fa-cog"></i>
                    </span>
                  <span className="fw-bold mx-1">
                  Creator Studio
                  </span>
                  </button>
                </a>
              </li>

              <li class="nav-item">
                <a class="nav-link" href="/">
                  <img src={profile} alt="" height="32px" width="32px" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <MainDashbord />
    </>
  );
};

export default Header;
