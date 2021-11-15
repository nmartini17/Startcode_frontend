import { useState, useEffect } from "react";

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
    <>
      <h3>{joke.joke}</h3>
      <br />
      <ul>
        <li>
          Prisen på {BTC.crypto} er: ${BTC.ref}
        </li>
        <br />
        <li>
          Prisen på {ETH.crypto} er: {ETH.ref}
        </li>
        <br />
        <li>
          Prisen på {DOGE.crypto} er: {DOGE.ref}
        </li>
        <br />
        <li>
          Prisen på {LTC.crypto} er: {LTC.ref}
        </li>
        <br />
        <li>
          Prisen på {XRP.crypto} er: {XRP.ref}
        </li>
        <br />
      </ul>
    </>
  );
}

export default Exercise2;
