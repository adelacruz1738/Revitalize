import React, { Fragment } from "react";
import "../../css/goals.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { ReactComponent as Dropdown } from "../../images/dropdown2.svg";
import { motion } from "framer-motion";
import Checklist from "../../../src/components/layout/Checklist";

export const Goals = ({ auth: { isAuthenticated, loading }, logout }) => {
  return (
    <Fragment>
      {/* Title + searchbar + dropdownlist */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
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

        <div className="goals_header">
          <h1>Goals</h1>
        </div>

        <div className="goal_container">
          <h3>Enter a goal to accomplish</h3>
          <Checklist />
        </div>
        <div className="navbarstyle">
          <Navbar />
        </div>
      </motion.div>
    </Fragment>
  );
};

Goals.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Goals);
