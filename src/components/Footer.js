import React from 'react';
import { faLinkedin, faInstagram, faSpotify, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import Collage from '../images/collage.png';

const Footer = () => {
  return (
    <footer className="bg-cover mt-8" style={{ backgroundImage: `url(${Collage})` }}>
      <div className="backdrop-brightness-75">
        <div className="pt-44 pb-44 mt-4 pl-8 text-center bottom-0 w-full">
          <p className="text-white text-left font-bold font-poppins">made with 💕</p>

          <p className="text-white text-3xl text-left font-bold font-poppins">SOPHIA ZHUANG</p>
          <div>
            <div className="text-right pr-8 pt-8 space-x-4 text-white">
              <a href="https://www.linkedin.com/in/sophiazhuang5/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="hover:text-pink-400" size="2x" />
              </a>
              <a href="https://www.instagram.com/sophia.codes/" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-400" size="2x" />
              </a>
              <a href="https://github.com/szhuang21" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faGithub} className="hover:text-pink-400" size="2x" />
              </a>
              <a
                href="https://open.spotify.com/user/sophiaxiezhuang?si=efa69e7c7d514610"
                target="_blank"
                rel="noreferrer">
                <FontAwesomeIcon icon={faSpotify} className="hover:text-pink-400" size="2x" />
              </a>
              <a href="mailto:sophiaxiezhuang@gmail.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faEnvelope} className="hover:text-pink-400" size="2x" />
              </a>
              <a
                href="/Users/sophiazhuang/Desktop/Projects/Sophia's Personal Portfolio/sz-website/src/images/Resume.pdf"
                download="Resume.pdf">
                <FontAwesomeIcon icon={faFilePdf} className="hover:text-pink-400" size="2x" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
