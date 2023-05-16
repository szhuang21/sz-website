import React from 'react';
import { faLinkedin, faInstagram, faSpotify } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faFilePdf } from '@fortawesome/free-solid-svg-icons';

const Socials = () => {
  return (
    <div>
      {' '}
      <div className="text-right pt-8 space-x-4 text-black">
        <a href="https://www.linkedin.com/in/sophiazhuang5/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="hover:text-pink-400" size="2x" />
        </a>
        <a href="https://www.instagram.com/sophia.codes/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-400" size="2x" />
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
  );
};

export default Socials;
