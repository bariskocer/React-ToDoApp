import React from "react";
import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";

const NoProjectSeleceted = ({ onStartAddProject }) => {
  console.log("NoProject Render");
  return (
    <div className="mt-24 w-2/3 text-center">
      <img
        src={noProjectImage}
        alt="No project image"
        className="w-16 h-16 object-contain mx-auto"
      />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Selecet a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new Project</Button>
      </p>
    </div>
  );
};

export default NoProjectSeleceted;
