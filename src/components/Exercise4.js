import { useState, useEffect } from "react";

function Exercise4({ facade }) {
  const [joke, setJoke] = useState({ joke: "" });
  const updates = (data) => {
    setJoke({ joke: data.joke });
  };

  useEffect(() => {
    facade.fetchData("yomama", updates);
  }, [facade]);

  return (
    <>
      <h1>{joke.joke}</h1>
    </>
  );
}

export default Exercise4;
