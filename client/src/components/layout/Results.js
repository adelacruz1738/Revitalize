import React, { Fragment } from "react";
import "../../css/results.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { ReactComponent as Duration } from "../../images/queue.svg";
import { ReactComponent as Happy } from "../../images/happy.svg";
import { ReactComponent as Goal } from "../../images/goal.svg";
import { ReactComponent as Home } from "../../images/home.svg";
import { ReactComponent as Shuffle } from "../../images/shuffle.svg";
import { ReactComponent as Redo } from "../../images/rearrow.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown2.svg";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { motion } from "framer-motion";

export const Results = (props) => {
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

        {/* Result container + stats */}
        <div className="results_header">
          <h1>How do you feel?</h1>
        </div>

        <div className="results_container">
          <div>
            <h2 className="result_text">Meditation duration</h2>
            <div className="results_box">
              <h1 className="result">3 hours</h1>
              <Duration width={40} height={40} id="duration_icon" />
            </div>
          </div>
          <div>
            <h2 className="result_text">Mood changes</h2>
            <div className="results_box">
              <h1 className="result">Happy</h1>
              <Happy width={40} height={40} id="mood_icon" />
            </div>
          </div>
          <div>
            <h2 className="result_text">Goal progression</h2>
            <div className="results_box">
              <h1 className="result">50%</h1>
              <Goal width={40} height={40} id="goal_icon" />
            </div>
          </div>
          <h3 className="song_name">{props.song}</h3>
        </div>

        {/* Replay, home and shuffle buttons */}
        <div className="result_row">
          <div className="icon_box">
            <Link to="/Meditate/1">
              <Redo width={50} height={50} id="redo_icon" />
            </Link>
          </div>
          <div className="icon_box">
            <Link to="/Homepage">
              <Home width={50} height={50} id="home_icon" />
            </Link>
          </div>
          <div className="icon_box">
            <Link to="/Meditate/id">
              <Shuffle width={50} height={50} id="shuffle_icon" />
            </Link>
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
Results.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Results);
