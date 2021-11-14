import React, { useState } from "react";
import facade from "../Facade/apiFacade";
import LogIn from "./Login";
import LoggedIn from "./LoggedIn";

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
      {!loggedIn ? (
        <LogIn />
      ) : (
        <div>
          <LoggedIn facade={facade} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Home;
