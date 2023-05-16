import React from 'react';
import Skills from '../components/Skills';
import PropTypes from 'prop-types';

const ProjectCard = (props) => {
  return (
    <div>
      {' '}
      <div className="flex pr-8 pb-8">
        <div className="flex">
          <a className="relative block w-96 h-80 bg-gray-900 group rounded-lg cursor-pointer">
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
                    <div className="text-lg text-left text-white font-bold font-poppins pb-1">
                      {props.name}
                    </div>
                    <div className="text-sm text-left text-white font-poppins">{props.blurb}</div>
                    <div className="text-sm text-gray-200 font-poppins pb-2">{props.price}</div>
                    <Skills skills={props.skills} />
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  blurb: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProjectCard;
