import React, { useState } from "react";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import Header from "./Constants/Header";
import Crypto from "./Constants/Crypto";
import Home from "./Constants/Home";

function App(apiFacade) {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/crypto">
          <Crypto />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
