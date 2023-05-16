import React from "react";

const Skills = (props) => {
  return (
    <div>
      <div class="flex">
        {props.skills.map((skill) => (
          <div class="text-xs pt-1 pb-1 pl-3 pr-3 mr-2 font-bold text-center text-gray-900 bg-pink-200 rounded-lg font-poppins">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
