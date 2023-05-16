import React from 'react';
import Header from '../components/Header';
import Cover from '../images/cover.png';
import Parents from '../images/parents.jpg';
import Footer from '../components/Footer';
import Alert from '../components/Alert';
const Story = () => {
  return (
    <div>
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

        <div className="">
          <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            My incredible adventure in computer science kicked off in the most humble way
            possible—thanks to my lovely parents, I was forced to endure the wonders of Khan Academy
            at the library. I quickly grew bored of the pre-algebra problems I was assigned, and
            then stumbled upon the Intro to JavaScript tutorial. The first challenge was to craft a
            “simple” snowman using JavaScript. Despite my stubborn efforts, it was a ~struggle. When
            I finally saw the 3 circles neatly fall into place, I was more satisfied that I&apos;d
            finished the problem than amazed by what I&apos;d done. Unfortunately, this snowman
            wasn&apos;t quite the &quot;Hello World!&quot; moment I was hoping for in the world of
            CS. The tutorial&apos;s mischievous twist of tossing in some animation magic after the
            battle of simply drawing them was the exact moment when I decided to gracefully retire
            from the coding world.
          </div>
          <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            Fast forward to the glorious days of high school, where I embarked on an epic adventure
            known as AP Computer Science. Despite my initial enthusiasm, I soon found myself looking
            for excuses to leave class early, whether it was for a golf tournament or golf practice.
            I managed to scrape by with minimal effort, experiencing imposter syndrome as each new
            concept was introduced. (I realize I&apos;m making it seem like I love anything but
            coding, but I&apos;m getting to my point I promise)
          </div>
          <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            My journey in CS has been a rollercoaster ride of ups and downs, constantly ebbing and
            flowing. I&apos;ve had this delightful habit of trying it out because it seemed
            intriguing, giving up because it felt too tough, and then getting irresistibly drawn
            back in over and over again. Before my freshman year of college, I re-learned what we
            had been taught in AP Computer Science so that I could proficiency out of the intro
            sequence class at UIUC. Learning at my own pace turned out to be an absolute
            game-changer, allowing me to truly appreciate the sheer logic and mind-boggling
            complexity of code in a whole new light, and much to my surprise, I passed the
            proficiency test. Proficiencying out of CS124 was simultaneously the best and worst
            decision I&apos;ve ever made. The first semester was an absolute time !! I went from
            writing print statements in BlueJ to managing dynamic memory and using DFS to navigate
            graphs in C++. I joined a couple of CS clubs, learned how to use GitHub for the first
            time, helped create a website for startups on campus using React, kind of built a
            Discord chat bot, and did a ton of discrete math.
          </div>
          <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            My freshmen year self was like a bewildered squirrel in a bustling city, desperately
            trying to navigate through new terminology and concepts, dodging hurling obstacles left
            and right, and occasionally getting distracted by questionable snacks along the way. But
            eventually, I came to this brilliant revelation that I could just admit to myself that I
            didn&apos;t know everything. Embracing the unfamiliar, I shifted my focus to learning,
            asking for help, and exploring new ideas. This mindset shift changed everything for me.
          </div>
          <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            After doing a few projects Freshmen year like Sp-ART-ify, a website that turns someone’s
            music taste into art, I started to get the hang out things. I interned at Liberty Mutual
            Insurance in Seattle over the summer. I picked up new skills in the industry but more
            importantly, I spent a summer building out various passion projects with my friends. I
            was pushed to pick up new technologies from Figma to Tailwind to JUnit to NodeJS, and
            realized that the state of discomfort that I felt before learning something new was a
            sign of room to grow. I built a web scraper that combines all of Liberty Mutual’s
            platform&apos;s search results into 1 search engine and a website that takes in a spoken
            phrase and uses NLP and sentiment analysis to transform it into a mood based Spotify
            playlist.
          </div>
          <div className="text-base text-left pt-8 font-montserrat text-gray-700">
            With each project I built, I gained more experience and open-mindedness to learn more.
            Most importantly, I realized how fun computer science really was. Today, I foster my
            passion for coding by building software solutions for non-profits as a software
            developer and product manager lead at Hack4Impact (H4I) and teach freshmen how to build
            their own projects as a Course Assistant for CS124 Honors. My journey in CS has been one
            of growth and discovery, and I&apos;m excited to continue learning and making a positive
            impact through meaningful and empathetic solutions.
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
          </div>

          <div className="w-1/2">
            <img src={Parents} alt="Headshot" className="rounded-lg" />
            <div className="text-xs text-left pl-1 pt-1 font-montserrat text-gray-700">
              pictured: my parentos
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
