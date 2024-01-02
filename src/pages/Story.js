import React from 'react';
import Header from '../components/Header';
import Cover from '../images/cover.png';
import Parents from '../images/parents.jpg';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
import CompletionScreen from '../components/CompletionScreen.tsx';

const Story = () => {
  return (
    <div>
      <CompletionScreen />
      <Alert text="🚧 mobile view under construction 🚧" />
      <Header />
      <div style={{ paddingLeft: '8%', paddingRight: '8%' }} className="pb-12">
        <div className="flex justify-start items-center">
          <div className="w-3/4">
            <img src={Cover} alt="Headshot" />
          </div>
          <div className="w-1/4">
            <div className="text-2xl text-black text-right mt-96 font-bold font-poppins">
              About Me
            </div>
          </div>
        </div>
        <div
          className="pt-16 flex justify-start items-center"
          style={{ paddingLeft: '2%', paddingRight: '2%' }}>
          <div className="w-1/2 pr-20">
            <div className="text-lg text-left font-bold font-poppins">
              What I&apos;m Up to Currently
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              📱 Coding Content & Tutorials @sophia.codes
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
          </div>

          <div className="w-1/2">
            <div className="text-lg text-left font-bold font-poppins">Past Adventures</div>

            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              🤗 Workshop Lead - Women in Computer Science (Aug 2021 - May 2022)
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              🤖 Experience Team - HackIllinois (Aug 2021 - May 2022)
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              🧪 Research & Development Team - Founders Illinois Entrepreneurs (Aug 2021 - May 2022)
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              💻 Software Developer @ Hack4Impact
            </div>
          </div>
        </div>

        <div
          className="pt-16 flex justify-start items-center"
          style={{ paddingLeft: '2%', paddingRight: '2%' }}>
          <div className="w-1/2 pr-20">
            <div className="text-lg text-left font-bold font-poppins">Interests</div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              📷 Photography
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              🛠️ Building Stuff
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">🏃 Running</div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">
              🤾‍♀️ Working Out
            </div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">🏌️‍♀️ Golfing</div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700">🍔 Eating</div>
            <div className="text-base text-left pt-4 font-montserrat text-gray-700 underline">
              <a href="https://docs.google.com/document/d/1FrgQCFnPSeOVkkxgvLrdBP76nMC50qwj_C8ZenM2heU/edit?usp=sharing">
                🥬 My 1500 word Kale Salad Recipe
              </a>
            </div>
          </div>

          <div className="w-1/2">
            <img src={Parents} alt="Headshot" className="rounded-lg" />
            <div className="text-xs text-left pl-1 pt-1 font-montserrat text-gray-700">
              pictured: mom and dad
            </div>
          </div>
        </div>
      </div>
      {/* <div class="flex justify-center items-center pt-8">
        <img src={Collage} alt="Headshot" class="" />
      </div> */}
      <Footer />
    </div>
  );
};

export default Story;

// import React, { useState } from "react";
// import Header from "../components/Header";
// import Sophia from "../images/sophia.png";

// const Story = () => {
//   const [EIsClicked, setEIsClicked] = useState(false);
//   const handleEClick = (event) => {
//     console.log("e has been clicked");
//     setEIsClicked(!EIsClicked);
//   };
//   return (
//     <div>
//       <Header />
//       <div class="ml-16">
//         {/* <div class="inline-flex items-center ml-8">
//           <img
//             src={Sophia}
//             alt="..."
//             class="shadow rounded-full w-48 align-middle border-none"
//           />
//           <div class="text-2xl font-bold pl-4">about</div>
//         </div> */}

//         <div class="text-xl text-left font-bold font-poppins pb-8">
//           About Me
//         </div>

//         <div class="inline-flex items-center w-3/4">
//           <img
//             src={Sophia}
//             alt="..."
//             class="shadow w-72 rounded-lg align-middle border-none"
//           />
//           <div class=" pl-4">
//             I reach out to you about your experience in product at Microsoft.
//             I’m interested in trying out the career and wanted to reach out to
//             you! I know you’re probably really busy, but if you’re open to it,
//             I’d love to grab coffee/zoom to find out more about your experience
//             and connect. I’m in town for the next 3 weeks, so just let me know.
//             No worries if you can’t, either way thanks for your time :D{" "}
//           </div>
//         </div>

//         <div class="font-poppins font-bold mt-12 grid place-items-center">
//           <div>
//             <button
//               class="text-4xl text-yellow-400 hover:text-yellow-600"
//               onClick={handleEClick}
//             >
//               E
//             </button>

//             <button class="text-4xl text-pink-400 hover:text-pink-600">
//               N
//             </button>

//             <button class="text-4xl text-blue-400 hover:text-blue-600">
//               F
//             </button>
//             <button class="text-4xl text-green-400 hover:text-green-600">
//               P
//             </button>

//             {EIsClicked ? (
//               <div class="">
//                 <div class="w-96 h-48 bg-yellow-200">
//                   <div class="font-gloria-hallelujah"> extroverted </div>
//                   <div class="font-poppins font-semibold">
//                     add info here about{" "}
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               " "
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Story;
