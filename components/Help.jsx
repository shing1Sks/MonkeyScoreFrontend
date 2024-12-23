import React from "react";

function Help() {
  return (
    <div className="w-[98%] border-slate-400 border-[2px] rounded-lg pt-[2%] pb-[2%] text-blue-950 flex flex-col gap-4 items-center justify-center bg-blue-200 border-solid">
      <div className="text-purple-700 text-xl md:text-3xl sm:text-2xl text-center font-semibold px-[2%]">
        Help monkey preform better by filling out this survey ! 🙏
        <a
          className="text-blue-600 hover:text-blue-900 hover:underline active:text-blue-950 active:underline"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfeeNPSDP7KyVAXVIlWqGX80shMNKY6pWSlFS5oyQ6KOGDGTw/viewform"
        >
          Survey-Form
        </a>
      </div>
    </div>
  );
}

export default Help;
