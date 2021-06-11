import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import "../../css/signup.css";
import { ReactComponent as Profile } from "../../images/user.svg";

export const Signup = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  // Values entered into form data
  const { name, lastname, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  // When user submit's form, make sure passwords match before granting access
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/Homepage" />;
  }

  return (
    <Fragment>
      <div className="title">
        <h2>
          {" "}
          <a href="/Login" id="smalllogin">
            Login
          </a>{" "}
        </h2>

        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <h1 id="titlename">Revitalize</h1>

          <div className="profilebox">
            <Profile width={80} height={80} id="profileButtonMain" />
          </div>

          <div className="signupbox">
            <input
              required
              type="text"
              placeholder="First name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
            <input
              required
              type="text"
              placeholder="Last name"
              name="lastname"
              value={lastname}
              onChange={(e) => onChange(e)}
            />
            <input
              required
              type="text"
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              required
              type="password"
              placeholder="Password"
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

          <button className="signupbutton">Sign up</button>
          <div>
            <Link to="/Login" id="smallsignup">
              Already signed up?
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

// Prop functions
Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
