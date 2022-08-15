import React, { useRef, useState } from "react";

const Home = () => {
  const soheeRef = useRef(0);
  const [change, setChange] = useState(0);

  const increase2 = () => {
    setChange(change + 1);
  };

  const increase = () => {
    soheeRef.current++;
  };
  return (
    <>
      <h1>Organic Plant</h1>
      <p>{soheeRef.current}</p>
      <button onClick={increase}>올려</button>
      <p>{change}</p>
      <button onClick={increase2}>올려</button>
    </>
  );
};

export default Home;
