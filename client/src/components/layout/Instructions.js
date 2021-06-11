import React, { Fragment } from "react";
import "../../css/instructions.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { ReactComponent as Medi } from "../../images/exercise.svg";
import { ReactComponent as Audio } from "../../images/headphones.svg";
import { ReactComponent as Think } from "../../images/calm.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown2.svg";
import { motion } from "framer-motion";

export const Instructions = ({
  auth: { isAuthenticated, loading },
  logout,
}) => {
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

        {/* Instructions container + information */}
        <div className="instruct_header">
          <h1 className="instruct_name">Instructions</h1>
        </div>
        <div className="instruct_container">
          <div>
            <Medi width={40} height={40} id="medi_icon" />
            <h2 className="instruct_text">Sit down and find a clear space</h2>
          </div>
          <div>
            <Audio width={40} height={40} id="headphone_icon" />
            <h2 className="instruct_text">This is better with headphones</h2>
          </div>
          <div>
            <Think width={40} height={40} id="think_icon" />
            <h2 className="instruct_text">Your all set!</h2>
          </div>
          <div className="start">
            <Link to="/MeditationType">
              <button className="start_button">Start</button>
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
Instructions.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Instructions);
