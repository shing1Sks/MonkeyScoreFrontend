import React from "react";

function Prediction({ Prediction }) {
  console.log(Prediction);
  return (
    <div className="w-[90%] border-slate-400 border-[2px] rounded-lg min-h-[50vh] text-blue-950 flex flex-col gap-4 items-center justify-center bg-blue-200 border-solid">
      <p className="text-purple-700 text-3xl font-semibold">
        Heres your score ! 🎉
      </p>
      <div className="text-3xl">{Prediction.prediction}</div>
    </div>
  );
}

export default Prediction;
