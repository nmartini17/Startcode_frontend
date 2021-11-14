import { NavLink } from "react-router-dom";
import facade from "../Facade/apiFacade";

function Header({ facade, loggedIn }) {
  return (
    <div>
      <ul className="header">
        <li>
          <NavLink exact activeClassName="active" to="/">
            Home
          </NavLink>
        </li>
        {facade.hasUserAccess("user", loggedIn) && (
          <li>
            <NavLink activeClassName="active" to="/crypto">
              Crypto
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
