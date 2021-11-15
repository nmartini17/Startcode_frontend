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
    <div>
      <h2>Login</h2>
      <form onChange={onChange}>
        <input
          type="text"
          class="form-control"
          placeholder="User Name"
          id="username"
        />
        <input
          type="password"
          class="form-control"
          placeholder="Password"
          id="password"
        />
        <button class="btn btn-success" onClick={performLogin}>
          Login
        </button>
      </form>
    </div>
  );
}
