import React from "react";
import Header from "../components/Header";
import wcsImage from "../images/wcs.jpg";
import h4iImage from "../images/h4i.jpg";
import brink from "../images/brink.gif";
import mood from "../images/mood.gif";
import spartify from "../images/spartify.png";
import webscraper from "../images/webscraper.png";
import northwestern from "../images/northwestern.png";
import ExperienceCard from "../components/ExperienceCard";

const Extracurriculars = () => {
  return (
    <div>
      <div class="text-xl text-left font-bold font-poppins pb-8">
        👩‍💻 Extracurriculars
      </div>

      <div class="flex flex-wrap">
        <ExperienceCard
          name="Brink"
          blurb="Working on accessible voting guide for the nonprofit Brink."
          about="As a software developer for Hack4Impact this year, my team and I got to work with the nonprofit, Brink, to develop an accessible voting website. Some features that I built were a candidate's endorsements accordion, the voting guidelines page, the polling places page, and more. This coming semester I will be working a product manager and lead at Hack4Impact."
          website="https://web.brinkapp.co/landing"
          github="https://github.com/stephen-puiszis/brink-web"
          skills={["React", "TypeScript", "Product"]}
          image={brink}
        />

        <ExperienceCard
          name="Mood"
          blurb="A mood-based Spotify playlist generator using NLP."
          about={
            "Mood is a passion project that I built this summer that takes in a user's speech input and generates a mood based on the user's phrase using natural language processing and then generates a mood-specific Spotify playlist for the user. For example, in this picture, I said 'I'm really happy that you're visiting my website today!' The sentiment generated was 0.86 (on a 0 to 1 scale) and generated this playlist: shorturl.at/qvB59 Check out the playlist if you want! For this project, I used Python, Next.js, and Flask for the backend and React, Figma, and Tailwind for the frontend."
          }
          website="shorturl.at/qvB59"
          github="https://github.com/ts549/Spotifind"
          skills={["React", "Tailwind", "NLP", "Backend"]}
          image={mood}
        />

        <ExperienceCard
          name="Mood"
          blurb="A mood-based Spotify playlist generator using NLP."
          about={
            "Mood is a passion project that I built this summer that takes in a user's speech input and generates a mood based on the user's phrase using natural language processing and then generates a mood-specific Spotify playlist for the user. For example, in this picture, I said 'I'm really happy that you're visiting my website today!' The sentiment generated was 0.86 (on a 0 to 1 scale) and generated this playlist: shorturl.at/qvB59 Check out the playlist if you want! For this project, I used Python, Next.js, and Flask for the backend and React, Figma, and Tailwind for the frontend."
          }
          website="shorturl.at/qvB59"
          github="https://github.com/ts549/Spotifind"
          skills={["React", "Tailwind", "NLP", "Backend"]}
          image={mood}
        />
      </div>
    </div>
  );
};

export default Extracurriculars;
