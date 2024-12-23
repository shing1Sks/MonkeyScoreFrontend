"use client";
import React, { useEffect, useState } from "react";

function Question({ question, choice, value, setNext }) {
  const options = question.options;
  const [selectedOption, setSelectedOption] = useState("");
  const [val, setVal] = useState("");

  useEffect(() => {
    setSelectedOption("");
    setVal("");
    value("");
    choice("");
    setNext(false);
  }, [question]);

  return (
    <div className="pt-6 text-lg text-white bg-blue-300 rounded-lg h-[300px] w-[90%] relative flex flex-col justify-between p-2">
      <p className="text-xl pb-2">{question.question}</p>
      <div className="flex flex-col gap-4">
        {options.length > 0 ? (
          options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                type="radio"
                name={question.question}
                value={option}
                checked={selectedOption === option}
                onChange={() => {
                  setSelectedOption(option);
                  choice(option);
                  setNext(true);
                }}
                className="mr-2"
              />
              <label>{option}</label>
            </div>
          ))
        ) : (
          <div className="flex items-center">
            <input
              type="number"
              name={question.question}
              value={val}
              onChange={(e) => {
                const inputValue = e.target.value;
                setVal(inputValue);
                value(inputValue);
                setNext(!!inputValue);
              }}
              placeholder="Enter a number"
              className="p-2 border border-gray-300 rounded-lg text-blue-700 w-full"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Question;
