import React from 'react';
import brink from '../images/brink.gif';
import mood from '../images/mood.gif';
import spartify from '../images/spartify.png';
import webscraper from '../images/webscraper.png';
import northwestern from '../images/northwestern.png';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <div className="pt-36">
      <div className="text-xl text-center font-bold font-poppins pb-8">Projects</div>

      <div className="flex flex-wrap flex align-center items-center justify-center">
        <ProjectCard
          name="Brink"
          blurb="Working on accessible voting guide for the nonprofit Brink."
          about="As a software developer for Hack4Impact this year, my team and I got to work with the nonprofit, Brink, to develop an accessible voting website. Some features that I built were a candidate's endorsements accordion, the voting guidelines page, the polling places page, and more. This coming semester I will be working a product manager and lead at Hack4Impact."
          website="https://web.brinkapp.co/landing"
          github="https://github.com/stephen-puiszis/brink-web"
          skills={['React', 'TypeScript', 'Product']}
          image={brink}
        />

        <ProjectCard
          name="Mood"
          blurb="A mood-based Spotify playlist generator using NLP."
          about={
            "Mood is a passion project that my friend (shoutout to Tao :D) and I built this summer that takes in a user's speech input and generates a mood based on the user's phrase using natural language processing and then generates a mood-specific Spotify playlist for the user. For example, in this picture, I said 'I'm really happy that you're visiting my website today!' The sentiment generated was 0.86 (on a 0 to 1 scale) and generated this playlist: shorturl.at/qvB59 Check out the playlist if you want! For this project, we used Python, Next.js, and Flask for the backend and React, Figma, and Tailwind for the frontend."
          }
          website="shorturl.at/qvB59"
          github="https://github.com/ts549/Spotifind"
          skills={['React', 'Tailwind', 'NLP', 'Backend']}
          image={mood}
        />

        <ProjectCard
          name="Sp-art-ify"
          blurb="A Web App that allows Spotify users to visualize their listening stats."
          about={
            'Our project, Sp-ART-ify, is a web app that allows Spotify users to visualize their favorite artists, albums, and songs. In our app, users can log in with their Spotify account to have custom images generated of their listening habits in an eye-catching and easily shareable format. On this computer generated image, you can see some of my favorite artists like Taylor Swift, Niki, Amine, and Jack Harlow. We used React and the Spotify API to build this project. I was responsible for building out the backend, http requests, managing the spotify API, and connecting the frontend to the backend. Check out our Github below or our slideshow to learn more!'
          }
          website="shorturl.at/loyC5"
          github="https://github.com/CS222SP22/course-project-mp-b"
          skills={['React', 'Backend']}
          image={spartify}
        />

        <ProjectCard
          name="Liberty Mutual Webscraper"
          blurb="A Web App that allows Spotify users to visualize their listening stats."
          about={
            "An issue that I faced as a software developer at Liberty Mutual Insurance this summer was that there were too many different platforms to search up answers to technical questions I had (i.e. Slack, Stackoverflow, internal Liberty Mutual Websites, etc.). For the Liberty Mutual Intern hackathon and my team's Innovation Sprint,  I built out a webscraper tool that accumulate web searches into 1 search engine. In this picture, you can see me searching up 'cors' to help solve my issue of connect data from the backend and frontend. I built the backend API server using Express and NextJS framework and hosted the site on Vercel."
          }
          website="https://github.com/szhuang21/FindingLimuLM"
          github="https://github.com/szhuang21/FindingLimuLM"
          skills={['React', 'Next.js', 'Tailwind', 'Backend']}
          image={webscraper}
        />

        <ProjectCard
          name="Machine Learning Research"
          blurb="Machine Learning Research under Dr. Wing Kam Liu at Northwestern University."
          about={
            'Built feed forward neural networks to predict surface roughness of alloying materials with Dr. Wing Kam Liu at Northwestern University with the GCAMS lab'
          }
          website="https://rb.gy/ozsxgb"
          github="https://rb.gy/osxooz"
          skills={['Machine Learning', 'Research']}
          image={northwestern}
        />
      </div>
    </div>
  );
};

export default Projects;
