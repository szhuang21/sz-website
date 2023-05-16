import React, { useState } from "react";

import Sophia from "../images/sophia.png";

const About = () => {

  return (
    <div>

        <div class="inline-flex items-center w-3/4">
          <img
            src={Sophia}
            alt="..."
            class="shadow w-72 rounded-lg align-middle border-none"
          />
        </div>
    </div>
  );
};

export default About;
