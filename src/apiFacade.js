const URL = "https://nmart.dk/tomcat/devops-starter";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

function apiFacade() {
  /* Insert utility-methods from a latter step (d) here (REMEMBER to uncomment in the returned object when you do)*/

  const setToken = (token) => {
    localStorage.setItem("jwtToken", token);
  };
  const getToken = () => {
    return localStorage.getItem("jwtToken");
  };
  const loggedIn = () => {
    const loggedIn = getToken() != null;
    return loggedIn;
  };
  const logout = () => {
    localStorage.removeItem("jwtToken");
  };

  const login = (user, password) => {
    const options = makeOptions("POST", true, {
      username: user,
      password: password,
    });
    return fetch(URL + "/api/login", options)
      .then(handleHttpErrors)
      .then((res) => {
        setToken(res.token);
      });
  };

  function getCryptoTableRow(c) {
    return (
      <tr>
        <td>${c.from}</td>,<td>${c.price}</td>
      </tr>
    );
  }

  const getAllCrypto = () => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/crypto/all", options).then(handleHttpErrors);
  };

  const fetchLoggedIn = () => {
    const options = makeOptions("GET", true);
    return fetch(URL + "/api/info/", options).then(handleHttpErrors);
  };

  const fetchData = (endpoint, updateAction) => {
    const options = makeOptions("GET", true); //True add's the token
    return fetch(URL + "/api/" + endpoint, options)
      .then(handleHttpErrors)
      .then((data) => updateAction(data));
  };

  const makeOptions = (method, addToken, body) => {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
    };
    if (addToken && loggedIn()) {
      opts.headers["x-access-token"] = getToken();
    }
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  };
  return {
    makeOptions,
    setToken,
    getToken,
    loggedIn,
    login,
    logout,
    fetchData,
    getAllCrypto,
    fetchLoggedIn,
  };
}
const facade = apiFacade();
export default facade;
