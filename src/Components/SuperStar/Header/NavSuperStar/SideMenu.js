import React, { useEffect, useState } from "react";
import logo from '../../../../assets/images/helloSuperStar.png';
import user from "../../../../assets/images/Profile/profile.jpg";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

/**
 * @author
 * @function SideMenu
 **/


const SideMenu = (props) => {

  const history = useHistory();

  const logoutSubmit = (e) => {
    e.preventDefault();
    
    axios.post(`/api/logout`).then(res => {
      if(res.data.status === 200)
      {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('auth_name');
        swal("Success",res.data.message,"success");
        history.push('/superstar-admin/login');
      }
      else
      {
        swal("Warning",res.data.message,"Warning");
        //history.push('/');
      }
    });
  }

  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="SuperStar-head-text-c">
        <img src={logo} alt="sdhfhsd" className="logo-ad"/> <span className="starName"> Superstar</span>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i className="fas fa-bars"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i className="fas fa-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul >



        
          {/* {menuItems.map((menuItem) => (
            <MenuItem
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
            />
          ))} */}

          

         <Link to='/superstar/dashboard'> 
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/live-chat'> 
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Live Chat</span>
            </a>
          </li>
          </Link>


          <Link to='/superstar/progressbar'> 
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Progress bar</span>
            </a>
          </li> 
          </Link>
          <Link to='/superstar/audition'> 
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Audition</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/learning-session'> 
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Learning Session</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/live-video'> 
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Live Video</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/meetup-events'> 
         <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Meetup Events</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/upcoming-event'> 
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Upcoming Event</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/greetings'> 
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Greetings</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/souvenir'> 
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Souvenir</span>
            </a>
          </li> 
          </Link>

           <Link to='/superstar/wallet'> 
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Wallet</span>
            </a>
          </li> 
          </Link>

          <Link to='/superstar/settings'> 
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i className="bi bi-speedometer2"></i>
              </div>
              <span>Settings</span>
            </a>
          </li> 
          </Link>

        </ul>
      </div>

      <div className="side-menu-footer">
        <div className="avatar">
          <img src={user} alt="user" />
        </div>
        <div className="user-info">
        <h5>{localStorage.auth_name}</h5>
          <button className="btn btn-sm btn-warning" onClick={logoutSubmit}> Log Out </button>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
