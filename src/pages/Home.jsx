import React from "react";
import MathOperation from "../components/MathOperation";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen w-full">
      <div className="flex justify-between w-[80%]">
      <MathOperation operation={"Sum"} num1={10} num2={20} />
      <MathOperation operation={"sub"} num1={10} num2={20} />
      <MathOperation operation={"mult"} num1={10} num2={20} />
      <MathOperation operation={"divid"} num1={10} num2={20} />
      <MathOperation operation={"mod"} num1={10} num2={20} />
      </div>
    </div>
  );
}

export default Home;
