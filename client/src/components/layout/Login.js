import React, { Fragment, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "../../css/login.css";
import { connect } from "react-redux";
import { ReactComponent as Lotus } from "../../images/lotus.svg";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  // Passing the input values into the form + submit for authentication
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect user to homepage once authenticated
  if (isAuthenticated) {
    return <Redirect to="/Homepage" />;
  }

  return (
    <Fragment>
      {/* Login form design */}
      <div className="title">
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="profilebox">
            <Lotus width={80} height={80} id="lotuslogo" />
          </div>
          <h1 id="titlename">Revitalize</h1>
          <div className="signupbox">
            <input
              type="text"
              required
              placeholder="Email address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
            <input
              type="password"
              required
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" className="loginbutton" value="Login" />
          <div>
            <Link to="/Signup" id="smalllogin2">
              Don't have an account?
            </Link>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

// Prop functions
Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

// Mapping the prop to the state
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
