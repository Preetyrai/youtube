import React from "react";

const Button = ({ name }) => {
  return (
    <button className="bg-gray-200  text-gray-500 font-bold py-1 px-4  mr-3 rounded">
      {name}
    </button>
  );
};

export default Button;
