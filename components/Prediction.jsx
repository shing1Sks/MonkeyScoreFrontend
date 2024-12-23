import React from "react";

function Prediction({ Prediction }) {
  console.log(Prediction);
  return <div className="text-3xl">{Prediction.prediction}</div>;
}

export default Prediction;
