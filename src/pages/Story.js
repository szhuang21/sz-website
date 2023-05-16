import React, { useState } from "react";
import Header from "../components/Header";
import Cover from "../images/cover.png";
import Collage from "../images/collage.png";
import Parents from "../images/parents.jpg";
import Footer from "../components/Footer";
const Story = () => {
  return (
    <div>
      <Header />
      <div style={{ paddingLeft: "8%", paddingRight: "8%" }} class="pb-12">
        <div class="flex justify-start items-center">
          <div class="w-3/4">
            <img src={Cover} alt="Headshot" />
          </div>
          <div class="w-1/4">
            <div class="text-2xl text-black text-right mt-96 font-bold font-poppins">
              About Me
            </div>
          </div>
        </div>

        <div class="">
          <div class="text-base text-left pt-8 font-montserrat text-gray-700">
            My journey into computer science began humbly when my Asian parents
            made me do Khan Academy at the library as a kid. I quickly grew
            bored of the pre-algebra problems I was assigned, and then stumbled
            upon the Intro to JavaScript tutorial. The first challenge was to
            draw a “simple” snowman using JavaScript. Despite my stubborn
            efforts, it was a ~struggle. When I finally saw the 3 circles neatly
            fall into place, I was more satisfied that I’d finished the problem
            than amazed by what I’d done. Unfortunately, this snowman wasn't
            quite the "Hello World!" moment I was hoping for in the world of CS.
            I did a couple more of the challenges, but gave up once the
            challenges started asking me to animate the circles.
          </div>
          <div class="text-base text-left pt-8 font-montserrat text-gray-700">
            Fast forward to high school, where I took AP Computer Science.
            Despite my initial enthusiasm, I soon found myself looking for
            excuses to leave class early, whether it was for a golf tournament
            or golf practice. I scraped by that class doing the bare minimum,
            feeling imposter syndrome creep up my neck with every new concept we
            learned. (I realize I’m making it seem like I love anything but
            coding, but I’m getting to my point I promise)
          </div>
          <div class="text-base text-left pt-8 font-montserrat text-gray-700">
            My journey in CS has been a rollercoaster ride of ups and downs,
            ebbs and flows. It's been a consistent cycle of trying it out
            because it seemed interesting, giving up because it was too
            difficult, and then being lured back in again and again. Before my
            freshman year of college, I re-learned what we had been taught in AP
            Computer Science so that I could proficiency out of the intro
            sequence class at UIUC. Learning at my own pace allowed me to
            appreciate the logic and complexity of code in a whole new way, and
            much to my surprise, I passed the proficiency test. Proficiencying
            out of CS124 was both the best and worst decision I've ever made.
            The first semester was an absolute time !! I went from writing print
            statements in BlueJ to managing dynamic memory and using DFS to
            navigate graphs in C++. I joined a couple of CS clubs, learned how
            to use GitHub for the first time, helped create a website for
            startups on campus using React, kind of built a Discord chat bot,
            and did a ton of discrete math.
          </div>
          <div class="text-base text-left pt-8 font-montserrat text-gray-700">
            At first, I was extremely lost and struggled to keep up with all the
            new terminology and concepts. But eventually, I got used to the
            feeling of being in unfamiliar territory and started to worry less
            about not knowing everything, and instead on what I could learn.
            This mindset shift was a game-changer for me because once I admitted
            to myself that I didn't know shit, I became more open to learning,
            asking for help, and exploring new ideas.
          </div>
          <div class="text-base text-left pt-8 font-montserrat text-gray-700">
            After doing a few projects Freshmen year like Sp-ART-ify, a website
            that turns someone’s music taste into art, I started to get the hang
            out things. I interned at Liberty Mutual Insurance in Seattle over
            the summer. I picked up new skills in the industry but more
            importantly, I spent a summer building out various passion projects
            with my friends. I was pushed to pick up new technologies from Figma
            to Tailwind to JUnit to NodeJS, and realized that the state of
            discomfort that I felt before learning something new was a sign of
            room to grow. I built a web scraper that combines all of Liberty
            Mutual’s platform’s search results into 1 search engine and a
            website that takes in a spoken phrase and uses NLP and sentiment
            analysis to transform it into a mood based Spotify playlist.
          </div>
          <div class="text-base text-left pt-8 font-montserrat text-gray-700">
            With each project I built, I gained more experience and
            open-mindedness to learn more. Today, I foster my passion for coding
            by building software solutions for non-profits as a software
            developer and product manager lead at Hack4Impact (H4I) and teach
            freshmen how to build their own projects as a Course Assistant for
            CS124 Honors. Overall, my journey in CS has been one of growth and
            discovery, and I am eager and passionate to continue learning more.
            As I’m navigating through the field, I’ve realized how much I truly
            love coding. I strive to create meaningful, empathetic, and
            user-oriented solutions that will change the world.
          </div>
        </div>
        <div
          class="pt-16 flex justify-start items-center"
          style={{ paddingLeft: "2%", paddingRight: "2%" }}
        >
          <div class="w-1/2 pr-20">
            <div class="text-lg text-left font-bold font-poppins">
              What I'm Up to Currently
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              📱 Coding Content & Tutorials @sophia.codes
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🚗 Intern @ Uber in SF
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              💻 Product Manager @ Hack4Impact
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              💁‍♀️ Course Assistant/PM for CS124H
            </div>
          </div>

          <div class="w-1/2">
            <div class="text-lg text-left font-bold font-poppins">
              Past Adventures
            </div>

            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🤗 Workshop Lead - Women in Computer Science (Aug 2021 - May 2022)
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🤖 Experience Team - HackIllinois (Aug 2021 - May 2022)
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🧪 Research & Development Team - Founders Illinois Entrepreneurs
              (Aug 2021 - May 2022)
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              💻 Software Developer @ Hack4Impact
            </div>
          </div>
        </div>

        <div
          class="pt-16 flex justify-start items-center"
          style={{ paddingLeft: "2%", paddingRight: "2%" }}
        >
          <div class="w-1/2 pr-20">
            <div class="text-lg text-left font-bold font-poppins">
              Interests
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              📷 Photography
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🛠️ Building Stuff
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🏃 Running
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🤾‍♀️ Working Out
            </div>
            <div class="text-base text-left pt-4 font-montserrat text-gray-700">
              🍔 Eating
            </div>
          </div>

          <div class="w-1/2">
            <img src={Parents} alt="Headshot" class="rounded-lg" />
            <div class="text-xs text-left pl-1 pt-1 font-montserrat text-gray-700">
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
