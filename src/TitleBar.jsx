import React from "react";

const TitleBar = (props) => {
  return (
    <div className="flex justify-center items-center p-10">
      <h1 className="ml-auto text-4xl font-bold">Text Editor by Abhishek</h1>
      <button className="ml-auto border-[2px] border-blue-700 text-2xl px-8 py-1 hover:bg-sky-700 hover:text-white hover:shadow-2xl cursor-pointer">
        Save
      </button>
    </div>
  );
};

export default TitleBar;
