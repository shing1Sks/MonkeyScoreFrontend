"use client";
import React, { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import Question from "./Question";
import questions from "./questions.js";
import Prediction from "./Prediction";
import Predict from "./predict";
import { DNA } from "react-loader-spinner";

function Center() {
  // for the speech thingy before the questions
  const [ready, setReady] = React.useState(0);
  // for mcq
  const [choice, setChoice] = React.useState(1);
  // for numbers as values
  const [value, setValue] = React.useState(0);
  // picks and sets the question
  const [ques, setQues] = React.useState(0);
  // finalizes the result
  const [final, setFinal] = React.useState({});
  // can go next or not
  const [next, setNext] = React.useState(false);
  // prediction result
  const [predict, setPredict] = React.useState(null);
  // loader
  const [loading, setLoading] = React.useState(false);
  // again
  const [again, setAgain] = React.useState(false);

  useEffect(() => {
    if (ques === 25) {
      setResult(
        questions[ques - 1].options.length > 0
          ? parseIfNumber(choice)
          : parseIfNumber(value)
      );
      getPrediction();
    }
  }, [ques]);

  // Prediction function
  const getPrediction = async () => {
    console.log("Final data for prediction:", final);
    setLoading(true);
    setPredict(await Predict(final));
    setLoading(false);
    setAgain(true);
  };

  function parseIfNumber(value) {
    const stringValue = String(value).trim();

    // Check if the trimmed string can be converted to a number
    if (!isNaN(stringValue) && stringValue !== "") {
      return Number(stringValue);
    }
    return value;
  }

  const required_params = [
    "sex", // Gender (Question 1)
    "age", // Age (Question 2)
    "study", // Study hours (Question 3)
    "sleep", // Sleep hours (Question 4)
    "time_rate", // Time management skills (Question 5)
    "grp_study", // Group study preference (Question 6)
    "family_edu", // Academic level for the exam (Question 7)
    "days", // Number of days prepared (Question 8)
    "distraction", // Distractions during preparation (Question 9)
    "mode", // Mode of preparation (Question 10)
    "prep_base", // Preparation location (Question 11)
    "prep_rate", // Preparation confidence (Question 12)
    "stress_rate", // Stress level (Question 13)
    "maths", // Performance in maths (Question 14)
    "science", // Performance in science (Question 15)
    "logical", // Performance in reasoning/aptitude (Question 16)
    "higher_edu", // Higher education preference (Question 17)
    "attendence_rate", // Attendance/regularity (Question 18)
    "extra_curricular", // Extracurricular activities (Question 19)
    "mother_edu", // Mother's education level (Question 20)
    "father_edu", // Father's education level (Question 21)
    "family_edu", // Family education level (Question 22)
    "exercise", // Daily exercise (Question 23)
    "friend_circle", // Academic comparison with friend circle (Question 24)
    "screen_time", // Mobile screen time (Question 25)
  ];

  useEffect(() => {
    if (ready == 3) {
      alert(
        "Carefully Answer ! You can go back but will have to refill the form as back as you go !"
      );
    }
  }, [ready]);

  const setResult = (option) => {
    if (
      typeof option === "string" &&
      isNaN(option) &&
      option.split(" ").length > 1
    ) {
      option = option.split(" ")[0].toLowerCase();
    }

    setFinal((prevFinal) => ({
      ...prevFinal,
      [required_params[ques]]: option,
    }));

    console.log("Updated Final:", {
      ...final,
      [required_params[ques]]: option,
    });
  };

  let speech = [
    "Ah, you've come to the wise monkey, the right choice indeed!",
    "After years of leaping through the jungle, I've mastered the mystical art of foresight. With this gift, I, the great sage monkey, shall reveal your exam score even before you take the test or your result is out!",
    "Simply answer a few questions, and I will unveil your predicted score. Let’s begin the journey!",
  ];
  return (
    <div className="w-[98%] border-slate-400 border-[2px] rounded-lg min-h-[80vh] bg-blue-200 border-solid">
      <div className="w-full px-[5%] flex flex-col sm:flex-row  justify-between items-center pt-10">
        <div className=" w-[40%] h-[400px] flex items-center justify-center bg-blue-500 rounded-lg">
          {ready < 3 || again ? (
            <video src="/monkey.webm" autoPlay loop muted></video>
          ) : (
            !again && (
              <div className="flex flex-col">
                <p className="text-center text-2xl">
                  {ques <= 24 ? "Processing..." : "Predicting..."}
                </p>
                <video src="/processing.webm" autoPlay loop muted></video>
              </div>
            )
          )}
        </div>
        <div className=" w-[40%] h-[400px] relative bg-blue-500 rounded-lg">
          {ready <= 2 ? (
            <div className="flex items-center justify-center">
              <span className="font-semibold text-xl text-blue-100 p-[50px]">
                <Typewriter
                  key={ready}
                  words={[speech[ready]]}
                  cursor
                  cursorStyle="_"
                  typeSpeed={22}
                  deleteSpeed={5}
                  delaySpeed={100}
                />
              </span>
              <div className="absolute bottom-3">
                <button
                  className="bg-blue-900 hover:bg-blue-600 active:bg-blue-300 px-10 py-1 rounded-md"
                  onClick={() => setReady((prev) => (prev % 3) + 1)}
                >
                  {ready == 2 ? "Predict" : "Next"}
                </button>
              </div>
            </div>
          ) : (
            <div className="w-full h-full relative">
              <div className="flex items-center justify-center pt-[3%]">
                {ques <= 24 && (
                  <Question
                    question={questions[ques]}
                    choice={setChoice}
                    value={setValue}
                    setNext={setNext}
                  />
                )}
              </div>
              <div className="absolute bottom-3 flex items-center justify-center gap-4 w-full">
                {ques > 1 && ques <= 24 && (
                  <button
                    className="bg-blue-900 hover:bg-blue-600 active:bg-blue-300 px-10 py-1 rounded-md"
                    onClick={() => {
                      setQues((prev) => prev - 1);
                      // if (questions[ques - 1].options.length > 0) {
                      //   setChoice(questions[ques - 1].options[0]);
                      // }
                      // else {
                      //   setValue(questions[ques - 1].options[0]);
                      // }
                    }}
                  >
                    Previous
                  </button>
                )}
                {ques < 24 && (
                  <button
                    className="bg-blue-900 hover:bg-blue-600 active:bg-blue-300 px-10 py-1 rounded-md"
                    onClick={() => {
                      if (next) {
                        setNext(false);
                        setQues((prev) => prev + 1);
                        setResult(
                          questions[ques].options.length > 0
                            ? parseIfNumber(choice)
                            : parseIfNumber(value)
                        );
                      } else {
                        alert(
                          "Please select an option before moving to the next question."
                        );
                      }
                    }}
                  >
                    Next
                  </button>
                )}
                {ques == 24 && (
                  <button
                    className="bg-blue-900 hover:bg-blue-600 active:bg-blue-300 px-10 py-1 rounded-md"
                    onClick={() => {
                      if (next) {
                        setResult(
                          questions[ques].options.length > 0
                            ? parseIfNumber(choice)
                            : parseIfNumber(value)
                        );
                        setNext(false);
                        setQues((prev) => prev + 1);
                      } else {
                        alert(
                          "Please select an option before moving to the next question."
                        );
                      }
                    }}
                  >
                    Predict 🎉
                  </button>
                )}
              </div>
              <div>
                {loading ? (
                  <div className="w-full h-full flex items-center justify-center pt-[20%]">
                    <DNA
                      visible={true}
                      height="120"
                      width="120"
                      ariaLabel="dna-loading"
                      wrapperStyle={{}}
                      wrapperClass="dna-wrapper"
                    />
                  </div>
                ) : (
                  predict && (
                    <div className="w-full h-full flex items-center justify-center">
                      <Prediction Prediction={predict} />
                    </div>
                  )
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="w-full flex items-center justify-center mt-10">
        {again && (
          <button
            className="bg-blue-900 hover:bg-blue-600 active:bg-blue-300 px-10 py-1 rounded-md"
            onClick={() => window.location.reload()}
          >
            Again ?
          </button>
        )}
      </div>
    </div>
  );
}

export default Center;
