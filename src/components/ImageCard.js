import React from "react";

const ImageCard = ({ city }) => {

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto">
      <img src={city.photo} alt="" className="w-full" />
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          City: {city.name}
        </div>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        > Edit
        </span>
      </div>
    </div>
  );
};

export default ImageCard;
