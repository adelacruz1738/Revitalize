import React, { Fragment } from "react";
import "../../css/settings.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ReactComponent as Dropdown } from "../../images/dropdown2.svg";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { motion } from "framer-motion";

export const Settings = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Title + searchbar + dropdownlist */}
        <section className="wrapper">
          <div>
            <div className="titlename_hp">
              <Link to="/Homepage">
                <p className="main_title">Revitalize</p>
              </Link>
            </div>
            <form action="" className="p-3">
              <div className="searchbox">
                <input id="search_bar" />
              </div>
              <button id="searchbtn">search</button>
            </form>

            <div className="dropdown">
              <button>
                <Dropdown height={10} width={10} />
              </button>
              <div>
                <Link to="/Profile">Profile</Link>
                <Link to="/Settings">Settings</Link>
                <Link to="/Instructions">Meditate</Link>
                <Link to="/Login" onClick={logout}>
                  Logout
                </Link>
              </div>
            </div>
          </div>

          {/* Settings container + options + logout */}
        </section>
        <div className="settings_headers">
          <h1>Settings</h1>
        </div>

        <div>
          <div className="set_header">
            <h1>General</h1>
          </div>
          <div className="settings_container">
            <div className="space_line">
              <h2 className="settings_text">Account</h2>
            </div>
            <div className="space_line">
              <h2 className="settings_text">Change language</h2>
            </div>
            <div className="space_line">
              <h2 className="settings_text">About</h2>
            </div>
            <div>
              <a id="logoutlink" onClick={logout} href="/">
                <h2 className="login_text">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </h2>
              </a>
            </div>
          </div>
        </div>

        {/* Settings container + options */}
        <div>
          <div className="set_header2">
            <h1>Accessibility</h1>
          </div>
          <div className="settings_container">
            <div className="space_line">
              <h2 className="settings_text">
                Dark mode{" "}
                <li class="tg-list-item">
                  <input class="tgl tgl-flat" id="cb4" type="checkbox" />
                  <label class="tgl-btn" for="cb4"></label>
                </li>
              </h2>
            </div>
            <div className="space_line">
              <h2 className="settings_text">Notifications</h2>
            </div>
            <div className="space_line">
              <h2 className="settings_text">Downloads</h2>
            </div>
            <div className="space_line_none">
              <h2 className="settings_text">Zoom</h2>
            </div>
          </div>
        </div>

        <div className="navbarstyle">
          <Navbar />
        </div>
      </motion.div>
    </Fragment>
  );
};

// Prop functions
Settings.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Settings);
