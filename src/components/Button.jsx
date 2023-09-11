import React from "react";

const Button = (props) => {
  return (
    <div>
      <button
        type={props.buttonType}
        className="mt-3 rounded px-4 py-2 bg-gray-400 border-2 border-gray-900"
      >
        {props.buttonName}
      </button>
    </div>
  );
};

export default Button;
