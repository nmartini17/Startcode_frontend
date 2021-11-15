import { useState, useEffect } from "react";
import { FaBitcoin } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiDogecoin } from "react-icons/si";
import { SiLitecoin } from "react-icons/si";
import { SiRipple } from "react-icons/si";

function Exercise2({ facade }) {
  const [joke, setJoke] = useState({ joke: "", ref: "" });
  const [BTC, setBTC] = useState({ crypto: "", ref: "" });
  const [ETH, setETH] = useState({ crypto: "", ref: "" });
  const [DOGE, setDOGE] = useState({ crypto: "", ref: "" });
  const [LTC, setLTC] = useState({ crypto: "", ref: "" });
  const [XRP, setXRP] = useState({ crypto: "", ref: "" });

  const updates = (data) => {
    setBTC({
      crypto: data.ticker.tickers[0].from,
      ref: data.ticker.tickers[0].price,
    });
    setETH({
      crypto: data.ticker.tickers[1].from,
      ref: data.ticker.tickers[1].price,
    });
    setDOGE({
      crypto: data.ticker.tickers[2].from,
      ref: data.ticker.tickers[2].price,
    });
    setLTC({
      crypto: data.ticker.tickers[3].from,
      ref: data.ticker.tickers[3].price,
    });
    setXRP({
      crypto: data.ticker.tickers[4].from,
      ref: data.ticker.tickers[4].price,
    });
    setJoke({ joke: data.joke.value, ref: data.joke.url });
  };

  useEffect(() => {
    facade.fetchData("crypto/tworemoteservers", updates);
  }, [facade]);

  return (
    <div className="container">
      <div class="row row-cols-2">
        <div className="alert alert-primary" role="alert">
          {joke.joke}
        </div>
        <table className="table table-dark table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                {BTC.crypto} <FaBitcoin />
              </td>
              <td>${BTC.ref}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                {ETH.crypto}
                <FaEthereum />
              </td>
              <td>${ETH.ref}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>
                {DOGE.crypto}
                <SiDogecoin />
              </td>
              <td>{DOGE.ref} BTC</td>
            </tr>
            <tr>
              <td>4</td>
              <td>
                {LTC.crypto}
                <SiLitecoin />
              </td>
              <td>{LTC.ref} BTC</td>
            </tr>
            <tr>
              <td>5</td>
              <td>
                {XRP.crypto}
                <SiRipple />
              </td>
              <td>{XRP.ref} BTC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Exercise2;
