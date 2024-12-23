"use client";

import About from "@/components/About";
import Center from "@/components/Center";
import Header from "@/components/Header";
import Help from "@/components/Help";
import Title from "@/components/Title";

export default function Home() {
  return (
    <div className="w-full bg-blue-400 min-h-screen">
      <div className="w-full flex items-center justify-center pb-4 sm:pb-10">
        <Header />
      </div>
      <div className="w-full flex items-center justify-center pb-4 sm:pb-10">
        <Title />
      </div>
      <div className="w-full flex items-center justify-center pb-10">
        <Center />
      </div>
      <div className="w-full flex items-center justify-center pb-10">
        <About />
      </div>
      <div className="w-full flex items-center justify-center pb-10">
        <Help />
      </div>
    </div>
  );
}
