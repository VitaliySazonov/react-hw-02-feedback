import React from "react";

let FeedbackOptions = ({add}) => {
  return (
    <>
      <button onClick={add}>Good</button>
      <button onClick={add}>Neutral</button>
      <button onClick={add}>Bad</button>
    </>
  );
};

export default FeedbackOptions;
