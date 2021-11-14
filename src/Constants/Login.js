import { useState } from "react";

export default function LogIn({ login }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  };
  const onChange = (evt) => {
    setLoginCredentials({
      ...loginCredentials,
      [evt.target.id]: evt.target.value,
    });
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onChange={onChange}>
        <div className="row justify-content-center">
          <div className="col-4 col-sm-3 mb-2">
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="User Name"
            />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3 b">
            <button
              type="button"
              onClick={performLogin}
              className="btn btn-primary"
            >
              Login
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
