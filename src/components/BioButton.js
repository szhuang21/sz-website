import React from "react";

const BioButton = (props) => {
  return (
    <div>
      <button class="bg-gray-200 pl-1 pr-1 pt-1 pb-1 rounded-lg hover:bg-yellow-300">{props.text}</button>
    </div>
  );
};

export default BioButton;
