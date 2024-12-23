import React from "react";

function About() {
  return (
    <div className="w-[98%] border-slate-400 border-[2px] rounded-lg pt-[1%] pb-[3%] bg-blue-200 border-solid">
      <p className="text-purple-700 text-xl sm:text-3xl font-semibold text-center pt-[3%]">
        About Monkey Score
      </p>
      <p className="mx-[5%] text-md sm:text-xl mt-[3%] text-purple-500">
        Monkey Score is a cutting-edge performance metric powered by a
        sophisticated machine learning algorithm. Trained on diverse data from
        students across various domains, it analyzes habits, traits, and other
        characteristics that influence final results or scores.
      </p>
      <p className="mx-[5%] text-md sm:text-xl mt-[10px] text-purple-500">
        This innovative approach allows you to gain a personalized understanding
        of your preparation and performance. By mapping your unique attributes
        and behaviors, Monkey Score provides actionable insights tailored to
        you, helping you identify areas of improvement and achieve your goals
        more effectively.
      </p>
      <p className="mx-[5%] text-md sm:text-xl mt-[10px] text-purple-500">
        Discover how your choices and efforts contribute to your success with
        Monkey Score—the smarter way to track and enhance your academic journey!
      </p>
    </div>
  );
}

export default About;
