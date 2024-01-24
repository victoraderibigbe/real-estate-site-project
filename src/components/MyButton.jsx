import React from "react";

const MyButton = ({ title, icon }) => {
  return (
    <button className="px-2 py-2 md:px-5 md:py-3 rounded-lg text-white transition hover:opacity-80 mr-2 md:mr-0 bg-dominionpurple">
      {icon ? (
        <div className="flex items-center justify-between">
          <span className="mr-2">{title}</span>
          <span>{icon}</span>
        </div>
      ) : (
        <span>{title}</span>
      )}
    </button>
  );
};

export default MyButton;
