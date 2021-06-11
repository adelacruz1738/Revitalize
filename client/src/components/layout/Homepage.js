import React, { Fragment, useEffect } from "react";
import "../../css/homepage.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { ReactComponent as Checklist } from "../../images/clipboard.svg";
import { ReactComponent as Goals } from "../../images/goal.svg";
import { ReactComponent as Happy } from "../../images/happy.svg";
import { ReactComponent as Sad } from "../../images/sad.svg";
import { ReactComponent as Angry } from "../../images/angry.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown2.svg";
import Navbar from "./Navbar";
import Calendar from "react-calendar";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { getCurrentProfile } from "../../actions/profile";
import { motion } from "framer-motion";

export const Homepage = ({
  auth: { isAuthenticated, loading, user },
  logout,
  getCurrentProfile,
  profile: { profile },
  autho,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

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
        </section>

        {/* Homepage nagivation links */}
        <h1 id="welcome">Welcome back {user && user.name}!</h1>
        <div className="homepage_block">
          <div className="col1">
            <Link to="/Results">
              <button id="latest_session">
                <Checklist width={40} height={40} id="checkButton" />
                <h1>Results</h1>
              </button>
            </Link>
          </div>
          <div className="col2">
            <Link to="/Goals">
              <button id="goals_button">
                <Goals width={40} height={40} id="goalsButton" />
                <h1>Goals</h1>
              </button>
            </Link>
          </div>
        </div>

        <div className="calendarstyle">
          <Calendar className={["c1", "c2"]} />
        </div>

        {/* Mood Buttons */}
        <div className="col3">
          <button id="happy_button">
            <Happy width={63} height={63} id="happyButton" />
          </button>
          <button id="sad_button">
            <Sad width={63} height={63} id="happyButton" />
          </button>
          <button id="angry_button">
            <Angry width={63} height={63} id="happyButton" />
          </button>
        </div>
        <h1 id="moodHeader">Current Mood: {profile && profile.mood}</h1>

        <div className="navbarstyle">
          <Navbar />
        </div>
      </motion.div>
    </Fragment>
  );
};

// Prop functions
Homepage.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(
  Homepage
);
