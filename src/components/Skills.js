import React from 'react';
import PropTypes from 'prop-types';

const Skills = (props) => {
  return (
    <div>
      <div className="flex">
        {props.skills.map((skill, index) => (
          <div
            key={index}
            className="text-xs pt-1 pb-1 pl-3 pr-3 mr-2 font-bold text-center text-gray-900 bg-pink-200 rounded-lg font-poppins">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
};

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Skills;
