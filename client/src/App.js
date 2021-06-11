// APP MUST BE VIEWED IN MOBILE VIEW

import React, { Fragment, useEffect } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Signup from "./components/layout/Signup";
import Login from "./components/layout/Login";
import Homepage from "./components/layout/Homepage";
import Settings from "./components/layout/Settings";
import Instructions from "./components/layout/Instructions";
import Goals from "./components/layout/Goals";
import Profile from "./components/layout/Profile";
import Results from "./components/layout/Results";
import Alert from "./components/layout/Alert";
import Meditationtype from "./components/layout/Meditationtype";
import Meditate from "./components/layout/Meditate";
import "react-calendar/dist/Calendar.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Redux - allows to see state of requests
import { Provider } from "react-redux";
import store from "./store";
import { loadUser } from "./actions/auth";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className="container">
            <Alert />
            <AnimatePresence>
              <Switch>
                <Route exact path="/" component={Signup} />
                <Route exact path="/Signup" component={Signup} />
                <Route exact path="/Homepage" component={Homepage} />
                <Route exact path="/Navbar" component={Navbar} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Goals" component={Goals} />
                <Route exact path="/Instructions" component={Instructions} />
                <Route exact path="/Settings" component={Settings} />
                <Route exact path="/Profile" component={Profile} />
                <Route exact path="/Results" component={Results} />
                <Route
                  exact
                  path="/Meditationtype"
                  component={Meditationtype}
                />
                <Route exact path="/Meditate/:id" component={Meditate} />
              </Switch>
            </AnimatePresence>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
