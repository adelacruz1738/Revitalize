import React, { Fragment, useState, useEffect } from "react";
import "../../css/profile.css";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { ReactComponent as User } from "../../images/user.svg";
import { ReactComponent as Dropdown } from "../../images/dropdown2.svg";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import { createProfile, getCurrentProfile } from "../../actions/profile";
import { motion } from "framer-motion";

export const Profile = ({
  auth: { isAuthenticated, loading, user },
  logout,
  setAlert,
  updateProfile,
  history,
}) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    getCurrentProfile();

    setFormData({});
  }, []);

  const { username, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    createProfile(formData, history);
  };

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

        {/* Profile form containers */}
        <div className="profile_header">
          <h1 className="profilename">Profile</h1>
        </div>

        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="profile_container">
            <div className="user_profile">
              <User width={40} height={40} id="profile_icon" />
              <h2 className="profile_username">{user && user.name}</h2>
            </div>
            <div className="profile_input">
              <input
                required
                type="text"
                placeholder={user && user.name}
                name="username"
                value={username}
                onChange={(e) => onChange(e)}
              />
              <input
                required
                type="text"
                placeholder={user && user.email}
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
              />
              <input
                required
                type="password"
                placeholder="New password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
              />
              <input
                required
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button type="submit" className="save_profile">
              Save
            </button>
          </div>
        </form>

        <div className="navbarstyle">
          <Navbar />
        </div>
      </motion.div>
    </Fragment>
  );
};

// Prop functions
Profile.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  createProfile: PropTypes.func.isRequired,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { logout, getCurrentProfile })(
  withRouter(Profile)
);
