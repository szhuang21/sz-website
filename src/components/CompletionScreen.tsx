import React from 'react';
import EthicsNetLogo from '../images/ethicsNet.png';

const CompletionScreen: React.FC<{ key: unknown }> = () => {
  const handleOnClick = () => {
    console.log('has been clicked');
  };
  return (
    <div className="mt-16 flex">
      <img src={EthicsNetLogo} alt="EthicsNet Logo" className="flex-col h-64 mr-12" />
      <div className="flex-col flex w-1/2">
        <div className="text-green-700 text-xl text-center">Part 1 Complete!</div>
        <div className="mt-4 text-center">
          Thank you for your response. Please proceed to Part 2 to answer a few short quesitons to
          receive a <div className="text-green-700">personalized AI token.</div>
        </div>
        <div className="text-center">
          <button
            onClick={handleOnClick}
            className="mt-12 pt-2 pb-2 w-5/6 rounded-sm drop-shadow-lg pl-12 pr-12 bg-green-700 hover:bg-green-800 text-white">
            Continue to Part 2
          </button>
        </div>
        <div className="text-center">
          <button
            onClick={handleOnClick}
            className="mt-4 pt-2 pb-2  w-5/6 rounded-sm pl-12 pr-12 bg-white outline outline-green-700 text-green-700">
            Generate Token Here Instead
          </button>
        </div>

        <div className="text-center mt-2">
          <a
            className="text-xs text-green-700 text-center font-poppins underline"
            href={'google.com'}>
            Return to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompletionScreen;
