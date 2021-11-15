import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./style2.css";
import Header from "./components/Header";
import Exercise1 from "./components/Exercise1";
import Exercise2 from "./components/Exercise2";
import Exercise3 from "./components/Exercise3";
import Exercise4 from "./components/Exercise4";
import facade from "./apiFacade";
import LoggedIn from "./components/LoggedIn";
import LogIn from "./components/Login";

export default function App(props) {
  return (
    <Router>
      <div>
        <ul className="header">
          <Header />
        </ul>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/crypto">
              <Exercise1 facade={props.facade} />
            </Route>
            <Route path="/cryptojokes">
              <Exercise2 facade={props.facade} />
            </Route>
            <Route path="/jokes">
              <Exercise3 facade={props.facade} />
            </Route>
            <Route path="/yomama">
              <Exercise4 facade={props.facade} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };
  const login = (user, pass) => {
    facade.login(user, pass).then((res) => setLoggedIn(true));
  };

  return (
    <div>
      <h2>Frontend Startcode</h2>
      <p>
        Here im going to add some text to explain how im using the things in my
        project :)
      </p>
      <div>
        {!loggedIn ? (
          <LogIn login={login} />
        ) : (
          <div>
            <LoggedIn facade={facade} />
            <button class="btn btn-danger" onClick={logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
