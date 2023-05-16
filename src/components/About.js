import React from 'react';
import Sophia from '../images/sophia.png';

const About = () => {
  return (
    <div>
      <div className="inline-flex items-center w-3/4">
        <img src={Sophia} alt="..." className="shadow w-72 rounded-lg align-middle border-none" />
      </div>
    </div>
  );
};

export default About;
