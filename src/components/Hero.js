import React from 'react';
import Headshot from '../images/headshot.png';
import Socials from '../components/Socials.js';

const Hero = () => {
  return (
    <div>
      <div
        className="pt-28 flex justify-start items-center"
        style={{ paddingLeft: '8%', paddingRight: '8%' }}>
        <div className="w-1/2 pr-20">
          <div className="text-2xl text-left font-bold font-poppins pb-8">
            👋 I&apos;m Sophia <br />
          </div>
          {/* <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            I&apos;m a curious and enthusiastic student who loves exploring new technologies and
            trying out different coding projects!
          </div> */}
          <div className="text-base text-left pt-4 font-montserrat text-gray-600">
            SparkNotes of my life currently:
          </div>
          <div className="text-base text-left pt-4 font-montserrat text-gray-700">
            🤗 CS Student @ UIUC
          </div>
          <div className="text-base text-left pt-4 font-montserrat text-gray-700">
            🚗 Intern @ Uber in SF
          </div>
          <div className="text-base text-left pt-4 font-montserrat text-gray-700">
            💻 Product Manager @ Hack4Impact
          </div>
          <div className="text-base text-left pt-4 font-montserrat text-gray-700">
            💁‍♀️ Course Assistant/PM for CS124H
          </div>
          <div className="text-base text-left pt-4 font-montserrat text-gray-700 underline">
            🛠️{' '}
            <a href="https://www.youtube.com/shorts/LMpDOsKHEuM">
              {' '}
              How I Built My Website (a series)
            </a>
          </div>
        </div>

        <div className="w-1/2">
          <img src={Headshot} alt="Headshot" />
          <Socials textColor="pink" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

// import React from "react";
// import BioButton from "./BioButton";
// import Headshot from "../images/headshot.png";
// const Hero = () => {
//   return (
//     <div
//       class="pt-40 flex justify-start items-center"
//       style={{ paddingLeft: "8%", paddingRight: "8%" }}
//     >
//       <div class="w-1/2 pr-20">
//         <div class="text-2xl text-left font-bold font-poppins">
//           👋 I'm Sophia <br />
//         </div>
//         <div class="text-base text-left pt-8 font-montserrat text-gray-700">
//           I'm a coder and student constantly seeking new adventures to learn from and try out.
//         </div>
//         <div class="text-base text-left pt-4 font-montserrat text-gray-600">
//           Sparknotes of my life currently:
//         </div>
//         <div class="text-base text-left pt-4 font-montserrat text-gray-700">
//           🤗 CS Student @ UIUC
//         </div>
//         <div class="text-base text-left pt-4 font-montserrat text-gray-700">
//           🚗 Intern @ Uber in SF
//         </div>
//         <div class="text-base text-left pt-4 font-montserrat text-gray-700">
//           💻 Product Manager @ Hack4Impact
//         </div>
//         <div class="text-base text-left pt-4 font-montserrat text-gray-700">
//           💁‍♀️ Course Assistant/PM for CS124H
//         </div>

//         {/* <div class="text-base text-left pt-4 font-montserrat text-gray-700">
//           Coder,{" "}
//           <button class="bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
//             <div class="text-black">Junior at UIUC</div>
//           </button>{" "}
//           ,{" "}
//           <button class="bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
//             peepeepoopoo
//           </button>
//           , and{" "}
//           <button class="bg-gray-200 pl-2 pr-2 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
//             zyx
//           </button>{" "}
//           <br />
//         </div>

//         <div class="text-base text-left pt-4 font-montserrat text-gray-700">
//           Working with my hands to make magic happen on the internet. View my{" "}
//           <br />
//           <a
//             href="/projects"
//             class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300"
//           >
//             Projects
//           </a>{" "}
//           ,
//           <a
//             href="/resume"
//             class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300"
//           >
//             Resume
//           </a>{" "}
//           ,{" "}
//           <button
//             href="/contact"
//             class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300"
//           >
//             Contact Me
//           </button>{" "}
//           , or send me an email at{" "}
//           <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
//             sophiaxiezhuang@gmail.com
//           </button>{" "}
//           .
//         </div> */}
//       </div>

//       <div class="w-1/2">
//         <img src={Headshot} alt="Headshot" />
//       </div>
//     </div>
//   );
// };

// export default Hero;
