import { useState, useEffect } from "react";

function Exercise1({ facade }) {
  const [BTC, setBTC] = useState({ crypto: "", ref: "" });
  const [ETH, setETH] = useState({ crypto: "", ref: "" });
  const [DOGE, setDOGE] = useState({ crypto: "", ref: "" });
  const [LTC, setLTC] = useState({ crypto: "", ref: "" });
  const [XRP, setXRP] = useState({ crypto: "", ref: "" });

  const updates = (data) => {
    setBTC({ crypto: data.tickers[0].from, ref: data.tickers[0].price });
    setETH({ crypto: data.tickers[1].from, ref: data.tickers[1].price });
    setDOGE({ crypto: data.tickers[2].from, ref: data.tickers[2].price });
    setLTC({ crypto: data.tickers[3].from, ref: data.tickers[3].price });
    setXRP({ crypto: data.tickers[4].from, ref: data.tickers[4].price });
  };

  useEffect(() => {
    facade.fetchData("crypto/all", updates);
  }, [facade]);

  return (
    <>
      <h3>
        prisen på {BTC.crypto} er: ${BTC.ref} <br />
        prisen på {ETH.crypto} er: ${ETH.ref} <br />
        prisen på {DOGE.crypto} er: {DOGE.ref} BTC <br />
        prisen på {LTC.crypto} er: {LTC.ref} BTC <br />
        prisen på {XRP.crypto} er: {XRP.ref} BTC <br />
      </h3>
    </>
  );
}

export default Exercise1;
