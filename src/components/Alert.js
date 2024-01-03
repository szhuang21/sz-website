import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Alert = (props) => {
  const [closed, setClosed] = useState(false);

  const handleOnClick = () => {
    console.log('has been clicked');
    setClosed(true);
  };
  useEffect(() => {
    setClosed(false); // Reset the state to false when the component is refreshed
  }, []);
  return (
    <div className="flex align-center items-center justify-center text-center w-screen">
      {!closed ? (
        <div
          className="w-full mr-2 ml-2 mt-2 flex bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
          role="alert">
          <div className="font-bold">{props.text}</div>
          <div className="absolute top-0 bottom-0 right-0 px-4 py-3">
            <button onClick={handleOnClick}>
              <svg
                className="fill-current h-6 w-6 text-yellow-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

Alert.propTypes = {
  text: PropTypes.string.isRequired
};

export default Alert;
