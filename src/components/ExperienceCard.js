import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Skills from '../components/Skills';
import PropTypes from 'prop-types';

const ExperienceCard = (props) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      {' '}
      <div className="flex pr-8 pb-8">
        <div>
          {showSidebar ? (
            <div>
              <div>
                <div className="flex">
                  <a
                    className="relative block w-96 h-80 bg-gray-900 group rounded-lg cursor-pointer"
                    onClick={() => setShowSidebar(!showSidebar)}>
                    <img
                      className="absolute inset-0 object-cover block w-96 h-80 group-hover:opacity-50 rounded-lg"
                      src={props.image}
                      alt="experience image"
                    />
                    <div className="relative p-5">
                      <div className="mt-40">
                        <div
                          className="transition-all transform
                                 translate-y-8 opacity-0
                                 group-hover:opacity-100
                                 group-hover:translate-y-0">
                          <div className="p-2">
                            <div className="text-lg text-white font-bold font-poppins pb-1">
                              {props.name}
                            </div>
                            {/* <div className="text-sm text-gray-200 font-poppins pb-2">
                              {props.price}
                            </div> */}
                            <Skills skills={props.skills} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex">
                <a
                  className="relative block w-96 h-80 bg-gray-900 group rounded-lg cursor-pointer"
                  onClick={() => setShowSidebar(!showSidebar)}>
                  <img
                    className="absolute inset-0 object-cover block w-96 h-80 group-hover:opacity-50 rounded-lg"
                    src={props.image}
                  />
                  <div className="relative p-5">
                    <div className="mt-40">
                      <div
                        className="transition-all transform
                                 translate-y-8 opacity-0
                                 group-hover:opacity-100
                                 group-hover:translate-y-0">
                        <div className="p-2">
                          <div className="text-lg text-white font-bold font-poppins pb-1">
                            {props.name}
                          </div>
                          {/* <div className="text-sm text-gray-200 font-poppins pb-2">
                            {props.price}
                          </div> */}
                          <Skills skills={props.skills} />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          )}
          {/* applicant card */}
          <div
            className={`top-0 right-0 w-[35vw] bg-white p-10 pl-10 text-black fixed h-full z-40 rounded-md ease-in-out duration-300 overflow-y-scroll ${
              showSidebar ? 'translate-x-0 ' : 'translate-x-full'
            }`}>
            <button
              className="text-4xl text-black items-center cursor-pointer z-50"
              onClick={() => setShowSidebar(!showSidebar)}>
              <div>
                <div className="text-sm font-bold text-black text-montserrat">
                  <FontAwesomeIcon icon={faArrowCircleLeft} className="icon text-black" />
                  {'  '} Back to Listings
                </div>
              </div>
            </button>

            <hr className="my-4 h-px bg-gray-200 border-0 dark:bg-gray-700"></hr>

            <img className="mt-4 rounded-lg" src={props.image} />
            <div className="mt-4 text-lg font-semibold text-black text-montserrat mb-2">
              {props.name}
            </div>

            <div className="mt-4 text-md text-black text-montserrat mb-2">About</div>

            <div className="text-xs text-black font-poppins">{props.about}</div>

            <div className="mt-4 text-md text-black text-montserrat mb-2">🛠️ Technologies</div>

            <Skills skills={props.skills} />

            <div className="mt-4 text-md text-black text-montserrat mb-2">🌐 Website</div>

            <a className="text-xs text-black font-poppins hover:underline" href={props.website}>
              {props.website}
            </a>

            <div className="mt-4 text-md text-black text-montserrat mb-2">🤖 Github</div>

            <a className="text-xs text-black font-poppins hover:underline" href={props.github}>
              {props.github}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ExperienceCard;
