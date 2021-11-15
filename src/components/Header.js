import { BrowserRouter as Router, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <li>
        <NavLink exact activeClassName="selected" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/crypto">
          Crypto
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/cryptojokes">
          Crypto & Jokes
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/jokes">
          Jokes
        </NavLink>
      </li>
      <li>
        <NavLink exact activeClassName="selected" to="/yomama">
          Yomama
        </NavLink>
      </li>
    </div>
  );
}

export default Header;
