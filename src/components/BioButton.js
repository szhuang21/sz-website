import React from 'react';
import PropTypes from 'prop-types';

const BioButton = (props) => {
  return (
    <div>
      <button className="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">
        {props.text}
      </button>
    </div>
  );
};

BioButton.propTypes = {
  text: PropTypes.string.isRequired
};

export default BioButton;
