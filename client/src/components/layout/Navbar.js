import React from "react";
import "../../css/navbar.css";
import { Link } from "react-router-dom";
import { ReactComponent as Settings } from "../../images/settings.svg";
import { ReactComponent as Lotus } from "../../images/lotus.svg";
import { ReactComponent as Profile } from "../../images/user.svg";

export const Navbar = () => {
  return (
    <div className="box">
      <nav>
        <ul id="navbarul">
          <li id="navbar">
            <Link to="/Profile">
              <Profile width={40} height={40} id="profileButton" />
            </Link>
          </li>
          <li id="navbar">
            <Link to="/Instructions">
              <Lotus width={40} height={40} id="meditateButton" />
            </Link>
          </li>
          <li id="navbar">
            <Link to="/Settings">
              <Settings width={40} height={40} id="settingsButton" />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
